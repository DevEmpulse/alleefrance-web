"use client";

import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useLocale, useTranslations } from "next-intl";
import { TESTIMONIALS } from "@/data/testimonials";
import { routing, type Locale } from "@/i18n/routing";
import { BUSINESS_GOOGLE_PROFILE_URL } from "@/lib/author";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/google-reviews";

const AVATAR_COLORS = [
  "bg-blue-600",
  "bg-purple-600",
  "bg-emerald-600",
  "bg-orange-500",
  "bg-gray-600",
];

function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}

export function SuccessStoriesSection() {
  const t = useTranslations("SuccessStories");
  const rawLocale = useLocale();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : routing.defaultLocale;
  // Month and year only: Google publishes relative dates, so the stored day is not meaningful.
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonios"
      className="py-20 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#002654]">
                {t("title")}
              </h2>
              <p className="text-lg text-slate-600">
                {t("description")}
              </p>
            </div>

            {/* Botones de Navegación (Escritorio) */}
            <div className="hidden md:flex gap-3">
              <button
                type="button"
                aria-label={t("previous")}
                onClick={() => handleScroll("left")}
                className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-[#002654] hover:text-white hover:border-[#002654] transition-all shadow-sm"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button
                type="button"
                aria-label={t("next")}
                onClick={() => handleScroll("right")}
                className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-[#002654] hover:text-white hover:border-[#002654] transition-all shadow-sm"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Carrusel de Testimonios */}
        <div
          ref={scrollRef}
          className="flex items-start gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={index}
              className="w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] shrink-0 snap-center bg-white rounded-2xl p-6 flex flex-col relative shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-100 transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Logo de Google pequeño en la tarjeta para autenticidad */}
              <div className="absolute top-6 right-6 opacity-50 grayscale group-hover:grayscale-0">
                <FcGoogle className="text-xl" />
              </div>

              {/* Header: Avatar + Nombre */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${AVATAR_COLORS[index % AVATAR_COLORS.length]} text-white flex items-center justify-center font-bold text-lg shadow-sm`}
                >
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight pr-8">
                    {testimonial.name}
                  </p>
                  <time
                    dateTime={testimonial.date}
                    className="text-xs text-gray-600 font-medium"
                  >
                    {dateFormatter.format(new Date(`${testimonial.date}-01T00:00:00Z`))}
                  </time>
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 mb-3 text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Cita */}
              <div className="relative">
                <FaQuoteRight className="absolute -top-1 -left-1 text-slate-100 text-4xl -z-10" />
                <div className="space-y-3 text-slate-600 leading-relaxed text-sm relative z-10 break-words">
                  {testimonial.quote[locale].split("\n\n").map((paragraph, i, all) => (
                    <p key={i}>
                      {i === 0 ? '"' : ""}
                      {paragraph}
                      {i === all.length - 1 ? '"' : ""}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer con Botón CTA */}
        <AnimateOnScroll direction="up" delay={0.2}>
          <div className="flex flex-col items-center justify-center mt-8 gap-6">
            {/* Navegación Móvil */}
            <div className="flex md:hidden gap-4">
              <button
                onClick={() => handleScroll("left")}
                aria-label={t("previous")}
                className="p-3 rounded-full border border-gray-300 bg-white shadow-sm active:scale-95 transition-transform"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label={t("next")}
                className="p-3 rounded-full border border-gray-300 bg-white shadow-sm active:scale-95 transition-transform"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Botón Principal */}
            <a
              href={BUSINESS_GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border-2 border-[#002654]/20 hover:border-[#002654] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <FcGoogle className="text-xl" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#002654]">{GOOGLE_RATING}</span>
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <span className="text-sm font-semibold text-[#002654] border-l border-gray-300 pl-3 ml-1">
                {t("googleCta", { count: GOOGLE_REVIEW_COUNT })}
              </span>
              <svg
                className="w-4 h-4 text-[#002654] group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
