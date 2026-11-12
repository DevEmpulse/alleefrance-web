export const dynamic = "force-static";
import { MetadataRoute } from "next";
import { PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES } from "@/lib/working-holiday-countries";
import { routing } from "@/i18n/routing";
import { localizedUrl } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { AUTHOR_PATH } from "@/lib/author";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type PathEntry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  lastModified?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  const getUrl = localizedUrl;

  const createLocalizedEntries = (
    path: string,
    changeFrequency: ChangeFrequency,
    priority: number,
    lastModified?: string,
  ) => {
    return locales.map((locale) => {
      const languages = locales.reduce((acc, l) => {
        acc[l] = getUrl(l, path);
        return acc;
      }, {} as Record<string, string>);
      
      languages['x-default'] = getUrl(defaultLocale, path);

      return {
        url: getUrl(locale, path),
        ...(lastModified ? { lastModified } : {}),
        changeFrequency,
        priority,
        alternates: {
          languages,
        },
      };
    });
  };

  const mainPaths = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/servicios", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/servicios/visas-trabajo", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/servicios/visa-etudiant", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/servicios/titre-de-sejour", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/working-holiday", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: AUTHOR_PATH, changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  const whPaths = PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.map(code => ({
    path: `/working-holiday/${code}`, changeFrequency: "monthly" as const, priority: 0.8
  }));

  // Blog slugs and dates come from the blog registry (lib/blog-posts.ts).
  const blogPaths: PathEntry[] = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: post.dateModified,
  }));

  const legalPaths = [
    { path: "/politica-de-privacidad", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terminos-y-condiciones", changeFrequency: "yearly" as const, priority: 0.3 },
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
