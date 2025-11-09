"use client"

import { Button } from "@/components/ui/button"
import { CountryName } from "@/components/country-name"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function AnimatedCounter({ end, duration = 2500, delay = 500 }: { end: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Pequeño delay para que la animación se inicie después de que la página cargue
    const timer = setTimeout(() => {
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay])

  return <span>+{count}</span>
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background with Paris Image and Blue Overlay */}
      <div className="relative min-h-[600px] lg:min-h-[700px] pt-16" style={{ backgroundColor: "#1e3a8a" }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-lyon.png"
            alt="Torre Eiffel y río Sena en París - Allée France"
            fill
            className="object-cover object-center blur-[0.5px]"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Overlay azul suave */}
          <div className="absolute inset-0 bg-blue-700/45 pointer-events-none"></div>
          {/* Degradado negro en la parte superior */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Trabajar y vivir en Francia, sin enredos.
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Te acompaño paso a paso: Salarié/Saisonnier, VVT, Titres de séjour y asesorías personalizadas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 max-w-5xl mx-auto px-4">
            <Button
              size="lg"
              className="text-white font-semibold tracking-wide text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:opacity-90 transition-opacity shadow-xl w-full sm:w-auto sm:flex-shrink-0"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <Link href="/servicios/visas-trabajo">
                Quiero mi visa Salarié/Saisonnier
              </Link>
            </Button>
            
            <Button
              size="lg"
              className="text-white font-semibold tracking-wide text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:opacity-90 transition-opacity shadow-xl w-full sm:w-auto sm:flex-shrink-0"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <Link href="/working-holiday">
                Visa Working Holiday (VVT)
              </Link>
            </Button>
            
            <Button
              size="lg"
              className="text-white font-semibold tracking-wide text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:opacity-90 transition-opacity shadow-xl w-full sm:w-auto sm:flex-shrink-0"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <a href="https://wa.me/33601526171" target="_blank" rel="noopener noreferrer">
                Agenda una asesoría
              </a>
            </Button>
          </div>
        </div>

        
        {/* Estadísticas - Desktop: Posicionadas absolutamente en la parte inferior izquierda */}
        <div className="hidden sm:block sm:bottom-2 absolute left-4 lg:left-16 z-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <p className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide leading-tight">
                Líder en el Mercado
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                por más de 2 años
              </p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-none" style={{ color: "#ED2939" }}>
                  <AnimatedCounter end={300} duration={2500} />
                </span>
                <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700 leading-tight">
                  casos exitosos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas - Mobile: Sobre la imagen, más arriba */}
        <div className="block sm:hidden absolute bottom-8 left-3 z-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-3 w-[140px]">
            <div className="flex flex-col gap-1">
              <p className="text-[10px] font-semibold text-gray-700 uppercase tracking-wide leading-tight">
                Líder en el Mercado
              </p>
              <p className="text-[10px] text-gray-600 leading-tight">
                por más de 2 años
              </p>
              <div className="flex items-baseline gap-0.5 flex-wrap">
                <span className="text-xl font-bold leading-none" style={{ color: "#ED2939" }}>
                  <AnimatedCounter end={300} duration={2500} />
                </span>
                <span className="text-[10px] font-semibold text-gray-700 leading-tight">
                  casos exitosos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </div>

    </section>
  )
}
