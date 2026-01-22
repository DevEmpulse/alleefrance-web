import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ServicesCatalog } from "@/components/servicios/services-catalog";
import { personas, services } from "@/lib/services-data";
import { Calendar } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export const metadata: Metadata = {
  title: "Servicios de Asesoría Migratoria Francia | Visas y Trámites",
  description:
    "Catálogo completo de servicios migratorios para Francia: Visa Salarié, Saisonnier, Estudiante, Working Holiday, Titre de Séjour, reagrupación familiar y más. +700 casos exitosos.",
  keywords: [
    "servicios migratorios francia",
    "asesoría visa francia",
    "trámites migratorios francia",
    "gestoría visa francia",
    "visa trabajo francia",
    "visa estudiante francia",
  ],
  openGraph: {
    title: "Servicios de Asesoría Migratoria Francia | Allée France",
    description:
      "Catálogo completo de servicios migratorios para Francia. Visa de trabajo, estudios y residencia con expertos.",
    url: "https://alleefrance.com/servicios",
    type: "website",
  },
  alternates: {
    canonical: "https://alleefrance.com/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Navbar />

      <main>
        {/* HERO CATÁLOGO */}
        <section
          className="pt-28 pb-8 px-4"
          style={{ backgroundColor: "#002654" }}
        >
          <div className="mx-auto max-w-7xl">
            <AnimateOnScroll direction="fade" delay={0.1}>
              <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                  Catálogo de Servicios
                </h1>

                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  Gestoría Allée France Lyon – Soluciones completas para tu
                  proceso migratorio y administrativo en Francia.
                </p>

                {/* Microcopy de ayuda */}
                <p className="mt-4 text-sm lg:text-base text-white/80">
                  ¿No sabés por dónde empezar? Te recomendamos agendar una asesoría.
                </p>

                {/* Botones principales */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  {/* CTA principal: Reservar asesoría */}
                  <Button
                    size="lg"
                    className="text-white font-semibold tracking-wide px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                    style={{ backgroundColor: "#ED2939" }}
                    asChild
                  >
                    <a
                      href="https://alleefrancelyon.taplink.ws"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Reservar asesoría
                    </a>
                  </Button>

                  {/* CTA secundario: WhatsApp */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-[#002654] font-semibold tracking-wide px-8 py-6 rounded-full border-0 shadow-md hover:bg-gray-100 hover:shadow-lg transition-all"
                    asChild
                  >
                    <a
                      href="https://wa.me/33601526171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWhatsapp className="w-5 h-5 mr-2" />
                      Consultar por WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Tiempo de respuesta */}
                <p className="mt-4 text-xs sm:text-sm text-white/70">
                  Respondemos en menos de 24 hs.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CONTENIDO CATÁLOGO */}
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16">
          <ServicesCatalog personas={personas} services={services} />

          {/* CTA FINAL */}
          <AnimateOnScroll direction="fade" delay={0.3}>
            <div className="mt-16 text-center">
              <Card
                className="border border-slate-100 bg-white rounded-2xl p-8 shadow-md lg:p-10"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#002654]">
                  ¿No encuentras el servicio que necesitas?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-gray-600">
                  Contáctanos para una consulta personalizada. Nuestro equipo de
                  expertos está listo para ayudarte con cualquier trámite
                  migratorio o administrativo en Francia.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    className="font-semibold text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                    style={{ backgroundColor: "#ED2939" }}
                  >
                    <a
                      href="https://wa.me/33601526171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consulta gratis por WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 bg-white font-semibold text-[#002654] px-8 py-6 rounded-full hover:bg-gray-50 transition-colors"
                    style={{ borderColor: "#002654" }}
                  >
                    <Link href="/#contacto">
                      Formulario de contacto
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
}
