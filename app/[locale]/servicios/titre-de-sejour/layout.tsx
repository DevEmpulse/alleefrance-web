import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
    title: t("title"),
    description: t("description"),
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
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://alleefrance.com/${locale}/servicios/titre-de-sejour`,
      type: "website",
    },
    alternates: {
      canonical: `https://alleefrance.com/${locale}/servicios/titre-de-sejour`,
    },
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
  
  const tFaq = await getTranslations({ locale, namespace: "FAQData" });
  const titreDeSejourFaqs = (tFaq.raw("titreDeSejour") as any[]) || [];

  const homeName = locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "Inicio";
  const servicesName = locale === "fr" ? "Services" : locale === "en" ? "Services" : "Servicios";
  const pageName = "Titre de Séjour";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeName,
        item: "https://alleefrance.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: servicesName,
        item: "https://alleefrance.com/servicios",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageName,
        item: "https://alleefrance.com/servicios/titre-de-sejour",
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: locale === "fr" 
      ? "Comment renouveler ou demander le Titre de Séjour en France" 
      : locale === "en" 
        ? "How to renew or apply for the Titre de Séjour in France" 
        : "Cómo renovar o solicitar el Titre de Séjour en Francia",
    description: locale === "fr" 
      ? "Guide étape par étape pour obtenir ou renouveler votre titre de séjour en France." 
      : locale === "en" 
        ? "Step-by-step guide to obtain or renew your residence permit in France." 
        : "Guía paso a paso para obtener o renovar tu permiso de residencia en Francia.",
    totalTime: "P6W",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "150",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: locale === "fr" 
          ? "Rassembler les documents" 
          : locale === "en" 
            ? "Gather documents" 
            : "Reunir documentación",
        text: locale === "fr" 
          ? "Préparez votre passeport en cours de validité, un justificatif de domicile, des justificatifs de revenus et une assurance maladie." 
          : locale === "en" 
            ? "Prepare a valid passport, proof of address, proof of income, and health insurance." 
            : "Prepara pasaporte vigente, comprobante de domicilio, justificantes de ingresos y seguro médico.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: locale === "fr" 
          ? "Remplir les formulaires CERFA" 
          : locale === "en" 
            ? "Complete CERFA forms" 
            : "Completar formularios CERFA",
        text: locale === "fr" 
          ? "Remplissez les formulaires officiels correspondant à votre type de titre." 
          : locale === "en" 
            ? "Fill out the official forms corresponding to your permit type." 
            : "Llena los formularios oficiales correspondientes a tu tipo de título.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: locale === "fr" 
          ? "Déposer la demande sur la plateforme ANEF" 
          : locale === "en" 
            ? "Apply on the ANEF platform" 
            : "Solicitar en plataforma ANEF",
        text: locale === "fr" 
          ? "Téléchargez votre dossier complet sur la plateforme ANEF du ministère de l'Intérieur." 
          : locale === "en" 
            ? "Upload your complete dossier on the ANEF platform of the Ministry of the Interior." 
            : "Carga tu dossier completo en la plataforma ANEF del Ministerio del Interior.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: locale === "fr" 
          ? "Rendez-vous en préfecture" 
          : locale === "en" 
            ? "Prefecture appointment" 
            : "Cita en prefectura",
        text: locale === "fr" 
          ? "Présentez-vous au rendez-vous en préfecture pour la prise de vos données biométriques." 
          : locale === "en" 
            ? "Attend the appointment at the prefecture for biometric data collection." 
            : "Acude a la cita en prefectura para toma de datos biométricos.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: locale === "fr" 
          ? "Recevoir le récépissé et le titre" 
          : locale === "en" 
            ? "Receive receipt and permit" 
            : "Recibir récépissé y título",
        text: locale === "fr" 
          ? "Obtenez le récépissé provisoire, puis votre Titre de Séjour définitif." 
          : locale === "en" 
            ? "Obtain the provisional receipt and then your final Titre de Séjour." 
            : "Obtén el récépissé provisional y luego tu Titre de Séjour definitivo.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: titreDeSejourFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
