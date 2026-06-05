import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryProvider } from "@/components/country-provider";
import { WorkingHolidayCountryPage } from "@/components/working-holiday/working-holiday-country";
import {
  PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES,
  WORKING_HOLIDAY_COUNTRIES,
  getWorkingHolidayCountryConfig,
} from "@/lib/working-holiday-countries";

type CountryPageParams = {
  country: string;
  locale: string;
};

type CountryPageProps = {
  params: Promise<CountryPageParams>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.map((code) => ({
    country: code,
  }));
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country, locale } = await params;
  const config = getWorkingHolidayCountryConfig(country);

  if (!config || config.code === "global") {
    const tGlobal = await getTranslations({ locale, namespace: "WorkingHolidayCountries.global" });
    return {
      title: tGlobal("seoTitle"),
      description: tGlobal("seoDescription"),
    };
  }

  const tCountry = await getTranslations({ locale, namespace: `WorkingHolidayCountries.${config.code}` });
  const countryName = tCountry("name");
  const seoTitle = tCountry("seoTitle");
  const seoDescription = tCountry("seoDescription");

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      `working holiday francia ${countryName.toLowerCase()}`,
      `visa francia ${countryName.toLowerCase()}`,
      `trabajar en francia ${countryName.toLowerCase()}`,
      "working holiday",
      "visa vacaciones trabajo francia",
    ],
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://alleefrance.com/${locale}/working-holiday/${config.code}`,
      type: "website",
      images: [
        {
          url: "/hero-lyon.webp",
          width: 1200,
          height: 630,
          alt: `Working Holiday Francia para ${countryName}`,
        },
      ],
    },
    alternates: {
      canonical: `https://alleefrance.com/${locale}/working-holiday/${config.code}`,
    },
  };
}

export default async function WorkingHolidayCountryRoute({
  params,
}: CountryPageProps) {
  const { country, locale } = await params;
  setRequestLocale(locale);
  const config = getWorkingHolidayCountryConfig(country);

  if (!config || config.code === "global") {
    notFound();
  }
  const countryConfig = config;

  return (
    <CountryProvider initialCountryCode={countryConfig.code}>
      <WorkingHolidayCountryPage config={countryConfig} />
    </CountryProvider>
  );
}
