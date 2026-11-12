export interface FAQItem {
  question: string;
  answer: string;
  category: string[];
}

/** Number of FAQ items a section shows before the user asks for more. */
export const FAQ_PAGE_SIZE = 6;

export const TITRE_DE_SEJOUR_FAQ_CATEGORY = "Titre de Séjour";

/** Category selection of one FAQ section. Shared by the UI and the FAQPage schema. */
export interface FAQSectionConfig {
  allowedCategories?: string[];
  defaultCategory?: string;
}

/**
 * Whether a section reads the Titre de Séjour FAQ list instead of the general one.
 * `data` is the list a page hands to the section; it is optional for server callers
 * that only know the allowed categories.
 */
export function usesTitreDeSejourFaqs(
  allowedCategories?: string[],
  data: FAQItem[] = [],
): boolean {
  return (
    !!allowedCategories?.includes(TITRE_DE_SEJOUR_FAQ_CATEGORY) ||
    data.some((item) => item.category.includes(TITRE_DE_SEJOUR_FAQ_CATEGORY))
  );
}

const PREFERRED_CATEGORY_ORDER = [
  "WH: General",
  "WH: Argentina",
  "WH: Chile",
  "Saisonnier: General",
  "Saisonnier: Argentina",
  "Saisonnier: Chile",
];

/** Unique categories of a source, restricted to the allowed ones, in display order. */
export function getFaqCategories(
  source: FAQItem[],
  allowedCategories?: string[],
): string[] {
  const unique = new Set<string>();
  const allowedSet = allowedCategories ? new Set(allowedCategories) : null;
  source.forEach((item) => {
    item.category.forEach((category) => {
      if (category && (!allowedSet || allowedSet.has(category))) {
        unique.add(category);
      }
    });
  });
  const preferredIndex = new Map(
    PREFERRED_CATEGORY_ORDER.map((value, index) => [value, index]),
  );
  return Array.from(unique).sort((left, right) => {
    const leftIndex = preferredIndex.get(left);
    const rightIndex = preferredIndex.get(right);
    if (leftIndex !== undefined && rightIndex !== undefined) {
      return leftIndex - rightIndex;
    }
    if (leftIndex !== undefined) return 1;
    if (rightIndex !== undefined) return -1;
    return left.localeCompare(right, "es");
  });
}

/** Category selected on first render: the default one when valid, otherwise the first. */
export function getInitialFaqCategory(
  categories: string[],
  defaultCategory?: string,
): string {
  if (defaultCategory && categories.includes(defaultCategory)) {
    return defaultCategory;
  }
  return categories[0] ?? "";
}

/** Items of a source that belong to a category (all of them when the category is empty). */
export function filterFaqsByCategory(
  source: FAQItem[],
  category: string,
): FAQItem[] {
  return category
    ? source.filter((item) => item.category.includes(category))
    : source;
}

/**
 * The items a FAQ section renders on first load (and therefore in static HTML):
 * the first page of its initial category.
 */
export function getInitiallyVisibleFaqs(
  source: FAQItem[],
  { allowedCategories, defaultCategory }: FAQSectionConfig = {},
): FAQItem[] {
  const categories = getFaqCategories(source, allowedCategories);
  const category = getInitialFaqCategory(categories, defaultCategory);
  return filterFaqsByCategory(source, category).slice(0, FAQ_PAGE_SIZE);
}

/** Plain text version of an answer that may have been stored as HTML. */
export function stripHtml(value: string): string {
  return value
    .replace(/<\s*br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|h[1-6]|ul|ol)>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
