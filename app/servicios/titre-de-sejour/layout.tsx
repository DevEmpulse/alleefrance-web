import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Titre de Séjour Francia: Renovación y Solicitud | Guía 2026",
  description:
    "Todo sobre el Titre de Séjour en Francia: renovación, primera solicitud, tipos (Salarié, Étudiant, Saisonnier). Asesoría experta y acompañamiento en prefectura.",
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
    title: "Titre de Séjour Francia: Renovación y Solicitud | Allée France",
    description:
      "Guía completa para obtener o renovar tu Titre de Séjour en Francia. Asesoría profesional y acompañamiento.",
    url: "https://alleefrance.com/servicios/titre-de-sejour",
    type: "website",
  },
  alternates: {
    canonical: "https://alleefrance.com/servicios/titre-de-sejour",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://alleefrance.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Servicios",
      item: "https://alleefrance.com/servicios",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Titre de Séjour",
      item: "https://alleefrance.com/servicios/titre-de-sejour",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo renovar o solicitar el Titre de Séjour en Francia",
  description:
    "Guía paso a paso para obtener o renovar tu permiso de residencia en Francia.",
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
      name: "Reunir documentación",
      text: "Prepara pasaporte vigente, comprobante de domicilio, justificantes de ingresos y seguro médico.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Completar formularios CERFA",
      text: "Llena los formularios oficiales correspondientes a tu tipo de título.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Solicitar en plataforma ANEF",
      text: "Carga tu dossier completo en la plataforma ANEF del Ministerio del Interior.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Cita en prefectura",
      text: "Acude a la cita en prefectura para toma de datos biométricos.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Recibir récépissé y título",
      text: "Obtén el récépissé provisional y luego tu Titre de Séjour definitivo.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuándo debo renovar mi Titre de Séjour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Debes iniciar el proceso de renovación 2-3 meses antes de que expire tu título actual. Esto asegura que tengas tiempo suficiente para completar todos los trámites.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo trabajar mientras espero la renovación del Titre de Séjour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, mientras tu solicitud esté en trámite y tengas el récépissé (recibo de solicitud), puedes continuar trabajando legalmente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi Titre de Séjour expira antes de renovarlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si tu título expira antes de renovarlo, puedes estar en situación irregular. Es importante iniciar el proceso con anticipación para evitar esta situación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cambiar de tipo de Titre de Séjour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es posible cambiar de tipo (por ejemplo, de Étudiant a Salarié), pero requiere un proceso específico con requisitos y pasos necesarios según tu situación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda el proceso de Titre de Séjour?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tiempo varía según el tipo y la prefectura, generalmente entre 3-6 semanas. Con asesoría profesional, se optimiza el proceso para evitar retrasos.",
      },
    },
  ],
};

export default function TitreDeSejourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
