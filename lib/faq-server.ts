import { getTranslations } from "next-intl/server";
import {
  getInitiallyVisibleFaqs,
  usesTitreDeSejourFaqs,
  type FAQItem,
  type FAQSectionConfig,
} from "@/lib/faq";

/**
 * Server-side mirror of what `FAQSection` renders on first load for a locale:
 * the same source list, category and page size.
 */
export async function getInitiallyVisibleFaqsForLocale(
  locale: string,
  section: FAQSectionConfig,
): Promise<FAQItem[]> {
  const tData = await getTranslations({ locale, namespace: "FAQData" });
  const source = tData.raw(
    usesTitreDeSejourFaqs(section.allowedCategories) ? "titreDeSejour" : "items",
  ) as FAQItem[];
  return getInitiallyVisibleFaqs(source, section);
}
