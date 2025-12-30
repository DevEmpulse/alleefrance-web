"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { SiWhatsapp } from "react-icons/si";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useEffect, useMemo, useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  title: string;
  description?: string;
  data: FAQItem[];
}

const isHtmlString = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);

export function FAQSection({ title, description, data }: FAQSectionProps) {
  const [searchValue, setSearchValue] = useState("");
  const categories = useMemo(() => {
    return Array.from(
      new Set(data.map((item) => item.category).filter(Boolean))
    );
  }, [data]);
  const [activeCategory, setActiveCategory] = useState(
    categories[0] ?? ""
  );

  useEffect(() => {
    if (!activeCategory || !categories.includes(activeCategory)) {
      setActiveCategory(categories[0] ?? "");
    }
  }, [activeCategory, categories]);

  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredFaqs = useMemo(() => {
    return data.filter((item) => {
      const matchesCategory = activeCategory
        ? item.category === activeCategory
        : true;
      const matchesSearch = normalizedSearch
        ? item.question.toLowerCase().includes(normalizedSearch) ||
          item.answer.toLowerCase().includes(normalizedSearch)
        : true;

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, data, normalizedSearch]);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
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
              href="https://wa.me/33601526171"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: "#ED2939" }}
            >
              <SiWhatsapp className="w-6 h-6" />
              WhatsApp para más consultas
            </a>
          </div>
        </AnimateOnScroll>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[#002654] text-white border-[#002654]"
                        : "bg-white text-[#002654] border-[#002654]/20 hover:border-[#002654]/60"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <div className="w-full md:max-w-xs">
              <Input
                placeholder="Buscar preguntas..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </div>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              No encontramos resultados con esos filtros.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredFaqs.map((faq, index) => (
                <AnimateOnScroll
                  key={`${faq.category}-${faq.question}`}
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
        </div>
      </div>
    </section>
  );
}
