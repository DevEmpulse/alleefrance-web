import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa de Trabajo Francia 2026: Salarié y Saisonnier | Guía Completa",
  description:
    "Guía completa Visa Salarié y Saisonnier Francia 2026. Requisitos, proceso ANEF, Métiers en Tension y tiempos. Asesoría profesional para trabajar legalmente en Francia.",
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
  openGraph: {
    title: "Visa de Trabajo Francia: Salarié y Saisonnier | Allée France",
    description:
      "Guía completa para obtener tu visa de trabajo en Francia. Proceso ANEF, requisitos y acompañamiento profesional.",
    url: "https://alleefrance.com/servicios/visas-trabajo",
    type: "website",
    images: [
      {
        url: "/visas-trabajo-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Visa de Trabajo Francia - Allée France",
      },
    ],
  },
  alternates: {
    canonical: "https://alleefrance.com/servicios/visas-trabajo",
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
      name: "Visas de Trabajo",
      item: "https://alleefrance.com/servicios/visas-trabajo",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo obtener una Visa de Trabajo en Francia",
  description:
    "Guía paso a paso para obtener tu visa Salarié o Saisonnier para trabajar legalmente en Francia.",
  totalTime: "P12W",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "EUR",
    value: "250",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Conseguir oferta de trabajo",
      text: "Obtén una oferta formal de empleo de un empleador francés con contrato CDI, CDD o estacional.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Empleador inicia trámite ANEF",
      text: "Tu empleador solicita la autorización de trabajo ante DREETS a través de la plataforma ANEF.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Publicación en France Travail",
      text: "Si el puesto no está en Métiers en Tension, se publica la oferta por 21 días.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Obtener autorización de trabajo",
      text: "DREETS aprueba la autorización de trabajo (2-8 semanas).",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Solicitar visa en consulado",
      text: "Con la autorización aprobada, solicitas la visa en el consulado francés de tu país.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Validar visa al llegar a Francia",
      text: "Al llegar, valida tu visa online en OFII y regístrate en seguridad social.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda obtener una visa Salarié para Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso completo de visa Salarié tarda entre 8 y 12 semanas: 2-8 semanas para la autorización de trabajo en ANEF y aproximadamente 15 días para la emisión de visa en el consulado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es un Métier en Tension y cómo me beneficia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los Métiers en Tension son profesiones con escasez de trabajadores en Francia. Si tu puesto está en esta lista, el proceso de autorización es más rápido porque no requiere publicar la oferta 21 días en France Travail.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre visa Salarié y Saisonnier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La visa Salarié es para contratos CDI o CDD de larga duración, permite residencia a largo plazo. La visa Saisonnier es para trabajos estacionales de 3 a 6 meses, es gratuita (0€) y está limitada a 6 meses por año.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito tener un contrato antes de solicitar la visa de trabajo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Tanto para Salarié como para Saisonnier, necesitas un contrato de trabajo previo. El empleador francés debe iniciar el proceso de autorización de trabajo ante DREETS a través de la plataforma ANEF.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cambiar de empleador con visa Saisonnier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La visa Saisonnier está ligada al empleador y al contrato específico que fue aprobado. Cambiar de empleador sin una nueva autorización puede generar problemas migratorios.",
      },
    },
    {
      "@type": "Question",
      name: "¿La visa Saisonnier es gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La emisión de la visa Saisonnier tiene un costo de 0€ (gratuita). Sin embargo, puede haber costos asociados al seguro médico y otros trámites.",
      },
    },
  ],
};

export default function VisasTrabajoLayout({
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
