#!/usr/bin/env node
// Converts the client's blog PDF ("Blog #N — Publicar el ...") into Spanish block articles:
// content/blog/{slug}/es.json, then regenerates content/blog/index.ts.
//
// Usage: node scripts/blog-from-pdf.mjs <file.pdf> [--force]
//   Requires `pdftotext` (poppler). Existing es.json files are skipped unless --force; with
//   --force, the hand-edited fields (card.category, sources[].url, cta.whatsappMessage) are kept.
//
// The output is a draft: read every es.json before translating it. The parser relies on the
// PDF's layout: body text at column 0, tables indented 2 spaces, numbered lists 3 spaces,
// bullet lists 7 spaces.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.resolve("content/blog");
const WORDS_PER_MINUTE = 200;
const TABLE_INDENT = 2;
const MONTHS = {
  enero: "01", febrero: "02", marzo: "03", abril: "04", mayo: "05", junio: "06",
  julio: "07", agosto: "08", septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12",
};
const SEO_FIELDS = {
  "Meta título": "metaTitle",
  "Meta descripción": "metaDescription",
  URL: "url",
  "Palabra clave": "keyword",
  Secundarias: "secondary",
};

const args = process.argv.slice(2);
const pdfPath = args.find((arg) => !arg.startsWith("--"));
const force = args.includes("--force");
if (!pdfPath) {
  console.error("Usage: node scripts/blog-from-pdf.mjs <file.pdf> [--force]");
  process.exit(1);
}

const text = execFileSync("pdftotext", ["-layout", pdfPath, "-"], { encoding: "utf8" });

// Page furniture: running header, page numbers and form feeds.
const lines = text
  .replace(/\f/g, "\n")
  .split("\n")
  .map((line) => line.replace(/\s+$/, "").replace(/​/g, ""))
  .filter((line) => !/^\s*Page \d+ of \d+$/.test(line) && line.trim() !== "Blogs #2 a #6 — Allée France");

/** Joins wrapped lines: no space after a trailing hyphen. */
function joinLines(parts) {
  return parts
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((acc, part) => (acc === "" ? part : acc.endsWith("-") ? acc + part : `${acc} ${part}`), "");
}

const indentOf = (line) => line.length - line.trimStart().length;

/** Splits lines into blocks separated by blank lines. */
function toBlocks(sectionLines) {
  const blocks = [];
  let current = [];
  for (const line of sectionLines) {
    if (line.trim() === "") {
      if (current.length) blocks.push(current);
      current = [];
    } else current.push(line);
  }
  if (current.length) blocks.push(current);
  return blocks;
}

/** Column start offsets of a table header line (cells separated by 3+ spaces). */
function columnStarts(line) {
  const starts = [];
  const re = /(?:^\s*|\s{3,})(\S)/g;
  let match;
  while ((match = re.exec(line))) starts.push(match.index + match[0].length - 1);
  return starts;
}

function splitColumns(line, starts) {
  return starts.map((start, i) => line.slice(start, starts[i + 1] ?? undefined).trim());
}

/** One table cell per column, each wrapped line appended to its column. */
function mergeBlock(block, starts) {
  const columns = starts.map(() => []);
  for (const line of block) {
    splitColumns(line.padEnd(starts.at(-1) + 1), starts).forEach((cell, i) => columns[i].push(cell));
  }
  return columns.map(joinLines);
}

/** The first block is the header; every following block (blank-line separated) is one row. */
function parseTable(tableBlocks) {
  const starts = columnStarts(tableBlocks[0][0]);
  // Header with an empty first cell (row labels): the first column starts where the rows do.
  if (starts[0] > TABLE_INDENT) starts.unshift(TABLE_INDENT);
  const headers = mergeBlock(tableBlocks[0], starts);
  const rows = tableBlocks
    .slice(1)
    .map((block) => mergeBlock(block, starts))
    // A repeated header (table continued on the next page) is dropped.
    .filter((row) => row.join("|") !== headers.join("|"));
  return { headers, rows };
}

const isTableStart = (block) =>
  indentOf(block[0]) === TABLE_INDENT || (indentOf(block[0]) > TABLE_INDENT && columnStarts(block[0]).length >= 2);

function parseNumberedList(block) {
  const items = [];
  for (const line of block) {
    const match = line.match(/^\s*\d+\.\s+(.*)$/);
    if (match) items.push([match[1]]);
    else items.at(-1).push(line);
  }
  return items.map(joinLines);
}

/** Bullets lost their glyph: a new item starts after a sentence end or an unwrapped line. */
function parseBulletList(block) {
  const items = [];
  for (const line of block) {
    const previous = items.at(-1)?.at(-1)?.trim();
    const startsItem = !previous || /[.!?]$/.test(previous) || (previous.length < 70 && /^[A-ZÁÉÍÓÚÑ«¿]/.test(line.trim()));
    if (startsItem) items.push([line]);
    else items.at(-1).push(line);
  }
  return items.map(joinLines);
}

const isHeading = (block) =>
  block.length === 1 && indentOf(block[0]) === 0 && block[0].trim().length < 90 && !/[.:]$/.test(block[0].trim());

/** Splits "¿Question? Answer." into its two parts. */
function splitFaq(paragraph) {
  const end = paragraph.indexOf("?");
  return { question: paragraph.slice(0, end + 1).trim(), answer: paragraph.slice(end + 1).trim() };
}

function parseDate(spanish) {
  const match = spanish.match(/(\d{1,2}) de (\w+) de (\d{4})/);
  if (!match) throw new Error(`Unparseable date: ${spanish}`);
  return `${match[3]}-${MONTHS[match[2].toLowerCase()]}-${match[1].padStart(2, "0")}`;
}

function countWords(article) {
  const strings = [];
  const collect = (value) => {
    if (typeof value === "string") strings.push(value);
    else if (Array.isArray(value)) value.forEach(collect);
    else if (value && typeof value === "object") Object.values(value).forEach(collect);
  };
  collect([article.title, article.shortAnswer, article.blocks]);
  return strings.join(" ").split(/\s+/).filter(Boolean).length;
}

function parsePost(postLines) {
  const blocks = toBlocks(postLines);
  const header = blocks.shift()[0];
  const datePublished = parseDate(header);

  // SEO sheet: "Campo / Texto para copiar" table.
  const seoBlocks = [];
  while (blocks.length && indentOf(blocks[0][0]) === TABLE_INDENT) seoBlocks.push(blocks.shift());
  const seoTable = parseTable(seoBlocks);
  const seo = Object.fromEntries(seoTable.rows.map(([field, value]) => [SEO_FIELDS[field] ?? field, value]));
  const slug = seo.url.split("/blog/")[1].replace(/\/$/, "");

  // Title, then "Por ..." byline (dropped: the site renders its own byline).
  const titleBlock = blocks.shift();
  const bylineIndex = titleBlock.findIndex((line) => line.startsWith("Por "));
  const title = joinLines(titleBlock.slice(0, bylineIndex));

  const article = {
    slug,
    datePublished,
    seo: {
      metaTitle: seo.metaTitle,
      metaDescription: seo.metaDescription,
      keywords: [seo.keyword, ...seo.secondary.split(",")].map((keyword) => keyword.trim()).filter(Boolean),
    },
    card: { category: "", excerpt: seo.metaDescription },
    readMinutes: 0,
    title,
    shortAnswer: "",
    blocks: [],
    disclaimer: "",
    sources: [],
  };

  let faq = null;
  let afterFaq = false;
  let cta = null;
  while (blocks.length) {
    const block = blocks.shift();
    const first = block[0];
    const paragraph = joinLines(block);
    const indent = indentOf(first);

    if (paragraph.startsWith("Respuesta corta:")) article.shortAnswer = paragraph;
    else if (paragraph.startsWith("Artículo informativo.")) article.disclaimer = paragraph;
    else if (paragraph.startsWith("Fuentes:")) {
      article.sources = paragraph
        .replace(/^Fuentes:\s*/, "")
        .split(" · ")
        .map((label) => ({ label: label.trim() }));
    } else if (isTableStart(block)) {
      const tableBlocks = [block];
      while (blocks.length && indentOf(blocks[0][0]) === TABLE_INDENT) tableBlocks.push(blocks.shift());
      article.blocks.push({ type: "table", ...parseTable(tableBlocks) });
    } else if (/^\s+\d+\.\s/.test(first)) {
      const listLines = [...block];
      // A list continued after a page break.
      while (blocks.length && /^\s+\d+\.\s/.test(blocks[0][0])) listLines.push(...blocks.shift());
      article.blocks.push({ type: "list", ordered: true, items: parseNumberedList(listLines) });
    } else if (indent >= 5) {
      const listLines = [...block];
      while (blocks.length && indentOf(blocks[0][0]) >= 5) listLines.push(...blocks.shift());
      article.blocks.push({ type: "list", ordered: false, items: parseBulletList(listLines) });
    } else if (isHeading(block) && first.trim() === "Preguntas frecuentes") {
      faq = { type: "faq", title: first.trim(), items: [] };
      article.blocks.push(faq);
    } else if (faq && !afterFaq && paragraph.startsWith("¿") && !isHeading(block)) {
      faq.items.push(splitFaq(paragraph));
    } else if (faq && isHeading(block)) {
      // The heading after the FAQ opens the call to action.
      afterFaq = true;
      cta = { type: "cta", title: first.trim(), body: "", whatsappMessage: "" };
      article.blocks.push(cta);
    } else if (cta && cta.body === "") cta.body = paragraph;
    else if (isHeading(block)) article.blocks.push({ type: "heading", text: first.trim() });
    else article.blocks.push({ type: "paragraph", text: paragraph });
  }

  article.readMinutes = Math.max(1, Math.round(countWords(article) / WORDS_PER_MINUTE));
  return article;
}

// Split the document at each "Blog #N — Publicar el ..." line.
const posts = [];
let current = null;
for (const line of lines) {
  if (/^Blog #\d+ — Publicar el /.test(line.trim())) {
    current = [line.trim()];
    posts.push(current);
  } else if (current) current.push(line);
}
if (posts.length === 0) {
  console.error("No 'Blog #N — Publicar el ...' sections found.");
  process.exit(1);
}

for (const postLines of posts) {
  const article = parsePost(postLines);
  const dir = path.join(CONTENT_DIR, article.slug);
  const file = path.join(dir, "es.json");
  if (fs.existsSync(file)) {
    if (!force) {
      console.log(`skip   ${path.relative(process.cwd(), file)} (exists; use --force)`);
      continue;
    }
    const previous = JSON.parse(fs.readFileSync(file, "utf8"));
    article.card.category = previous.card?.category || article.card.category;
    article.sources = article.sources.map((source) => ({
      ...source,
      ...(previous.sources?.find((old) => old.label === source.label)?.url
        ? { url: previous.sources.find((old) => old.label === source.label).url }
        : {}),
    }));
    const previousCta = previous.blocks?.find((block) => block.type === "cta");
    const cta = article.blocks.find((block) => block.type === "cta");
    if (previousCta && cta) cta.whatsappMessage = previousCta.whatsappMessage;
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(article, null, 2)}\n`);
  const missing = [
    !article.card.category && "card.category",
    article.sources.some((source) => !source.url) && "sources[].url",
    !article.blocks.find((block) => block.type === "cta")?.whatsappMessage && "cta.whatsappMessage",
  ].filter(Boolean);
  console.log(`write  ${path.relative(process.cwd(), file)}  ${article.datePublished}  ${article.blocks.length} blocks  ~${article.readMinutes} min${missing.length ? `  TODO: ${missing.join(", ")}` : ""}`);
}

// content/blog/index.ts: static imports of every article, so the site bundles them at build time.
const slugs = fs
  .readdirSync(CONTENT_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const ident = (slug, locale) => `${slug.replace(/-(\w)/g, (_, c) => c.toUpperCase()).replace(/^\d/, "_$&")}_${locale}`;
const index = [
  "// Generated by scripts/blog-from-pdf.mjs. Lists every block article in content/blog/.",
  'import type { BlockArticle } from "@/lib/block-article";',
  ...slugs.flatMap((slug) => ["es", "en", "fr"].map((locale) => `import ${ident(slug, locale)} from "./${slug}/${locale}.json";`)),
  "",
  "export const BLOCK_ARTICLE_CONTENT: Record<string, Record<\"es\" | \"en\" | \"fr\", BlockArticle>> = {",
  ...slugs.map((slug) => `  "${slug}": { es: ${ident(slug, "es")}, en: ${ident(slug, "en")}, fr: ${ident(slug, "fr")} } as Record<"es" | "en" | "fr", BlockArticle>,`),
  "};",
  "",
].join("\n");
fs.writeFileSync(path.join(CONTENT_DIR, "index.ts"), index);
console.log(`write  content/blog/index.ts (${slugs.length} articles)`);
