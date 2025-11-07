import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CountryName } from "@/components/country-name";
import {
  Plane,
  Clock,
  Globe,
  CheckCircle2,
  Calendar,
  MapPin,
  Briefcase,
  Heart,
  Shield,
  MessageCircle,
  Backpack,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Working Holiday Francia | Guía Completa de Visas | Allée France",
  description:
    "Todo sobre la Visa Working Holiday Francia: requisitos, beneficios, proceso paso a paso y acompañamiento profesional para que vivas y trabajes en Francia durante un año.",
  keywords:
    "working holiday francia, visa working holiday, visa vacaciones trabajo francia, requisitos working holiday, vivir en francia con working holiday",
  openGraph: {
    title: "Working Holiday Francia | Guía Completa",
    description:
      "Descubrí cómo obtener tu visa Working Holiday para Francia con tips, requisitos y acompañamiento profesional de Allée France.",
  },
};

const requisitos = [
  "Tener entre 18 y 35 años al momento de aplicar.",
  "Pasaporte argentino vigente durante todo el viaje.",
  "Demostrar fondos suficientes (mínimo €2.500).",
  "Pasaje de regreso o fondos para comprarlo.",
  "Seguro médico internacional por todo el año.",
  "No viajar con familiares dependientes.",
  "Motivación principal: turismo y descubrimiento cultural.",
];

const beneficios = [
  {
    icon: Plane,
    title: "Viví un año en Francia",
    description:
      "Residí 12 meses con libertad para moverte por todo el territorio francés y el Espacio Schengen.",
  },
  {
    icon: Briefcase,
    title: "Trabajar legalmente",
    description:
      "Podés realizar empleos temporales para financiar tu estadía y sumar experiencia internacional en tu CV.",
  },
  {
    icon: Globe,
    title: "Explorar Europa",
    description:
      "Usá Francia como base para viajar y conocer otros países europeos durante tus vacaciones.",
  },
  {
    icon: Heart,
    title: "Inmersión cultural",
    description:
      "Mejorá tu francés, hacé amistades internacionales y conocé de cerca el estilo de vida francés.",
  },
];

const pasos = [
  {
    title: "Preparación",
    description:
      "Armamos tu estrategia: revisión de requisitos, selección de fechas y check-list personalizado de documentos.",
  },
  {
    title: "Documentación",
    description:
      "Reunimos certificados, traducciones, comprobantes bancarios, seguro médico y cartas de motivación.",
  },
  {
    title: "Solicitud",
    description:
      "Reservamos turno, cargamos tu formulario y te ayudamos a presentar el dossier completo ante el consulado.",
  },
  {
    title: "Viaje y llegada",
    description:
      "Te guiamos en la activación del seguro, trámites iniciales, apertura de cuenta y tips para instalarte en Francia.",
  },
];

const documentos = [
  "Formulario OFII completo y firmado.",
  "CV y carta de motivación en francés o inglés.",
  "Comprobante de fondos (extractos bancarios o certificados).",
  "Reserva aérea ida y vuelta o fondos equivalentes.",
  "Seguro médico internacional (cobertura mínima €30.000).",
  "Certificado de antecedentes penales apostillado.",
];

export default function WorkingHolidayPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section
          className="pt-32 pb-16 px-6"
          style={{ backgroundColor: "#002654" }}
        >
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 uppercase tracking-widest">
              Working Holiday Francia 2025
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tu guía completa para la Visa Working Holiday
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10">
              Te acompañamos con una hoja de ruta clara para preparar tu
              solicitud, presentar un dossier impecable y disfrutar al máximo
              tus 12 meses en Francia viviendo, trabajando y viajando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                asChild
              >
                <a
                  href="https://alleefrancelyon.taplink.ws"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Reservar Asesoría
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Cupos limitados por país · Te ayudamos a llegar con todo listo
              desde <CountryName withEmoji className="text-white/90" />.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                ¿Qué es la Visa Working Holiday Francia?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                La Visa Vacaciones y Trabajo (Programme Vacances-Travail)
                permite a jóvenes argentinos residir en Francia durante 12 meses
                con libertad para trabajar de forma temporal y recorrer el país.
                Es una excelente oportunidad para mejorar tu francés, financiar
                la experiencia con empleos temporarios y vivir una inmersión
                cultural total.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Desde Allée France te guiamos en cada etapa: planificación,
                papeles, entrevista consular y adaptación al llegar, con foco en
                quienes aplican desde{" "}
                <CountryName withEmoji className="text-[#ED2939]" />. Nos
                enfocamos en anticipar problemas y fortalecer tu dossier para
                que puedas aprovechar el cupo anual sin contratiempos.
              </p>
            </div>
            <Card className="p-6 bg-gray-50 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-[#ED2939]" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500">
                    Cupo estimado ·{" "}
                    <CountryName
                      withEmoji
                      className="text-gray-700 text-sm font-semibold uppercase tracking-wide"
                    />
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    1.000 plazas
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                La demanda supera rápidamente los cupos, por eso es clave
                preparar la documentación con anticipación y llegar al día de
                apertura con todo listo. Nuestro equipo te ayuda a revisar cada
                detalle.
              </p>
            </Card>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-bold text-center mb-12"
              style={{ color: "#002654" }}
            >
              Beneficios de la Working Holiday francesa
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {beneficios.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(0, 38, 84, 0.08)" }}
                  >
                    <benefit.icon
                      className="w-6 h-6"
                      style={{ color: "#002654" }}
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#002654" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                Requisitos principales
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Preparar la solicitud con tiempo es clave para ingresar en los
                cupos anuales. Estos son los requisitos que revisamos juntos
                antes de enviar tu dossier:
              </p>
              <div className="space-y-4">
                {requisitos.map((req) => (
                  <Card
                    key={req}
                    className="p-4 border-l-4"
                    style={{ borderLeftColor: "#ED2939" }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-1"
                        style={{ color: "#ED2939" }}
                      />
                      <p className="text-gray-700 leading-relaxed">{req}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-[#002654] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Checklist express</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Organizamos tu documentación en bloques para que avances con
                claridad y evites rechazos por detalles formales.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>
                    Plan de viaje y ciudades objetivo (trabajo, alojamiento
                    temporal, transporte).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1" />
                  <span>
                    Línea de tiempo personalizada para saber qué presentar en
                    cada etapa.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Backpack className="w-5 h-5 mt-1" />
                  <span>
                    Lista de documentos traducidos, apostillados o certificados.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 mt-1" />
                  <span>
                    Revisión de seguros y coberturas exigidas por el consulado.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-bold text-center mb-12"
              style={{ color: "#002654" }}
            >
              Proceso paso a paso
            </h2>
            <div className="space-y-6">
              {pasos.map((paso, index) => (
                <Card key={paso.title} className="p-6 flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
                    style={{ backgroundColor: "#ED2939" }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#002654" }}
                    >
                      {paso.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {paso.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr,0.8fr] gap-10">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                Documentación esencial del dossier
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cada documento debe respetar formato, idioma y vigencia
                específicos. Te compartimos modelos y plantillas para que tu
                presentación sea clara y profesional.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {documentos.map((doc) => (
                  <Card key={doc} className="p-4 flex gap-3 items-start">
                    <CheckCircle2
                      className="w-5 h-5 mt-1 shrink-0"
                      style={{ color: "#002654" }}
                    />
                    <p className="text-gray-700">{doc}</p>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="p-6 bg-gray-50">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#002654" }}
              >
                Tips rápidos para el turno consular
              </h3>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                <li>
                  Ordená el dossier según el checklist oficial. Usamos
                  separadores para agilizar la revisión.
                </li>
                <li>
                  Tené listos comprobantes impresos y digitales en un pendrive o
                  carpeta en la nube.
                </li>
                <li>
                  Prepará respuestas claras sobre tu plan de viaje, alojamiento,
                  fondos y objetivos.
                </li>
                <li>
                  Llegá con al menos 20 minutos de anticipación y revisá que tu
                  seguro esté impreso en francés o inglés.
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#002654] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para postularte?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Te ayudamos a preparar un dossier competitivo, a cumplir con los
              tiempos oficiales y a aterrizar en Francia con un plan claro de
              alojamiento, trabajo temporal y trámites de instalación, sin
              importar que partas desde{" "}
              <CountryName withEmoji className="text-white font-bold" />.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Plane className="w-5 h-5 mr-2" />
                  Empezar mi Working Holiday
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                asChild
              >
                <Link href="/#contacto">
                  <Globe className="w-5 h-5 mr-2" />
                  Hablar con el equipo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
