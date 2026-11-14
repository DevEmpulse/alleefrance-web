import { getTranslations } from "next-intl/server";
import { BLOCK_ARTICLE_CONTENT } from "@/content/blog";
import { PUBLISHED_BLOG_POSTS, formatBlogDate } from "@/lib/blog-posts";
import type { BlockArticle } from "@/lib/block-article";

/** One article in the blog index, the home carousel and the author page. */
export type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  /** Localized publication date, e.g. "23 de noviembre de 2026". */
  date: string;
};

export function getBlockArticle(slug: string, locale: string): BlockArticle {
  const article = BLOCK_ARTICLE_CONTENT[slug]?.[locale as "es" | "en" | "fr"];
  if (!article) throw new Error(`Unknown block article: ${locale}/${slug}`);
  return article;
}

/**
 * Cards of the articles published at build time, in the order of the blog index. Block articles
 * read their card from content/blog; page articles from messages (Blog.index.posts).
 */
export async function getBlogCards(locale: string): Promise<BlogCard[]> {
  const tIndex = await getTranslations({ locale, namespace: "Blog.index" });
  const tArticle = await getTranslations({ locale, namespace: "BlogArticle" });
  const pageCards = new Map(
    (tIndex.raw("posts") as Array<Omit<BlogCard, "date">>).map((card) => [card.slug, card]),
  );

  return PUBLISHED_BLOG_POSTS.flatMap((post): BlogCard[] => {
    const date = formatBlogDate(post.datePublished, locale);
    if (post.layout === "blocks") {
      const article = getBlockArticle(post.slug, locale);
      return [
        {
          slug: post.slug,
          title: article.title,
          excerpt: article.card.excerpt,
          category: article.card.category,
          readTime: tArticle("cardReadTime", { minutes: article.readMinutes }),
          image: post.image,
          date,
        },
      ];
    }
    const card = pageCards.get(post.slug);
    return card ? [{ ...card, date }] : [];
  });
}
