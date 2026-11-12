import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { AUTHOR_DISPLAY_NAME, AUTHOR_PATH } from "@/lib/author";
import { formatBlogDate, getBlogPost } from "@/lib/blog-posts";

type ArticleBylineProps = {
  locale: string;
  /** Registry slug of the article. */
  slug: string;
  /** Optional reading time, shown after the date. */
  readTime?: string;
};

/**
 * Visible signature of a blog article: author linked to the author page, publication date
 * in a <time> element, and an "updated" date only when it differs. Meant for the dark hero.
 */
export async function ArticleByline({ locale, slug, readTime }: ArticleBylineProps) {
  const t = await getTranslations({ locale, namespace: "BlogByline" });
  const post = getBlogPost(slug);
  const updated = post.dateModified !== post.datePublished;

  return (
    <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/70">
      <span>
        {t("by")}{" "}
        <Link
          href={`/${locale}${AUTHOR_PATH}/`}
          rel="author"
          className="font-semibold text-white underline underline-offset-4 hover:no-underline"
        >
          {AUTHOR_DISPLAY_NAME}
        </Link>
      </span>
      <span aria-hidden="true">·</span>
      <time dateTime={post.datePublished}>
        {formatBlogDate(post.datePublished, locale)}
      </time>
      {updated ? (
        <>
          <span aria-hidden="true">·</span>
          <span>
            {t("updated")}{" "}
            <time dateTime={post.dateModified}>
              {formatBlogDate(post.dateModified, locale)}
            </time>
          </span>
        </>
      ) : null}
      {readTime ? (
        <>
          <span aria-hidden="true">·</span>
          <span>{readTime}</span>
        </>
      ) : null}
    </p>
  );
}
