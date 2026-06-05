"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  FileText,
  Calendar,
  Briefcase,
  Sprout,
  Scale,
  Link as LinkIcon,
  CheckCircle,
  AlertTriangle,
  Euro,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Navbar } from "@/components/navbar";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { getFaqsByCategories } from "@/data/faqs";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function VisasTrabajoPage() {

  const t = useTranslations("WorkVisasPage");
  const locale = useLocale();
  const [selectedVisa, setSelectedVisa] = useState<"salarie" | "saisonnier">(
    "salarie",
  );
  const workVisaFaqs = getFaqsByCategories([
    "Trabajo",
    "Saisonnier: General",
    "Saisonnier: Argentina",
    "Saisonnier: Chile",
    "Seguros",
    "Errores Frecuentes",
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
          backgroundImage: "url('/visas-trabajo-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 38, 84, 0.85)" }}
        ></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Scale className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="font-semibold tracking-wide text-white hover:opacity-90"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <a
                href="https://wa.me/33601526171"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                {t("hero.whatsappCta")}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-white hover:bg-gray-50"
              style={{ color: "#002654" }}
              asChild
            >
              <Link href={`/${locale}#contacto`} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                {t("hero.advisorCta")}
              </Link>
            </Button>
          </div>

          {/* Comunidad WhatsApp */}
          <AnimateOnScroll direction="fade" delay={0.3}>
            <div className="flex justify-center">
              <a
                href="https://chat.whatsapp.com/Jp7yTFyDhAM3i4dhHW0m8Z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <SiWhatsapp className="w-6 h-6" />
                <span>{t("hero.communityCta")}</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sección Comparativa Lado a Lado */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                {t("comparison.title")}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t("comparison.subtitle")}
              </p>
            </div>
          </AnimateOnScroll>
          <p className="text-center text-gray-700 mb-8 md:hidden">
            {t("comparison.mobileHelper")}
          </p>
          {/* Selector de Visa para Mobile */}
          <div className="lg:hidden mb-8">
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setSelectedVisa("salarie")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-semibold transition-all duration-200 ${
                  selectedVisa === "salarie"
                    ? "bg-white text-[#002654] shadow-md"
                    : "text-gray-600 hover:text-[#002654]"
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>{t("comparison.salarieBtn")}</span>
              </button>
              <button
                onClick={() => setSelectedVisa("saisonnier")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-semibold transition-all duration-200 ${
                  selectedVisa === "saisonnier"
                    ? "bg-white text-[#ED2939] shadow-md"
                    : "text-gray-600 hover:text-[#ED2939]"
                }`}
              >
                <Sprout className="w-5 h-5" />
                <span>{t("comparison.saisonnierBtn")}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* Divisor vertical para pantallas grandes */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

            {/* ================= COLUMNA IZQUIERDA: VISA SALARIÉ ================= */}
            <div
              className={`space-y-8 ${selectedVisa !== "salarie" ? "hidden lg:block" : ""}`}
            >
              <div className="text-center mb-8 lg:sticky lg:top-24 bg-white/95 backdrop-blur z-20 py-4 border-b border-gray-100">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
                  style={{ backgroundColor: "rgba(0, 38, 84, 0.1)" }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: "#002654" }} />
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: "#002654" }}
                  >
                    {t("salarie.badge")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  {t("salarie.title")}
                </h3>
              </div>

              {/* Paso 1: DEFINICION */}
              <AnimateOnScroll direction="right" delay={0.1}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#002654" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#002654" }}
                    >
                      1
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("salarie.step1.title")}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {t.rich("salarie.step1.description", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                  <div className="bg-blue-50 p-3 rounded text-sm text-[#002654]">
                    {t.rich("salarie.step1.highlight", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 2: OFERTA */}
              <AnimateOnScroll direction="right" delay={0.2}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#002654" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#002654" }}
                    >
                      2
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("salarie.step2.title")}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {t.rich("salarie.step2.description", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                  <a
                    href="https://www.legifrance.gouv.fr"
                    target="_blank"
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <LinkIcon className="w-3 h-3" /> {t("salarie.step2.link")}
                  </a>
                </div>
              </AnimateOnScroll>

              {/* Paso 3: FRANCE TRAVAIL */}
              <AnimateOnScroll direction="right" delay={0.3}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#002654" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#002654" }}
                    >
                      3
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("salarie.step3.title")}
                    </h4>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">
                        {t.rich("salarie.step3.description", {
                          strong: (chunks) => <strong>{chunks}</strong>,
                        })}
                      </p>
                      <p className="text-xs bg-gray-100 p-2 rounded">
                        {t.rich("salarie.step3.warning", {
                          strong: (chunks) => <strong>{chunks}</strong>,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 4: PROCEDIMIENTO */}
              <AnimateOnScroll direction="right" delay={0.4}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#002654" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#002654" }}
                    >
                      4
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("salarie.step4.title")}
                    </h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {(t.raw("salarie.step4.items") as string[]).map((_, index) => (
                      <li key={index} className="flex gap-2">
                        {index === 0 && <CheckCircle2 className="w-4 h-4 text-[#002654] mt-0.5 shrink-0" />}
                        {index === 1 && <Clock className="w-4 h-4 text-[#002654] mt-0.5 shrink-0" />}
                        {index === 2 && <FileText className="w-4 h-4 text-[#002654] mt-0.5 shrink-0" />}
                        <span>
                          {t.rich(`salarie.step4.items.${index}`, {
                            strong: (chunks) => <strong>{chunks}</strong>,
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Paso 5: VALIDACION */}
              <AnimateOnScroll direction="right" delay={0.5}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#002654" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#002654" }}
                    >
                      5
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("salarie.step5.title")}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {t.rich("salarie.step5.description", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 p-2 rounded">
                    <CheckCircle className="w-4 h-4" />
                    {t("salarie.step5.success")}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* ================= COLUMNA DERECHA: VISA SAISONNIER ================= */}
            <div
              className={`space-y-8 ${selectedVisa !== "saisonnier" ? "hidden lg:block" : ""}`}
            >
              <div className="text-center mb-8 lg:sticky lg:top-24 bg-white/95 backdrop-blur z-20 py-4 border-b border-gray-100">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
                  style={{ backgroundColor: "rgba(237, 41, 57, 0.1)" }}
                >
                  <Sprout className="w-5 h-5" style={{ color: "#ED2939" }} />
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: "#ED2939" }}
                  >
                    {t("saisonnier.badge")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  {t("saisonnier.title")}
                </h3>
              </div>

              {/* Paso 1: DEFINICION */}
              <AnimateOnScroll direction="left" delay={0.1}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#ED2939" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#ED2939" }}
                    >
                      1
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("saisonnier.step1.title")}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {t.rich("saisonnier.step1.description", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                  <div className="bg-red-50 p-3 rounded text-sm text-[#ED2939]">
                    {t.rich("saisonnier.step1.highlight", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 2: OFERTA */}
              <AnimateOnScroll direction="left" delay={0.2}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#ED2939" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#ED2939" }}
                    >
                      2
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("saisonnier.step2.title")}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {t.rich("saisonnier.step2.description", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {(t.raw("saisonnier.step2.tags") as string[]).map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 px-2 py-1 rounded border border-gray-200"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 3: FRANCE TRAVAIL */}
              <AnimateOnScroll direction="left" delay={0.3}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#ED2939" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#ED2939" }}
                    >
                      3
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("saisonnier.step3.title")}
                    </h4>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">
                        {t.rich("saisonnier.step3.description", {
                          strong: (chunks) => <strong>{chunks}</strong>,
                        })}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t("saisonnier.step3.note")}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 4: PROCEDIMIENTO */}
              <AnimateOnScroll direction="left" delay={0.4}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#ED2939" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#ED2939" }}
                    >
                      4
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("saisonnier.step4.title")}
                    </h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {(t.raw("saisonnier.step4.items") as string[]).map((_, index) => (
                      <li key={index} className="flex gap-2">
                        {index === 0 && <CheckCircle2 className="w-4 h-4 text-[#ED2939] mt-0.5 shrink-0" />}
                        {index === 1 && <Clock className="w-4 h-4 text-[#ED2939] mt-0.5 shrink-0" />}
                        {index === 2 && <FileText className="w-4 h-4 text-[#ED2939] mt-0.5 shrink-0" />}
                        <span>
                          {t.rich(`saisonnier.step4.items.${index}`, {
                            strong: (chunks) => <strong>{chunks}</strong>,
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              {/* Paso 5: VALIDACION */}
              <AnimateOnScroll direction="left" delay={0.5}>
                <div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: "#ED2939" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#ED2939" }}
                    >
                      5
                    </span>
                    <h4 className="font-bold text-lg text-gray-800">
                      {t("saisonnier.step5.title")}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-2 rounded text-sm border border-gray-200">
                      {t.rich("saisonnier.step5.lessThan3", {
                        strong: (chunks) => <strong>{chunks}</strong>,
                      })}
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-sm border border-gray-200">
                      {t.rich("saisonnier.step5.3to6", {
                        strong: (chunks) => <strong>{chunks}</strong>,
                        em: (chunks) => <em>{chunks}</em>,
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-green-700 bg-green-50 p-2 rounded">
                      <Euro className="w-4 h-4" />
                      {t.rich("saisonnier.step5.cost", {
                        strong: (chunks) => <strong>{chunks}</strong>,
                      })}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Pasos 6 y 7 Compartidos - Ancho completo */}
          <div className="mt-16 space-y-8">
            {/* Paso 6: ACOMPAÑAMIENTO */}
            <AnimateOnScroll direction="up" delay={0.6}>
              <div className="relative group">
                <div
                  className="bg-linear-to-br from-white via-gray-50 to-white rounded-xl p-6 md:p-10 shadow-lg border-t-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  style={{ borderTopColor: "#002654" }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-linear-to-b from-[#002654] via-[#002654] to-[#002654]/30"></div>

                  <div className="relative z-10 pl-4">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-md bg-[#002654]">
                          <span className="text-3xl font-bold text-white">
                            6
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle2
                            className="w-8 h-8"
                            style={{ color: "#002654" }}
                          />
                          <h3
                            className="text-2xl font-bold"
                            style={{ color: "#002654" }}
                          >
                            {t("professionalSupport.title")}
                          </h3>
                        </div>
                        <div className="text-base text-gray-700 leading-relaxed space-y-3">
                          <p>
                            {t.rich("professionalSupport.p1", {
                              strong: (chunks) => <strong>{chunks}</strong>,
                            })}
                          </p>
                          <p>
                            {t.rich("professionalSupport.p2", {
                              strong: (chunks) => <strong>{chunks}</strong>,
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Paso 7: COMUNIDAD */}
            <AnimateOnScroll direction="up" delay={0.7}>
              <div className="relative group">
                <div
                  className="bg-linear-to-br from-[#002654] via-[#003d7a] to-[#ED2939] rounded-xl p-6 md:p-10 shadow-2xl border-t-4 hover:scale-[1.01] transition-all duration-300 text-white relative overflow-hidden"
                  style={{ borderTopColor: "#25D366" }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-linear-to-b from-[#25D366] via-[#25D366] to-[#25D366]/50"></div>

                  <div className="relative z-10 pl-4">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                      <div className="shrink-0">
                        <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 shadow-lg">
                          <span className="text-3xl font-bold text-white">
                            7
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {t("community.title")}
                        </h3>
                        <p className="text-lg text-white/95 leading-relaxed mb-6">
                          {t.rich("community.description", {
                            strong: (chunks) => <strong>{chunks}</strong>,
                          })}
                        </p>
                        <a
                          href="https://chat.whatsapp.com/Jp7yTFyDhAM3i4dhHW0m8Z"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                          <SiWhatsapp className="w-6 h-6" />
                          {t("community.button")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* CTA Final */}
          <AnimateOnScroll direction="up" delay={0.8}>
            <div className="mt-16 text-center">
              <div
                className="bg-white rounded-2xl p-8 shadow-xl border-2"
                style={{ borderColor: "#002654" }}
              >
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#002654" }}
                >
                  {t("cta.title")}
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="font-semibold tracking-wide text-white hover:opacity-90 shadow-lg"
                    style={{ backgroundColor: "#ED2939" }}
                    asChild
                  >
                    <a
                      href="https://wa.me/33601526171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWhatsapp className="mr-2 h-5 w-5" />
                      {t("cta.button")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Resumen */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: "#002654" }}
          >
            {t("summaryTable.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="p-6 border-t-4"
              style={{ borderTopColor: "#002654" }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#002654]" /> {t("summaryTable.salarie.title")}
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {(t.raw("summaryTable.salarie.items") as string[]).map((_, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {index === 2 ? (
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                    ) : index === 3 ? (
                      <Euro className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    )}
                    <span>
                      {t.rich(`summaryTable.salarie.items.${index}`, {
                        strong: (chunks) => <strong>{chunks}</strong>,
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card
              className="p-6 border-t-4"
              style={{ borderTopColor: "#ED2939" }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-[#ED2939]" /> {t("summaryTable.saisonnier.title")}
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {(t.raw("summaryTable.saisonnier.items") as string[]).map((_, index) => {
                  const isCheck = index !== 3; // Item 3 "Limitada a 6 meses" is a warning
                  return (
                    <li key={index} className="flex items-start gap-2">
                      {isCheck ? (
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      )}
                      <span>
                        {t.rich(`summaryTable.saisonnier.items.${index}`, {
                          strong: (chunks) => <strong>{chunks}</strong>,
                        })}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <FAQSection
        title="Preguntas Frecuentes: Visas de Trabajo"
        description="Resolvemos tus dudas sobre contratos, requisitos estacionales y seguros para trabajar legalmente en Francia."
        allowedCategories={[
          "Trabajo",
          "Saisonnier: General",
          "Saisonnier: Argentina",
          "Saisonnier: Chile",
          "Seguros",
          "Errores Frecuentes",
        ]}
        data={workVisaFaqs}
      />

      <Footer />
    </div>
  );
}
