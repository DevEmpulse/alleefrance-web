"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  FileText,
  Calendar,
  GraduationCap,
  Building2,
  Globe,
  Scale,
  Link as LinkIcon,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Users,
  Briefcase,
  Plane,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Navbar } from "@/components/navbar";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { getFaqsByCategories } from "@/data/faqs";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/utils";

export default function VisaEtudiantPage() {

  const t = useTranslations("StudentVisaPage");
  const locale = useLocale();
  const studentFaqs = getFaqsByCategories([
    "Estudios",
    "Errores Frecuentes",
    "Asesoría",
    "Seguros",
  ]);
  const studentFaqCategories = [
    "Estudios",
    "Errores Frecuentes",
    "Asesoría",
    "Seguros",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
          backgroundImage: "url('/student-studying-in-paris.webp')",
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
            <GraduationCap className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
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
                href={buildWhatsAppLink()}
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
              <Link href={`/${locale}#contacto`} rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                {t("hero.advisorCta")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="prose prose-lg max-w-none text-center mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                {t("intro")}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Organismos que Intervienen */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                {t("organismos.title")}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t("organismos.subtitle")}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll direction="up" delay={0.2}>
              <Card
                className="p-6 border-t-4 hover:shadow-lg transition-all"
                style={{ borderTopColor: "#002654" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    {t("organismos.cf.title")}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t("organismos.cf.description")}
                </p>
                <a
                  href="https://www.campusfrance.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{
                    backgroundColor: "rgba(0, 38, 84, 0.08)",
                    color: "#002654",
                  }}
                >
                  <Globe className="w-4 h-4" />
                  {t("organismos.cf.cta")}
                </a>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.3}>
              <Card
                className="p-6 border-t-4 hover:shadow-lg transition-all"
                style={{ borderTopColor: "#002654" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    {t("organismos.fv.title")}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t("organismos.fv.description")}
                </p>
                <a
                  href="https://france-visas.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{
                    backgroundColor: "rgba(0, 38, 84, 0.08)",
                    color: "#002654",
                  }}
                >
                  <Globe className="w-4 h-4" />
                  {t("organismos.fv.cta")}
                </a>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.4}>
              <Card
                className="p-6 border-t-4 hover:shadow-lg transition-all"
                style={{ borderTopColor: "#002654" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    {t("organismos.consulado.title")}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t("organismos.consulado.description")}
                </p>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.5}>
              <Card
                className="p-6 border-t-4 hover:shadow-lg transition-all"
                style={{ borderTopColor: "#002654" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    {t("organismos.sp.title")}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {t("organismos.sp.description")}
                </p>
                <a
                  href="https://www.service-public.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{
                    backgroundColor: "rgba(0, 38, 84, 0.08)",
                    color: "#002654",
                  }}
                >
                  <Globe className="w-4 h-4" />
                  {t("organismos.sp.cta")}
                </a>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* --- PROCESO (TIMELINE VERTICAL) --- */}
      <section className="py-20 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll direction="fade">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002654] mb-4">
                {t("process.title")}
              </h2>
              <p className="text-lg text-slate-500">
                {t("process.subtitle")}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Línea Central */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#002654] via-blue-200 to-transparent" />

            <div className="space-y-12">
              {(t.raw("process.steps") as Array<{ step: string; title: string; desc: string }>).map((item, idx) => (
                <AnimateOnScroll key={idx} direction="up" delay={idx * 0.1}>
                  <div
                    className={`relative flex items-center gap-8 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Contenido */}
                    <div className="flex-1 ml-12 md:ml-0">
                      <div
                        className={`bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#002654] ${
                          idx % 2 === 0
                            ? "md:text-right md:border-l-0 md:border-r-4"
                            : ""
                        }`}
                      >
                        {/* --- CORRECCIÓN AQUÍ --- */}
                        {/* Se eliminó la condición que ocultaba el número y se ajustó el color */}
                        <div className="text-5xl font-bold text-[#002654]/10 mb-2 select-none">
                          {item.step}
                        </div>

                        <h3 className="text-xl font-bold text-[#002654] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>

                    {/* Icono Central */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ED2939] border-4 border-white shadow-lg z-10 flex items-center justify-center">
                      {/* <item.icon className="w-4 h-4 text-white" /> */}
                    </div>

                    {/* Espacio vacío para balancear el flex en desktop */}
                    <div className="flex-1 hidden md:block text-center md:px-8">
                      <span className="text-8xl font-bold text-slate-200 opacity-40 select-none">
                        {item.step}
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Estudios */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                {t("types.title")}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll direction="left" delay={0.2}>
              <Card
                className="p-6 border-t-4 bg-white"
                style={{ borderTopColor: "#10B981" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    {t("types.apply.title")}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {(t.raw("types.apply.items") as string[]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.3}>
              <Card
                className="p-6 border-t-4 bg-white"
                style={{ borderTopColor: "#EF4444" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-8 h-8 text-red-600" />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    {t("types.notApply.title")}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {(t.raw("types.notApply.items") as string[]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Cambio de Estatus */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <Card
              className="p-8 border-t-4"
              style={{ borderTopColor: "#002654" }}
            >
              <div className="flex items-start gap-4 mb-6">
                <Briefcase className="w-8 h-8" style={{ color: "#002654" }} />
                <div>
                  <h2
                    className="text-2xl lg:text-3xl font-bold mb-4"
                    style={{ color: "#002654" }}
                  >
                    {t("status.title")}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t("status.p1")}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t("status.p2")}
                  </p>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Consejos Importantes */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <Card
              className="p-8 border-t-4 bg-linear-to-br from-blue-50 to-white"
              style={{ borderTopColor: "#ED2939" }}
            >
              <div className="flex items-start gap-4">
                <Info className="w-8 h-8" style={{ color: "#ED2939" }} />
                <div>
                  <h2
                    className="text-2xl lg:text-3xl font-bold mb-4"
                    style={{ color: "#002654" }}
                  >
                    {t("tips.title")}
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    {(t.raw("tips.items") as Array<{ bold: string; text: string }>).map((item, index) => (
                      <p key={index}>
                        <strong>{item.bold}</strong>
                        {item.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQSection
        title={t("faqSection.title")}
        description={t("faqSection.description")}
        allowedCategories={studentFaqCategories}
        defaultCategory="Estudios"
        data={studentFaqs}
      />

      {/* CTA Final */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="text-center">
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
                      href={buildWhatsAppLink()}
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

      <Footer />
    </div>
  );
}
