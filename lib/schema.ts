import { SITE_NAME, SITE_URL, localizedUrl } from "@/lib/seo";
import { stripHtml, type FAQItem } from "@/lib/faq";

export type JsonLdNode = Record<string, unknown>;

const SCHEMA_CONTEXT = "https://schema.org";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

/** Social profiles linked from the site (footer and contact section). */
export const SOCIAL_PROFILE_URLS = [
  "https://wa.me/33601526171",
  "https://instagram.com/alleefrancelyon",
  "https://www.tiktok.com/@alleefrancelyon",
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
