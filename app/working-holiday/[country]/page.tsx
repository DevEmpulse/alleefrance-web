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
};

type CountryPageProps = {
  params: Promise<CountryPageParams>;
};

export function generateStaticParams() {
  return PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.map((code) => ({
    country: code,
  }));
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country } = await params;
  const config = getWorkingHolidayCountryConfig(country);

  if (!config || config.code === "global") {
    return {
      title: WORKING_HOLIDAY_COUNTRIES.global.seoTitle,
      description: WORKING_HOLIDAY_COUNTRIES.global.seoDescription,
    };
  }

  return {
    title: config.seoTitle,
    description: config.seoDescription,
    keywords: [
      `working holiday francia ${config.name.toLowerCase()}`,
      `visa francia ${config.name.toLowerCase()}`,
      `trabajar en francia ${config.name.toLowerCase()}`,
      "working holiday",
      "visa vacaciones trabajo francia",
    ],
    openGraph: {
      title: config.seoTitle,
      description: config.seoDescription,
      url: `https://alleefrance.com/working-holiday/${config.code}`,
      type: "website",
      images: [
        {
          url: "/hero-lyon.jpg",
          width: 1200,
          height: 630,
          alt: `Working Holiday Francia para ${config.name}`,
        },
      ],
    },
    alternates: {
      canonical: `https://alleefrance.com/working-holiday/${config.code}`,
    },
  };
}

export default async function WorkingHolidayCountryRoute({
  params,
}: CountryPageProps) {
  const { country } = await params;
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
