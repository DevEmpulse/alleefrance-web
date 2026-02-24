"use client";

import Link from "next/link";
import { ShieldCheck, Clock3, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { SiWhatsapp } from "react-icons/si";

const stats = [
  {
    icon: ShieldCheck,
    value: "+700",
    label: "Casos exitosos",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Clock3,
    value: "+2",
    label: "Años de experiencia",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: SiWhatsapp,
    value: "Asesoría",
    label: "Personalizada",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-12 bg-white">
      <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-[rgba(0,38,84,0.08)] blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-[rgba(237,41,57,0.08)] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="right" delay={0.2}>
          <div className="hidden sm:block absolute -right-12 md:-right-16 lg:-right-20 -top-72 w-[340px] md:w-[420px] lg:w-[520px] pointer-events-none z-40">
            <img
              src="/mapitafrancia.webp"
              alt="Mapa de Francia con las principales ciudades para emigrar: París, Lyon, Marsella"
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
              alt="Mapa de Francia con las principales ciudades para emigrar: París, Lyon, Marsella"
              className="w-80 h-auto drop-shadow-xl translate-x-16"
              loading="lazy"
              decoding="async"
            />
          </div>
        </AnimateOnScroll>

        <div className="grid gap-12 items-center">
          <AnimateOnScroll direction="left" delay={0}>
            <div className="space-y-6 w-full">

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] text-[#002654]">
                Guía experto en visas y trámites para{" "}
                <span className="relative inline-block">
                  vivir y trabajar
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#ED2939]/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>{" "}
                en Francia
              </h2>

              <div className="text-gray-600 text-base lg:text-lg leading-relaxed space-y-4">
                <p>
                  En Allée France somos especialistas en trámites migratorios para Francia y guiamos a quienes desean vivir, trabajar o estudiar en este país.
                </p>
                <p>
                  Más de <span className="font-semibold text-[#002654]">400 procesos exitosos</span> avalan nuestra experiencia en autorizaciones de trabajo, visa Salarié, visa Saisonnier, visa de estudiante y reagrupación familiar.
                </p>
                <p>
                  Ayudamos a personas de América Latina y el mundo a concretar su proyecto migratorio hacia Francia con asesoría clara, acompañamiento paso a paso y una estrategia personalizada según tu objetivo: empleo, estudios o residencia.
                </p>
                <p>
                  Te ofrecemos asesoría especializada no solo para Francia, sino también para otros destinos donde desees estudiar, vivir o trabajar, siempre con el mismo nivel de precisión y resultados.
                </p>
                
                {/* Frase destacada */}
                <div className="relative pl-5 py-2 border-l-4 border-[#ED2939] bg-gradient-to-r from-red-50/80 to-transparent rounded-r-lg">
                  <p className="font-semibold text-gray-800 italic">
                    "Tu proyecto no es un trámite: es tu futuro."
                  </p>
                  <p className="text-sm text-[#002654] font-bold mt-1">
                    Y nuestra misión es hacerlo posible.
                  </p>
                </div>
              </div>

              {/* Botones mejorados */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full px-7 py-6 text-sm font-semibold shadow-lg hover:shadow-xl bg-[#ED2939] hover:bg-[#d12432] text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href="/servicios" className="flex items-center gap-2">
                    Nuestros servicios
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group rounded-full px-7 py-6 text-sm font-semibold border-2 border-[#002654] text-[#002654] bg-white hover:bg-[#002654] hover:text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link href="/#contacto" className="flex items-center gap-2">
                    Contáctanos
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="mt-10 rounded-2xl border border-gray-100/80 bg-white shadow-[0_20px_60px_rgba(0,38,84,0.08)]">
            <div className="flex flex-row sm:grid sm:grid-cols-3 gap-1.5 sm:gap-4 px-2 sm:px-0 py-3 sm:py-0 sm:divide-x divide-gray-100/80">
              {stats.map(({ icon: Icon, value, label, gradient }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 sm:gap-4 px-2 sm:px-6 py-2 sm:py-8 flex-1 sm:flex-none justify-center"
                >
                  <div
                    className="h-6 w-6 sm:h-12 sm:w-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(0, 38, 84, 0.06)", color: "var(--navy-blue)" }}
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
                    <p className="text-[10px] sm:text-sm text-gray-600 font-medium leading-tight">{label}</p>
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
