import { getTranslations } from "next-intl/server";
import { JsonLd } from "@/components/json-ld";
import { getInitiallyVisibleFaqsForLocale } from "@/lib/faq-server";
import type { FAQSectionConfig } from "@/lib/faq";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildHowToSchema,
  type BreadcrumbEntry,
  type HowToStepData,
} from "@/lib/schema";

export type HowToKey =
  | "workVisas"
  | "studentVisa"
  | "titreDeSejour"
  | "workingHoliday";

const HOW_TO_FACTS: Record<
  HowToKey,
  { totalTime: string; estimatedCostEur: string }
> = {
  workVisas: { totalTime: "P12W", estimatedCostEur: "250" },
  studentVisa: { totalTime: "P16W", estimatedCostEur: "250" },
  titreDeSejour: { totalTime: "P6W", estimatedCostEur: "150" },
  workingHoliday: { totalTime: "P8W", estimatedCostEur: "3000" },
};

type PageSchemasProps = {
  locale: string;
  /** Omit or leave empty on pages without a breadcrumb trail (the home page). */
  breadcrumbs?: BreadcrumbEntry[];
  howTo?: HowToKey;
  faqSection?: FAQSectionConfig;
};

/**
 * BreadcrumbList, optional HowTo and optional FAQPage of a page, all in its locale.
 * The FAQPage lists the questions the page's FAQ section renders on first load.
 */
export async function PageSchemas({
  locale,
  breadcrumbs = [],
  howTo,
  faqSection,
}: PageSchemasProps) {
  const howToData = howTo
    ? (
        await getTranslations({ locale, namespace: "StructuredData" })
      ).raw(`howTo.${howTo}`)
    : null;
  const faqs = faqSection
    ? await getInitiallyVisibleFaqsForLocale(locale, faqSection)
    : null;

  return (
    <>
      {breadcrumbs.length > 0 ? (
        <JsonLd data={buildBreadcrumbSchema(locale, breadcrumbs)} />
      ) : null}
      {howTo && howToData ? (
        <JsonLd
          data={buildHowToSchema({
            ...(howToData as {
              name: string;
              description: string;
              steps: HowToStepData[];
            }),
            ...HOW_TO_FACTS[howTo],
          })}
        />
      ) : null}
      {faqs ? <JsonLd data={buildFaqPageSchema(faqs)} /> : null}
    </>
  );
}

export type BreadcrumbKey =
  | "home"
  | "blog"
  | "services"
  | "workVisas"
  | "studentVisa"
  | "titreDeSejour"
  | "workingHoliday";

/** Translated breadcrumb names of the site's fixed sections. */
export async function getBreadcrumbNames(
  locale: string,
): Promise<Record<BreadcrumbKey, string>> {
  const t = await getTranslations({ locale, namespace: "StructuredData.breadcrumbs" });
  return {
    home: t("home"),
    blog: t("blog"),
    services: t("services"),
    workVisas: t("workVisas"),
    studentVisa: t("studentVisa"),
    titreDeSejour: t("titreDeSejour"),
    workingHoliday: t("workingHoliday"),
  };
}

type ArticleSchemasProps = {
  locale: string;
  /** Registry slug of the article. */
  slug: string;
  /** The article's h1. */
  headline: string;
  description: string;
};

/** BlogPosting and BreadcrumbList (Home, Blog, article) of a blog article. */
export async function ArticleSchemas({
  locale,
  slug,
  headline,
  description,
}: ArticleSchemasProps) {
  const names = await getBreadcrumbNames(locale);
  return (
    <>
      <JsonLd
        data={buildBlogPostingSchema({ locale, slug, headline, description })}
      />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          { name: names.home, path: "" },
          { name: names.blog, path: "/blog" },
          { name: headline, path: `/blog/${slug}` },
        ])}
      />
    </>
  );
}
