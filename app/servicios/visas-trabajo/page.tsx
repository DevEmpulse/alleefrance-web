"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  FileText,
  Phone,
  MessageCircle,
  Calendar,
  Briefcase,
  Sprout,
  Scale,
} from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function VisasTrabajoPage() {
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
        {/* Overlay para mejorar legibilidad */}
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
            Conocé las opciones de visas de trabajo disponibles en Francia: Visa Salarié para empleo permanente y Visa Saisonier para trabajo temporal estacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <MessageCircle className="mr-2 h-5 w-5" />
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
        </div>
      </section>

    

      {/* Información Resumida de Cada Visa */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-12 text-center"
            style={{ color: "#002654" }}
          >
            Información de Cada Visa
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Visa Salarié Resumen */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-10 h-10" style={{ color: "#ED2939" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Visa Salarié
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La Visa Salarié es el permiso que te permite trabajar legalmente en Francia como empleado. Está vinculada a una oferta de trabajo específica y requiere que tu empleador francés inicie el proceso de autorización de trabajo ante las autoridades francesas (DIRECCTE).
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Requisitos Principales:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Contrato de trabajo con empresa francesa</li>
                    <li>• Autorización DIRECCTE aprobada</li>
                    <li>• Pasaporte vigente</li>
                    <li>• Certificados profesionales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Tiempos:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Autorización: 2-3 meses</li>
                    <li>• Visa: 2-4 semanas</li>
                    <li>• Total: 3-4 meses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Ventajas:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Empleo estable y renovable</li>
                    <li>• Camino a residencia permanente</li>
                    <li>• Reagrupación familiar posible</li>
                    <li>• Salario según contrato</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Visa Saisonier Resumen */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sprout className="w-10 h-10" style={{ color: "#002654" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Visa Saisonier
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La Visa Saisonier te permite trabajar en Francia durante períodos específicos del año (3-6 meses) en sectores que requieren mano de obra estacional como agricultura, turismo y hostelería. Es ideal para experiencia laboral internacional y mejorar tu francés.
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Requisitos Principales:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Contrato de trabajo temporal</li>
                    <li>• Pasaporte vigente</li>
                    <li>• No requiere autorización DIRECCTE</li>
                    <li>• Reserva de pasaje ida y vuelta</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Tiempos:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Visa: 2-4 semanas</li>
                    <li>• Duración: 3-6 meses</li>
                    <li>• Renovación: Anual</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Ventajas:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Proceso más rápido</li>
                    <li>• Renovable anualmente</li>
                    <li>• Alojamiento a veces incluido</li>
                    <li>• Experiencia internacional</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Sectores:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Agricultura (Marzo-Octubre)</li>
                    <li>• Turismo de Invierno (Dic-Abr)</li>
                    <li>• Turismo de Verano (May-Sep)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
        {/* Comparación de Visas */}
        <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            Comparación: Visa Salarié vs Visa Saisonier
          </h2>
          
          {/* Tabla Comparativa */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-2 p-4 text-left font-bold" style={{ borderColor: "#002654", backgroundColor: "#f9fafb" }}>
                    Característica
                  </th>
                  <th className="border-2 p-4 text-center font-bold" style={{ borderColor: "#002654", backgroundColor: "#ED2939", color: "white" }}>
                    Visa Salarié
                  </th>
                  <th className="border-2 p-4 text-center font-bold" style={{ borderColor: "#002654", backgroundColor: "#002654", color: "white" }}>
                    Visa Saisonier
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Tipo de Trabajo
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Empleo permanente o contrato largo plazo
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Trabajo temporal/estacional (3-6 meses)
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Duración
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Generalmente 1 año renovable
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    3-6 meses por temporada
                  </td>
                </tr>
                <tr>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Autorización de Trabajo
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Requiere autorización DIRECCTE (2-3 meses)
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    No requiere autorización DIRECCTE
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Tiempo de Procesamiento
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    3-4 meses total
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    2-4 semanas
                  </td>
                </tr>
                <tr>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Renovación
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Renovable, camino a residencia permanente
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Renovable anualmente para temporadas
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Sector
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Cualquier sector profesional
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Agricultura, turismo, hostelería
                  </td>
                </tr>
                <tr>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Reagrupación Familiar
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Sí, una vez establecido
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    No (visa individual)
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Salario
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Según contrato (generalmente SMIC o superior)
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    SMIC mínimo (€11.65/hora, ~€1,766/mes)
                  </td>
                </tr>
                <tr>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Alojamiento
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    A cargo del trabajador
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    A veces incluido por el empleador
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Experiencia Requerida
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Generalmente sí, según el puesto
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    No siempre necesaria
                  </td>
                </tr>
                <tr>
                  <td className="border-2 p-4 font-semibold" style={{ borderColor: "#e5e7eb" }}>
                    Ideal Para
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Profesionales que buscan establecerse en Francia
                  </td>
                  <td className="border-2 p-4 text-center" style={{ borderColor: "#e5e7eb" }}>
                    Jóvenes que buscan experiencia temporal y cultural
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ventajas Comparadas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            Ventajas de Cada Visa
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ventajas Visa Salarié */}
            <Card className="p-6">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#ED2939" }}
              >
                Ventajas Visa Salarié
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Experiencia Comprobada",
                    description: "+1000 trámites exitosos de visas de trabajo para Francia",
                  },
                  {
                    title: "Acompañamiento Total",
                    description: "Te guiamos desde el inicio hasta que obtengas tu Titre de Séjour",
                  },
                  {
                    title: "Atención Personalizada",
                    description: "Cada caso es único. Adaptamos nuestra asesoría a tu situación",
                  },
                ].map((item, index: number) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-1" style={{ color: "#002654" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Ventajas Visa Saisonier */}
            <Card className="p-6">
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{ color: "#002654" }}
              >
                Ventajas Visa Saisonier
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Proceso Más Rápido",
                    description: "Menos requisitos que otras visas de trabajo, aprobación en 2-4 semanas",
                  },
                  {
                    title: "Renovación Anual",
                    description: "Podés volver cada año al mismo empleador, construyendo experiencia",
                  },
                  {
                    title: "Experiencia Internacional",
                    description: "Mejorá tu francés, conocé la cultura y sumá experiencia laboral europea",
                  },
                  {
                    title: "Alojamiento Incluido",
                    description: "Muchos empleadores ofrecen alojamiento, reduciendo tus gastos",
                  },
                  {
                    title: "Salario Garantizado",
                    description: "Cobrás el salario mínimo francés (SMIC) o superior según el sector",
                  },
                  {
                    title: "Puerta a Otras Visas",
                    description: "La experiencia puede ayudarte a conseguir visas de trabajo permanente",
                  },
                ].map((item, index: number) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-1" style={{ color: "#002654" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Cuál visa es la adecuada para vos?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contactanos para una asesoría personalizada y descubrí cuál es la mejor opción para tu situación
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
                <Phone className="mr-2 h-5 w-5" />
                +33 6 01 52 61 71
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-white hover:bg-gray-50"
              style={{ color: "#002654" }}
              asChild
            >
              <Link href="/#contacto">VER MÁS SERVICIOS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Comparadas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            Preguntas Frecuentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ Visa Salarié */}
            <div>
              <h3
                className="text-2xl font-bold mb-4 text-center"
                style={{ color: "#ED2939" }}
              >
                Visa Salarié
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "¿Puedo cambiar de empleador con una Visa Salarié?",
                    a: "Sí, pero necesitás solicitar una nueva autorización de trabajo con el nuevo empleador. Te ayudamos con todo el proceso de cambio.",
                  },
                  {
                    q: "¿Mi familia puede acompañarme?",
                    a: "Sí, podés solicitar reagrupación familiar una vez que estés establecido en Francia. Asesoramos también en este proceso.",
                  },
                  {
                    q: "¿Cuánto tiempo puedo quedarme en Francia?",
                    a: "La duración depende de tu contrato de trabajo. Generalmente se otorga por 1 año renovable, con posibilidad de residencia permanente después de 5 años.",
                  },
                  {
                    q: "¿Necesito hablar francés?",
                    a: "No es obligatorio para la visa, pero es altamente recomendable. Muchos empleadores lo requieren y facilita tu integración.",
                  },
                ].map((faq, index: number) => (
                  <Card key={index} className="p-4">
                    <h4
                      className="text-sm font-bold mb-2"
                      style={{ color: "#002654" }}
                    >
                      {faq.q}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* FAQ Visa Saisonier */}
            <div>
              <h3
                className="text-2xl font-bold mb-4 text-center"
                style={{ color: "#002654" }}
              >
                Visa Saisonier
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "¿Necesito experiencia previa?",
                    a: "No siempre. Muchos trabajos agrícolas y de hostelería no requieren experiencia previa, solo disposición para trabajar.",
                  },
                  {
                    q: "¿Puedo extender mi estadía?",
                    a: "La visa es por el período del contrato (máximo 6 meses). Podés renovar para la próxima temporada o solicitar otro tipo de visa.",
                  },
                  {
                    q: "¿El empleador proporciona alojamiento?",
                    a: "Muchos empleadores sí, especialmente en agricultura y turismo. Esto se especifica en el contrato de trabajo.",
                  },
                  {
                    q: "¿Puedo llevar a mi familia?",
                    a: "La Visa Saisonier es individual. Tu familia necesitaría sus propias visas (turista u otra categoría).",
                  },
                ].map((faq, index: number) => (
                  <Card key={index} className="p-4">
                    <h4
                      className="text-sm font-bold mb-2"
                      style={{ color: "#002654" }}
                    >
                      {faq.q}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
