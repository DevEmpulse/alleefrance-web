"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  FileText,
  Calendar,
  Briefcase,
  Sprout,
  Scale,
  Link as LinkIcon,
  CheckCircle,
  AlertTriangle,
  Euro,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Navbar } from "@/components/navbar";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Footer } from "@/components/footer";

export default function VisasTrabajoPage() {
  const [selectedVisa, setSelectedVisa] = useState<"salarie" | "saisonnier">("salarie");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
          backgroundImage: "url('/visas-trabajo-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "rgba(0, 38, 84, 0.85)" }}
        ></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Scale className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visas de Trabajo en Francia
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Descubre las dos vías principales para trabajar legalmente: <br/>
            <strong>Visa Salarié</strong> (Estabilidad a largo plazo) y <strong>Visa Saisonnier</strong> (Trabajo por temporadas).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="font-semibold tracking-wide text-white hover:opacity-90"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <a
                href="https://wa.me/33601526171"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                CONSULTAR POR WHATSAPP
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-white hover:bg-gray-50"
              style={{ color: "#002654" }}
              asChild
            >
              <a
                href="https://alleefrancelyon.taplink.ws"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                AGENDAR ASESORÍA
              </a>
            </Button>
          </div>
          
          {/* Comunidad WhatsApp */}
          <AnimateOnScroll direction="fade" delay={0.3}>
            <div className="flex justify-center">
              <a
                href="https://chat.whatsapp.com/Jp7yTFyDhAM3i4dhHW0m8Z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <SiWhatsapp className="w-6 h-6" />
                <span>Únete a la Comunidad Salarié / Saisonnier</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* Sección Comparativa Lado a Lado */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Comparativa y Proceso
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Analiza paso a paso cuál es la opción ideal para tu perfil profesional.
              </p>
            </div>  
          </AnimateOnScroll>
          <p className="text-center text-gray-700 mb-8">Elige una visa para ver el proceso completo</p>
          {/* Selector de Visa para Mobile */}
          <div className="lg:hidden mb-8">
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setSelectedVisa("salarie")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-semibold transition-all duration-200 ${
                  selectedVisa === "salarie"
                    ? "bg-white text-[#002654] shadow-md"
                    : "text-gray-600 hover:text-[#002654]"
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>Salarié</span>
              </button>
              <button
                onClick={() => setSelectedVisa("saisonnier")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-semibold transition-all duration-200 ${
                  selectedVisa === "saisonnier"
                    ? "bg-white text-[#ED2939] shadow-md"
                    : "text-gray-600 hover:text-[#ED2939]"
                }`}
              >
                <Sprout className="w-5 h-5" />
                <span>Saisonnier</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
            
            {/* Divisor vertical para pantallas grandes */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

            {/* ================= COLUMNA IZQUIERDA: VISA SALARIÉ ================= */}
            <div className={`space-y-8 ${selectedVisa !== "salarie" ? "hidden lg:block" : ""}`}>
              <div className="text-center mb-8 lg:sticky lg:top-24 bg-white/95 backdrop-blur z-20 py-4 border-b border-gray-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3" style={{ backgroundColor: "rgba(0, 38, 84, 0.1)" }}>
                  <Briefcase className="w-5 h-5" style={{ color: "#002654" }} />
                  <span className="text-sm font-bold uppercase tracking-wide" style={{ color: "#002654" }}>
                    Visa Salarié
                  </span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Permanente (CDI/CDD)
                </h3>
              </div>

              {/* Paso 1: DEFINICION */}
              <AnimateOnScroll direction="right" delay={0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#002654" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#002654" }}>1</span>
                    <h4 className="font-bold text-lg text-gray-800">Definición y Alcance</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Es un permiso de residencia y trabajo destinado a personas contratadas mediante un <strong>CDI</strong> (indefinido) o <strong>CDD de larga duración</strong>.
                  </p>
                  <div className="bg-blue-50 p-3 rounded text-sm text-[#002654]">
                    <strong>Valor principal:</strong> Estabilidad, claridad jurídica y proyección a largo plazo (residencia).
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 2: OFERTA */}
              <AnimateOnScroll direction="right" delay={0.2}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#002654" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#002654" }}>2</span>
                    <h4 className="font-bold text-lg text-gray-800">Oferta y Métier en Tension</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Se requiere una oferta formal vinculada a un <strong>código ROME</strong>. Si el puesto está en la lista de <em>Métiers en Tension</em> (escasez de personal), el proceso es <strong>más ágil</strong>.
                  </p>
                  <a href="https://www.legifrance.gouv.fr" target="_blank" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                    <LinkIcon className="w-3 h-3" /> Consultar lista regional (Légifrance)
                  </a>
                </div>
              </AnimateOnScroll>

              {/* Paso 3: FRANCE TRAVAIL */}
              <AnimateOnScroll direction="right" delay={0.3}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#002654" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#002654" }}>3</span>
                    <h4 className="font-bold text-lg text-gray-800">Publicación (France Travail)</h4>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">
                        Si el oficio <strong>NO</strong> está en tensión, es obligatorio publicar la oferta por <strong>21 días</strong> en France Travail para control del mercado laboral.
                      </p>
                      <p className="text-xs bg-gray-100 p-2 rounded">
                        <strong>Importante:</strong> Cualquier modificación reinicia el contador de 21 días.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 4: PROCEDIMIENTO */}
              <AnimateOnScroll direction="right" delay={0.4}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#002654" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#002654" }}>4</span>
                    <h4 className="font-bold text-lg text-gray-800">Tiempos y ANEF</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#002654]" />
                      <span>Plataforma: Ministerio del Interior (ANEF).</span>
                    </li>
                    <li className="flex gap-2">
                      <Clock className="w-4 h-4 text-[#002654]" />
                      <span>Revisión autorización: <strong>2 a 8 semanas</strong>.</span>
                    </li>
                    <li className="flex gap-2">
                      <FileText className="w-4 h-4 text-[#002654]" />
                      <span>Emisión visa (Consulado): <strong>~15 días</strong>.</span>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>

               {/* Paso 5: VALIDACION */}
               <AnimateOnScroll direction="right" delay={0.5}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#002654" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#002654" }}>5</span>
                    <h4 className="font-bold text-lg text-gray-800">Validación en Francia</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Al llegar, es <strong>obligatorio</strong> validar la visa online, registrarse en seguridad social y activar derechos laborales.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 p-2 rounded">
                    <CheckCircle className="w-4 h-4" />
                    Renovable hacia residencia larga duración.
                  </div>
                </div>
              </AnimateOnScroll>

            </div>

            {/* ================= COLUMNA DERECHA: VISA SAISONNIER ================= */}
            <div className={`space-y-8 ${selectedVisa !== "saisonnier" ? "hidden lg:block" : ""}`}>
              <div className="text-center mb-8 lg:sticky lg:top-24 bg-white/95 backdrop-blur z-20 py-4 border-b border-gray-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3" style={{ backgroundColor: "rgba(237, 41, 57, 0.1)" }}>
                  <Sprout className="w-5 h-5" style={{ color: "#ED2939" }} />
                  <span className="text-sm font-bold uppercase tracking-wide" style={{ color: "#ED2939" }}>
                    Visa Saisonnier
                  </span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Estacional (3 a 6 meses)
                </h3>
              </div>

              {/* Paso 1: DEFINICION */}
              <AnimateOnScroll direction="left" delay={0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#ED2939" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#ED2939" }}>1</span>
                    <h4 className="font-bold text-lg text-gray-800">Definición y Alcance</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Para trabajos estacionales (Hotelería, Agro, Turismo, Ski) con contratos de <strong>3 a 6 meses</strong>.
                  </p>
                  <div className="bg-red-50 p-3 rounded text-sm text-[#ED2939]">
                    <strong>Limitación:</strong> No otorga derecho anual. Máximo 6 meses de trabajo por año. Renovable por 3 años consecutivos.
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 2: OFERTA */}
              <AnimateOnScroll direction="left" delay={0.2}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#ED2939" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#ED2939" }}>2</span>
                    <h4 className="font-bold text-lg text-gray-800">Sectores Estacionales</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Muchos oficios estacionales pertenecen a <em>Métiers en Tension</em>, especialmente en regiones turísticas, facilitando la aprobación.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Hotelería", "Restauración", "Montaña", "Agro"].map(tag => (
                      <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded border border-gray-200">{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 3: FRANCE TRAVAIL */}
              <AnimateOnScroll direction="left" delay={0.3}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#ED2939" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#ED2939" }}>3</span>
                    <h4 className="font-bold text-lg text-gray-800">Publicación (Excepción)</h4>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="text-sm text-gray-600">
                      <p className="mb-2">
                        En la mayoría de casos estacionales (alta demanda), <strong>NO es necesario</strong> publicar la oferta por 3 semanas.
                      </p>
                      <p className="text-xs text-gray-500">
                        *Solo si el oficio no es estacional ni está en tensión, se requieren los 21 días.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 4: PROCEDIMIENTO */}
              <AnimateOnScroll direction="left" delay={0.4}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#ED2939" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#ED2939" }}>4</span>
                    <h4 className="font-bold text-lg text-gray-800">Tiempos y ANEF</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ED2939]" />
                      <span>Plataforma: ANEF Empleadores.</span>
                    </li>
                    <li className="flex gap-2">
                      <Clock className="w-4 h-4 text-[#ED2939]" />
                      <span>Revisión autorización: <strong>2 a 8 semanas</strong>.</span>
                    </li>
                    <li className="flex gap-2">
                      <FileText className="w-4 h-4 text-[#ED2939]" />
                      <span>Emisión visa: <strong>~15 días</strong>.</span>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>

               {/* Paso 5: VALIDACION */}
               <AnimateOnScroll direction="left" delay={0.5}>
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: "#ED2939" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#ED2939" }}>5</span>
                    <h4 className="font-bold text-lg text-gray-800">Validación y Costo</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-2 rounded text-sm border border-gray-200">
                        <span className="font-bold text-[#002654]">Menos de 3 meses:</span> NO se valida. Sin trámites extra.
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-sm border border-gray-200">
                        <span className="font-bold text-[#002654]">3 a 6 meses:</span> Validación obligatoria + Carte de Séjour Saisonnier.
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-green-700 bg-green-50 p-2 rounded">
                        <Euro className="w-4 h-4" />
                        Costo de emisión: 0€ (Gratuito).
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>

          {/* Pasos 6 y 7 Compartidos - Ancho completo */}
          <div className="mt-16 space-y-8">
            {/* Paso 6: ACOMPAÑAMIENTO */}
            <AnimateOnScroll direction="up" delay={0.6}>
              <div className="relative group">
                <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-xl p-6 md:p-10 shadow-lg border-t-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  style={{ borderTopColor: "#002654" }}>
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#002654] via-[#002654] to-[#002654]/30"></div>
                  
                  <div className="relative z-10 pl-4">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-md bg-[#002654]">
                          <span className="text-3xl font-bold text-white">6</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle2 className="w-8 h-8" style={{ color: "#002654" }} />
                          <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                            ACOMPAÑAMIENTO PROFESIONAL
                          </h3>
                        </div>
                        <div className="text-base text-gray-700 leading-relaxed space-y-3">
                          <p>
                            En <strong>Allée France Lyon</strong> te acompaño personalmente. Soy <strong>Jio</strong>, especialista en trámites migratorios, con <strong>más de 400 procesos exitosos</strong>.
                          </p>
                          <p>
                            Trabajamos en coordinación directa con tu empleador (desde pequeños negocios familiares hasta grandes empresas) para asegurar un expediente limpio, completo y aprobado en tiempo récord.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Paso 7: COMUNIDAD */}
            <AnimateOnScroll direction="up" delay={0.7}>
              <div className="relative group">
                <div className="bg-gradient-to-br from-[#002654] via-[#003d7a] to-[#ED2939] rounded-xl p-6 md:p-10 shadow-2xl border-t-4 hover:scale-[1.01] transition-all duration-300 text-white relative overflow-hidden"
                  style={{ borderTopColor: "#25D366" }}>
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#25D366] via-[#25D366] to-[#25D366]/50"></div>
                  
                  <div className="relative z-10 pl-4">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 shadow-lg">
                          <span className="text-3xl font-bold text-white">7</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          COMUNIDAD SALARIÉ / SAISONNIER
                        </h3>
                        <p className="text-lg text-white/95 leading-relaxed mb-6">
                          No estás solo en este proceso. Únete a nuestra comunidad de WhatsApp para compartir experiencias y consejos.
                        </p>
                        <a
                            href="https://chat.whatsapp.com/Jp7yTFyDhAM3i4dhHW0m8Z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                          >
                            <SiWhatsapp className="w-6 h-6" />
                            UNIRME AHORA
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* CTA Final */}
          <AnimateOnScroll direction="up" delay={0.8}>
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: "#002654" }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#002654" }}>
                  ¿Listo para comenzar tu proceso?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Gestionamos procesos limpios, completos y aprobables. Evita errores y retrasos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="font-semibold tracking-wide text-white hover:opacity-90 shadow-lg"
                    style={{ backgroundColor: "#ED2939" }}
                    asChild
                  >
                    <a
                      href="https://wa.me/33601526171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWhatsapp className="mr-2 h-5 w-5" />
                      CONSULTAR AHORA
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Resumen */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "#002654" }}>
            Diferencias Clave Resumidas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-t-4" style={{ borderTopColor: "#002654" }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#002654]" /> Visa Salarié
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5"/> <span>Para CDI o CDD Largo.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5"/> <span>Permite residencia a largo plazo.</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5"/> <span>Publicación de 21 días obligatoria si no es "en tension".</span></li>
                <li className="flex items-start gap-2"><Euro className="w-4 h-4 text-gray-500 mt-0.5"/> <span>Tiene tasas consulares estándar.</span></li>
              </ul>
            </Card>

            <Card className="p-6 border-t-4" style={{ borderTopColor: "#ED2939" }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-[#ED2939]" /> Visa Saisonnier
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5"/> <span>Contratos de 3 a 6 meses.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5"/> <span>Generalmente NO requiere publicación de 21 días.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5"/> <span><strong>Costo 0€</strong> (Gratuita).</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5"/> <span>Limitada a 6 meses por año.</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}