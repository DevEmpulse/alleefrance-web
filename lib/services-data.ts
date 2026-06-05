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

export const getPersonas = (t: any): Persona[] => [
  { id: "students", label: t("personas.students.label"), helper: t("personas.students.helper") },
  { id: "workers", label: t("personas.workers.label"), helper: t("personas.workers.helper") },
  { id: "families", label: t("personas.families.label"), helper: t("personas.families.helper") },
  { id: "settled", label: t("personas.settled.label"), helper: t("personas.settled.helper") },
  { id: "general", label: t("personas.general.label"), helper: t("personas.general.helper") },
];

export const getServices = (t: any): ServiceCard[] => [
  {
    id: 1,
    icon: "MessageCircle",
    title: t("items.service_1.title"),
    description: t("items.service_1.description"),
    details: [
      t("items.service_1.details.0"),
      t("items.service_1.details.1")
    ],
    price: t("items.service_1.price"),
    duration: t("items.service_1.duration"),
    link: "/#contacto",
    personas: ["students","workers","families","settled","general"]
  },
  {
    id: 2,
    icon: "FileText",
    title: t("items.service_2.title"),
    description: t("items.service_2.description"),
    details: [
      t("items.service_2.details.0"),
      t("items.service_2.details.1"),
      t("items.service_2.details.2"),
      t("items.service_2.details.3")
    ],
    price: t("items.service_2.price"),
    duration: t("items.service_2.duration"),
    link: "/#contacto",
    personas: ["workers","settled"]
  },
  {
    id: 3,
    icon: "Plane",
    title: t("items.service_3.title"),
    description: t("items.service_3.description"),
    details: [
      t("items.service_3.details.0"),
      t("items.service_3.details.1"),
      t("items.service_3.details.2"),
      t("items.service_3.details.3"),
      t("items.service_3.details.4"),
      t("items.service_3.details.5")
    ],
    price: t("items.service_3.price"),
    duration: t("items.service_3.duration"),
    link: "/servicios/visas-trabajo",
    personas: ["workers"]
  },
  {
    id: 4,
    icon: "Shield",
    title: t("items.service_4.title"),
    description: t("items.service_4.description"),
    details: [
      t("items.service_4.details.0"),
      t("items.service_4.details.1"),
      t("items.service_4.details.2"),
      t("items.service_4.details.3")
    ],
    price: t("items.service_4.price"),
    duration: t("items.service_4.duration"),
    link: "https://www.aseguratuviaje.com/afiliados/alleefrancelyon",
    personas: ["students","families","general"]
  },
  {
    id: 5,
    icon: "Heart",
    title: t("items.service_5.title"),
    description: t("items.service_5.description"),
    details: [
      t("items.service_5.details.0"),
      t("items.service_5.details.1"),
      t("items.service_5.details.2"),
      t("items.service_5.details.3")
    ],
    price: t("items.service_5.price"),
    duration: t("items.service_5.duration"),
    link: "/#contacto",
    personas: ["families"]
  },
  {
    id: 6,
    icon: "Flag",
    title: t("items.service_6.title"),
    description: t("items.service_6.description"),
    details: [
      t("items.service_6.details.0"),
      t("items.service_6.details.1"),
      t("items.service_6.details.2"),
      t("items.service_6.details.3")
    ],
    price: t("items.service_6.price"),
    duration: t("items.service_6.duration"),
    link: "/#contacto",
    personas: ["settled"]
  },
  {
    id: 7,
    icon: "GraduationCap",
    title: t("items.service_7.title"),
    description: t("items.service_7.description"),
    details: [
      t("items.service_7.details.0"),
      t("items.service_7.details.1"),
      t("items.service_7.details.2"),
      t("items.service_7.details.3"),
      t("items.service_7.details.4")
    ],
    price: t("items.service_7.price"),
    duration: t("items.service_7.duration"),
    link: "/servicios/visa-etudiant",
    personas: ["students"]
  },
  {
    id: 8,
    icon: "Users",
    title: t("items.service_8.title"),
    description: t("items.service_8.description"),
    details: [
      t("items.service_8.details.0"),
      t("items.service_8.details.1"),
      t("items.service_8.details.2"),
      t("items.service_8.details.3")
    ],
    price: t("items.service_8.price"),
    duration: t("items.service_8.duration"),
    link: "/#contacto",
    personas: ["families"]
  },
  {
    id: 9,
    icon: "Calculator",
    title: t("items.service_9.title"),
    description: t("items.service_9.description"),
    details: [
      t("items.service_9.details.0"),
      t("items.service_9.details.1"),
      t("items.service_9.details.2"),
      t("items.service_9.details.3")
    ],
    price: t("items.service_9.price"),
    duration: t("items.service_9.duration"),
    link: "/#contacto",
    personas: ["workers","settled"]
  },
  {
    id: 10,
    icon: "CheckCircle",
    title: t("items.service_10.title"),
    description: t("items.service_10.description"),
    details: [
      t("items.service_10.details.0"),
      t("items.service_10.details.1"),
      t("items.service_10.details.2")
    ],
    price: t("items.service_10.price"),
    duration: t("items.service_10.duration"),
    link: "/#contacto",
    personas: ["students","workers","settled"]
  },
  {
    id: 11,
    icon: "FileText",
    title: t("items.service_11.title"),
    description: t("items.service_11.description"),
    details: [
      t("items.service_11.details.0"),
      t("items.service_11.details.1"),
      t("items.service_11.details.2"),
      t("items.service_11.details.3"),
      t("items.service_11.details.4")
    ],
    price: t("items.service_11.price"),
    duration: t("items.service_11.duration"),
    link: "/#contacto",
    personas: ["students","workers","settled"]
  },
  {
    id: 12,
    icon: "Briefcase",
    title: t("items.service_12.title"),
    description: t("items.service_12.description"),
    details: [
      t("items.service_12.details.0"),
      t("items.service_12.details.1"),
      t("items.service_12.details.2"),
      t("items.service_12.details.3"),
      t("items.service_12.details.4"),
      t("items.service_12.details.5"),
      t("items.service_12.details.6")
    ],
    price: t("items.service_12.price"),
    duration: t("items.service_12.duration"),
    link: "/#contacto",
    personas: ["workers"]
  },
  {
    id: 13,
    icon: "Briefcase",
    title: t("items.service_13.title"),
    description: t("items.service_13.description"),
    details: [
      t("items.service_13.details.0"),
      t("items.service_13.details.1"),
      t("items.service_13.details.2"),
      t("items.service_13.details.3"),
      t("items.service_13.details.4")
    ],
    price: t("items.service_13.price"),
    duration: t("items.service_13.duration"),
    link: "/#contacto",
    personas: ["workers","settled"]
  },
  {
    id: 14,
    icon: "Languages",
    title: t("items.service_14.title"),
    description: t("items.service_14.description"),
    details: [
      t("items.service_14.details.0"),
      t("items.service_14.details.1"),
      t("items.service_14.details.2"),
      t("items.service_14.details.3"),
      t("items.service_14.details.4")
    ],
    price: t("items.service_14.price"),
    duration: t("items.service_14.duration"),
    link: "/#contacto",
    personas: ["students","families","general"]
  },
  {
    id: 15,
    icon: "HeartPulse",
    title: t("items.service_15.title"),
    description: t("items.service_15.description"),
    details: [
      t("items.service_15.details.0"),
      t("items.service_15.details.1"),
      t("items.service_15.details.2"),
      t("items.service_15.details.3")
    ],
    price: t("items.service_15.price"),
    duration: t("items.service_15.duration"),
    link: "/#contacto",
    personas: ["students","workers","families","settled"]
  },
];
