"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white relative -mt-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mapa de Francia - Mobile: Visible normalmente */}
        <AnimateOnScroll direction="right" delay={0.2}>
          <div className="flex items-start justify-end -mt-48 mb-4 sm:hidden -mr-8">
            <img 
              src="/mapitafrancia.png" 
              alt="Mapa de Francia" 
              className="max-w-xs h-auto -mr-4"
            />
          </div>
        </AnimateOnScroll>

        {/* Mapa de Francia - Desktop: Posición original */}
        <AnimateOnScroll direction="right" delay={0.2}>
          <div className="hidden sm:flex items-start justify-center pl-[750px] lg:pl-[800px] lg:-mt-52 z-10">
            <img 
              src="/mapitafrancia.png" 
              alt="Mapa de Francia" 
              className="w-full max-w-xl lg:max-w-2xl h-auto"
            />
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimateOnScroll direction="left" delay={0}>
            <div className="space-y-6 sm:-mt-16">
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: "#002654" }}>
                ¿QUÉ ES ALLÉE FRANCE?
              </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Allée France es tu socio de confianza en el proceso migratorio hacia Francia. Somos especialistas en
                trámites de visas, permisos de trabajo, reagrupación familiar y todos los servicios necesarios para
                hacer realidad tu sueño francés.
              </p>

              <p>
                Nuestro equipo de expertos te acompaña desde el primer paso hasta tu llegada a Francia, asegurando que
                cada documento esté en orden y que comprendas completamente el proceso.
              </p>

              <p>
                Con años de experiencia y cientos de casos exitosos, conocemos los requisitos exactos de cada tipo de
                visa y te guiamos para maximizar tus posibilidades de aprobación.
              </p>
            </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}
