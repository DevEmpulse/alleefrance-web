#!/usr/bin/env node
// Validates the statically exported site in out/ for SEO / GEO requirements.
// Usage: node scripts/validate-seo.mjs   (run after `NODE_ENV=production pnpm build`)
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const LOCALES = ["es", "en", "fr"];
const ORIGIN = "https://alleefrance.com";
const BLOG_SLUGS_DIR = "blog";

const failures = []; // { page, check, evidence }
const fail = (page, check, evidence) => failures.push({ page, check, evidence });
const checkCounts = {}; // check id -> { pass, fail }
const mark = (id, ok) => {
  checkCounts[id] ??= { pass: 0, fail: 0 };
  checkCounts[id][ok ? "pass" : "fail"]++;
};
const assert = (id, page, ok, label, evidence) => {
  mark(id, ok);
  if (!ok) fail(page, `${id}. ${label}`, evidence);
};

function walk(dir) {
  const res = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) res.push(...walk(p));
    else res.push(p);
  }
  return res;
}

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
const norm = (s) => decode(s).replace(/\s+/g, " ").trim();

function parseAttrs(tag) {
  const attrs = {};
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  const inner = tag.replace(/^<\s*[a-zA-Z0-9]+/, "").replace(/\/?>$/, "");
  let m;
  while ((m = re.exec(inner))) {
    attrs[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? "");
  }
  return attrs;
}
const tags = (html, name) => html.match(new RegExp(`<${name}(?:\\s[^>]*)?>`, "gi")) ?? [];

// URL -> file in out/
function urlToFile(url) {
  if (!url.startsWith(ORIGIN)) return null;
  const rel = url.slice(ORIGIN.length);
  const clean = rel.split("#")[0].split("?")[0];
  if (clean.endsWith("/")) return path.join(OUT, clean, "index.html");
  return path.join(OUT, clean);
}

function collectLd(html) {
  const blocks = [];
  const re = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) blocks.push(m[1]);
  return blocks;
}
function flattenNodes(json) {
  const out = [];
  const visit = (n) => {
    if (Array.isArray(n)) return n.forEach(visit);
    if (n && typeof n === "object") {
      if (n["@type"]) out.push(n);
      if (n["@graph"]) visit(n["@graph"]);
    }
  };
  visit(json);
  return out;
}
const typesOf = (n) => (Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]]);

// Visible text: drop scripts/styles/noscript/template, strip tags (so href values are excluded).
function visibleText(html) {
  const body = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<template\b[\s\S]*?<\/template>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");
  return norm(body.replace(/<[^>]+>/g, " "));
}

// ---------- collect pages ----------
if (!fs.existsSync(OUT)) {
  console.error("out/ not found. Run `NODE_ENV=production pnpm build` first.");
  process.exit(2);
}
const pages = []; // { file, rel, locale, url }
for (const l of LOCALES) {
  const dir = path.join(OUT, l);
  if (!fs.existsSync(dir)) {
    fail(`out/${l}`, "0. locale folder exists", "missing");
    continue;
  }
  for (const f of walk(dir)) {
    if (!f.endsWith(".html")) continue;
    const rel = path.relative(OUT, f);
    const urlPath = "/" + path.dirname(rel).split(path.sep).join("/") + "/";
    pages.push({ file: f, rel, locale: l, url: ORIGIN + urlPath });
  }
}

const ldTypeCounts = {};
const sitemapPath = path.join(OUT, "sitemap.xml");
const sitemapLocs = fs.existsSync(sitemapPath)
  ? [...fs.readFileSync(sitemapPath, "utf8").matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1].trim())
  : [];

// ---------- per-page checks ----------
for (const p of pages) {
  const html = fs.readFileSync(p.file, "utf8");
  const page = p.rel;

  // 1 title
  const titles = html.match(/<title\b[^>]*>[\s\S]*?<\/title>/gi) ?? [];
  const titleText = titles.length ? norm(titles[0].replace(/<[^>]+>/g, "")) : "";
  const suffixCount = (titleText.match(/\|\s*Allée France/g) ?? []).length;
  const badTitle =
    titles.length !== 1 ||
    !titleText ||
    /\|\s*Allée France\s*\|\s*Allée France/.test(titleText) ||
    suffixCount > 1;
  assert("1", page, !badTitle, "title (one, non-empty, no doubled suffix)", `${titles.length} <title>; text="${titleText}"`);

  // 2 meta description
  const metaDesc = tags(html, "meta")
    .map(parseAttrs)
    .filter((a) => a.name?.toLowerCase() === "description");
  assert("2", page, metaDesc.length >= 1 && !!metaDesc[0].content?.trim(), "meta description non-empty", `found ${metaDesc.length}`);

  // 3 canonical
  const links = tags(html, "link").map(parseAttrs);
  const canon = links.filter((a) => a.rel?.toLowerCase() === "canonical");
  assert("3", page, canon.length === 1 && canon[0].href === p.url, "exactly one canonical equal to own URL", `canonicals=${JSON.stringify(canon.map((c) => c.href))} expected=${p.url}`);

  // 4 hreflang
  const alts = links.filter((a) => a.rel?.toLowerCase() === "alternate" && a.hreflang);
  for (const code of ["es", "en", "fr", "x-default"]) {
    const found = alts.filter((a) => a.hreflang.toLowerCase() === code);
    let ok = found.length === 1;
    let ev = `${found.length} link(s) for ${code}`;
    if (ok) {
      const f = urlToFile(found[0].href);
      ok = !!f && fs.existsSync(f);
      ev = `${code} -> ${found[0].href} (file ${f && fs.existsSync(f) ? "exists" : "MISSING"})`;
    }
    assert("4", page, ok, `hreflang ${code} present and resolves`, ev);
  }

  // 5 h1
  const h1 = (html.match(/<h1(?:\s[^>]*)?>/gi) ?? []).length;
  assert("5", page, h1 === 1, "exactly one <h1>", `${h1} <h1>`);

  // 6 html lang
  const htmlTag = html.match(/<html(?:\s[^>]*)?>/i)?.[0] ?? "";
  const lang = parseAttrs(htmlTag).lang;
  assert("6", page, lang === p.locale, "<html lang> equals locale", `lang="${lang}" expected="${p.locale}"`);

  // 7 / 8 / 9 / 10 JSON-LD
  const ldRaw = collectLd(html);
  const nodes = [];
  let ldOk = true;
  ldRaw.forEach((raw, i) => {
    try {
      const json = JSON.parse(raw);
      for (const n of flattenNodes(json)) {
        nodes.push(n);
        for (const t of typesOf(n)) ldTypeCounts[t] = (ldTypeCounts[t] ?? 0) + 1;
      }
    } catch (e) {
      ldOk = false;
      fail(page, "7. JSON-LD parses as JSON", `block #${i + 1}: ${e.message}`);
    }
  });
  mark("7", ldOk);
  const hasAgg = ldRaw.some((r) => /aggregateRating/.test(r));
  assert("7", page, !hasAgg, "no aggregateRating in JSON-LD", "aggregateRating found");

  const allTypes = new Set(nodes.flatMap(typesOf));
  const isAuthor = p.rel.includes(`${path.sep}autor${path.sep}`);
  for (const t of ["Organization", "ProfessionalService", "WebSite"]) {
    assert("8", page, allTypes.has(t), `JSON-LD ${t} present`, `types on page: ${[...allTypes].join(", ") || "none"}`);
  }

  const isArticle = p.rel.startsWith(path.join(p.locale, BLOG_SLUGS_DIR) + path.sep) && p.rel !== path.join(p.locale, BLOG_SLUGS_DIR, "index.html");
  if (isArticle) {
    const bp = nodes.filter((n) => typesOf(n).includes("BlogPosting"));
    const missing = [];
    if (!bp.length) missing.push("BlogPosting");
    else for (const k of ["datePublished", "author", "publisher"]) if (!bp[0][k]) missing.push(k);
    assert("9", page, missing.length === 0, "BlogPosting with datePublished, author, publisher", `missing: ${missing.join(", ")}`);
  }

  const faq = nodes.filter((n) => typesOf(n).includes("FAQPage"));
  if (faq.length) {
    const text = visibleText(html);
    const questions = faq.flatMap((f) => [f.mainEntity].flat().filter(Boolean).map((q) => q.name));
    const miss = questions.filter((q) => !text.includes(norm(String(q))));
    assert("10", page, questions.length > 0 && miss.length === 0, "FAQPage questions appear in HTML", `missing: ${JSON.stringify(miss)}${questions.length ? "" : " (no questions)"}`);
  }

  // 11 img alt
  const noAlt = tags(html, "img").filter((t) => !("alt" in parseAttrs(t)));
  assert("11", page, noAlt.length === 0, "every <img> has alt", `${noAlt.length} without alt, e.g. ${noAlt[0]?.slice(0, 140)}`);

  // 13 in sitemap
  assert("13", page, sitemapLocs.includes(p.url), "page listed in sitemap.xml", `${p.url} not in sitemap`);

  // author name rule (visible text + JSON-LD; href values excluded)
  const haystack = visibleText(html) + " " + ldRaw.join(" ");
  const bad = haystack.match(/.{0,40}(Sandoval|Jiovanny).{0,40}/i);
  assert("18", page, !bad, "no 'Sandoval' / 'Jiovanny' in visible text or JSON-LD", bad?.[0]);

  // 17 no 700 total
  const vt = visibleText(html);
  const re700 = /(\+\s?700\b|\b700\s*(\+|casos|procesos|personas|clientes|successful|processes|cases|people|clients|dossiers|dossier|démarches|demarches|personnes|clients)|\bmás de 700\b|\bover 700\b|\bplus de 700\b)/i;
  const m700 = vt.match(new RegExp(`.{0,40}${re700.source}.{0,40}`, "i"));
  assert("17", page, !m700, "no '700' total in visible text", m700?.[0]);
}

// ---------- site-wide ----------
// 12 sitemap locs
assert("12", "out/sitemap.xml", fs.existsSync(sitemapPath) && sitemapLocs.length > 0, "sitemap exists with <loc> entries", "missing or empty");
for (const loc of sitemapLocs) {
  const f = urlToFile(loc);
  assert("12", "out/sitemap.xml", loc.endsWith("/") && !!f && fs.existsSync(f), "<loc> ends with / and file exists", `${loc} -> ${f ? path.relative(OUT, f) : "foreign origin"}${f && fs.existsSync(f) ? "" : " (MISSING)"}`);
}

// 14 robots
const robotsPath = path.join(OUT, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  assert("14", "out/robots.txt", false, "robots.txt exists", "missing");
} else {
  const r = fs.readFileSync(robotsPath, "utf8");
  for (const bot of ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User"]) {
    assert("14", "out/robots.txt", new RegExp(`^User-agent:\\s*${bot}\\s*$`, "im").test(r), `names ${bot}`, "not found");
  }
  // Disallow for whole site: any group with "Disallow: /" exactly
  const blockAll = /^Disallow:\s*\/\s*$/im.test(r);
  assert("14", "out/robots.txt", !blockAll, "no site-wide Disallow", "found 'Disallow: /'");
  assert("14", "out/robots.txt", /^Sitemap:\s*\S+/im.test(r), "keeps Sitemap line", "no Sitemap line");
}

// 15 llms.txt
assert("15", "out/llms.txt", fs.existsSync(path.join(OUT, "llms.txt")), "llms.txt exists", "missing");

// 16 author page in 3 locales
for (const l of LOCALES) {
  const f = path.join(OUT, l, "autor", "jio", "index.html");
  assert("16", `out/${l}/autor/jio/index.html`, fs.existsSync(f), "author page exists", "missing");
}

// 17 home shows 900
for (const l of LOCALES) {
  const f = path.join(OUT, l, "index.html");
  if (!fs.existsSync(f)) continue;
  const vt = visibleText(fs.readFileSync(f, "utf8"));
  assert("17", `${l}/index.html`, /\b900\b/.test(vt), "home shows 900", "'900' not found in visible text");
}

// page count
const perLocale = Object.fromEntries(LOCALES.map((l) => [l, pages.filter((p) => p.locale === l).length]));
assert("0", "out/", pages.length === 81 && LOCALES.every((l) => perLocale[l] === 27), "81 pages (27 per locale)", JSON.stringify({ total: pages.length, ...perLocale }));

// ---------- report ----------
const LABELS = {
  0: "page count", 1: "title", 2: "meta description", 3: "canonical", 4: "hreflang", 5: "single h1", 6: "html lang",
  7: "JSON-LD valid, no aggregateRating", 8: "Organization/ProfessionalService/WebSite", 9: "BlogPosting fields",
  10: "FAQPage questions in HTML", 11: "img alt", 12: "sitemap locs", 13: "pages in sitemap", 14: "robots.txt",
  15: "llms.txt", 16: "author pages", 17: "no 700 total / home shows 900", 18: "no Sandoval/Jiovanny",
};
console.log(`Validated ${pages.length} pages (${LOCALES.map((l) => `${l}: ${perLocale[l]}`).join(", ")})\n`);
if (failures.length) {
  console.log("FAILURES");
  for (const f of failures) console.log(`  [${f.page}] ${f.check}\n      ${f.evidence ?? ""}`);
  console.log("");
}
console.log("CHECK SUMMARY");
for (const id of Object.keys(LABELS)) {
  const c = checkCounts[id] ?? { pass: 0, fail: 0 };
  console.log(`  ${String(id).padStart(2)}. ${LABELS[id].padEnd(44)} pass ${String(c.pass).padStart(4)}  fail ${String(c.fail).padStart(3)}`);
}
console.log("\nJSON-LD blocks by @type (informational)");
for (const [t, n] of Object.entries(ldTypeCounts).sort((a, b) => b[1] - a[1])) console.log(`  ${t.padEnd(22)} ${n}`);
console.log(`\nResult: ${failures.length ? `FAIL (${failures.length} failing assertions)` : "PASS"}`);
process.exit(failures.length ? 1 : 0);
