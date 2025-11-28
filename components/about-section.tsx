"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock3, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const stats = [
  {
    icon: ShieldCheck,
    value: "+300",
    label: "Casos exitosos",
    color: "var(--navy-blue)",
  },
  {
    icon: Clock3,
    value: "+2",
    label: "Años de experiencia",
    color: "var(--flag-red)",
  },
  {
    icon: MessageCircle,
    value: "Asesoría",
    label: "Personalizada",
    color: "var(--navy-blue)",
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-20 bg-white">
      <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-[rgba(0,38,84,0.08)] blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-[rgba(237,41,57,0.08)] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="right" delay={0.2}>
          <div className="hidden sm:block absolute right-0 -top-72 w-[340px] md:w-[420px] lg:w-[520px] pointer-events-none z-40">
            <img
              src="/mapitafrancia.png"
              alt="Mapa de Francia"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right" delay={0.2}>
          <div className="flex sm:hidden justify-end -mt-48 mb-16 pr-8 z-40">
            <img
              src="/mapitafrancia.png"
              alt="Mapa de Francia"
              className="w-80 h-auto drop-shadow-xl translate-x-10"
            />
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll direction="left" delay={0}>
            <div className="space-y-6 max-w-xl">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-[0.24em] uppercase"
                style={{
                  color: "var(--navy-blue)",
                  backgroundColor: "rgba(0, 38, 84, 0.06)",
                }}
              >
                Sobre Nosotros
              </span>

              <h2
                className="text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: "var(--navy-blue)" }}
              >
                Expertos en tu nueva vida en Francia
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Allée France es tu socio de confianza en cada paso migratorio.
                Gestionamos visas de trabajo, reagrupación familiar, estudios y
                asesorías personalizadas para que llegues a Francia con
                seguridad, claridad y documentos impecables.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  className="rounded-full px-6 sm:px-7 py-4 text-base font-semibold shadow-md hover:-translate-y-px transition-transform"
                  style={{
                    backgroundColor: "var(--flag-red)",
                    borderColor: "var(--flag-red)",
                    color: "white",
                  }}
                >
                  <Link href="/servicios">Nuestros servicios</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 sm:px-7 py-4 text-base font-semibold border-2 shadow-sm hover:-translate-y-px transition-transform"
                  style={{
                    borderColor: "var(--navy-blue)",
                    color: "var(--navy-blue)",
                    backgroundColor: "white",
                  }}
                >
                  <Link href="/#contacto">Contáctanos</Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.15}>
            <div className="relative w-full max-w-xl mx-auto z-0">
              <div
                className="absolute -inset-12 md:-inset-16 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(140deg, rgba(0,85,164,0.24), rgba(0,38,84,0.1))",
                  borderRadius: "65% 35% 60% 40% / 40% 70% 35% 65%",
                  filter: "drop-shadow(0 24px 60px rgba(0,38,84,0.18))",
                  transform: "rotate(-4deg)",
                }}
              />
              <div
                className="absolute -inset-6 md:-inset-10 z-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 18% 28%, rgba(0,85,164,0.18), transparent 48%), radial-gradient(circle at 78% 82%, rgba(237,41,57,0.16), transparent 44%), radial-gradient(circle at 65% 20%, rgba(0,38,84,0.12), transparent 38%)",
                  borderRadius: "52% 48% 60% 40% / 58% 42% 55% 45%",
                  filter: "drop-shadow(0 30px 80px rgba(0,38,84,0.2))",
                }}
              />
              <div
                className="absolute -left-20 -top-10 h-32 w-44 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(0,85,164,0.22), rgba(0,38,84,0.08))",
                  borderRadius: "9999px",
                  filter: "blur(1px)",
                }}
                aria-hidden
              />
              <div
                className="absolute -right-20 bottom-2 h-32 w-48 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(150deg, rgba(0,85,164,0.42), rgba(0,38,84,0.16))",
                  borderRadius: "9999px",
                  filter: "blur(1px)",
                }}
                aria-hidden
              />
              <div
                className="absolute left-[-12%] right-[-12%] -bottom-16 h-28 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,85,164,0.7), rgba(0,38,84,0.9))",
                  borderRadius: "65% 35% 70% 30% / 100% 100% 40% 40%",
                  filter: "drop-shadow(0 18px 36px rgba(0,38,84,0.22))",
                }}
                aria-hidden
              />

              <div
                className="relative overflow-hidden bg-white shadow-2xl border border-white/60 z-30"
                style={{
                  borderRadius: "55% 45% 62% 38% / 62% 38% 58% 42%",
                  boxShadow: "0 32px 90px rgba(0,38,84,0.18)",
                }}
              >
                <Image
                  src="/professional-consultant-portrait-photo.jpg"
                  alt="Equipo de consultores de Allée France"
                  width={960}
                  height={1200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="mt-16 rounded-2xl border border-gray-100/80 bg-white shadow-[0_20px_60px_rgba(0,38,84,0.08)]">
            <div className="grid gap-6 sm:gap-4 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100/80">
              {stats.map(({ icon: Icon, value, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 px-6 py-6 sm:py-8"
                >
                  <div
                    className="h-12 w-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 38, 84, 0.06)", color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold leading-tight"
                      style={{ color: "var(--navy-blue)" }}
                    >
                      {value}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">{label}</p>
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
