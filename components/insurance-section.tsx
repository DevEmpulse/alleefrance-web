"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Plane, Users, Check, Star } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { useTranslations } from "next-intl"

const FEATURE_KEYS = ["illness", "hospitalization", "repatriation", "stay"] as const

export function InsuranceSection() {
  const t = useTranslations("Insurance")

  const insuranceFeatures = FEATURE_KEYS.map((key) => ({
    key,
    title: t(`features.${key}.title`),
    description: t(`features.${key}.description`),
  }))

  // Sample certificate fields; the user's own values are filled in by GO! Assistance
  const certificateFields = [
    { label: t("certificateCard.holderLabel"), value: t("certificateCard.holderValue"), sample: true },
    { label: t("certificateCard.destinationLabel"), value: t("certificateCard.destinationValue"), sample: false },
    { label: t("certificateCard.coverageLabel"), value: t("certificateCard.coverageValue"), sample: false },
    { label: t("certificateCard.validityLabel"), value: t("certificateCard.validityValue"), sample: true },
  ]

  return (
    <section
      id="seguro"
      className="relative overflow-hidden pt-8 pb-16 md:pb-20"
      style={{
        background: "radial-gradient(circle at 50% 0%, #2563EB 0%, #1E3A8A 60%, #172554 100%)",
      }}
    >
      {/* Elementos decorativos de fondo (Orbes de luz) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Badge de Partner Oficial - Moved to top for better visibility */}
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white/15 backdrop-blur-md border-2 border-white/20 rounded-full px-4 md:px-5 py-2 md:py-2.5 shadow-lg">
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white">
                {t("partner")}
              </span>
              <div className="h-4 w-[1px] bg-white/30"></div>
              <Image
                  src="/logo-go-assistance.webp"
                  alt={t("partnerAlt")}
                  width={100}
                  height={25}
                  className="h-5 md:h-6 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
            </div>
          </div>
        </AnimateOnScroll>
        
        {/* Header Section */}
        <AnimateOnScroll direction="fade" delay={0.1}>
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-white tracking-tight">
              {t("titleLine1")}<br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                {t("titleLine2")}
              </span>
            </h2>
            <p className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6 items-center mb-6 md:mb-8">
          
          {/* Columna Izquierda: lista de coberturas (5 columnas) */}
          <div className="lg:col-span-5">
            <AnimateOnScroll direction="left" delay={0.1}>
              <h3 className="text-sm font-semibold text-blue-200 mb-2">{t("includesTitle")}</h3>
              <ul className="border-b border-white/15">
                {insuranceFeatures.map((feature) => (
                  <li key={feature.key} className="flex items-start gap-3 md:gap-4 py-3.5 md:py-4 border-t border-white/15">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#1E3A8A]"
                    >
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-base md:text-lg text-white leading-snug">{feature.title}</h4>
                      <p className="mt-0.5 text-sm md:text-base text-blue-100/85 leading-relaxed">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          {/* Columna Derecha: certificado de ejemplo + Stats (7 columnas) */}
          <div className="lg:col-span-7 relative pl-0 lg:pl-8">
            <AnimateOnScroll direction="right" delay={0.2}>

              {/* Certificado de ejemplo: lo que el viajero recibe y presenta en el consulado */}
              <div className="px-2 pt-3 sm:px-6">
                <article
                  aria-label={t("certificateCard.ariaLabel")}
                  className="relative -rotate-2 rounded-md bg-[#FBFAF6] px-5 pt-6 pb-20 sm:px-7 sm:pt-7 text-[#0F1F4D] shadow-[0_30px_60px_-20px_rgba(8,15,45,0.65)] ring-1 ring-[#0F1F4D]/10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0 27px, rgba(30,58,138,0.05) 27px 28px)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.5 rounded-t-md"
                    style={{ background: "linear-gradient(90deg, #002395 0 33.3%, #ffffff 33.3% 66.6%, #ED2939 66.6%)" }}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-extrabold tracking-tight">{t("certificateCard.title")}</h3>
                      <p className="text-xs md:text-sm text-[#4B5A86]">{t("certificateCard.subtitle")}</p>
                    </div>
                    <Image
                      src="/logo-go-assistance.webp"
                      alt={t("partnerAlt")}
                      width={100}
                      height={25}
                      className="h-6 md:h-7 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-5 gap-y-2.5 text-sm md:text-base">
                    {certificateFields.map((field) => (
                      <div key={field.label} className="contents">
                        <dt className="text-[#4B5A86]">{field.label}</dt>
                        <dd className={`min-w-0 ${field.sample ? "italic text-[#6B7499]" : "font-semibold"}`}>
                          {field.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div
                    aria-hidden="true"
                    className="absolute right-5 bottom-4 -rotate-12 rounded-lg border-[3px] border-[#ED2939] px-2.5 py-1.5 text-center font-[family-name:var(--font-montserrat)] text-xs md:text-sm font-extrabold leading-tight text-[#ED2939]/90"
                  >
                    {t("certificateCard.stampLine1")}
                    <br />
                    {t("certificateCard.stampLine2")}
                  </div>
                </article>
              </div>

              {/* Estadísticas */}
              <div className="mt-6 md:mt-8">
                  <div className="flex flex-row items-center justify-around gap-3 md:gap-5">
                    
                    {/* Stat 1 */}
                    <div className="flex items-center gap-2 md:gap-2.5">
                      <div className="bg-white/10 p-1.5 md:p-2 rounded-full ring-1 ring-white/20">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-200" />
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-bold text-white leading-none">+10k</p>
                        <p className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wide mt-0.5 md:mt-1">{t("insuredTravelers")}</p>
                      </div>
                    </div>

                    <div className="w-px h-8 md:h-10 bg-white/10"></div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-2 md:gap-2.5">
                      <div className="bg-white/10 p-1.5 md:p-2 rounded-full ring-1 ring-white/20">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-bold text-white leading-none">4.9/5</p>
                        <p className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wide mt-0.5 md:mt-1">{t("averageRating")}</p>
                      </div>
                    </div>

                  </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* CTA Section */}
        <AnimateOnScroll direction="fade" delay={0.4}>
          <div className="flex flex-col items-center justify-center mt-4 md:mt-6">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-[#ED2939] hover:bg-[#D61E2E] text-white font-bold text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 md:py-5 h-auto max-w-full whitespace-normal text-center rounded-full shadow-xl shadow-red-600/20 transition-all hover:scale-105"
              asChild
            >
              <a
                href="https://www.goassistance.com/afiliados/alleefrancelyongo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("cta")}
                  <Plane className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            </Button>
            
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-blue-200/60 flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
              {t("certificate")}
            </p>
          </div>
        </AnimateOnScroll>

      </div>
      
      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-8 md:h-12 lg:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}