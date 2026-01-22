import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Estudiante Francia 2026: Campus France y Proceso Completo",
  description:
    "Guía completa para obtener tu visa de estudiante en Francia. Proceso Campus France, requisitos económicos, inscripción universitaria y acompañamiento experto para latinoamericanos.",
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
  openGraph: {
    title: "Visa Estudiante Francia: Campus France y Proceso | Allée France",
    description:
      "Todo sobre la visa de estudiante para Francia. Campus France, requisitos y asesoría especializada.",
    url: "https://alleefrance.com/servicios/visa-etudiant",
    type: "website",
    images: [
      {
        url: "/student-studying-in-paris.jpg",
        width: 1200,
        height: 630,
        alt: "Visa Estudiante Francia - Allée France",
      },
    ],
  },
  alternates: {
    canonical: "https://alleefrance.com/servicios/visa-etudiant",
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
      name: "Visa Estudiante",
      item: "https://alleefrance.com/servicios/visa-etudiant",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo obtener una Visa de Estudiante para Francia",
  description:
    "Guía paso a paso para obtener tu visa de estudiante y estudiar en Francia.",
  totalTime: "P16W",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "EUR",
    value: "250",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Obtener aceptación académica",
      text: "Consigue la carta de aceptación o preinscripción de tu escuela o universidad en Francia.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Completar proceso Campus France",
      text: "Crea tu cuenta en Etudes en France, completa tu dossier académico y realiza la entrevista.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Preparar documentación económica",
      text: "Demuestra recursos de al menos 615€ por mes (7.380€ anuales) mediante extractos bancarios o sponsor.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Solicitar visa en consulado",
      text: "Llena el formulario en France-Visas, agenda cita y presenta tu expediente completo.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Validar visa al llegar",
      text: "Valida tu VLS-TS online y regístrate en la sécurité sociale estudiantil.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto dinero necesito demostrar para la visa de estudiante Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Como mínimo, necesitas demostrar 615 euros por mes de estadía, o su equivalente anual. Para un año completo, esto representa aproximadamente 7.380 euros. Puedes combinar varias fuentes: cuenta propia, sponsor familiar, becas, contratos de trabajo futuro.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo trabajar con visa de estudiante en Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la visa de estudiante te permite trabajar hasta 964 horas por año (equivalente a aproximadamente 60% de tiempo completo). Esto te permite complementar tus ingresos durante tus estudios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es obligatorio el proceso de Campus France?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la validación de Campus France es obligatoria para la mayoría de países de América Latina antes de solicitar la visa de estudiante. Campus France evalúa tu proyecto académico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito nivel de francés para la visa de estudiante?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tipo de formación. Para cursos de francés, generalmente no se exige nivel previo. Para licenciaturas o másters, generalmente se requiere nivel B2 (DELF, TCF) o equivalente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cambiar de visa estudiante a visa de trabajo en Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, en algunos casos es posible cambiar de estatus después de terminar tus estudios. Esto depende del diploma obtenido, tu proyecto profesional y la coherencia con tus estudios. Por ejemplo, puedes pasar a visa Salarié si encuentras un empleo que corresponda a tu perfil.",
      },
    },
  ],
};

export default function VisaEtudiantLayout({
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
