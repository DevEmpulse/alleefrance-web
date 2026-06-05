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

export interface FAQItem {
  question: string;
  answer: string;
  category: string[];
}

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
      const isTds = allowedCategories?.includes("Titre de Séjour") || 
                    data.some(item => item.category.includes("Titre de Séjour"));
      if (isTds) {
        return tData.raw("titreDeSejour") as FAQItem[];
      }
      return tData.raw("items") as FAQItem[];
    } catch {
      return data;
    }
  }, [data, allowedCategories, tData]);

  const displayTitle = useMemo(() => {
    if (title === "Preguntas Frecuentes (FAQ)" || title === "Preguntas Frecuentes") {
      if (allowedCategories?.includes("Titre de Séjour")) {
        return t("tdsTitle");
      }
      return t("title");
    }
    if (title === "Preguntas frecuentes sobre Working Holiday") return t("whTitle");
    if (title === "Preguntas Frecuentes: Visas de Trabajo") return t("workTitle");
    if (title === "Preguntas Frecuentes: Visa de Estudiante") return t("studentTitle");
    if (title === "Preguntas Frecuentes: Titre de Séjour") return t("tdsTitle");
    return title;
  }, [title, allowedCategories, t]);

  const displayDescription = useMemo(() => {
    if (!description) return undefined;
    if (description === "Resolvemos dudas clave sobre requisitos, seguros, trabajo y errores frecuentes en la postulación.") return t("whDescCountry");
    if (description === "Resolvé dudas clave sobre requisitos, seguros, trabajo y tiempos de aplicación.") return t("whDescGlobal");
    if (description === "Resolvemos tus dudas sobre contratos, requisitos estacionales y seguros para trabajar legalmente en Francia.") return t("workDesc");
    if (description === "Resolvemos tus dudas sobre requisitos, solvencia económica, Campus France y trabajo a tiempo parcial.") return t("studentDesc");
    if (description === "Resolvemos tus dudas sobre renovación, cambio de estatus y acompañamiento." || 
        description === "Resolvemos dudas clave sobre renovación, requisitos y tiempos del Titre de Séjour.") return t("tdsDesc");
    return description;
  }, [description, t]);

  const [searchValue, setSearchValue] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const categories = useMemo<string[]>(() => {
    const unique = new Set<string>();
    const allowedSet = allowedCategories ? new Set(allowedCategories) : null;
    faqSource.forEach((item) => {
      item.category.forEach((category) => {
        if (category && (!allowedSet || allowedSet.has(category))) {
          unique.add(category);
        }
      });
    });
    const preferredOrder = [
      "WH: General",
      "WH: Argentina",
      "WH: Chile",
      "Saisonnier: General",
      "Saisonnier: Argentina",
      "Saisonnier: Chile",
    ];
    const preferredIndex = new Map(
      preferredOrder.map((value, index) => [value, index])
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
  }, [allowedCategories, faqSource]);
  const [activeCategory, setActiveCategory] = useState(() => {
    if (defaultCategory && categories.includes(defaultCategory)) {
      return defaultCategory;
    }
    return categories[0] ?? "";
  });

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
    setVisibleCount(6);
  }, [activeCategory, searchValue]);

  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredFaqs = useMemo(() => {
    return faqSource.filter((item) => {
      const matchesCategory = activeCategory
        ? item.category.includes(activeCategory)
        : true;
      const matchesSearch = normalizedSearch
        ? item.question.toLowerCase().includes(normalizedSearch) ||
          item.answer.toLowerCase().includes(normalizedSearch)
        : true;

      return matchesCategory && matchesSearch;
    });
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
              {displayTitle}
            </h2>
            {displayDescription ? (
              <p className="text-gray-600 max-w-2xl mx-auto">{displayDescription}</p>
            ) : null}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="fade" delay={0.2}>
          <div className="text-center mb-12">
            <a
              href="https://wa.me/33601526171"
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
                      <AccordionContent className="text-gray-700 leading-relaxed pb-6">
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
                  Math.min(count + 6, filteredFaqs.length)
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
