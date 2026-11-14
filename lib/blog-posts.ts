/**
 * Single registry of blog articles: slugs, publication dates, hero images and author.
 * The sitemap, the blog index, the home carousel, article bylines, article metadata and
 * BlogPosting markup all read from here. Server-only: it bundles the block articles.
 *
 * Two kinds of article:
 * - Block articles (content/blog/{slug}/*.json, one shared template). Their registry entries are
 *   derived from the content files and their hero image is /public/{slug}.webp.
 * - Page articles (one page.tsx each, text in messages/*.json), listed in PAGE_POSTS.
 *
 * An article is published once the build date reaches its datePublished: earlier builds leave it
 * out of every list and do not generate its page. The scheduled deploy rebuilds the site daily.
 */

import { AUTHOR_PATH } from "@/lib/author";
import { localizedUrl } from "@/lib/seo";
import { BLOCK_ARTICLE_CONTENT } from "@/content/blog";

export type BlogAuthorId = "jio";

export type BlogPostMeta = {
  /** Route slug: /{locale}/blog/{slug}. */
  slug: string;
  /** ISO 8601 date (YYYY-MM-DD). */
  datePublished: string;
  /** ISO 8601 date (YYYY-MM-DD). No later edit is recorded, so it equals datePublished. */
  dateModified: string;
  /** Hero image, path under /public. */
  image: string;
  author: BlogAuthorId;
  /** "blocks": rendered from content/blog by app/[locale]/blog/[slug]. */
  layout: "blocks" | "page";
};

/**
 * Build date (YYYY-MM-DD, Paris time), set in next.config.mjs. Override with
 * BLOG_BUILD_DATE=YYYY-MM-DD to preview scheduled articles.
 */
export const BLOG_BUILD_DATE = process.env.BLOG_BUILD_DATE ?? new Date().toISOString().slice(0, 10);

const BLOCK_POSTS: BlogPostMeta[] = Object.values(BLOCK_ARTICLE_CONTENT).map(({ es }) => ({
  slug: es.slug,
  datePublished: es.datePublished,
  dateModified: es.dateModified ?? es.datePublished,
  image: `/${es.slug}.webp`,
  author: "jio",
  layout: "blocks",
}));

/** Page articles, in the order of the blog index. */
const PAGE_POST_ENTRIES: Omit<BlogPostMeta, "layout">[] = [
  {
    slug: "renovar-titre-de-sejour-2026",
    datePublished: "2026-11-11",
    dateModified: "2026-11-11",
    image: "/renovar-titre-de-sejour-2026.webp",
    author: "jio",
  },
  {
    slug: "cuanto-cuesta-vivir-en-francia",
    datePublished: "2026-06-14",
    dateModified: "2026-06-14",
    image: "/cuanto-cuesta-vivir-en-francia.webp",
    author: "jio",
  },
  {
    slug: "titre-sejour-francia",
    datePublished: "2026-06-17",
    dateModified: "2026-06-17",
    image: "/titre-sejour-france-guide.webp",
    author: "jio",
  },
  {
    slug: "conseguir-trabajo-francia-desde-latam",
    datePublished: "2026-06-12",
    dateModified: "2026-06-12",
    image: "/conseguir-trabajo-francia.webp",
    author: "jio",
  },
  {
    slug: "bancos-fisicos-vs-virtuales-francia",
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
    image: "/bancos-france-inmigrantes.webp",
    author: "jio",
  },
  {
    slug: "esim-guia-latinoamericanos-francia",
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
    image: "/esim-guide-france.webp",
    author: "jio",
  },
  {
    // One "n" in the slug; its messages namespace (BlogPosts.visa-saisonnier-salarie) has two.
    slug: "visa-saisonier-salarie",
    datePublished: "2026-01-15",
    dateModified: "2026-01-15",
    image: "/seasonal-worker-in-french-vineyard.webp",
    author: "jio",
  },
  {
    slug: "working-holiday-francia",
    datePublished: "2025-01-10",
    dateModified: "2025-01-10",
    image: "/Fondo-WH.webp",
    author: "jio",
  },
  {
    slug: "visa-estudiante-francia",
    datePublished: "2025-01-05",
    dateModified: "2025-01-05",
    image: "/student-studying-in-paris.webp",
    author: "jio",
  },
  {
    slug: "aprender-frances-recursos",
    datePublished: "2025-01-02",
    dateModified: "2025-01-02",
    image: "/person-learning-french-language.webp",
    author: "jio",
  },
];

/** Every article, published or scheduled: block articles newest first, then page articles. */
export const BLOG_POSTS: BlogPostMeta[] = [
  ...[...BLOCK_POSTS].sort((a, b) => b.datePublished.localeCompare(a.datePublished)),
  ...PAGE_POST_ENTRIES.map((post) => ({ ...post, layout: "page" as const })),
];

export function isBlogPostPublished(post: BlogPostMeta): boolean {
  return post.datePublished <= BLOG_BUILD_DATE;
}

/** Articles published at build time, in the order of the blog index. */
export const PUBLISHED_BLOG_POSTS: BlogPostMeta[] = BLOG_POSTS.filter(isBlogPostPublished);

export function getBlogPost(slug: string): BlogPostMeta {
  const post = BLOG_POSTS.find((entry) => entry.slug === slug);
  if (!post) throw new Error(`Unknown blog post slug: ${slug}`);
  return post;
}

/** Long localized date from an ISO date, e.g. "11 de noviembre de 2026". Timezone-independent. */
export function formatBlogDate(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

/** Open Graph article fields for `buildMetadata`. */
export function articleOpenGraph(locale: string, slug: string) {
  const post = getBlogPost(slug);
  return {
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    authorUrl: localizedUrl(locale, AUTHOR_PATH),
  };
}
