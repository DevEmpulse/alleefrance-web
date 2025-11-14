"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Heart, Plane, Calendar } from "lucide-react"
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
    title: "Toda la estancia",
    description: "Cobertura continua durante toda tu estadía en Francia y la UE.",
  },
]

export function InsuranceSection() {
  return (
    <section
      id="seguro"
      className="relative overflow-hidden py-8 "
      style={{
        background: "linear-gradient(180deg, #1E3A8A 0%, #2563EB 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Seguro válido para VVT y visados
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Viaja seguro, tranquilo y cumpliendo todos los requisitos del consulado francés.
            </p>

            {/* Línea tricolor Francia */}
            <div className="mt-6 flex justify-center gap-[3px]">
              <span className="h-1 w-12 rounded-full bg-[#002654]" />
              <span className="h-1 w-12 rounded-full bg-white" />
              <span className="h-1 w-12 rounded-full bg-[#ED2939]" />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insuranceFeatures.map((feature, index) => {
            const Icon = feature.icon

            const circleBg =
              index % 2 === 0 ? "rgba(237, 41, 57, 0.08)" : "rgba(0, 38, 84, 0.08)"

            const iconColor = index % 2 === 0 ? "#ED2939" : "#002654"

            return (
              <AnimateOnScroll key={index} direction="up" delay={index * 0.1}>
                <Card
                  className="p-8 text-center rounded-2xl bg-white/95 border border-slate-100 shadow-md backdrop-blur
                             transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                      style={{ backgroundColor: circleBg }}
                    >
                      <Icon className="w-8 h-8" style={{ color: iconColor }} />
                    </div>

                    <h3 className="text-lg font-bold text-[#002654]">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* CTA */}
        <AnimateOnScroll direction="fade" delay={0.4}>
          <div className="text-center">
            <Button
              size="lg"
              className="text-white font-semibold tracking-wide text-base px-10 py-6 rounded-full
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

            <p className="mt-4 text-sm text-white/80">
              Requisito obligatorio para visas y estadías en Francia.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
