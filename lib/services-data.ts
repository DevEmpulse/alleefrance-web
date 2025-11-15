export type PersonaId =
  | "students"
  | "workers"
  | "families"
  | "settled"
  | "general";

export type IconName =
  | "MessageCircle"
  | "FileText"
  | "Plane"
  | "Shield"
  | "Heart"
  | "Flag"
  | "GraduationCap"
  | "Users"
  | "Calculator"
  | "CheckCircle"
  | "Briefcase"
  | "Languages"
  | "HeartPulse";

export type Persona = {
  id: PersonaId;
  label: string;
  helper: string;
};

export type ServiceCard = {
  id: number;
  icon: IconName;
  title: string;
  description: string;
  details: string[];
  price: string;
  duration: string;
  link: string;
  personas: PersonaId[];
};

export const personas: Persona[] = [
  {
    id: "students",
    label: "Estudiantes",
    helper: "Admisiones, visas y llegada académica",
  },
  {
    id: "workers",
    label: "Trabajadores",
    helper: "Empleo, permisos y emprendimiento",
  },
  {
    id: "families",
    label: "Familias",
    helper: "Reagrupación y estabilidad familiar",
  },
  {
    id: "settled",
    label: "Ya estoy en Francia",
    helper: "Regulariza y mantén tu estatus",
  },
  {
    id: "general",
    label: "Servicios Generales",
    helper: "Apoyos transversales para todos",
  },
];

export const services: ServiceCard[] = [
  {
    id: 1,
    icon: "MessageCircle",
    title: "Asesorías Personalizadas",
    description:
      "Resuelve dudas específicas sobre migración en Francia con nuestros expertos.",
    details: [
      "Asesoría express (30 min): Dudas específicas - 30€",
      "Asesoría completa (1h): Revisión integral con resumen escrito - 50€",
    ],
    price: "Desde 30€",
    duration: "30 min - 1 hora",
    link: "/#contacto",
    personas: ["students", "workers", "families", "settled", "general"],
  },
  {
    id: 2,
    icon: "FileText",
    title: "Autorización de Trabajo",
    description: "Gestión completa de autorización de trabajo ante DREETS.",
    details: [
      "Publicación en France Travail",
      "Trámite ANEF ante DREETS",
      "Comunicación con empleador y trabajador",
      "Dossier listo para embajada",
    ],
    price: "150€",
    duration: "2-4 semanas",
    link: "/#contacto",
    personas: ["workers", "settled"],
  },
  {
    id: 3,
    icon: "Plane",
    title: "Visa Salarié/Saisonnier",
    description: "Acompañamiento completo para visa de trabajo en Francia.",
    details: [
      "Gestión integral en Francia y país de origen",
      "Autorización de trabajo",
      "Turno embajada",
      "Preparación de dossier completo",
      "Cartas y CV profesionales",
      "Estrategia para demostrar experiencia",
    ],
    price: "250€",
    duration: "4-8 semanas",
    link: "/servicios/visas-trabajo",
    personas: ["workers"],
  },
  {
    id: 4,
    icon: "Shield",
    title: "Seguros de Viaje",
    description:
      "Coberturas internacionales para visado en Francia o vacaciones.",
    details: [
      "Asesoría personalizada",
      "Selección de póliza adecuada",
      "Coberturas para visado",
      "Seguros para vacaciones internacionales",
    ],
    price: "Variable",
    duration: "Inmediato",
    link: "/#contacto",
    personas: ["students", "families", "general"],
  },
  {
    id: 5,
    icon: "Heart",
    title: "Visa Vie Privée et Familiale",
    description: "Residencia por vida privada y familiar en Francia.",
    details: [
      "Asesoría completa (no PACS)",
      "Preparación de dossier",
      "Acompañamiento en prefectura",
      "Seguimiento del proceso",
    ],
    price: "250€",
    duration: "4-6 semanas",
    link: "/#contacto",
    personas: ["families"],
  },
  {
    id: 6,
    icon: "Flag",
    title: "Nacionalización Francesa",
    description: "Proceso completo para obtener la nacionalidad francesa.",
    details: [
      "Revisión de requisitos",
      "Preparación de documentos (actas, casier, traducciones)",
      "Simulación de entrevista",
      "Acompañamiento completo",
    ],
    price: "500€",
    duration: "8-12 semanas",
    link: "/#contacto",
    personas: ["settled"],
  },
  {
    id: 7,
    icon: "GraduationCap",
    title: "Visa de Estudiante",
    description:
      "Campus France e inscripción académica para estudiar en Francia.",
    details: [
      "Proceso Campus France",
      "Inscripción académica",
      "Preparación de dossier para embajada",
      "Estrategia de recursos económicos",
      "Búsqueda de alojamiento",
    ],
    price: "250€",
    duration: "4-8 semanas",
    link: "/servicios/visa-etudiant",
    personas: ["students"],
  },
  {
    id: 8,
    icon: "Users",
    title: "Reagrupación Familiar",
    description:
      "Reúne a tu familia en Francia con todos los trámites necesarios.",
    details: [
      "Expediente ante OFII/prefectura",
      "Asesoría sobre vivienda y recursos",
      "Estrategia documental",
      "Acompañamiento completo",
    ],
    price: "350€",
    duration: "6-10 semanas",
    link: "/#contacto",
    personas: ["families"],
  },
  {
    id: 9,
    icon: "Calculator",
    title: "Declaración de Impuestos",
    description: "Llenado completo de tu declaración de impuestos en Francia.",
    details: [
      "Llenado completo de declaración",
      "Asesoría sobre deducciones",
      "Acompañamiento en notificaciones",
      "Optimización fiscal",
    ],
    price: "50€",
    duration: "1-2 semanas",
    link: "/#contacto",
    personas: ["workers", "settled"],
  },
  {
    id: 10,
    icon: "CheckCircle",
    title: "Validación de Visa",
    description: "Validación en plataforma OFII al llegar a Francia.",
    details: [
      "Validación en plataforma OFII",
      "Regularización de estancia",
      "Asesoría post-llegada",
    ],
    price: "15€",
    duration: "Inmediato",
    link: "/#contacto",
    personas: ["students", "workers", "settled"],
  },
  {
    id: 11,
    icon: "FileText",
    title: "Titres de Séjour",
    description: "Renovación y obtención de permisos de residencia en Francia.",
    details: [
      "Salarié: 250€",
      "Saisonnier: 150€",
      "Étudiant: 150€",
      "Incluye asesoría y preparación de dossier",
      "Acompañamiento en prefectura",
    ],
    price: "Desde 150€",
    duration: "3-6 semanas",
    link: "/#contacto",
    personas: ["students", "workers", "settled"],
  },
  {
    id: 12,
    icon: "Briefcase",
    title: "Visa Passeport Talent",
    description: "Para profesionales altamente cualificados y emprendedores.",
    details: [
      "Salarié qualifié",
      "Carte bleue europea",
      "Jeune empresa innovante",
      "Evaluación de elegibilidad",
      "Preparación de contratos/recursos",
      "Dossier ANEF completo",
      "Acompañamiento en prefectura/consulado",
    ],
    price: "250€",
    duration: "4-8 semanas",
    link: "/#contacto",
    personas: ["workers"],
  },
  {
    id: 13,
    icon: "Briefcase",
    title: "Profession Libérale",
    description:
      "Cambio o solicitud de estatus para trabajar como independiente.",
    details: [
      "Definición de actividad (APE)",
      "Alta en URSSAF/INPI",
      "Plan de actividad e ingresos",
      "Armado de dossier",
      "Acompañamiento completo",
    ],
    price: "250€",
    duration: "4-6 semanas",
    link: "/#contacto",
    personas: ["workers", "settled"],
  },
  {
    id: 14,
    icon: "Languages",
    title: "Traducciones Oficiales",
    description: "Traducciones juradas aceptadas por autoridades francesas.",
    details: [
      "Traducciones juradas oficiales",
      "Aceptadas por prefecturas",
      "Válidas para embajadas",
      "Reconocidas por universidades",
      "Cotización según páginas/palabras",
    ],
    price: "Variable",
    duration: "3-7 días",
    link: "/#contacto",
    personas: ["students", "families", "general"],
  },
  {
    id: 15,
    icon: "HeartPulse",
    title: "Seguridad Social",
    description: "Trámite completo para obtener tu carte vitale.",
    details: [
      "Formularios CERFA",
      "Subida de documentos",
      "Seguimiento del proceso",
      "Acompañamiento hasta obtención",
    ],
    price: "50€",
    duration: "2-4 semanas",
    link: "/#contacto",
    personas: ["students", "workers", "families", "settled"],
  },
];
