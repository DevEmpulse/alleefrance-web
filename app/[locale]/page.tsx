import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { isLocale, routing } from "@/i18n/routing";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
