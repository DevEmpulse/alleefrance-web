import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { WORKING_HOLIDAY_COUNTRIES } from "@/lib/working-holiday-countries";
import { WorkingHolidayLanding } from "./landing";
import { PageSchemas, getBreadcrumbNames } from "@/lib/schema-server";
import { WORKING_HOLIDAY_FAQ_SECTION } from "@/lib/faq-sections";

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
    ...buildMetadata({
      locale,
      path: "/working-holiday",
      title: t("title"),
      description: t("description"),
      image: {
        url: "/hero-lyon.webp",
        width: 1200,
        height: 630,
        alt: "Working Holiday Francia - Allée France",
      },
    }),
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
  };
}

export default async function WorkingHolidayPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const names = await getBreadcrumbNames(p.locale);

  return (
    <>
      <PageSchemas
        locale={p.locale}
        breadcrumbs={[
          { name: names.home, path: "" },
          { name: names.workingHoliday, path: "/working-holiday" },
        ]}
        howTo="workingHoliday"
        faqSection={WORKING_HOLIDAY_FAQ_SECTION}
      />
      <WorkingHolidayLanding />
    </>
  );
}
