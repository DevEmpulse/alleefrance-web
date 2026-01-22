"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SiWhatsapp } from "react-icons/si"

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
      <div className="relative min-h-[700px] lg:min-h-[850px] xl:min-h-[870px] pt-16" style={{ backgroundColor: "#1e3a8a" }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-lyon.jpg"
            alt="Vista de Lyon, Francia - Allée France te acompaña en tu proyecto migratorio"
            fill
            className="object-cover object-center"
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgIBAwUBAAAAAAAAAAAAAQIDBAAFESEGEhMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAACAQMRIf/aAAwDAQACEQMRAD8AydLF7U9TqWJLyTBIowscR7B8j2x8qnxg8g4yRgcYxjJWTqIpqP/Z"
          />
          {/* Overlay azul suave */}
          <div className="absolute inset-0 bg-blue-700/45 pointer-events-none"></div>
          {/* Degradado negro en la parte superior */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 lg:pt-48 pb-40 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight"
          >
            Tu proyecto en Francia, con acompañamiento profesional
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Te acompaño paso a paso: Salarié/Saisonnier, VVT, Titres de séjour y asesorías personalizadas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 max-w-5xl mx-auto px-4"
          >
            {/* CTA Principal */}
            <Button
              size="lg"
              className="text-white font-semibold tracking-wide text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] transition-all duration-200 shadow-xl w-full sm:w-auto sm:flex-shrink-0"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <Link href="/servicios/visas-trabajo">
                Quiero mi visa Salarié/Saisonnier
              </Link>
            </Button>
            
            {/* CTA Secundario - Working Holiday */}
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold tracking-wide text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:bg-white hover:text-[#002654] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl w-full sm:w-auto sm:flex-shrink-0"
              asChild
            >
              <Link href="/working-holiday">
                Visa Working Holiday (VVT)
              </Link>
            </Button>
            
            {/* CTA WhatsApp */}
            <Button
              size="lg"
              className="bg-[#25D366] text-white font-semibold tracking-wide text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full hover:bg-[#22c55e] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl w-full sm:w-auto sm:flex-shrink-0"
              asChild
            >
              <a href="https://wa.me/33601526171" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <SiWhatsapp className="w-5 h-5" />
                Agenda una asesoría
              </a>
            </Button>
          </motion.div>
        </div>

        
        {/* Estadísticas - Unificado mobile/desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-8 left-3 sm:bottom-6 sm:left-4 lg:left-16 z-20"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-6 py-3 sm:py-5 w-[140px] sm:w-auto">
            <div className="flex flex-col gap-1 sm:gap-2">
              <p className="text-[10px] sm:text-sm font-semibold text-gray-700 uppercase tracking-wide leading-tight">
                Líder en el Mercado
              </p>
              <p className="text-[10px] sm:text-sm text-gray-600 leading-tight">
                por más de 2 años
              </p>
              <div className="flex items-baseline gap-0.5 sm:gap-1 flex-wrap">
                <span className="text-xl sm:text-3xl lg:text-4xl font-bold leading-none" style={{ color: "#ED2939" }}>
                  <AnimatedCounter end={700} duration={2500} />
                </span>
                <span className="text-[10px] sm:text-sm lg:text-base font-semibold text-gray-700 leading-tight">
                  casos exitosos
                </span>
              </div>
            </div>
          </div>
        </motion.div>

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
