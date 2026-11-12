import { SITE_NAME, SITE_URL, localizedUrl } from "@/lib/seo";
import { stripHtml, type FAQItem } from "@/lib/faq";
import {
  AUTHOR_DISPLAY_NAME,
  AUTHOR_LANGUAGES,
  AUTHOR_PATH,
  BUSINESS_GOOGLE_PROFILE_URL,
} from "@/lib/author";
import { getBlogPost } from "@/lib/blog-posts";

export type JsonLdNode = Record<string, unknown>;

const SCHEMA_CONTEXT = "https://schema.org";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
/** Locale-independent, so every article in every locale references the same Person. */
export const PERSON_ID = `${SITE_URL}/#jio`;

/** Social profiles linked from the site (footer and contact section). */
export const SOCIAL_PROFILE_URLS = [
  "https://wa.me/33601526171",
  "https://instagram.com/alleefrancelyon",
  "https://www.tiktok.com/@alleefrancelyon",
  BUSINESS_GOOGLE_PROFILE_URL,
];

const ORGANIZATION_DESCRIPTIONS: Record<string, string> = {
  es: "Asesoría migratoria especializada en Francia para latinoamericanos. Expertos en visas de trabajo, estudios, Working Holiday y permisos de residencia.",
  en: "Specialized immigration consultancy in France for Latin Americans.",
  fr: "Conseil en immigration spécialisé en France pour les Latino-Américains.",
};

export function buildOrganizationSchema(locale: string): JsonLdNode {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: "Allée France Lyon",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-AF.webp`,
    description: ORGANIZATION_DESCRIPTIONS[locale] ?? ORGANIZATION_DESCRIPTIONS.es,
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-601-526-171",
      contactType: "customer service",
      availableLanguage: ["Spanish", "French", "English"],
      areaServed: ["AR", "CL", "CO", "MX", "PE", "UY", "EC"],
    },
    sameAs: SOCIAL_PROFILE_URLS,
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Chile" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "México" },
      { "@type": "Country", name: "Perú" },
      { "@type": "Country", name: "Uruguay" },
      { "@type": "Country", name: "Ecuador" },
    ],
    knowsAbout: [
      "Visa Salarié Francia",
      "Visa Saisonnier Francia",
      "Working Holiday Francia",
      "Visa Estudiante Francia",
      "Titre de Séjour",
      "Migración a Francia",
    ],
  };
}

export function buildProfessionalServiceSchema(): JsonLdNode {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "ProfessionalService",
    "@id": LOCAL_BUSINESS_ID,
    name: "Allée France - Asesoría Migratoria",
    image: `${SITE_URL}/logo-AF.webp`,
    url: SITE_URL,
    telephone: "+33601526171",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.764043,
      longitude: 4.835659,
    },
  };
}

export function buildWebSiteSchema(locale: string): JsonLdNode {
  const url = localizedUrl(locale);
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebSite",
    "@id": `${url}#website`,
    url,
    name: SITE_NAME,
    inLanguage: locale,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export type BreadcrumbEntry = {
  name: string;
  /** Path without locale, e.g. "/servicios/visas-trabajo". Empty for the home page. */
  path: string;
};

export function buildBreadcrumbSchema(
  locale: string,
  entries: BreadcrumbEntry[],
): JsonLdNode {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: localizedUrl(locale, entry.path),
    })),
  };
}

export type HowToStepData = { name: string; text: string };

export type HowToData = {
  name: string;
  description: string;
  steps: HowToStepData[];
  /** ISO 8601 duration, e.g. "P12W". */
  totalTime: string;
  /** Estimated cost in euros. */
  estimatedCostEur: string;
};

export function buildHowToSchema(data: HowToData): JsonLdNode {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "HowTo",
    name: data.name,
    description: data.description,
    totalTime: data.totalTime,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: data.estimatedCostEur,
    },
    step: data.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/** `items` must be exactly the questions the page shows; answers are reduced to plain text. */
export function buildFaqPageSchema(items: FAQItem[]): JsonLdNode {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(item.answer),
      },
    })),
  };
}

export type PersonData = {
  /** Localized job title. */
  jobTitle: string;
  /** Localized professional bio. */
  description: string;
};

/**
 * The author. No `image` and no `sameAs`: no photo and no personal profiles were confirmed.
 * Without `@context` so it can be nested as `mainEntity`.
 */
function buildPersonNode(locale: string, data: PersonData): JsonLdNode {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR_DISPLAY_NAME,
    jobTitle: data.jobTitle,
    description: data.description,
    url: localizedUrl(locale, AUTHOR_PATH),
    knowsLanguage: AUTHOR_LANGUAGES,
    worksFor: { "@id": ORGANIZATION_ID },
  };
}

export function buildProfilePageSchema(
  locale: string,
  data: PersonData,
): JsonLdNode {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "ProfilePage",
    url: localizedUrl(locale, AUTHOR_PATH),
    inLanguage: locale,
    mainEntity: buildPersonNode(locale, data),
  };
}

export type BlogPostingData = {
  locale: string;
  /** Registry slug of the article. */
  slug: string;
  headline: string;
  description: string;
};

/** Dates, image and author come from the blog registry. */
export function buildBlogPostingSchema({
  locale,
  slug,
  headline,
  description,
}: BlogPostingData): JsonLdNode {
  const post = getBlogPost(slug);
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BlogPosting",
    headline,
    description,
    image: [`${SITE_URL}${post.image}`],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": localizedUrl(locale, `/blog/${slug}`),
    },
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: AUTHOR_DISPLAY_NAME,
      url: localizedUrl(locale, AUTHOR_PATH),
    },
    publisher: { "@id": ORGANIZATION_ID },
  };
}
