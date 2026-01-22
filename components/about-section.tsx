"use client";

import Image from "next/image";
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
              src="/mapitafrancia.png"
              alt="Mapa de Francia"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" delay={0.2}>
          <div className="flex sm:hidden justify-end -mt-48 mb-16 pr-4 z-40">
            <img
              src="/mapitafrancia.png"
              alt="Mapa de Francia"
              className="w-80 h-auto drop-shadow-xl translate-x-16"
            />
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left" delay={0}>
            <div className="space-y-6 max-w-xl">

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
                  Soy Jio, especialista en trámites migratorios para Francia y guía experto para quienes desean vivir, trabajar o estudiar en este país.
                </p>
                <p>
                  Más de <span className="font-semibold text-[#002654]">400 procesos exitosos</span> avalan mi experiencia en autorizaciones de trabajo, visa Salarié, visa Saisonnier, visa de estudiante y reagrupación familiar.
                </p>
                <p>
                  Ayudo a personas de América Latina y el mundo a concretar su proyecto migratorio hacia Francia con asesoría clara, acompañamiento paso a paso y una estrategia personalizada según tu objetivo: empleo, estudios o residencia.
                </p>
                <p>
                  En Allée France te ofrezco asesoría especializada no solo para Francia, sino también para otros destinos donde desees estudiar, vivir o trabajar, siempre con el mismo nivel de precisión y resultados.
                </p>
                
                {/* Frase destacada */}
                <div className="relative pl-5 py-2 border-l-4 border-[#ED2939] bg-gradient-to-r from-red-50/80 to-transparent rounded-r-lg">
                  <p className="font-semibold text-gray-800 italic">
                    "Tu proyecto no es un trámite: es tu futuro."
                  </p>
                  <p className="text-sm text-[#002654] font-bold mt-1">
                    Y mi misión es hacerlo posible.
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

          <AnimateOnScroll direction="right" delay={0.15}>
            <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto z-0">
              {/* Efecto de fondo principal con gradiente */}
              <div
                className="absolute -inset-4 sm:-inset-8 md:-inset-10 z-0 pointer-events-none animate-pulse"
                style={{
                  background:
                    "linear-gradient(140deg, rgba(0,85,164,0.28), rgba(0,38,84,0.12))",
                  borderRadius: "65% 35% 60% 40% / 40% 70% 35% 65%",
                  filter: "drop-shadow(0 20px 50px rgba(0,38,84,0.2))",
                  transform: "rotate(-4deg)",
                  animationDuration: "4s",
                }}
              />
              {/* Efecto de gradiente secundario */}
              <div
                className="absolute -inset-2 sm:-inset-4 md:-inset-6 z-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 18% 28%, rgba(0,85,164,0.2), transparent 48%), radial-gradient(circle at 78% 82%, rgba(237,41,57,0.18), transparent 44%), radial-gradient(circle at 65% 20%, rgba(0,38,84,0.14), transparent 38%)",
                  borderRadius: "52% 48% 60% 40% / 58% 42% 55% 45%",
                  filter: "drop-shadow(0 24px 60px rgba(0,38,84,0.22))",
                }}
              />
              {/* Decoración superior izquierda */}
              <div
                className="absolute -left-6 sm:-left-12 -top-3 sm:-top-6 h-12 w-16 sm:h-24 sm:w-32 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(0,85,164,0.25), rgba(0,38,84,0.1))",
                  borderRadius: "9999px",
                  filter: "blur(1px)",
                }}
                aria-hidden
              />
              {/* Decoración inferior derecha */}
              <div
                className="absolute -right-6 sm:-right-12 bottom-1 sm:bottom-2 h-12 w-18 sm:h-24 sm:w-36 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(150deg, rgba(0,85,164,0.45), rgba(0,38,84,0.18))",
                  borderRadius: "9999px",
                  filter: "blur(1px)",
                }}
                aria-hidden
              />
              {/* Base decorativa inferior */}
              <div
                className="absolute left-[-4%] sm:left-[-8%] right-[-4%] sm:right-[-8%] -bottom-6 sm:-bottom-12 h-10 sm:h-20 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,85,164,0.75), rgba(0,38,84,0.95))",
                  borderRadius: "65% 35% 70% 30% / 100% 100% 40% 40%",
                  filter: "drop-shadow(0 14px 28px rgba(0,38,84,0.25))",
                }}
                aria-hidden
              />

              {/* Contenedor de imagen con borde elegante */}
              <div
                className="relative overflow-hidden bg-white z-30 ring-4 ring-white/80"
                style={{
                  borderRadius: "55% 45% 62% 38% / 62% 38% 58% 42%",
                  boxShadow: "0 25px 60px rgba(0,38,84,0.2), 0 10px 20px rgba(0,38,84,0.1)",
                }}
              >
                <Image
                  src="/professional-consultant-portrait-photo.jpg"
                  alt="Jio - Consultor experto de Allée France"
                  width={960}
                  height={1200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
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
