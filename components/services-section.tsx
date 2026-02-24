"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const featuredServices = [
  {
    id: "visa-salarie",
    title: "Visa Salarié",
    image: "/visa-salarie.webp",
    link: "/servicios/visas-trabajo",
    description:
      "Gestión completa para tu visa de trabajo y preparación del expediente.",
    alt: "Servicio de Visa Salarié Francia - Contrato de trabajo CDI y CDD para extranjeros",
  },
  {
    id: "working-holiday",
    title: "Working Holiday",
    image: "/working-holiday.webp",
    link: "/working-holiday",
    description:
      "Acompañamiento integral para vivir y trabajar en Francia por una temporada.",
    alt: "Visa Working Holiday Francia - Programa de vacaciones y trabajo para jóvenes latinoamericanos",
  },
  {
    id: "titre-de-sejour",
    title: "Titre de Séjour",
    image: "/titre-de-sejour.webp",
    link: "/servicios/titre-de-sejour",
    description:
      "Regulariza tu residencia con asesoría personalizada y seguimiento.",
    alt: "Titre de Séjour Francia - Permiso de residencia y renovación para extranjeros",
  },
  {
    id: "necesitas-aseoria",
    title: "Necesitas Asesoría",
    image: "/servicio_asesoria.webp",
    link: "https://wa.me/33601526171",
    description: "Contactanos por WhatsApp y respondemos tus dudas en minutos.",
    alt: "Asesoría migratoria personalizada Francia - Consulta por WhatsApp con expertos",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #1e3a8a 0%, #1e3a8a 70%, #002590 100%)",
      }}
    >
      {/* Curved Wave Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-16 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="white"
          />
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
              Elige el trámite que necesitas y déjanos guiarte en tu camino
              hacia Francia.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grid de Servicios (Flyers) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <AnimateOnScroll
              key={service.id}
              direction="up"
              delay={index * 0.1}
            >
              {/* Card Container unificado */}
              <div className="group relative w-full aspect-3/4 rounded-2xl overflow-hidden bg-white shadow-2xl transition-all duration-500 hover:shadow-blue-900/50 hover:-translate-y-2 cursor-pointer">
                {/* Link que cubre toda la card */}
                {service.id === "necesitas-aseoria" ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    aria-label={service.title}
                  />
                ) : (
                  <Link
                    href={service.link}
                    className="absolute inset-0 z-20"
                    aria-label={service.title}
                  />
                )}

                {/* Imagen con Zoom suave */}
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  loading="lazy"
                />

                {/* Overlay Oscuro - Siempre visible en la parte inferior para el botón */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300" />

                {/* Texto descriptivo en hover */}
                <div className="absolute inset-x-6 bottom-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-base font-semibold text-white drop-shadow-md">
                    {service.description}
                  </p>
                </div>

                {/* Botón siempre visible (visual, el click lo maneja el link superior) */}
                <div className="absolute inset-x-6 bottom-6 z-10 pointer-events-none">
                  <div className="w-full bg-white text-[#1e3a8a] text-sm font-bold py-2.5 md:py-3 rounded-xl shadow-lg border-2 border-transparent group-hover:border-blue-200 transition-all flex items-center justify-center gap-2">
                    {service.id === "necesitas-aseoria"
                      ? "CONTACTAR"
                      : "MÁS INFORMACIÓN"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
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
  );
}
