import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { PageSchemas, getBreadcrumbNames } from "@/lib/schema-server";
import { STUDENT_VISA_FAQ_SECTION } from "@/lib/faq-sections";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.visaEtudiant" });

  return {
    ...buildMetadata({
      locale,
      path: "/servicios/visa-etudiant",
      title: t("title"),
      description: t("description"),
      image: {
        url: "/student-studying-in-paris.webp",
        width: 1200,
        height: 630,
        alt: "Visa Estudiante Francia - Allée France",
      },
    }),
    keywords: [
      "visa estudiante francia",
      "estudiar en francia",
      "campus france",
      "visa estudiante requisitos",
      "universidad francia extranjeros",
      "VLS-TS estudiante",
      "estudiar francés francia",
      "beca francia latinoamericanos",
    ],
  };
}

export default async function VisaEtudiantLayout({
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
          { name: names.studentVisa, path: "/servicios/visa-etudiant" },
        ]}
        howTo="studentVisa"
        faqSection={STUDENT_VISA_FAQ_SECTION}
      />
      {children}
    </>
  );
}
