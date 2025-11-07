import type { Metadata } from "next";
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
} from "lucide-react";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Visa Salarié Francia - Trámite de Visa de Trabajo | Allée France",
  description:
    "Asesoría completa para tramitar tu Visa Salarié en Francia. Requisitos, documentación, tiempos y proceso paso a paso. Acompañamiento profesional desde Argentina.",
  keywords:
    "visa salarie francia, visa trabajo francia, permiso trabajo francia, visa laboral francia, tramite visa trabajo francia, trabajar en francia, visa empleado francia",
  openGraph: {
    title: "Visa Salarié Francia - Trámite de Visa de Trabajo",
    description:
      "Asesoría completa para tramitar tu Visa Salarié en Francia. Requisitos, documentación y acompañamiento profesional.",
  },
};

export default function VisaSalariePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ backgroundColor: "#002654" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visa Salarié - Visa de Trabajo en Francia
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Tramitá tu visa de trabajo para Francia con acompañamiento
            profesional. Te guiamos en cada paso del proceso para que puedas
            trabajar legalmente en Francia.
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

      {/* ¿Qué es la Visa Salarié? */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: "#002654" }}
          >
            ¿Qué es la Visa Salarié?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              La <strong>Visa Salarié</strong> es el permiso que te permite
              trabajar legalmente en Francia como empleado. Es necesaria para
              cualquier persona extranjera que desee ejercer una actividad
              laboral asalariada en territorio francés.
            </p>
            <p className="mb-4">
              Este tipo de visa está vinculada a una oferta de trabajo
              específica y requiere que tu empleador francés inicie el proceso
              de autorización de trabajo ante las autoridades francesas
              (DIRECCTE).
            </p>
            <p>
              Una vez aprobada, la Visa Salarié te permite residir y trabajar en
              Francia durante el período especificado en tu contrato laboral,
              con posibilidad de renovación y posterior solicitud de residencia
              permanente.
            </p>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{ color: "#002654" }}
          >
            Requisitos para la Visa Salarié
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Contrato de trabajo firmado con empresa francesa",
              "Autorización de trabajo (DIRECCTE) aprobada",
              "Pasaporte vigente con mínimo 3 meses de validez",
              "Formulario de solicitud de visa completado",
              "Fotografías tipo pasaporte recientes",
              "Comprobante de alojamiento en Francia",
              "Seguro médico internacional válido",
              "Certificado de antecedentes penales",
              "Comprobante de solvencia económica",
              "Títulos y certificados profesionales",
              "CV actualizado y carta de motivación",
              "Pago de tasas consulares",
            ].map((req, index) => (
              <Card
                key={index}
                className="p-4 border-l-4"
                style={{ borderLeftColor: "#ED2939" }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 shrink-0 mt-0.5"
                    style={{ color: "#ED2939" }}
                  />
                  <p className="text-gray-700 leading-relaxed">{req}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso Paso a Paso */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{ color: "#002654" }}
          >
            Proceso Paso a Paso
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Oferta de Trabajo",
                description:
                  "Tu empleador francés debe ofrecerte un contrato de trabajo y verificar que no haya candidatos locales disponibles para el puesto.",
              },
              {
                step: "2",
                title: "Autorización de Trabajo",
                description:
                  "El empleador solicita la autorización de trabajo ante la DIRECCTE (Dirección Regional de Empresas, Competencia, Consumo, Trabajo y Empleo).",
              },
              {
                step: "3",
                title: "Preparación de Documentos",
                description:
                  "Reunís toda la documentación requerida: pasaporte, contrato, certificados, comprobantes, etc. Te ayudamos a verificar que todo esté completo.",
              },
              {
                step: "4",
                title: "Solicitud de Visa",
                description:
                  "Presentás la solicitud de visa en el consulado francés con todos los documentos. Te acompañamos en la preparación y revisión.",
              },
              {
                step: "5",
                title: "Entrevista Consular",
                description:
                  "Asistís a la entrevista en el consulado. Te preparamos con tips y recomendaciones para que todo salga perfecto.",
              },
              {
                step: "6",
                title: "Aprobación y Viaje",
                description:
                  "Una vez aprobada tu visa, podés viajar a Francia. Al llegar, debés validar tu visa y solicitar tu Titre de Séjour.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-xl"
                    style={{ backgroundColor: "#ED2939" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#002654" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tiempos y Costos */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Clock className="w-12 h-12 mb-4" style={{ color: "#ED2939" }} />
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Tiempos de Procesamiento
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Autorización:
                  </span>
                  <span>2-3 meses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">Visa:</span>
                  <span>2-4 semanas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Total estimado:
                  </span>
                  <span>3-4 meses</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <FileText
                className="w-12 h-12 mb-4"
                style={{ color: "#ED2939" }}
              />
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Costos Aproximados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Tasa consular:
                  </span>
                  <span>€99</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Seguro médico:
                  </span>
                  <span>€30-60/mes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Traducciones:
                  </span>
                  <span>Variable</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                *Los costos pueden variar. Consultá por asesoría personalizada.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            ¿Por qué elegir Allée France?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Experiencia Comprobada",
                description:
                  "+1000 trámites exitosos de visas de trabajo para Francia",
              },
              {
                title: "Acompañamiento Total",
                description:
                  "Te guiamos desde el inicio hasta que obtengas tu Titre de Séjour",
              },
              {
                title: "Atención Personalizada",
                description:
                  "Cada caso es único. Adaptamos nuestra asesoría a tu situación",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#002654" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Empezá tu proceso de Visa Salarié hoy
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contactanos para una asesoría personalizada y comenzá tu camino
            hacia trabajar en Francia
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

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{ color: "#002654" }}
          >
            Preguntas Frecuentes
          </h2>
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
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#002654" }}
                >
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
