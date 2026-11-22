export const dynamic = "force-static";
import { MetadataRoute } from "next";
import { PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES } from "@/lib/working-holiday-countries";
import { routing } from "@/i18n/routing";
import { localizedUrl } from "@/lib/seo";
import { PUBLISHED_BLOG_POSTS } from "@/lib/blog-posts";
import { AUTHOR_PATH } from "@/lib/author";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type PathEntry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified: string;
};

const SITE_LAST_MODIFIED = "2026-11-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  const getUrl = localizedUrl;

  const createLocalizedEntries = (
    path: string,
    changeFrequency: ChangeFrequency,
    priority: number,
    lastModified: string,
  ) => {
    return locales.map((locale) => {
      const languages = locales.reduce((acc, l) => {
        acc[l] = getUrl(l, path);
        return acc;
      }, {} as Record<string, string>);
      
      languages["x-default"] = getUrl(defaultLocale, path);

      return {
        url: getUrl(locale, path),
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages,
        },
      };
    });
  };

  const mainPaths: PathEntry[] = [
    { path: "/", changeFrequency: "weekly", priority: 1, lastModified: SITE_LAST_MODIFIED },
    { path: "/servicios", changeFrequency: "weekly", priority: 0.9, lastModified: SITE_LAST_MODIFIED },
    { path: "/servicios/visas-trabajo", changeFrequency: "weekly", priority: 0.9, lastModified: SITE_LAST_MODIFIED },
    { path: "/servicios/visa-etudiant", changeFrequency: "weekly", priority: 0.8, lastModified: SITE_LAST_MODIFIED },
    { path: "/servicios/titre-de-sejour", changeFrequency: "weekly", priority: 0.8, lastModified: SITE_LAST_MODIFIED },
    { path: "/working-holiday", changeFrequency: "weekly", priority: 0.9, lastModified: SITE_LAST_MODIFIED },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7, lastModified: SITE_LAST_MODIFIED },
    { path: AUTHOR_PATH, changeFrequency: "yearly", priority: 0.5, lastModified: SITE_LAST_MODIFIED },
  ];

  const whPaths: PathEntry[] = PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.map((code) => ({
    path: `/working-holiday/${code}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: SITE_LAST_MODIFIED,
  }));

  // Blog slugs and dates come from the blog registry (lib/blog-posts.ts); scheduled articles are left out.
  const blogPaths: PathEntry[] = PUBLISHED_BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: post.dateModified,
  }));

  const legalPaths: PathEntry[] = [
    { path: "/politica-de-privacidad", changeFrequency: "yearly", priority: 0.3, lastModified: SITE_LAST_MODIFIED },
    { path: "/terminos-y-condiciones", changeFrequency: "yearly", priority: 0.3, lastModified: SITE_LAST_MODIFIED },
  ];

  const allPaths: PathEntry[] = [...mainPaths, ...whPaths, ...blogPaths, ...legalPaths];

  return allPaths.flatMap((entry) =>
    createLocalizedEntries(
      entry.path,
      entry.changeFrequency,
      entry.priority,
      entry.lastModified,
    ),
  );
}
