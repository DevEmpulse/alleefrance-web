import {
  PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES,
  WORKING_HOLIDAY_COUNTRIES,
} from "@/lib/working-holiday-countries";
import {
  Briefcase,
  Compass,
  Globe,
  Heart,
  MapPin,
  Plane,
  Shield,
  ShieldCheck,
} from "lucide-react";

export const beneficios = [
  {
    icon: Plane,
    title: "Viví un año en el destino elegido",
    description:
      "Residí hasta 12 meses con libertad para trabajar, viajar y sumar experiencia internacional.",
  },
  {
    icon: Briefcase,
    title: "Trabajar legalmente",
    description:
      "Podés realizar empleos temporales para financiar tu estadía y sumar experiencia internacional en tu CV.",
  },
  {
    icon: Globe,
    title: "Explorar nuevos países",
    description:
      "Combiná trabajo y turismo para conocer nuevas culturas mientras sostenés tu viaje.",
  },
  {
    icon: Heart,
    title: "Inmersión cultural real",
    description:
      "Mejorá el idioma, hacé amistades internacionales y viví el día a día local.",
  },
];

export const pasos = [
  {
    title: "Preparación",
    description:
      "Armamos tu estrategia: revisión de requisitos, selección de fechas y check-list personalizado de documentos.",
  },
  {
    title: "Documentación",
    description:
      "Reunimos certificados, traducciones, comprobantes bancarios, seguro médico y cartas de motivación.",
  },
  {
    title: "Solicitud",
    description:
      "Reservamos turno, cargamos tu formulario y te ayudamos a presentar el dossier completo ante el consulado.",
  },
  {
    title: "Viaje y llegada",
    description:
      "Te guiamos en la activación del seguro, trámites iniciales, apertura de cuenta y tips para instalarte en Francia.",
  },
];

export const documentos = [
  "Pasaporte vigente y formularios oficiales completos.",
  "CV y carta de motivación según destino.",
  "Comprobante de fondos (extractos bancarios o certificados).",
  "Reserva aérea o fondos equivalentes.",
  "Seguro médico internacional por toda la estadía.",
  "Certificado de antecedentes penales apostillado.",
];

export const insuranceFeatures = [
  {
    icon: Shield,
    title: "Cobertura Schengen 24/7",
    description:
      "Atención médica, hospitalización y repatriación con respaldo internacional durante el programa.",
  },
  {
    icon: Globe,
    title: "Documentación consular",
    description:
      "Certificado oficial y carta personalizada para presentar en tu consulado o plataforma oficial.",
  },
  {
    icon: Heart,
    title: "Asistencia integral",
    description:
      "Incluye emergencias médicas, accidentes, telemedicina y acompañamiento en tu instalación en Francia.",
  },
  {
    icon: Plane,
    title: "Cobertura de viaje extendida",
    description:
      "Protección desde que sales de tu país, en todo el Espacio Schengen y con opción de extensión si decides quedarte.",
  },
];

export const destinationCatalog = [
  { name: "Alemania", image: "/countries/Alemania.webp" },
  { name: "Australia", image: "/countries/Australia.webp" },
  { name: "Austria", image: "/countries/Austria.webp" },
  { name: "Canadá", image: "/countries/Canada.webp" },
  { name: "Corea del Sur", image: "/countries/Corea-del-Sur.webp" },
  { name: "Dinamarca", image: "/countries/Dinamarca.webp" },
  { name: "España", image: "/countries/Espana.webp" },
  { name: "Irlanda", image: "/countries/Irlanda.webp" },
  { name: "Japón", image: "/countries/Japon.webp" },
  { name: "Noruega", image: "/countries/Noruega.webp" },
  { name: "Nueva Zelanda", image: "/countries/Nueva-Zelanda.webp" },
  { name: "Polonia", image: "/countries/Polonia.webp" },
  { name: "Portugal", image: "/countries/Portugal.webp" },
  { name: "Suecia", image: "/countries/Suecia.webp" },
  { name: "USA", image: "/countries/USA.webp" },
  { name: "Francia", image: "/hero-lyon.webp" },
];

export const destinationImageMap: Record<string, string> = {
  Alemania: "/countries/Alemania.webp",
  Australia: "/countries/Australia.webp",
  Austria: "/countries/Austria.webp",
  Canadá: "/countries/Canada.webp",
  Canada: "/countries/Canada.webp",
  "Corea del Sur": "/countries/Corea-del-Sur.webp",
  Dinamarca: "/countries/Dinamarca.webp",
  España: "/countries/Espana.webp",
  Francia: "/hero-lyon.webp",
  Irlanda: "/countries/Irlanda.webp",
  Japón: "/countries/Japon.webp",
  Noruega: "/countries/Noruega.webp",
  "Nueva Zelanda": "/countries/Nueva-Zelanda.webp",
  Polonia: "/countries/Polonia.webp",
  Portugal: "/countries/Portugal.webp",
  Suecia: "/countries/Suecia.webp",
  "Reino Unido": "/countries/Reino-Unido.webp",
  "Países Bajos": "/countries/Paises-Bajos.webp",
  Hungría: "/countries/Hungria.webp",
  México: "/countries/Mexico.webp",
};

export const normalizeDestinationName = (value: string) =>
  value.replace(/\s*\(.*?\)\s*/g, "").trim();

export const getDestinationImage = (value: string) =>
  destinationImageMap[normalizeDestinationName(value)];

export const insuranceHighlights = [
  {
    icon: ShieldCheck,
    title: "Cobertura obligatoria",
    description:
      "Asistencia médica, hospitalización y repatriación alineadas a los requisitos consulares.",
  },
  {
    icon: Globe,
    title: "Validez internacional",
    description:
      "Protección durante toda la estadía y viajes secundarios dentro de tu Working Holiday.",
  },
  {
    icon: Plane,
    title: "Certificado inmediato",
    description:
      "Emitimos el comprobante en minutos para presentar en consulado o plataforma oficial.",
  },
];

export const heroHighlights = [
  { icon: Compass, label: "Guías por nacionalidad" },
  { icon: Briefcase, label: "Opciones de trabajo legal" },
  { icon: MapPin, label: "Destinos en 4 continentes" },
];

export const buildOriginCountries = () =>
  PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.map((code) => {
    const country = WORKING_HOLIDAY_COUNTRIES[code];
    return {
      code,
      name: country.name,
      flagSrc: country.flagSrc,
      flagScale: country.flagScale,
    };
  });
