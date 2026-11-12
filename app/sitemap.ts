export const dynamic = "force-static";
import { MetadataRoute } from "next";
import { PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES } from "@/lib/working-holiday-countries";
import { routing } from "@/i18n/routing";
import { localizedUrl } from "@/lib/seo";

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
  ];

  const whPaths = PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.map(code => ({
    path: `/working-holiday/${code}`, changeFrequency: "monthly" as const, priority: 0.8
  }));

  // Publication dates come from the blog index cards (messages BlogPage.posts[].date).
  // Pages without a known modification date omit lastModified.
  const blogPaths = [
    { path: "/blog/visa-saisonier-salarie", changeFrequency: "monthly" as const, priority: 0.7, lastModified: "2026-01-15" },
    { path: "/blog/working-holiday-francia", changeFrequency: "monthly" as const, priority: 0.7, lastModified: "2025-01-10" },
    { path: "/blog/visa-estudiante-francia", changeFrequency: "monthly" as const, priority: 0.7, lastModified: "2025-01-05" },
    { path: "/blog/aprender-frances-recursos", changeFrequency: "monthly" as const, priority: 0.6, lastModified: "2025-01-02" },
    { path: "/blog/esim-guia-latinoamericanos-francia", changeFrequency: "monthly" as const, priority: 0.6, lastModified: "2026-06-02" },
    { path: "/blog/bancos-fisicos-vs-virtuales-francia", changeFrequency: "monthly" as const, priority: 0.6, lastModified: "2026-06-02" },
    { path: "/blog/titre-sejour-francia", changeFrequency: "monthly" as const, priority: 0.7, lastModified: "2026-06-17" },
    { path: "/blog/conseguir-trabajo-francia-desde-latam", changeFrequency: "monthly" as const, priority: 0.7, lastModified: "2026-06-12" },
    { path: "/blog/cuanto-cuesta-vivir-en-francia", changeFrequency: "monthly" as const, priority: 0.7, lastModified: "2026-06-14" },
    { path: "/blog/renovar-titre-de-sejour-2026", changeFrequency: "monthly" as const, priority: 0.7, lastModified: "2026-11-11" },
  ];

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
