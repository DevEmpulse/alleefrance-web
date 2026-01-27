"use client";

import { useRef } from "react";
// Importamos los iconos desde react-icons como pediste
import { FcGoogle } from "react-icons/fc";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

// Datos reales transcritos de tus capturas
const testimonials = [
  {
    name: "Carla Behrens",
    date: "Hace 2 semanas",
    quote:
      "Excelente atención por parte de Jio para gestionar mi Visa. Resolvió todo en tiempo y forma y mi empleador quedó muy a gusto con la explicación que él brindó y como ayudo en este proceso.",
    initial: "C",
    color: "bg-blue-600",
  },
  {
    name: "Jezabel Jaramillo",
    date: "Hace 2 semanas",
    quote:
      "Jio ha sido un factor elemental en mi proceso de estadía en Francia, desde el momento uno me asesoró y generó un vínculo de respaldo... tiene una calidez humana increíble.",
    initial: "J",
    color: "bg-purple-600",
  },
  {
    name: "Pablo Augier",
    date: "Hace 2 semanas",
    quote:
      "Extremadamente satisfecho con el servicio y la ayuda, Jio nos asesoró muy bien con los pasos a seguir para conseguir la visa y gracias a su experiencia pudimos lograr la tan ansiada vuelta a Francia.",
    initial: "P",
    color: "bg-emerald-600",
  },
  {
    name: "Victoria González",
    date: "Hace 2 semanas",
    quote:
      "Super recomendable, Jio es muy atento, responsable y profesional con su trabajo. Nos asesoró y nos brindó mucha información valiosa.",
    initial: "V",
    color: "bg-orange-500",
  },
  {
    name: "Carolina Vernaz",
    date: "Hace 2 semanas",
    quote:
      "Excelente servicio!! La verdad que nosotros tuvimos muchos inconvenientes porque el proceso lo realizamos en un momento donde cambiaron muchas cosas, y supieron guiarnos.",
    initial: "C",
    color: "bg-gray-600",
  },
];

export function SuccessStoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonios"
      className="py-20 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#002654]">
                Historias reales, resultados comprobados
              </h2>
              <p className="text-lg text-slate-600">
                La tranquilidad de saber que estás en manos de expertos. Así lo
                vivieron ellos:
              </p>
            </div>

            {/* Botones de Navegación (Escritorio) */}
            <div className="hidden md:flex gap-3">
              <button
                type="button"
                aria-label="Ver opinion anterior"
                onClick={() => handleScroll("left")}
                className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-[#002654] hover:text-white hover:border-[#002654] transition-all shadow-sm"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button
                type="button"
                aria-label="Ver opinion siguiente"
                onClick={() => handleScroll("right")}
                className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-[#002654] hover:text-white hover:border-[#002654] transition-all shadow-sm"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Carrusel de Testimonios */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] snap-center bg-white rounded-2xl p-6 flex flex-col relative shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-100 transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Logo de Google pequeño en la tarjeta para autenticidad */}
              <div className="absolute top-6 right-6 opacity-50 grayscale group-hover:grayscale-0">
                <FcGoogle className="text-xl" />
              </div>

              {/* Header: Avatar + Nombre */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} text-white flex items-center justify-center font-bold text-lg shadow-sm`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-none">
                    {testimonial.name}
                  </p>
                  <span className="text-xs text-gray-400 font-medium">
                    {testimonial.date}
                  </span>
                </div>
              </div>

              {/* Estrellas */}
              <div className="flex gap-1 mb-3 text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Cita */}
              <div className="relative">
                <FaQuoteRight className="absolute -top-1 -left-1 text-slate-100 text-4xl -z-10" />
                <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Footer con Botón CTA */}
        <AnimateOnScroll direction="up" delay={0.2}>
          <div className="flex flex-col items-center justify-center mt-8 gap-6">
            {/* Navegación Móvil */}
            <div className="flex md:hidden gap-4">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Ver anterior"
                className="p-3 rounded-full border border-gray-300 bg-white shadow-sm active:scale-95 transition-transform"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Ver siguiente"
                className="p-3 rounded-full border border-gray-300 bg-white shadow-sm active:scale-95 transition-transform"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Botón Principal */}
            <a
              href="https://share.google/NA0uNhNw0Rxzr7NIW"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border-2 border-[#002654]/20 hover:border-[#002654] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <FcGoogle className="text-xl" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#002654]">5.0</span>
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <span className="text-sm font-semibold text-[#002654] border-l border-gray-300 pl-3 ml-1">
                Ver las +40 reseñas en Google
              </span>
              <svg
                className="w-4 h-4 text-[#002654] group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
