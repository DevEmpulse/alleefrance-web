/**
 * Block articles: blog posts stored as data in content/blog/{slug}/{es,en,fr}.json and rendered
 * by the shared template at app/[locale]/blog/[slug]. scripts/blog-from-pdf.mjs creates the
 * Spanish file from the client's PDF; en.json and fr.json are translations with the same shape.
 */

export type BlockArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; title: string; items: Array<{ question: string; answer: string }> }
  | { type: "cta"; title: string; body: string; whatsappMessage: string };

export type BlockArticle = {
  slug: string;
  /** ISO 8601 date (YYYY-MM-DD). The article is hidden from every build made before this date. */
  datePublished: string;
  /** ISO 8601 date (YYYY-MM-DD). Defaults to datePublished. */
  dateModified?: string;
  seo: { metaTitle: string; metaDescription: string; keywords: string[] };
  /** Blog index and home carousel card. */
  card: { category: string; excerpt: string };
  readMinutes: number;
  /** The article's h1. */
  title: string;
  shortAnswer: string;
  blocks: BlockArticleBlock[];
  disclaimer: string;
  sources: Array<{ label: string; url?: string }>;
};

export type BlockArticleSection = {
  heading?: string;
  blocks: BlockArticleBlock[];
};

/**
 * Groups blocks into sections: each heading opens one, and the FAQ and the call to action are
 * sections of their own.
 */
export function toSections(blocks: BlockArticleBlock[]): BlockArticleSection[] {
  const sections: BlockArticleSection[] = [];
  const standsAlone = (block: BlockArticleBlock | undefined) => block?.type === "faq" || block?.type === "cta";
  for (const block of blocks) {
    const last = sections.at(-1);
    if (block.type === "heading") sections.push({ heading: block.text, blocks: [] });
    else if (!last || standsAlone(block) || standsAlone(last.blocks[0])) sections.push({ blocks: [block] });
    else last.blocks.push(block);
  }
  return sections;
}
