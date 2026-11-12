import type React from "react";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { isLocale, routing } from "@/i18n/routing";
import { Montserrat, Open_Sans } from "next/font/google";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import {
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
  buildWebSiteSchema,
} from "@/lib/schema";
import { BING_SITE_VERIFICATION, GOOGLE_SITE_VERIFICATION } from "@/lib/site-verification";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.home" });
  
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: "%s | Allée France",
    },
    description: t("description"),
    keywords: [
      "visa francia",
      "working holiday francia",
      "visa salarié",
      "visa saisonnier",
      "trabajar en francia",
      "vivir en francia",
      "estudiar en francia",
      "asesoría migratoria francia",
      "visa trabajo francia",
      "titre de séjour",
      "emigrar a francia",
    ],
    authors: [{ name: "Jio - Allée France", url: SITE_URL }],
    creator: "Allée France",
    publisher: "Allée France",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_FR" : "es_ES",
      siteName: "Allée France",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/hero-lyon.webp",
          width: 1200,
          height: 630,
          alt: "Allée France - Asesoría Migratoria para Francia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/hero-lyon.webp"],
    },
    category: "Immigration Services",
    verification: {
      ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
      ...(BING_SITE_VERIFICATION ? { other: { "msvalidate.01": BING_SITE_VERIFICATION } } : {}),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
        <link
          rel="icon"
          href="/logo-AF.ico"
          type="image/x-icon"
          sizes="64x64"
        />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Lyon" />
        <JsonLd data={buildOrganizationSchema(locale)} />
        <JsonLd data={buildProfessionalServiceSchema()} />
        <JsonLd data={buildWebSiteSchema(locale)} />
      </head>
      <body
        className={`${openSans.className} antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

