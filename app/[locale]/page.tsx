import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { isLocale, routing } from "@/i18n/routing";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.home" });

  return {
    title: {
      absolute: t("title"),
    },
    description: t("description"),
    alternates: {
      canonical: `https://alleefrance.com/${locale}`,
    },
  };
}


export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <HomePage />;
}
