"use client"

import { Card } from "@/components/ui/card"
import { Shield, FileText, Award } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const benefits = [
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protección total de tus datos y documentos durante todo el proceso migratorio.",
  },
  {
    icon: FileText,
    title: "Renueva tu Pasaporte",
    description: "Te ayudamos con la renovación de pasaporte y documentos de identidad necesarios.",
  },
  {
    icon: Award,
    title: "Pruebas Suficiencias",
    description: "Preparación y asesoría para exámenes de idioma y certificaciones requeridas.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#1e3a8a" }}>
      {/* Curved Wave Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">BENEFICIOS</h2>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">TIPS MIGRATORIOS</h2>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <AnimateOnScroll key={index} direction="up" delay={index * 0.15}>
                <Card className="p-8 bg-white text-center hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: "rgba(30, 58, 138, 0.1)" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: "#1e3a8a" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>

      {/* Curved Wave Bottom */}
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
