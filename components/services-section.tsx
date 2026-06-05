"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type ServiceId = "visa-salarie" | "working-holiday" | "titre-de-sejour" | "necesitas-aseoria";

const featuredServices: Array<{ id: ServiceId; images: Record<string, string>; link: string }> = [
  {
    id: "visa-salarie",
    images: {
      es: "/visa-salarie.webp",
      en: "/visa-salarie-en.webp",
      fr: "/visa-salarie-fr.webp",
    },
    link: "/servicios/visas-trabajo",
  },
  {
    id: "working-holiday",
    images: {
      es: "/working-holiday.webp",
      en: "/working-holiday-en.webp",
      fr: "/working-holiday-fr.webp",
    },
    link: "/working-holiday",
  },
  {
    id: "titre-de-sejour",
    images: {
      es: "/titre-de-sejour.webp",
      en: "/titre-de-sejour-en.webp",
      fr: "/titre-de-sejour-fr.webp",
    },
    link: "/servicios/titre-de-sejour",
  },
  {
    id: "necesitas-aseoria",
    images: {
      es: "/servicio_asesoria.webp",
      en: "/servicio_asesoria-en.webp",
      fr: "/servicio_asesoria-fr.webp",
    },
    link: "https://wa.me/33601526171",
  },
];

export function ServicesSection() {
  const t = useTranslations("Services");
  const locale = useLocale();

  return (
    <section
      id="servicios"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #1e3a8a 0%, #1e3a8a 70%, #002590 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-16 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t("title")}
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              {t("description")}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredServices.map((service, index) => {
            const title = t(`items.${service.id}.title`);
            const isExternal = service.link.startsWith("http");
            const finalLink = isExternal ? service.link : `/${locale}${service.link}/`;
            const imageSrc = service.images[locale] ?? service.images.es;
            const aspectClass = locale === "es" ? "aspect-3/4" : "aspect-square";

            return (
              <AnimateOnScroll
                key={service.id}
                direction="up"
                delay={index * 0.1}
              >
                <div className={`group relative w-full ${aspectClass} rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-500 hover:shadow-blue-900/50 hover:-translate-y-2 cursor-pointer`}>
                  {isExternal ? (
                    <a
                      href={finalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20"
                      aria-label={title}
                    />
                  ) : (
                    <Link
                      href={finalLink}
                      className="absolute inset-0 z-20"
                      aria-label={title}
                    />
                  )}

                  <Image
                    src={imageSrc}
                    alt={t(`items.${service.id}.alt`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300" />

                  <div className="absolute inset-x-6 bottom-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-base font-semibold text-white drop-shadow-md">
                      {t(`items.${service.id}.description`)}
                    </p>
                  </div>

                  <div className="absolute inset-x-6 bottom-6 z-10 pointer-events-none">
                    <div className="w-full bg-white text-[#1e3a8a] text-sm font-bold py-2.5 md:py-3 rounded-xl shadow-lg border-2 border-transparent group-hover:border-blue-200 transition-all flex items-center justify-center gap-2">
                      {isExternal
                        ? t("contact")
                        : t("moreInfo")}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll direction="fade" delay={0.4}>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="group font-semibold tracking-wide text-base px-10 py-6 rounded-full border-2 text-white hover:bg-white hover:text-[#1e3a8a] bg-transparent transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
              asChild
            >
              <Link href={`/${locale}/servicios/`} className="flex items-center gap-2">
                {t("viewAll")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
