"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react" // Agregué iconos para los botones
import Link from "next/link"
import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const featuredServices = [
  {
    id: "visa-salarie",
    title: "Visa Salarié",
    image: "/visa-salarie.png",
    link: "/servicios/visas-trabajo",
  },
  {
    id: "working-holiday",
    title: "Working Holiday",
    image: "/working-holiday.png",
    link: "/working-holiday",
  },
  {
    id: "titre-de-sejour",
    title: "Titre de Séjour",
    image: "/titre-de-séjour.png",
    link: "/servicios/titre-de-sejour",
  },
  { 
    id:"necesitas-aseoria",
    title: "Necesitas Asesoría",
    image: "/servicio_asesoria.png",
    link: "https://wa.me/33601526171",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#1e3a8a" }}>
      
      {/* Curved Wave Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-0">
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
        
        {/* Header de Sección */}
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Nuestros Servicios
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              Elige el trámite que necesitas y déjanos guiarte en tu camino hacia Francia.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grid de Servicios (Flyers) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <AnimateOnScroll key={service.id} direction="up" delay={index * 0.1}>
              
              {/* Card Container unificado */}
              <div className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-500 hover:shadow-blue-900/50 hover:-translate-y-2">
                
                {/* Imagen con Zoom suave */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                {/* Overlay Oscuro al hacer Hover (Mejora lectura del botón) - Solo en desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Botón que desliza desde abajo - Visible en mobile, hover en desktop */}
                <div className="absolute inset-x-6 bottom-6 translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 ease-out">
                  <Button
                    className="w-full bg-white text-[#1e3a8a] hover:bg-blue-50 font-bold py-4 md:py-6 rounded-xl shadow-lg border-2 border-transparent hover:border-blue-200 transition-all"
                    asChild
                  >
                    {service.id === "necesitas-aseoria" ? (
                      <a href={service.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        CONTACTAR
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    ) : (
                      <Link href={service.link} className="flex items-center justify-center gap-2">
                        MÁS INFORMACIÓN
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </Link>
                    )}
                  </Button>
                </div>

              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Botón "Ver Todos" */}
        <AnimateOnScroll direction="fade" delay={0.4}>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="group font-semibold tracking-wide text-base px-10 py-6 rounded-full border-2 text-white hover:bg-white hover:text-[#1e3a8a] bg-transparent transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
              asChild
            >
              <Link href="/servicios" className="flex items-center gap-2">
                VER TODOS LOS SERVICIOS
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>

    </section>
  )
}