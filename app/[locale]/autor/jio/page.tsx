import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { getBreadcrumbNames } from "@/lib/schema-server";
import { buildBreadcrumbSchema, buildProfilePageSchema } from "@/lib/schema";
import {
  AUTHOR_DISPLAY_NAME,
  AUTHOR_PATH,
  BUSINESS_GOOGLE_PROFILE_URL,
  BUSINESS_INSTAGRAM_URL,
} from "@/lib/author";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog-posts";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AuthorPage.meta" });
  return buildMetadata({
    locale,
    path: AUTHOR_PATH,
    title: t("title"),
    description: t("description"),
  });
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AuthorPage" });
  const tIndex = await getTranslations({ locale, namespace: "Blog.index" });
  const names = await getBreadcrumbNames(locale);

  const bio = t.raw("bio") as string[];
  const titles = new Map(
    (tIndex.raw("posts") as Array<{ slug: string; title: string }>).map(
      (post) => [post.slug, post.title],
    ),
  );

  // Newest first; ISO dates compare correctly as strings.
  const authorPosts = BLOG_POSTS.filter((post) => post.author === "jio").sort(
    (a, b) => b.datePublished.localeCompare(a.datePublished),
  );

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <JsonLd
        data={buildProfilePageSchema(locale, {
          jobTitle: t("jobTitle"),
          description: bio.join(" "),
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          { name: names.home, path: "" },
          { name: AUTHOR_DISPLAY_NAME, path: AUTHOR_PATH },
        ])}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#002654" }}
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <div
              role="img"
              aria-label={t("avatarLabel")}
              className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 text-3xl font-bold tracking-wide"
            >
              J
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {AUTHOR_DISPLAY_NAME}
            </h1>
            <p className="text-xl leading-relaxed text-white/90">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <AnimateOnScroll direction="up" delay={0}>
              <div className="space-y-5">
                <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                  {t("aboutTitle")}
                </h2>
                {bio.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                <dl className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <dt className="text-xs uppercase tracking-widest text-gray-500">
                      {t("roleLabel")}
                    </dt>
                    <dd className="mt-1 font-semibold" style={{ color: "#002654" }}>
                      {t("jobTitle")}
                    </dd>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <dt className="text-xs uppercase tracking-widest text-gray-500">
                      {t("languagesLabel")}
                    </dt>
                    <dd className="mt-1 font-semibold" style={{ color: "#002654" }}>
                      {t("languagesValue")}
                    </dd>
                  </div>
                </dl>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.05}>
              <div className="space-y-5">
                <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                  {t("linksTitle")}
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={BUSINESS_GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#002654" }}
                  >
                    <ExternalLink className="w-5 h-5" aria-hidden="true" />
                    {t("googleReviews")}
                  </a>
                  <a
                    href={BUSINESS_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border transition-colors hover:bg-gray-50"
                    style={{ color: "#002654", borderColor: "#002654" }}
                  >
                    <SiInstagram className="w-5 h-5" aria-hidden="true" />
                    {t("instagram")}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.05}>
              <div className="space-y-5">
                <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                  {t("articlesTitle")}
                </h2>
                <ul className="space-y-3 list-none">
                  {authorPosts.map(
                    (post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/${locale}/blog/${post.slug}`}
                          className="block p-5 rounded-2xl border border-gray-100 shadow-sm bg-white transition-shadow hover:shadow-md"
                        >
                          <time
                            dateTime={post.datePublished}
                            className="block text-xs uppercase tracking-widest text-gray-500 mb-1"
                          >
                            {formatBlogDate(post.datePublished, locale)}
                          </time>
                          <span
                            className="text-lg font-bold"
                            style={{ color: "#002654" }}
                          >
                            {titles.get(post.slug)}
                          </span>
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
