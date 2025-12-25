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
      heroTitle: "Visa Working Holiday Francia para Latinoamérica",
      heroSubtitle:
        "Resumen general del programa francés VVT, los pasos y documentos que compartimos con postulantes de toda la región. Usa esta página como punto de partida antes de ir a la guía específica de tu país.",
      quotaText: "Cupos combinados estimados: 3.000+ plazas",
      requisitos: [
        "Tener entre 18 y 35 años al momento de solicitar la visa.",
        "Pasaporte vigente durante todo el período de estadía en Francia.",
        "Fondos disponibles para la manutención inicial y pasaje de regreso.",
        "Seguro médico internacional con cobertura mínima de €30.000 por 12 meses.",
        "Motivación principal: turismo y descubrimiento cultural; sin familiares dependientes.",
      ],
      notas: [
        "Cada consulado define su propio calendario y documentación adicional.",
        "Recomendamos preparar traducciones y apostillas con al menos 2 meses de margen.",
      ],
      keyDates: [
        "Publicación de cupos: entre enero y marzo de cada año.",
        "Turnos consulares: se agotan en minutos; practica el llenado antes del día de apertura.",
        "Viajes: podés ingresar a Francia dentro de los 12 meses posteriores a la aprobación.",
      ],
      insuranceNote:
        "Ofrecemos el seguro oficial exigido por todos los consulados franceses de Latinoamérica, con emisión inmediata y certificado en francés listo para adjuntar a tu dossier.",
      seoTitle: "Visa Working Holiday Francia para Latinoamérica",
      seoDescription:
        "Información centralizada sobre la Visa Working Holiday Francia para jóvenes latinoamericanos. Requisitos, cupos y pasos clave para postularse.",
    },
    ar: {
      code: "ar",
      name: "Argentina",
      label: "AR",
      flagSrc: "/bandera-arg.png",
      heroTitle:
        "Tu guía completa para la Visa Working Holiday Francia (Argentina)",
      heroSubtitle:
        "Estrategia y acompañamiento adaptado a los cupos argentinos, con foco en reservas de turno, armado de dossier y checklist financiero avalado por el consulado en Buenos Aires.",
      quotaText: "1.000 plazas estimadas para Argentina",
      requisitos: [
        "Pasaporte argentino con vigencia mínima de 18 meses desde el viaje.",
        "Acreditar al menos €2.500 en cuenta o certificado bancario argentino.",
        "Seguro médico internacional emitido antes de la cita consular.",
        "Certificados de antecedentes penales con apostilla de La Haya.",
        "Formulario OFII y carta de motivación redactada en francés.",
      ],
      notas: [
        "Podés enviar el dossier en persona en el Consulado de Francia en Buenos Aires.",
        "El turno suele abrir en un horario específico; practicamos la carga en conjunto.",
      ],
      keyDates: [
        "Apertura estimada: primera quincena de marzo.",
        "Entrega de documentos impresos: 7 a 10 días después del turno.",
        "Ingreso recomendado a Francia: dentro de los 6 meses posteriores a la aprobación.",
      ],
      insuranceNote:
        "Emitimos el seguro anual requerido por el Consulado de Francia en Buenos Aires, con cobertura Schengen y carta en francés que presentás junto al OFII.",
      seoTitle: "Visa Working Holiday Francia para argentinos",
      seoDescription:
        "Requisitos, cupos y pasos para obtener la Working Holiday Francia desde Argentina con asesoría personalizada.",
    },
    cl: {
      code: "cl",
      name: "Chile",
      label: "CL",
      flagSrc: "/bandera-chile.png",
      heroTitle:
        "Visa Working Holiday Francia para chilenos: calendario y requisitos 2025",
      heroSubtitle:
        "Organizamos tu postulación desde Chile con dossier digitalizado, validaciones bancarias y estrategias para conseguir turno en Santiago.",
      quotaText: "400 plazas estimadas para Chile",
      requisitos: [
        "Pasaporte chileno válido al menos 15 meses desde el viaje.",
        "Extractos bancarios demostrando CLP equivalentes a €2.500.",
        "Seguro médico con cobertura mundial y asistencia en francés o inglés.",
        "Antecedentes del Registro Civil apostillados.",
        "Reserva de vuelo o carta que demuestre fondos para comprarlo.",
      ],
      notas: [
        "El consulado solicita traducciones simples al francés para cartas y CV.",
        "Muchos cupos se liberan en tandas; monitoreamos alertas y avisos oficiales.",
      ],
      keyDates: [
        "Aperturas escalonadas entre febrero y abril.",
        "Turnos virtuales vía correo electrónico y validación posterior.",
        "Entrega de pasaporte con visa: 5 días hábiles tras el turno.",
      ],
      insuranceNote:
        "Te entregamos la póliza en español y francés que exige el consulado en Santiago, con cobertura de hospitalización, repatriación y asistencia 24/7.",
      seoTitle: "Working Holiday Francia para chilenos",
      seoDescription:
        "Todo sobre la Working Holiday Francia para ciudadanos chilenos: requisitos oficiales, cupos y cronograma 2025.",
    },
    uy: {
      code: "uy",
      name: "Uruguay",
      label: "UY",
      flagSrc: "/bandera-uruguay.png",
      flagScale: 1.12,
      heroTitle:
        "Working Holiday Francia para uruguayos con cupos reducidos",
      heroSubtitle:
        "Te ayudamos a asegurar un turno en Montevideo, validar tus fondos en dólares y presentar el expediente en tiempo récord.",
      quotaText: "90 plazas estimadas para Uruguay",
      requisitos: [
        "Pasaporte uruguayo vigente durante la totalidad del viaje.",
        "Certificación bancaria en USD o EUR emitida por la institución financiera.",
        "Seguro médico internacional que cubra emergencias y repatriación.",
        "Certificado de domicilio y antecedentes penales apostillados.",
        "Formulario consular y carta de motivación adaptada al perfil uruguayo.",
      ],
      notas: [
        "Los cupos se completan en minutos; recomendamos simulacros previos.",
        "Puedes postular con turno presencial o por valija diplomática si resides en el interior.",
      ],
      keyDates: [
        "Turnos publicados una vez al año, generalmente en abril.",
        "Entrega del dossier: 48 horas después de obtener el turno online.",
        "Retiro de pasaporte con visa: una semana luego de la cita.",
      ],
      insuranceNote:
        "Proveemos el seguro anual en euros que pide el consulado en Montevideo, con certificado físico y digital para adjuntar dentro de las 48 horas posteriores al turno.",
      seoTitle: "Working Holiday Francia para Uruguay",
      seoDescription:
        "Guía actualizada de Working Holiday Francia para uruguayos: documentación requerida, cupos y recomendaciones de postulación.",
    },
    mx: {
      code: "mx",
      name: "México",
      label: "MX",
      flagSrc: "/bandera-mex.png",
      heroTitle: "Working Holiday Francia desde México paso a paso",
      heroSubtitle:
        "Coordinamos tu solicitud con la red consular francesa en Ciudad de México: checklist financiero, traducciones y envío digital del dossier.",
      quotaText: "300 plazas estimadas para México",
      requisitos: [
        "Pasaporte mexicano válido al menos 18 meses.",
        "Estados de cuenta con saldo promedio equivalente a €2.500.",
        "Seguro médico y de repatriación por los 12 meses de estadía.",
        "Carta responsiva traducida y firmada.",
        "Constancia de estudios o título profesional (opcional pero recomendado).",
      ],
      notas: [
        "El proceso incluye registro en France-Visas y toma de datos biométricos.",
        "Preparamos plantillas para la carta de motivación y CV en francés.",
      ],
      keyDates: [
        "Apertura habitual: febrero.",
        "Entrega del dossier físico en VFS: 3 a 5 días luego del turno.",
        "Respuesta estimada: 2 a 4 semanas tras la cita.",
      ],
      insuranceNote:
        "Nuestra póliza cumple con los requisitos de France-Visas y VFS México, incluye carta en francés y certificado digital para subirlo a tu expediente.",
      seoTitle: "Visa Working Holiday Francia para mexicanos",
      seoDescription:
        "Checklist actualizado para postular a la Working Holiday Francia desde México, con fechas y cupos estimados.",
    },
    ec: {
      code: "ec",
      name: "Ecuador",
      label: "EC",
      flagSrc: "/bandera-ecuador.png",
      flagScale: 1.12,
      heroTitle: "Visa Working Holiday Francia para ecuatorianos",
      heroSubtitle:
        "Guiamos la preparación de documentos en Quito o Guayaquil, con foco en fondos certificados y antecedentes con apostilla.",
      quotaText: "300 plazas estimadas para Ecuador",
      requisitos: [
        "Pasaporte ecuatoriano válido durante todo el periodo en Francia.",
        "Extractos bancarios sellados por tu banco + carta de solvencia.",
        "Seguro integral con asistencia médica ilimitada.",
        "Antecedentes penales del Ministerio del Interior apostillados.",
        "Reserva aérea o fondos equivalentes para la compra del pasaje.",
      ],
      notas: [
        "El consulado puede pedir entrevista en francés; practicamos respuestas frecuentes.",
        "Documentos emitidos en dólares deben acompañarse de conversión a euros.",
      ],
      keyDates: [
        "Turnos liberados hacia marzo-abril.",
        "Entrega de dossier impreso: mismo día del turno presencial.",
        "Recepción del pasaporte visado: 10 días hábiles.",
      ],
      insuranceNote:
        "Emitimos tu seguro con cobertura ilimitada en euros y carta en francés que solicitan las oficinas de Quito y Guayaquil, listo para imprimir y adjuntar al dossier.",
      seoTitle: "Working Holiday Francia desde Ecuador",
      seoDescription:
        "Todo lo necesario para ecuatorianos que aplican a la Working Holiday Francia: papeles, fechas y tips consulares.",
    },
    co: {
      code: "co",
      name: "Colombia",
      label: "CO",
      flagSrc: "/bandera-colombia.png",
      flagScale: 1.12,
      heroTitle: "Working Holiday Francia para colombianos",
      heroSubtitle:
        "Armamos tu aplicación con soporte en Bogotá y Medellín: fondos certificados, France-Visas y simulación de entrevista.",
      quotaText: "400 plazas estimadas para Colombia",
      requisitos: [
        "Pasaporte colombiano con vigencia mínima de 18 meses.",
        "Extractos bancarios certificados (cuentas en COP o USD).",
        "Seguro integral con cobertura mínima de €30.000.",
        "Carta de antecedentes de la Policía Nacional apostillada.",
        "Reserva de alojamiento temporal y plan de viaje resumido.",
      ],
      notas: [
        "Si resides fuera de Bogotá, planificamos el envío por mensajería autorizada.",
        "Sugerimos demostrar fondos superiores a lo mínimo para dar solidez al caso.",
      ],
      keyDates: [
        "Aperturas entre febrero y marzo.",
        "Toma biométrica y entrega del dossier en la Alianza Francesa.",
        "Resultado dentro de las 3 semanas posteriores.",
      ],
      insuranceNote:
        "Gestionamos el seguro con certificado en francés y comprobante en euros que pide la Alianza Francesa en Bogotá/Medellín, válido por los 12 meses del programa.",
      seoTitle: "Visa Working Holiday Francia para Colombia",
      seoDescription:
        "Aprende cómo postular a la Working Holiday Francia desde Colombia: requisitos, cupos y tiempos oficiales.",
    },
    pe: {
      code: "pe",
      name: "Perú",
      label: "PE",
      flagSrc: "/bandera-peru.png",
      flagScale: 1.12,
      heroTitle: "Working Holiday Francia desde Perú",
      heroSubtitle:
        "Checklist exclusivo para postulantes peruanos: documentación bancaria en soles, apostillas y coordinación con el consulado en Lima.",
      quotaText: "300 plazas estimadas para Perú",
      requisitos: [
        "Pasaporte peruano válido durante 12 meses desde la fecha de ingreso.",
        "Constancia bancaria con saldo equivalente a €2.500.",
        "Seguro médico internacional + asistencia en viaje.",
        "Certificado de antecedentes policiales y judiciales apostillados.",
        "Plan de viaje con ciudades y primera dirección en Francia.",
      ],
      notas: [
        "La cita se agenda vía correo; respondemos con el dossier final listo.",
        "La carta de motivación debe estar firmada y escaneada en PDF.",
      ],
      keyDates: [
        "Aperturas estimadas en marzo.",
        "Entrega del dossier en la Embajada de Francia en Lima.",
        "Resultados publicados 15 días luego del turno.",
      ],
      insuranceNote:
        "Nuestra póliza certificada en francés cumple la exigencia del consulado en Lima e incluye carta personalizada con tus fechas exactas de estadía.",
      seoTitle: "Working Holiday Francia para Perú",
      seoDescription:
        "Guía actualizada para peruanos interesados en la Working Holiday Francia: requisitos detallados y consejos prácticos.",
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
