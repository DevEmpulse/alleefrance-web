export const dynamic = "force-static";
import { MetadataRoute } from "next";
import { PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES } from "@/lib/working-holiday-countries";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alleefrance.com";
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  const getUrl = (path: string, locale: string) => {
    return `${baseUrl}/${locale}${path === '/' ? '' : path}`;
  };

  const createLocalizedEntries = (path: string, changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never", priority: number) => {
    return locales.map((locale) => {
      const languages = locales.reduce((acc, l) => {
        acc[l] = getUrl(path, l);
        return acc;
      }, {} as Record<string, string>);
      
      languages['x-default'] = getUrl(path, defaultLocale);

      return {
        url: getUrl(path, locale),
        lastModified: new Date(),
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

  const blogPaths = [
    { path: "/blog/visa-saisonnier-salarie", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/blog/working-holiday-francia", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/blog/visa-estudiante-francia", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/blog/aprender-frances-recursos", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/blog/esim-guia-latinoamericanos-francia", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/blog/bancos-fisicos-vs-virtuales-francia", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/blog/titre-sejour-francia", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const legalPaths = [
    { path: "/politica-de-privacidad", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terminos-y-condiciones", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const allPaths = [...mainPaths, ...whPaths, ...blogPaths, ...legalPaths];

  return allPaths.flatMap(({ path, changeFrequency, priority }) => 
    createLocalizedEntries(path, changeFrequency, priority)
  );
}
