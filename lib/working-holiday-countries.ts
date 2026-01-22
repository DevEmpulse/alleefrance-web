export type WorkingHolidayCountryCode =
  | "ar"
  | "cl"
  | "uy"
  | "mx"
  | "ec"
  | "co"
  | "pe"
  | "global";

export interface WorkingHolidayCountryConfig {
  code: WorkingHolidayCountryCode;
  name: string;
  label: string;
  flagSrc?: string;
  flagScale?: number;
  heroTitle: string;
  heroSubtitle: string;
  quotaText?: string;
  destinations: string[];
  requisitos: string[];
  notas?: string[];
  keyDates?: string[];
  insuranceNote: string;
  seoTitle: string;
  seoDescription: string;
}

const COUNTRY_DATA: Record<WorkingHolidayCountryCode, WorkingHolidayCountryConfig> =
  {
    global: {
      code: "global",
      name: "Latinoamérica",
      label: "LATAM",
      heroTitle: "Working Holiday Global para Latinoamérica",
      heroSubtitle:
        "Resumen general del programa Working Holiday y los pasos clave para postulantes de toda la región.",
      quotaText: "Programas activos 2025/2026",
      destinations: [],
      requisitos: [
        "Tener entre 18 y 35 años según el destino.",
        "Pasaporte vigente durante toda la estadía.",
        "Fondos disponibles para la manutención inicial y pasaje de regreso.",
        "Seguro médico internacional vigente por toda la duración.",
        "No contar con antecedentes penales.",
      ],
      insuranceNote:
        "Ofrecemos el seguro exigido por consulados y programas Working Holiday con emisión inmediata y certificado para tu dossier.",
      seoTitle: "Working Holiday Francia 2025 | Requisitos, Cupos y Asesoría",
      seoDescription:
        "Guía completa Working Holiday Francia para latinoamericanos. Requisitos actualizados, cupos por país y asesoría experta. ¡Viví y trabajá en Francia!",
    },
    ar: {
      code: "ar",
      name: "Argentina",
      label: "Cupo: 1.000 (Francia) | 3.400 (Australia)",
      flagSrc: "/bandera-arg.png",
      heroTitle: "Working Holiday para Argentinos",
      heroSubtitle:
        "Accedé a más de 15 destinos oficiales. Te acompañamos en el proceso de aplicación para Francia, Australia, Nueva Zelanda y más.",
      quotaText: "Más de 15 convenios vigentes",
      destinations: [
        "Francia",
        "Australia",
        "Nueva Zelanda",
        "Alemania",
        "Irlanda",
        "Dinamarca",
        "Suecia",
        "Portugal",
        "Japón",
        "Corea del Sur",
        "Polonia",
        "Austria",
        "Hungría",
        "República Checa",
        "Noruega (Próximamente)",
      ],
      requisitos: [
        "Tener entre 18 y 30 años (algunos destinos hasta 35).",
        "Pasaporte argentino válido.",
        "Demostración de fondos (aprox. USD 2.500 - 3.000).",
        "Seguro de viaje obligatorio por 12 meses.",
        "No tener antecedentes penales.",
      ],
      insuranceNote:
        "Para argentinos, el seguro debe cubrir gastos médicos, hospitalización y repatriación por el total de la estadía (12 meses).",
      keyDates: [
        "Australia: Apertura 1 de Julio",
        "Nueva Zelanda: Septiembre (Fecha variable)",
      ],
      seoTitle: "Working Holiday Francia Argentinos 2025: Requisitos y Guía",
      seoDescription:
        "Working Holiday Francia para argentinos: sin cupo anual, requisitos, fondos necesarios y proceso completo. +500 casos exitosos. Asesoría personalizada.",
    },
    cl: {
      code: "cl",
      name: "Chile",
      label: "Cupo: 3.400 (Australia) | Ilimitado (Alemania)",
      flagSrc: "/bandera-chile.png",
      heroTitle: "Working Holiday para Chilenos",
      heroSubtitle:
        "Tu pasaporte te abre las puertas de Europa, Oceanía y Norteamérica. Aprovechá los convenios exclusivos con Canadá y Alianza del Pacífico.",
      quotaText: "18 Acuerdos vigentes",
      destinations: [
        "Australia",
        "Nueva Zelanda",
        "Canadá (IEC)",
        "Francia",
        "Alemania",
        "Irlanda",
        "Suecia",
        "Dinamarca",
        "Austria",
        "Portugal",
        "República Checa",
        "Hungría",
        "Polonia",
        "Luxemburgo",
        "Corea del Sur",
        "Japón",
        "Alianza del Pacífico (México/Col/Perú)",
      ],
      requisitos: [
        "Edad entre 18 y 30 años (Canadá/NZ/Hungría hasta 35).",
        "Pasaporte chileno vigente.",
        "Seguro médico internacional obligatorio.",
        "Ticket de regreso o fondos para comprarlo.",
      ],
      insuranceNote:
        "Chile exige cobertura completa de salud y repatriación. Sin este certificado, la visa puede ser rechazada.",
      keyDates: [
        "Canadá IEC: Rondas de invitación todo el año",
        "Nueva Zelanda: Octubre",
      ],
      seoTitle: "Working Holiday Francia Chilenos 2025: Cupos y Requisitos",
      seoDescription:
        "Working Holiday Francia para chilenos: 400 cupos anuales, requisitos, documentación y fechas de apertura. Asesoría experta para asegurar tu lugar.",
    },
    uy: {
      code: "uy",
      name: "Uruguay",
      label: "Cupo: 200 (NZ) | 500 (UK)",
      flagSrc: "/bandera-uruguay.png",
      flagScale: 1.12,
      heroTitle: "Working Holiday para Uruguayos",
      heroSubtitle:
        "Viví en el exterior con tu pasaporte uruguayo. Accedé a la exclusiva visa de Reino Unido y otros destinos top.",
      quotaText: "9 Destinos disponibles",
      destinations: [
        "Reino Unido (Youth Mobility)",
        "Australia",
        "Nueva Zelanda",
        "Francia",
        "Alemania",
        "Suecia",
        "Irlanda",
        "Países Bajos",
        "Japón",
      ],
      requisitos: [
        "Edad 18-30 años.",
        "Pasaporte uruguayo válido.",
        "Certificado de antecedentes.",
        "Seguro de viaje anual.",
      ],
      insuranceNote:
        "El seguro es obligatorio para activar tu visa al llegar a Europa u Oceanía.",
      keyDates: [
        "Nueva Zelanda: Agosto",
        "Reino Unido: Enero y Julio (Ballot)",
      ],
      seoTitle: "Working Holiday Francia Uruguayos 2025: Guía Completa",
      seoDescription:
        "Working Holiday Francia para uruguayos: requisitos, documentación y proceso paso a paso. Accedé también a Reino Unido y Australia.",
    },
    mx: {
      code: "mx",
      name: "México",
      label: "Cupo: Limitado (Canadá/Francia)",
      flagSrc: "/bandera-mex.png",
      heroTitle: "Working Holiday para Mexicanos",
      heroSubtitle:
        "Explorá opciones en Europa, Norteamérica y Asia. Tu oportunidad de vivir viajando.",
      quotaText: "6 Convenios principales",
      destinations: [
        "Canadá (IEC)",
        "Francia",
        "Nueva Zelanda",
        "Alemania",
        "Corea del Sur",
        "Alianza del Pacífico (Chile/Col/Perú)",
      ],
      requisitos: [
        "Edad 18-29/30 años.",
        "Pasaporte mexicano.",
        "Comprobante de solvencia económica.",
        "Seguro de gastos médicos mayores.",
      ],
      insuranceNote:
        "Requisito excluyente: Póliza de seguro internacional con repatriación sanitaria.",
      keyDates: ["Canadá IEC: Apertura a inicio de año", "Francia: Todo el año"],
      seoTitle: "Working Holiday Francia Mexicanos 2025: Requisitos y Proceso",
      seoDescription:
        "Working Holiday Francia para mexicanos: requisitos actualizados, documentación y asesoría profesional. Tu oportunidad de vivir en Francia.",
    },
    ec: {
      code: "ec",
      name: "Ecuador",
      label: "Cupo: 100 (Australia)",
      flagSrc: "/bandera-ecuador.png",
      flagScale: 1.12,
      heroTitle: "Working Holiday para Ecuatorianos",
      heroSubtitle:
        "Australia y Francia abren sus puertas. Prepará tu aplicación con expertos.",
      quotaText: "2 Destinos principales",
      destinations: ["Australia", "Francia"],
      requisitos: [
        "Edad 18-30 años.",
        "Estudios superiores en curso o terminados.",
        "Nivel de inglés (Australia).",
        "Carta de respaldo gubernamental (Australia).",
      ],
      insuranceNote:
        "Seguro de salud internacional obligatorio para la aplicación consular.",
      keyDates: ["Australia: Apertura 1 de Julio"],
      seoTitle: "Working Holiday Francia Ecuatorianos 2025: Guía y Requisitos",
      seoDescription:
        "Working Holiday Francia y Australia para ecuatorianos: requisitos específicos, nivel de inglés y proceso de aplicación con expertos.",
    },
    co: {
      code: "co",
      name: "Colombia",
      label: "Cupo: 400 (Francia)",
      flagSrc: "/bandera-colombia.png",
      flagScale: 1.12,
      heroTitle: "Working Holiday para Colombianos",
      heroSubtitle:
        "Francia es tu puerta de entrada a Europa. Aprovechá también la Alianza del Pacífico.",
      quotaText: "4 Destinos principales",
      destinations: ["Francia", "Chile", "México", "Perú"],
      requisitos: [
        "Edad 18-30 años.",
        "Pasaporte colombiano vigente.",
        "Certificado médico y de antecedentes.",
        "Tiquete de salida o fondos suficientes.",
      ],
      insuranceNote:
        "Francia exige certificado de seguro médico por 1 año para aprobar la visa.",
      keyDates: ["Francia: Se renuevan cupos en Enero"],
      seoTitle: "Working Holiday Francia Colombianos 2025: Cupos y Requisitos",
      seoDescription:
        "Working Holiday Francia para colombianos: 400 cupos, requisitos, fechas de apertura y acompañamiento profesional. Tu puerta a Europa.",
    },
    pe: {
      code: "pe",
      name: "Perú",
      label: "Cupo: 1.500 (Australia)",
      flagSrc: "/bandera-peru.png",
      flagScale: 1.12,
      heroTitle: "Working Holiday para Peruanos",
      heroSubtitle:
        "Australia te espera con 1.500 cupos. Descubrí también tus opciones en Europa.",
      quotaText: "8 Destinos disponibles",
      destinations: [
        "Australia",
        "Francia",
        "Nueva Zelanda",
        "Portugal",
        "República Checa",
        "Hungría",
        "Polonia",
        "Alianza del Pacífico",
      ],
      requisitos: [
        "Edad 18-30 años.",
        "Estudios terciarios/universitarios (Excluyente para Australia/NZ).",
        "Nivel de inglés funcional (Australia).",
        "Seguro médico internacional.",
      ],
      insuranceNote:
        "Tu seguro debe cubrir los 365 días de tu visa, sin excepciones.",
      keyDates: [
        "Australia: Apertura 1 de Julio",
        "Nueva Zelanda: Fecha variable",
      ],
      seoTitle: "Working Holiday Francia Peruanos 2025: Requisitos y Guía",
      seoDescription:
        "Working Holiday Francia y Australia para peruanos: 1.500 cupos Australia, requisitos y proceso completo con asesoría experta.",
    },
  };

export const WORKING_HOLIDAY_COUNTRIES = COUNTRY_DATA;

export const WORKING_HOLIDAY_COUNTRY_CODES = Object.keys(
  COUNTRY_DATA
) as WorkingHolidayCountryCode[];

export const PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES =
  WORKING_HOLIDAY_COUNTRY_CODES.filter((code) => code !== "global");

export const DEFAULT_WORKING_HOLIDAY_COUNTRY_CODE: WorkingHolidayCountryCode =
  "ar";

export function isWorkingHolidayCountryCode(
  value: string
): value is WorkingHolidayCountryCode {
  return (WORKING_HOLIDAY_COUNTRY_CODES as string[]).includes(value);
}

export function normalizeWorkingHolidayCountryCode(
  value?: string | null
): WorkingHolidayCountryCode | undefined {
  if (!value) return undefined;
  const normalized = value.toLowerCase();
  return isWorkingHolidayCountryCode(normalized)
    ? (normalized as WorkingHolidayCountryCode)
    : undefined;
}

export function getWorkingHolidayCountryConfig(code?: string | null) {
  const normalized = normalizeWorkingHolidayCountryCode(code);
  return normalized ? WORKING_HOLIDAY_COUNTRIES[normalized] : undefined;
}
