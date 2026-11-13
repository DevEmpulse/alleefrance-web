"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock3, ShieldCheck, Star } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/google-reviews";

export function AboutSection() {
  const t = useTranslations("About");
  const locale = useLocale();

  const stats = [
    {
      icon: ShieldCheck,
      value: "+900",
      label: t("stats.cases"),
    },
    {
      icon: Clock3,
      value: "+2",
      label: t("stats.experience"),
    },
    {
      icon: SiWhatsapp,
      value: t("stats.adviceValue"),
      label: t("stats.adviceLabel"),
    },
  ];

  return (
    <section id="nosotros" className="relative py-12 bg-white">
      <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-[rgba(0,38,84,0.08)] blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-[rgba(237,41,57,0.08)] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="right" delay={0.2}>
          {/* On screens wider than the 80rem container, pin the map to the viewport's right edge */}
          <div className="hidden sm:block absolute -right-12 md:-right-16 lg:right-[min(-5rem,calc((80rem-100vw)/2+1rem))] -top-72 w-[340px] md:w-[420px] lg:w-[520px] pointer-events-none z-40">
            <img
              src="/mapitafrancia.webp"
              alt={t("mapAlt")}
              className="w-full h-auto drop-shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" delay={0.2}>
          <div className="flex sm:hidden justify-end -mt-48 mb-16 pr-4 z-40">
            <img
              src="/mapitafrancia.webp"
              alt={t("mapAlt")}
              className="w-80 h-auto drop-shadow-xl translate-x-16"
              loading="lazy"
              decoding="async"
            />
          </div>
        </AnimateOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <AnimateOnScroll direction="left" delay={0}>
            <div className="space-y-6 w-full">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] text-[#002654] text-balance">
                {t("title")}
              </h2>

              <div className="text-gray-600 text-base lg:text-lg leading-relaxed space-y-4 max-w-[62ch]">
                <p>{t("paragraph1")}</p>
                <p>
                  {t.rich("paragraph2", {
                    strong: (chunks) => (
                      <strong className="font-semibold text-[#002654]">{chunks}</strong>
                    ),
                  })}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full px-7 py-6 text-sm font-semibold shadow-lg hover:shadow-xl bg-[#ED2939] hover:bg-[#d12432] text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href={`/${locale}/servicios`} className="flex items-center gap-2">
                    {t("servicesCta")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group rounded-full px-7 py-6 text-sm font-semibold border-2 border-[#002654] text-[#002654] bg-white hover:bg-[#002654] hover:text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href={`/${locale}#contacto`} className="flex items-center gap-2">
                    {t("contactCta")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right column starts below the map on desktop */}
          <AnimateOnScroll direction="right" delay={0.1}>
            <div className="flex flex-col gap-7 lg:pt-40">
              <blockquote>
                <p className="text-2xl sm:text-3xl font-bold leading-tight text-[#002654] font-[family-name:var(--font-montserrat)] text-balance">
                  &ldquo;{t("quote")}&rdquo;
                </p>
                <footer className="mt-3 text-base text-gray-600">{t("mission")}</footer>
              </blockquote>
              <div className="border-t border-gray-200 pt-5">
                <p className="flex items-center gap-2 text-3xl font-bold leading-none text-[#002654] font-[family-name:var(--font-montserrat)]">
                  {GOOGLE_RATING}
                  <span className="flex text-[#F5B301]" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  {t("googleReviews", { count: GOOGLE_REVIEW_COUNT })}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="mt-10 rounded-2xl border border-gray-100/80 bg-white shadow-[0_20px_60px_rgba(0,38,84,0.08)]">
            <div className="flex flex-row sm:grid sm:grid-cols-3 gap-1.5 sm:gap-4 px-2 sm:px-0 py-3 sm:py-0 sm:divide-x divide-gray-100/80">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 sm:gap-4 px-2 sm:px-6 py-2 sm:py-8 flex-1 sm:flex-none justify-center"
                >
                  <div
                    className="h-6 w-6 sm:h-12 sm:w-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "rgba(0, 38, 84, 0.06)",
                      color: "var(--navy-blue)",
                    }}
                  >
                    <Icon className="w-3 h-3 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-sm sm:text-2xl font-bold leading-tight"
                      style={{ color: "var(--navy-blue)" }}
                    >
                      {value}
                    </p>
                    <p className="text-[10px] sm:text-sm text-gray-600 font-medium leading-tight">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
