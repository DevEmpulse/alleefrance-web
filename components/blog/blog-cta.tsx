"use client";

import { Button } from "@/components/ui/button";
import { BlogNewsletterSection } from "@/components/blog/blog-newsletter-section";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function BlogCTASections() {
  return (
    <>
      <BlogNewsletterSection description="Recibí alertas de convocatorias, guías actualizadas y recordatorios de plazos clave directamente en tu email." />

      <AnimateOnScroll direction="fade" delay={0}>
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#002654" }}
            >
              ¿Necesitás ayuda con tu visa?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nuestro equipo puede revisar tu caso, preparar tu dossier y
              acompañarte hasta la cita consular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-semibold tracking-wide hover:opacity-90"
                style={{ backgroundColor: "#ED2939", color: "white" }}
                asChild
              >
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold tracking-wide bg-transparent"
                style={{ borderColor: "#002654", color: "#002654" }}
                asChild
              >
                <a href="/#contacto" target="_blank" rel="noopener noreferrer">
                  Reservar asesoría
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
