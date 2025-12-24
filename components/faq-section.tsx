"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiWhatsapp } from "react-icons/si";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const faqs = [
  {
    question: "¿Cuánto tarda una autorización de trabajo?",
    answer:
      "El promedio va de 8 a 12 semanas, dependiendo del puesto, de la prefectura y de la carga de trabajo del Ministère de l’Intérieur. Podés acortar demoras enviando el expediente completo desde el inicio y respondiendo rápido a los pedidos de información.",
  },
  {
    question: "¿Qué cubre el seguro VVT?",
    answer:
      "Incluye gastos médicos de urgencia en Francia y la UE, repatriación sanitaria, responsabilidad civil y asistencia 24/7. También ofrece cobertura en caso de hospitalización o accidente durante el viaje, requisitos indispensables para el visado.",
  },
  {
    question: "¿Qué documentos pide el Titre de séjour (estudiante/salarié)?",
    answer:
      "Pasaporte vigente, visa de larga estadía o VLS-TS, acta de nacimiento traducida, comprobante de domicilio, seguro médico, medios económicos, contrato o certificado de estudios y, si aplica, los últimos recibos de salario o constancia de inscripción.",
  },
  {
    question: "¿Cómo es la asesoría y qué recibo al final?",
    answer:
      "Coordinamos una videollamada de 60 minutos, respondemos tus preguntas y al finalizar te enviamos un resumen escrito con los pasos concretos que debés seguir.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="text-center mb-12">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#002654" }}
            >
              PREGUNTAS FRECUENTES (FAQ)
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="fade" delay={0.2}>
          <div className="text-center mb-12">
            <a
              href="https://wa.me/33601526171"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90 shadow-lg"
              style={{ backgroundColor: "#ED2939" }}
            >
              <SiWhatsapp className="w-6 h-6" />
              WhatsApp para más consultas
            </a>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} direction="up" delay={index * 0.1}>
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white border-2 rounded-lg px-6 data-[state=open]:border-opacity-100"
                  style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
                >
                  <AccordionTrigger
                    className="text-left font-semibold hover:no-underline py-6 cursor-pointer"
                    style={{ color: "#002654" }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
