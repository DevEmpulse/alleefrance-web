"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Heart, Plane, Calendar, Users, CheckCircle2 } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const insuranceFeatures = [
  {
    icon: Heart,
    title: "Enfermedad",
    description: "Cobertura médica completa para cualquier enfermedad durante tu estadía.",
  },
  {
    icon: ShieldCheck,
    title: "Hospitalización",
    description: "Protección ante gastos de hospitalización y tratamientos médicos.",
  },
  {
    icon: Plane,
    title: "Repatriación",
    description: "Servicio de repatriación sanitaria en caso de emergencia médica.",
  },
  {
    icon: Calendar,
    title: "Toda la estadía",
    description: "Cobertura continua durante toda tu estadía en Francia y la UE.",
  },
]

export function InsuranceSection() {
  return (
    <section
      id="seguro"
      className="relative overflow-hidden py-6 md:py-8"
      style={{
        background: "linear-gradient(180deg, #1E3A8A 0%, #2563EB 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
              Seguro internacional válido para cualquier visa
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Cobertura total, asistencia real, viajes sin preocupaciones.
            </p>

            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Seguro oficial
              </p>
              <div className="flex items-center justify-center gap-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur border border-white/20">
                <Image
                  src="/ATV_logo-naranja-blanco.webp"
                  alt="Aseguratuviaje.com"
                  width={180}
                  height={48}
                  className="h-8 md:h-10 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Línea tricolor Francia */}
            <div className="mt-3 flex justify-center gap-[3px]">
              <span className="h-0.5 md:h-1 w-8 md:w-12 rounded-full bg-[#002654]" />
              <span className="h-0.5 md:h-1 w-8 md:w-12 rounded-full bg-white" />
              <span className="h-0.5 md:h-1 w-8 md:w-12 rounded-full bg-[#ED2939]" />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Grid Content: Cards + Image/Stats */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start mb-6 md:mb-8">
          {/* Columna Izquierda: Cards (Rectangulares Horizontales) */}
          <div className="flex flex-col gap-2 md:gap-3">
            {insuranceFeatures.map((feature, index) => {
              const Icon = feature.icon

              const circleBg =
                index % 2 === 0 ? "rgba(237, 41, 57, 0.3)" : "rgba(0, 38, 84, 0.3)"

              return (
                <AnimateOnScroll key={index} direction="left" delay={index * 0.1}>
                  <Card
                    className="p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                               transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white/15"
                  >
                    <div className="flex items-center gap-3 md:gap-4 text-left">
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: circleBg }}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold text-white mb-0.5">
                          {feature.title}
                        </h3>

                        <p className="text-xs md:text-sm text-white/90 leading-snug">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimateOnScroll>
              )
            })}
          </div>

          {/* Columna Derecha: Imagen + Stats */}
          <div className="relative">
            <AnimateOnScroll direction="right" delay={0.2}>
              {/* Imagen con difuminado */}
              <div className="relative h-[180px] md:h-[220px] lg:h-[250px] w-full rounded-2xl overflow-hidden shadow-2xl mb-4">
                {/* Overlay degradado para difuminar el borde izquierdo */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-transparent to-transparent z-10 opacity-90 sm:opacity-70" />
                
                <Image
                  src="/happy-family-in-france.jpg"
                  alt="Turistas felices"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Trust Counter Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-white px-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl md:text-2xl font-bold text-white leading-none">+10,000</p>
                    <p className="text-xs md:text-sm text-blue-100 leading-tight">Viajeros asegurados con nosotros</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xl md:text-2xl font-bold text-white leading-none">100%</p>
                    <p className="text-xs md:text-sm text-blue-100 leading-tight">Certificado aceptado en consulados</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll direction="fade" delay={0.4}>
          <div className="text-center">
            <Button
              size="lg"
              className="text-white font-semibold tracking-wide text-sm md:text-base px-8 md:px-10 py-4 md:py-5 rounded-full
                         shadow-xl transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <a
                href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar mi seguro ahora
              </a>
            </Button>

            <p className="mt-2 md:mt-3 text-xs md:text-sm text-white/80">
              Requisito obligatorio para visas y estadías en el extranjero.
            </p>
          </div>
         
        </AnimateOnScroll>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
