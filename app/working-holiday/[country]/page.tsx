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
