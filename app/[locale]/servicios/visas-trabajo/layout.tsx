import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { PageSchemas, getBreadcrumbNames } from "@/lib/schema-server";
import { WORK_VISAS_FAQ_SECTION } from "@/lib/faq-sections";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.visasTrabajo" });

  return {
    ...buildMetadata({
      locale,
      path: "/servicios/visas-trabajo",
      title: t("title"),
      description: t("description"),
      image: {
        url: "/visas-trabajo-bg.webp",
        width: 1200,
        height: 630,
        alt: "Visa de Trabajo Francia - Allée France",
      },
    }),
    keywords: [
      "visa salarié francia",
      "visa saisonnier francia",
      "trabajar en francia",
      "visa trabajo francia",
      "contrato trabajo francia",
      "autorización trabajo francia",
      "ANEF",
      "DREETS",
      "métiers en tension",
      "trabajo estacional francia",
    ],
  };
}

export default async function VisasTrabajoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const names = await getBreadcrumbNames(locale);

  return (
    <>
      <PageSchemas
        locale={locale}
        breadcrumbs={[
          { name: names.home, path: "" },
          { name: names.services, path: "/servicios" },
          { name: names.workVisas, path: "/servicios/visas-trabajo" },
        ]}
        howTo="workVisas"
        faqSection={WORK_VISAS_FAQ_SECTION}
      />
      {children}
    </>
  );
}
