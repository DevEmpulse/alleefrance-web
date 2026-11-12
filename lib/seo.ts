import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://alleefrance.com";
export const SITE_NAME = "Allée France";

const OG_LOCALES: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
  fr: "fr_FR",
};

const DEFAULT_IMAGE: SeoImage = {
  url: "/hero-lyon.webp",
  width: 1200,
  height: 630,
  alt: "Allée France - Asesoría Migratoria para Francia",
};

export type SeoImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type BuildMetadataOptions = {
  locale: string;
  /** Path without locale, e.g. "/blog/titre-sejour-francia". Empty or "/" for the home page. */
  path: string;
  title: string;
  description: string;
  image?: SeoImage;
  type?: "website" | "article";
  /** Skip the layout title template (used by the home page). */
  absoluteTitle?: boolean;
};

/** Absolute URL for a localized path, always with a trailing slash (trailingSlash: true). */
export function localizedUrl(locale: string, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return `${SITE_URL}/${locale}/${clean ? `${clean}/` : ""}`;
}

/**
 * Per-page metadata: canonical, hreflang, Open Graph and Twitter.
 * Next replaces `alternates`, `openGraph` and `twitter` as whole objects when a page
 * defines them, so every page must go through this helper to keep them complete.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = DEFAULT_IMAGE,
  type = "website",
  absoluteTitle = false,
}: BuildMetadataOptions): Metadata {
  const canonical = localizedUrl(locale, path);
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, localizedUrl(l, path)]),
  );
  languages["x-default"] = localizedUrl(routing.defaultLocale, path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      locale: OG_LOCALES[locale as Locale] ?? OG_LOCALES[routing.defaultLocale],
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
