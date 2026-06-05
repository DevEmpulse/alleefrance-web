import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { WORKING_HOLIDAY_COUNTRIES } from "@/lib/working-holiday-countries";
import { WorkingHolidayLanding } from "./landing";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


const globalConfig = WORKING_HOLIDAY_COUNTRIES.global;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.workingHoliday" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "working holiday francia",
      "visa vacaciones trabajo francia",
      "working holiday argentina francia",
      "working holiday chile francia",
      "working holiday colombia francia",
      "vivir en francia",
      "trabajar en francia joven",
      "visa francia 12 meses",
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://alleefrance.com/${locale}/working-holiday`,
      type: "website",
      images: [
        {
          url: "/hero-lyon.webp",
          width: 1200,
          height: 630,
          alt: "Working Holiday Francia - Allée France",
        },
      ],
    },
    alternates: {
      canonical: `https://alleefrance.com/${locale}/working-holiday`,
    },
  };
}

export default async function WorkingHolidayPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);

  return <WorkingHolidayLanding />;
}
