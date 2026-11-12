"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiWhatsapp } from "react-icons/si";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/utils";
import {
  FAQ_PAGE_SIZE,
  filterFaqsByCategory,
  getFaqCategories,
  getInitialFaqCategory,
  usesTitreDeSejourFaqs,
  type FAQItem,
} from "@/lib/faq";

export type { FAQItem };

interface FAQSectionProps {
  title: string;
  description?: string;
  data: FAQItem[];
  allowedCategories?: string[];
  defaultCategory?: string;
}

const isHtmlString = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);

export function FAQSection({
  title,
  description,
  data = [],
  allowedCategories,
  defaultCategory,
}: FAQSectionProps) {
  const t = useTranslations("FAQHome");
  const tData = useTranslations("FAQData");

  const getCategoryLabel = (cat: string) => {
    try {
      const categoriesObj = t.raw("categories") as Record<string, string>;
      return categoriesObj[cat] || cat;
    } catch {
      return cat;
    }
  };

  const faqSource = useMemo(() => {
    try {
      const isTds = usesTitreDeSejourFaqs(allowedCategories, data);
      if (isTds) {
        return tData.raw("titreDeSejour") as FAQItem[];
      }
      return tData.raw("items") as FAQItem[];
    } catch {
      return data;
    }
  }, [data, allowedCategories, tData]);

  const [searchValue, setSearchValue] = useState("");
  const [visibleCount, setVisibleCount] = useState(FAQ_PAGE_SIZE);
  const categories = useMemo<string[]>(
    () => getFaqCategories(faqSource, allowedCategories),
    [allowedCategories, faqSource]
  );
  const [activeCategory, setActiveCategory] = useState(() =>
    getInitialFaqCategory(categories, defaultCategory)
  );

  useEffect(() => {
    if (defaultCategory && categories.includes(defaultCategory)) {
      setActiveCategory(defaultCategory);
      return;
    }
    if (!activeCategory || !categories.includes(activeCategory)) {
      setActiveCategory(categories[0] ?? "");
    }
  }, [activeCategory, categories, defaultCategory]);

  useEffect(() => {
    setVisibleCount(FAQ_PAGE_SIZE);
  }, [activeCategory, searchValue]);

  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredFaqs = useMemo(() => {
    return filterFaqsByCategory(faqSource, activeCategory).filter((item) =>
      normalizedSearch
        ? item.question.toLowerCase().includes(normalizedSearch) ||
          item.answer.toLowerCase().includes(normalizedSearch)
        : true
    );
  }, [activeCategory, faqSource, normalizedSearch]);
  const displayedFaqs = filteredFaqs.slice(0, visibleCount);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="text-center mb-12">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#002654" }}
            >
              {title}
            </h2>
            {description ? (
              <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
            ) : null}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="fade" delay={0.2}>
          <div className="text-center mb-12">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: "#ED2939" }}
            >
              <SiWhatsapp className="w-6 h-6" />
              {t("whatsapp")}
            </a>
          </div>
        </AnimateOnScroll>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-auto">
              <Select
                value={activeCategory}
                onValueChange={(value) => setActiveCategory(value)}
              >
                {/* Corrección de Accesibilidad: aria-label agregado */}
                <SelectTrigger
                  className="w-full md:w-64"
                  aria-label={t("filterLabel")}
                >
                  <SelectValue placeholder={t("categoryPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => {
                    const categoryLabel = String(category);
                    return (
                      <SelectItem key={categoryLabel} value={categoryLabel}>
                        {getCategoryLabel(categoryLabel)}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:max-w-xs">
              {/* Corrección de Accesibilidad: aria-label agregado */}
              <Input
                placeholder={t("searchPlaceholder")}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                aria-label={t("searchLabel")}
              />
            </div>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              {t("empty")}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {displayedFaqs.map((faq, index) => (
                <AnimateOnScroll
                  key={`${faq.question}-${faq.category.join("|")}`}
                  direction="up"
                  delay={index * 0.1}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-white border-2 rounded-lg px-6 data-[state=open]:border-opacity-100"
                      style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
                    >
                      <AccordionTrigger
                        className="text-left font-semibold hover:no-underline py-6 cursor-pointer"
                        style={{ color: "#002654" }}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        forceMount
                        className="text-gray-700 leading-relaxed pb-6"
                      >
                        {isHtmlString(faq.answer) ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        ) : (
                          <div className="whitespace-pre-line">
                            {faq.answer}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AnimateOnScroll>
              ))}
            </div>
          )}
          {visibleCount < filteredFaqs.length ? (
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + FAQ_PAGE_SIZE, filteredFaqs.length)
                )
              }
              className="text-[#002654] font-semibold hover:underline mt-8 flex items-center justify-center w-full cursor-pointer"
            >
              {t("showMore", { category: getCategoryLabel(activeCategory), count: filteredFaqs.length - visibleCount })}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
