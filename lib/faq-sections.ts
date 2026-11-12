import type { FAQSectionConfig } from "@/lib/faq";

/**
 * Category selection of each page's FAQ section. The page UI and the page's FAQPage
 * JSON-LD both read from here, so the schema describes exactly what the HTML shows.
 */
export const HOME_FAQ_SECTION: FAQSectionConfig = {};

export const WORK_VISAS_FAQ_SECTION: FAQSectionConfig = {
  allowedCategories: [
    "Trabajo",
    "Saisonnier: General",
    "Saisonnier: Argentina",
    "Saisonnier: Chile",
    "Seguros",
    "Errores Frecuentes",
  ],
};

export const STUDENT_VISA_FAQ_SECTION: FAQSectionConfig = {
  allowedCategories: ["Estudios", "Errores Frecuentes", "Asesoría", "Seguros"],
  defaultCategory: "Estudios",
};

export const TITRE_DE_SEJOUR_FAQ_SECTION: FAQSectionConfig = {
  allowedCategories: ["Titre de Séjour"],
};

export const WORKING_HOLIDAY_FAQ_SECTION: FAQSectionConfig = {
  allowedCategories: [
    "WH: General",
    "WH: Argentina",
    "WH: Chile",
    "Errores Frecuentes",
    "Seguros",
    "Trabajo",
  ],
};

/** `countryName` is the Spanish name stored in the country config, e.g. "Argentina". */
export function workingHolidayCountryFaqSection(
  countryName: string,
): FAQSectionConfig {
  return { allowedCategories: ["WH: General", "Seguros", `WH: ${countryName}`] };
}
