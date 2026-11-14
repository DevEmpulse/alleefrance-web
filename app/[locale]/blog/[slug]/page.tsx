import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";
import { ArticleByline } from "@/components/blog/article-byline";
import { JsonLd } from "@/components/json-ld";
import { ArticleSchemas } from "@/lib/schema-server";
import { buildFaqPageSchema } from "@/lib/schema";
import { PUBLISHED_BLOG_POSTS, articleOpenGraph, getBlogPost } from "@/lib/blog-posts";
import { getBlockArticle } from "@/lib/blog-cards";
import { toSections, type BlockArticleBlock } from "@/lib/block-article";
import { routing } from "@/i18n/routing";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { notFound } from "next/navigation";
import { SiWhatsapp } from "react-icons/si";
import { buildWhatsAppLink } from "@/lib/utils";

// Shared template of the block articles (content/blog). Page articles keep their own folders.
// Only articles published at build time get a page.
export const dynamicParams = false;

// "output: export" rejects an empty list, which happens while no block article is published yet.
// The placeholder slug renders the 404 page and is removed from out/ (scripts/postbuild.mjs).
const PLACEHOLDER_SLUG = "_scheduled";

export function generateStaticParams() {
  const params = PUBLISHED_BLOG_POSTS.filter((post) => post.layout === "blocks").flatMap((post) =>
    routing.locales.map((locale) => ({ locale, slug: post.slug })),
  );
  return params.length > 0 ? params : [{ locale: routing.defaultLocale, slug: PLACEHOLDER_SLUG }];
}

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (slug === PLACEHOLDER_SLUG) return {};
  const article = getBlockArticle(slug, locale);

  return {
    ...buildMetadata({
      locale,
      path: `/blog/${slug}`,
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      type: "article",
      article: articleOpenGraph(locale, slug),
      image: { url: getBlogPost(slug).image, width: 1376, height: 768, alt: article.title },
    }),
    keywords: article.seo.keywords,
  };
}

const NAVY = "#002654";

function ArticleBlock({ block, locale, labels }: {
  block: BlockArticleBlock;
  locale: string;
  labels: { whatsappButton: string; bookLabel: string };
}) {
  switch (block.type) {
    case "heading":
      return null;
    case "paragraph":
      return <p className="text-lg text-gray-700 leading-relaxed">{block.text}</p>;
    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag className={`space-y-3 list-inside ${block.ordered ? "list-decimal" : "list-disc"}`}>
          {block.items.map((item) => (
            <li key={item} className="text-gray-700 text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ListTag>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="bg-gray-50">
                {block.headers.map((header, index) => (
                  <th key={index} className="px-4 py-3 font-semibold" style={{ color: NAVY }}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-gray-100">
                  {row.map((cell, cellIndex) =>
                    cellIndex === 0 ? (
                      <th key={cellIndex} scope="row" className="px-4 py-3 font-semibold text-gray-700">
                        {cell}
                      </th>
                    ) : (
                      <td key={cellIndex} className="px-4 py-3 text-gray-700">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "faq":
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold" style={{ color: NAVY }}>
            {block.title}
          </h2>
          <div className="space-y-6">
            {block.items.map((item) => (
              <div key={item.question} className="space-y-2">
                <h3 className="text-lg font-semibold" style={{ color: NAVY }}>
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "cta":
      return (
        <div
          className="p-8 rounded-2xl text-center space-y-4"
          style={{ backgroundColor: "#f0f4fb", border: "1px solid #00265420" }}
        >
          <h2 className="text-xl font-bold" style={{ color: NAVY }}>
            {block.title}
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">{block.body}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={buildWhatsAppLink(block.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <SiWhatsapp className="w-5 h-5" />
              {labels.whatsappButton}
            </a>
            <a
              href={`/${locale}#contacto`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              {labels.bookLabel}
            </a>
          </div>
        </div>
      );
  }
}

export default async function BlockArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (slug === PLACEHOLDER_SLUG) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "BlogArticle" });
  const article = getBlockArticle(slug, locale);
  const heroImage = getBlogPost(slug).image;
  const sections = toSections(article.blocks);
  const faqItems = article.blocks.flatMap((block) => (block.type === "faq" ? block.items : []));
  const labels = { whatsappButton: t("whatsappButton"), bookLabel: t("bookLabel") };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <ArticleSchemas
        locale={locale}
        slug={slug}
        headline={article.title}
        description={article.seo.metaDescription}
      />
      {faqItems.length > 0 ? (
        <JsonLd data={buildFaqPageSchema(faqItems.map((item) => ({ ...item, category: [] })))} />
      ) : null}
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: NAVY,
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 38, 84, 0.88)" }} />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70">
            {article.card.category}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
          <ArticleByline
            locale={locale}
            slug={slug}
            readTime={t("readTime", { minutes: article.readMinutes })}
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <AnimateOnScroll direction="up" delay={0}>
            <div
              className="p-6 rounded-2xl border-l-4 text-lg text-gray-700 leading-relaxed"
              style={{ backgroundColor: "#f0f4fb", borderColor: NAVY }}
            >
              {article.shortAnswer}
            </div>
          </AnimateOnScroll>

          {sections.map((section, index) => (
            <AnimateOnScroll key={index} direction="up" delay={0.05}>
              <div className="space-y-5">
                {section.heading ? (
                  <h2 className="text-3xl font-bold" style={{ color: NAVY }}>
                    {section.heading}
                  </h2>
                ) : null}
                {section.blocks.map((block, blockIndex) => (
                  <ArticleBlock key={blockIndex} block={block} locale={locale} labels={labels} />
                ))}
              </div>
            </AnimateOnScroll>
          ))}

          {/* Disclaimer + Sources */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-4 border-t border-gray-100 pt-8">
              <p className="text-sm text-gray-500 italic leading-relaxed">{article.disclaimer}</p>
              {article.sources.length > 0 ? (
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-semibold">{t("sourcesLabel")}</span>{" "}
                  {article.sources.map((source, index) => (
                    <span key={source.label}>
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:no-underline"
                          style={{ color: NAVY }}
                        >
                          {source.label}
                        </a>
                      ) : (
                        source.label
                      )}
                      {index < article.sources.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </p>
              ) : null}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  );
}
