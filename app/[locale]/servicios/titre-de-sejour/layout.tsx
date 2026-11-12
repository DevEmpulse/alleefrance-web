import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { PageSchemas, getBreadcrumbNames } from "@/lib/schema-server";
import { TITRE_DE_SEJOUR_FAQ_SECTION } from "@/lib/faq-sections";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.titreDeSejour" });

  return {
    ...buildMetadata({
      locale,
      path: "/servicios/titre-de-sejour",
      title: t("title"),
      description: t("description"),
    }),
    keywords: [
      "titre de séjour francia",
      "permiso residencia francia",
      "renovar titre de séjour",
      "carte de séjour",
      "regularizar francia",
      "prefectura francia",
      "ANEF",
      "récépissé francia",
    ],
  };
}

export default async function TitreDeSejourLayout({
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
          { name: names.titreDeSejour, path: "/servicios/titre-de-sejour" },
        ]}
        howTo="titreDeSejour"
        faqSection={TITRE_DE_SEJOUR_FAQ_SECTION}
      />
      {children}
    </>
  );
}
