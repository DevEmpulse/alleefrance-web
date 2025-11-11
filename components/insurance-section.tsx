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
    <section id="seguro" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
              Seguro válido para VVT y visados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protección completa para tu viaje y estadía en Francia
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insuranceFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <AnimateOnScroll key={index} direction="up" delay={index * 0.1}>
                <Card
                  className="p-6 text-center hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: "white" }}
                >
                <div className="space-y-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: index % 2 === 0 ? "rgba(237, 41, 57, 0.1)" : "rgba(0, 38, 84, 0.1)" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: index % 2 === 0 ? "#ED2939" : "#002654" }} />
                  </div>

                  <h3 className="text-lg font-bold" style={{ color: "#002654" }}>
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Card>
              </AnimateOnScroll>
            )
          })}
        </div>

        <AnimateOnScroll direction="fade" delay={0.4}>
          <div className="text-center">
          <Button
            size="lg"
            className="text-white font-semibold tracking-wide text-base px-8 py-6 rounded-full hover:opacity-90 transition-opacity shadow-xl hover:scale-105"
            style={{ backgroundColor: "#ED2939" }}
            asChild
          >
            <a href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon" target="_blank" rel="noopener noreferrer">
              Cotizar mi seguro
            </a>
          </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

