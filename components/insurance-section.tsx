"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Heart, Plane, Calendar, Users, CheckCircle2, Star } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const insuranceFeatures = [
  {
    icon: Heart,
    title: "Enfermedad",
    description: "Cobertura médica completa ante cualquier síntoma o enfermedad.",
    color: "text-rose-400",
    bg: "bg-rose-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Hospitalización",
    description: "Protección total en gastos de internación y tratamientos.",
    color: "text-blue-300",
    bg: "bg-blue-500/20",
  },
  {
    icon: Plane,
    title: "Repatriación",
    description: "Servicio sanitario de regreso inmediato en caso de emergencia.",
    color: "text-emerald-300",
    bg: "bg-emerald-500/20",
  },
  {
    icon: Calendar,
    title: "Toda la estadía",
    description: "Cobertura 24/7 durante tu tiempo en Francia y la Zona Schengen.",
    color: "text-amber-300",
    bg: "bg-amber-500/20",
  },
]

export function InsuranceSection() {
  return (
    <section
      id="seguro"
      className="relative overflow-hidden pt-8 pb-16 md:pb-20"
      style={{
        background: "radial-gradient(circle at 50% 0%, #2563EB 0%, #1E3A8A 60%, #172554 100%)",
      }}
    >
      {/* Elementos decorativos de fondo (Orbes de luz) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Badge de Partner Oficial - Moved to top for better visibility */}
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white/15 backdrop-blur-md border-2 border-white/20 rounded-full px-4 md:px-5 py-2 md:py-2.5 shadow-lg">
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white">
                Partner Oficial
              </span>
              <div className="h-4 w-[1px] bg-white/30"></div>
              <Image
                  src="/ATV_logo-naranja-blanco.webp"
                  alt="Aseguratuviaje"
                  width={100}
                  height={25}
                  className="h-5 md:h-6 w-auto object-contain brightness-0 invert" 
                />
            </div>
          </div>
        </AnimateOnScroll>
        
        {/* Header Section */}
        <AnimateOnScroll direction="fade" delay={0.1}>
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-white tracking-tight">
              Tu visa aprobada,<br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                tu viaje protegido.
              </span>
            </h2>
            <p className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              El seguro obligatorio para entrar a Europa. Cumple con todos los requisitos consulares.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6 items-center mb-6 md:mb-8">
          
          {/* Columna Izquierda: Features (5 columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-2 md:gap-2.5">
            {insuranceFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AnimateOnScroll key={index} direction="left" delay={index * 0.1}>
                  <Card
                    className="group p-3 md:p-3.5 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
                               hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 md:gap-3.5">
                      <div className={`p-2 md:p-2.5 rounded-lg md:rounded-xl ${feature.bg} flex-shrink-0 mt-0.5`}>
                        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${feature.color}`} />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-semibold text-white mb-0.5 md:mb-1 group-hover:text-blue-100 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-xs md:text-sm text-blue-100/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimateOnScroll>
              )
            })}
          </div>

          {/* Columna Derecha: Imagen Hero + Stats (7 columnas) */}
          <div className="lg:col-span-7 relative pl-0 lg:pl-8">
            <AnimateOnScroll direction="right" delay={0.2}>
              
              {/* Contenedor de Imagen Principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                {/* Overlay gradiente para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/80 via-transparent to-transparent z-10" />
                
                {/* Imagen: Sugiero cambiar a una foto de viajero "backpacker" o mirando un mapa */}
                <div className="relative h-[280px] md:h-[320px] lg:h-[360px] w-full">
                   <Image
                    src="/twopersonhappy.png" // Reemplazar con imagen de viajero joven
                    alt="Viajeros en Europa"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Panel de Estadísticas (Integrado abajo) */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-xl border-t border-white/10 p-3 md:p-4">
                  <div className="flex flex-col sm:flex-row items-center justify-around gap-4 md:gap-5">
                    
                    {/* Stat 1 */}
                    <div className="flex items-center gap-2 md:gap-2.5">
                      <div className="bg-white/10 p-1.5 md:p-2 rounded-full ring-1 ring-white/20">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-200" />
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-bold text-white leading-none">+10k</p>
                        <p className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wide mt-0.5 md:mt-1">Viajeros Asegurados</p>
                      </div>
                    </div>

                    <div className="hidden sm:block w-px h-8 md:h-10 bg-white/10"></div>

                    {/* Stat 2 */}
                    <div className="flex items-center gap-2 md:gap-2.5">
                      <div className="bg-white/10 p-1.5 md:p-2 rounded-full ring-1 ring-white/20">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-bold text-white leading-none">4.9/5</p>
                        <p className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wide mt-0.5 md:mt-1">Valoración Promedio</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* CTA Section */}
        <AnimateOnScroll direction="fade" delay={0.4}>
          <div className="flex flex-col items-center justify-center mt-4 md:mt-6">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-[#ED2939] hover:bg-[#D61E2E] text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full shadow-xl shadow-red-600/20 transition-all hover:scale-105"
              asChild
            >
              <a
                href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Cotizar mi Seguro Ahora
                  <Plane className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            </Button>
            
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-blue-200/60 flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
              Certificado oficial enviado a tu email al instante
            </p>
          </div>
        </AnimateOnScroll>

      </div>
      
      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-8 md:h-12 lg:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}