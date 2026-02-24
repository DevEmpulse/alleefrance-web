import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://alleefrance.com"),
  title: {
    default: "Allée France | Asesoría Migratoria Francia para Latinoamericanos",
    template: "%s | Allée France",
  },
  description:
    "Expertos en visas Francia: Salarié, Saisonnier, Working Holiday y Estudiante. +700 casos exitosos. Acompañamiento integral desde LATAM. Consultá gratis.",
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
    "visa francia argentinos",
    "visa francia chilenos",
    "visa francia colombianos",
  ],
  authors: [{ name: "Jio - Allée France", url: "https://alleefrance.com" }],
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
    locale: "es_ES",
    url: "https://alleefrance.com",
    siteName: "Allée France",
    title: "Allée France | Asesoría Migratoria Francia para Latinoamericanos",
    description:
      "Expertos en visas Francia: Salarié, Saisonnier, Working Holiday y Estudiante. +700 casos exitosos desde LATAM.",
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
    title: "Allée France | Asesoría Migratoria Francia",
    description:
      "Expertos en visas Francia: Salarié, Saisonnier, Working Holiday y Estudiante. +700 casos exitosos.",
    images: ["/hero-lyon.webp"],
  },
  alternates: {
    canonical: "https://alleefrance.com",
  },
  category: "Immigration Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
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
        <link rel="canonical" href="https://alleefrance.com" />
        <meta name="geo.region" content="FR-ARA" />
        <meta name="geo.placename" content="Lyon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://alleefrance.com/#organization",
              name: "Allée France",
              alternateName: "Allée France Lyon",
              url: "https://alleefrance.com",
              logo: "https://alleefrance.com/logo-AF.webp",
              description:
                "Asesoría migratoria especializada en Francia para latinoamericanos. Expertos en visas de trabajo, estudios, Working Holiday y permisos de residencia.",
              foundingDate: "2023",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lyon",
                addressRegion: "Auvergne-Rhône-Alpes",
                addressCountry: "FR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-601-526-171",
                contactType: "customer service",
                availableLanguage: ["Spanish", "French"],
                areaServed: ["AR", "CL", "CO", "MX", "PE", "UY", "EC"],
              },
              sameAs: ["https://wa.me/33601526171"],
              areaServed: [
                { "@type": "Country", name: "Argentina" },
                { "@type": "Country", name: "Chile" },
                { "@type": "Country", name: "Colombia" },
                { "@type": "Country", name: "México" },
                { "@type": "Country", name: "Perú" },
                { "@type": "Country", name: "Uruguay" },
                { "@type": "Country", name: "Ecuador" },
              ],
              knowsAbout: [
                "Visa Salarié Francia",
                "Visa Saisonnier Francia",
                "Working Holiday Francia",
                "Visa Estudiante Francia",
                "Titre de Séjour",
                "Migración a Francia",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://alleefrance.com/#localbusiness",
              name: "Allée France - Asesoría Migratoria",
              image: "https://alleefrance.com/logo-AF.webp",
              url: "https://alleefrance.com",
              telephone: "+33601526171",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lyon",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.764043,
                longitude: 4.835659,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${openSans.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
