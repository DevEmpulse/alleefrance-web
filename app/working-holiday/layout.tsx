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
      name: "Working Holiday",
      item: "https://alleefrance.com/working-holiday",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo obtener la Visa Working Holiday Francia",
  description:
    "Guía paso a paso para solicitar tu visa Working Holiday y vivir en Francia hasta 12 meses.",
  totalTime: "P8W",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "EUR",
    value: "3000",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Verificar requisitos",
      text: "Confirma que cumples con edad (18-30/35), nacionalidad elegible y no haber tenido WH Francia antes.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Reunir documentación",
      text: "Prepara pasaporte vigente, antecedentes penales apostillados, CV y carta de motivación en francés.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Contratar seguro de viaje",
      text: "Adquiere seguro médico internacional de 12 meses con hospitalización y repatriación.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Demostrar fondos",
      text: "Presenta extractos bancarios con 2.500-3.000€ y pasaje de regreso o fondos equivalentes.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Agendar cita consular",
      text: "Crea cuenta en France-Visas, completa formulario y reserva turno en el consulado.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Presentar solicitud",
      text: "Acude a la cita con documentos originales y copias. Espera aprobación (15 días aprox).",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la visa Working Holiday para Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La visa Working Holiday es un permiso de larga estadía que permite a jóvenes extranjeros residir legalmente en Francia por un período máximo de 12 meses. Durante ese tiempo, puedes trabajar de forma temporal para financiar tu estancia y vivir una experiencia cultural.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el límite de edad para aplicar a Working Holiday Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos, el rango de edad es de 18 a 30 años inclusive al momento de la solicitud. Sin embargo, algunos convenios permiten aplicar hasta los 35 años, dependiendo del país de origen.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dinero necesito demostrar para Working Holiday Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El consulado exige demostrar fondos suficientes para cubrir los primeros meses en Francia. El monto suele variar entre 2.500 y 3.000 euros, además de un pasaje de regreso o fondos adicionales para adquirirlo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es obligatorio el seguro de viaje para Working Holiday?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El seguro es un requisito indispensable. Debe cubrir toda la duración de la visa (12 meses) e incluir atención médica, hospitalización y repatriación sanitaria.",
      },
    },
    {
      "@type": "Question",
      name: "¿La visa Working Holiday Francia se puede renovar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Una vez finalizados los 12 meses, la visa expira automáticamente y no es renovable. Para permanecer en Francia, es necesario cambiar de estatus migratorio si se cumplen los requisitos legales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los argentinos tienen cupo para Working Holiday Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A diferencia de otros países, Francia no establece un cupo anual limitado para ciudadanos argentinos. Se puede solicitar durante todo el año, siempre que se cumplan los requisitos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos cupos hay para chilenos en Working Holiday Francia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para ciudadanos chilenos, la visa Working Holiday en Francia se limita a 400 cupos anuales. Una vez que se agotan, no se aceptan nuevas solicitudes hasta el próximo ciclo.",
      },
    },
  ],
};

export default function WorkingHolidayLayout({
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
