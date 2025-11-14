"use client"

import { useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const testimonials = [
  {
    name: "Sofía M.",
    quote:
      "Excelente servicio. Me ayudaron con todos los documentos y el proceso fue mucho más simple de lo que imaginaba. Recomiendo 100%.",
    visaType: "Visa Étudiant",
  },
  {
    name: "Martín R.",
    quote:
      "Profesionales y atentos en cada detalle. Gracias a su asesoría conseguí mi visa de trabajo sin problemas.",
    visaType: "Visa Salarié",
  },
  {
    name: "Lucía P.",
    quote:
      "Me acompañaron durante todo el proceso. Siempre respondieron mis dudas rápidamente. Muy recomendable.",
    visaType: "Visa Saisonier",
  },
]

export function SuccessStoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
  }

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="fade" delay={0}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">Testimonios</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
              Historias reales, resultados comprobados
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Más de 100 clientes ya lograron su sueño de vivir en Francia con nuestra asesoría. Ellos cuentan cómo fue el proceso.
            </p>
          </div>

         
        </div>
        </AnimateOnScroll>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="min-w-[90%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] snap-center bg-white rounded-2xl border border-gray-100 shadow-lg p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#ED2939" }} />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed flex-1">"{testimonial.quote}"</p>

              <div className="border-t border-gray-200 my-4" />

              <p className="font-bold text-gray-800">{testimonial.name}</p>
              <p className="text-sm font-medium" style={{ color: "#ED2939" }}>
                {testimonial.visaType}
              </p>
            </article>
          ))}
        </div>
        <AnimateOnScroll direction="fade" delay={0}>
        <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Ver testimonio anterior"
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-[#002654] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mx-auto" />
            </button>
            <button
              type="button"
              aria-label="Ver testimonio siguiente"
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-[#002654] transition-colors"
            >
              <ChevronRight className="w-5 h-5 mx-auto" />
            </button>
          </div>
          </AnimateOnScroll>
      </div>
    </section>
  )
}
