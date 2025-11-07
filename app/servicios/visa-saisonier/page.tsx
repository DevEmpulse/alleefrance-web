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
  Sprout,
} from "lucide-react";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Visa Saisonier Francia - Visa de Trabajo Temporal | Allée France",
  description:
    "Tramitá tu Visa Saisonier para trabajar temporalmente en Francia. Ideal para trabajo agrícola, turismo y hostelería. Requisitos, proceso y asesoría completa.",
  keywords:
    "visa saisonier francia, visa temporal francia, trabajo temporal francia, visa agricola francia, trabajo estacional francia, vendimia francia, visa temporada francia",
  openGraph: {
    title: "Visa Saisonier Francia - Visa de Trabajo Temporal",
    description:
      "Tramitá tu Visa Saisonier para trabajar temporalmente en Francia. Asesoría completa y acompañamiento profesional.",
  },
};

export default function VisaSaisonierPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ backgroundColor: "#002654" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sprout className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visa Saisonier - Trabajo Temporal en Francia
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Trabajá temporalmente en Francia en sectores como agricultura,
            turismo y hostelería. Te acompañamos en todo el proceso para que
            aproveches las oportunidades de trabajo estacional.
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

      {/* ¿Qué es la Visa Saisonier? */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: "#002654" }}
          >
            ¿Qué es la Visa Saisonier?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              La <strong>Visa Saisonier</strong> (Visa de Trabajador Temporal)
              te permite trabajar en Francia durante períodos específicos del
              año, generalmente entre 3 y 6 meses, en sectores que requieren
              mano de obra estacional.
            </p>
            <p className="mb-4">
              Es ideal para quienes buscan experiencia laboral internacional,
              mejorar su francés, o generar ingresos durante temporadas
              específicas. Los sectores más comunes son:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Agricultura:</strong> Vendimia, cosecha de frutas,
                cultivos
              </li>
              <li>
                <strong>Turismo:</strong> Hoteles, restaurantes, estaciones de
                esquí
              </li>
              <li>
                <strong>Hostelería:</strong> Servicios de catering y eventos
              </li>
            </ul>
            <p>
              Esta visa puede renovarse año tras año, permitiéndote regresar a
              Francia en las mismas temporadas y construir una relación laboral
              estable con empleadores franceses.
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
            Requisitos para la Visa Saisonier
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Contrato de trabajo temporal con empleador francés",
              "Pasaporte vigente con mínimo 3 meses de validez",
              "Formulario de solicitud de visa completado",
              "Fotografías tipo pasaporte recientes (normas OACI)",
              "Comprobante de alojamiento en Francia",
              "Seguro médico de viaje válido en Francia",
              "Certificado de antecedentes penales",
              "Comprobante de solvencia económica",
              "Reserva de pasaje de ida y vuelta",
              "Carta de motivación explicando tu interés",
              "CV actualizado con experiencia relevante",
              "Pago de tasas consulares (€99 aprox.)",
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

      {/* Sectores y Temporadas */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{ color: "#002654" }}
          >
            Sectores y Temporadas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                sector: "Agricultura",
                temporada: "Marzo - Octubre",
                trabajos: [
                  "Vendimia",
                  "Cosecha de frutas",
                  "Cultivo de verduras",
                  "Recolección",
                ],
              },
              {
                sector: "Turismo de Invierno",
                temporada: "Diciembre - Abril",
                trabajos: [
                  "Estaciones de esquí",
                  "Hoteles de montaña",
                  "Restaurantes",
                  "Servicios turísticos",
                ],
              },
              {
                sector: "Turismo de Verano",
                temporada: "Mayo - Septiembre",
                trabajos: [
                  "Hoteles costeros",
                  "Restaurantes",
                  "Campings",
                  "Eventos y festivales",
                ],
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#002654" }}
                >
                  {item.sector}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "#ED2939" }}
                >
                  {item.temporada}
                </p>
                <ul className="space-y-2">
                  {item.trabajos.map((trabajo, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-1"
                        style={{ color: "#ED2939" }}
                      />
                      <span className="text-sm">{trabajo}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-6 bg-gray-50">
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
                title: "Búsqueda de Empleo",
                description:
                  "Encontrá ofertas de trabajo temporal en Francia. Te ayudamos a conectar con empleadores confiables en tu sector de interés.",
              },
              {
                step: "2",
                title: "Contrato de Trabajo",
                description:
                  "El empleador te envía un contrato de trabajo temporal (CDD) especificando duración, salario y condiciones laborales.",
              },
              {
                step: "3",
                title: "Preparación de Documentos",
                description:
                  "Reunís toda la documentación requerida. Te asesoramos para que no falte nada y todo esté en orden.",
              },
              {
                step: "4",
                title: "Solicitud de Visa",
                description:
                  "Presentás la solicitud en el consulado francés. Te preparamos para la entrevista y revisamos tu expediente completo.",
              },
              {
                step: "5",
                title: "Aprobación",
                description:
                  "Una vez aprobada (2-4 semanas), retirás tu visa y podés viajar a Francia en las fechas acordadas.",
              },
              {
                step: "6",
                title: "Trabajo en Francia",
                description:
                  "Llegás a Francia y comenzás tu trabajo temporal. Al finalizar, podés renovar para la próxima temporada.",
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

      {/* Tiempos y Salarios */}
      <section className="py-16 px-6">
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
                  <span className="font-semibold min-w-[140px]">Visa:</span>
                  <span>2-4 semanas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">Duración:</span>
                  <span>3-6 meses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Renovación:
                  </span>
                  <span>Anual</span>
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
                Salarios Aproximados
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    SMIC (mínimo):
                  </span>
                  <span>€11.65/hora</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">Mensual:</span>
                  <span>€1,766 neto aprox.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Alojamiento:
                  </span>
                  <span>A veces incluido</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                *Salarios actualizados 2025. Pueden variar según sector y
                región.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            Ventajas de la Visa Saisonier
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Proceso Más Rápido",
                description:
                  "Menos requisitos que otras visas de trabajo, aprobación en 2-4 semanas",
              },
              {
                title: "Renovación Anual",
                description:
                  "Podés volver cada año al mismo empleador, construyendo experiencia",
              },
              {
                title: "Experiencia Internacional",
                description:
                  "Mejorá tu francés, conocé la cultura y sumá experiencia laboral europea",
              },
              {
                title: "Alojamiento Incluido",
                description:
                  "Muchos empleadores ofrecen alojamiento, reduciendo tus gastos",
              },
              {
                title: "Salario Garantizado",
                description:
                  "Cobrás el salario mínimo francés (SMIC) o superior según el sector",
              },
              {
                title: "Puerta a Otras Visas",
                description:
                  "La experiencia puede ayudarte a conseguir visas de trabajo permanente",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <h3
                  className="text-lg font-bold mb-2"
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
            Comenzá tu experiencia laboral en Francia
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contactanos para asesoría sobre trabajo temporal en Francia y
            encontrá la mejor oportunidad para vos
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
