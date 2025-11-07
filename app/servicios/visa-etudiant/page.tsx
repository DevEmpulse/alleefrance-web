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
  GraduationCap,
} from "lucide-react";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Visa Étudiant Francia - Visa de Estudiante | Allée France",
  description:
    "Tramitá tu Visa Étudiant para estudiar en Francia. Requisitos, proceso completo y asesoría para universidades francesas. Estudia en Francia con acompañamiento profesional.",
  keywords:
    "visa etudiant francia, visa estudiante francia, estudiar en francia, universidades francia, visa estudio francia, campus france, estudios superiores francia, maestria francia",
  openGraph: {
    title: "Visa Étudiant Francia - Visa de Estudiante",
    description:
      "Tramitá tu Visa Étudiant para estudiar en Francia. Asesoría completa para tu proceso de estudios en universidades francesas.",
  },
};

export default function VisaEtudiantPage() {
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
            <GraduationCap className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visa Étudiant - Estudia en Francia
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Cumplí tu sueño de estudiar en Francia. Te acompañamos en todo el
            proceso de visa de estudiante, desde la inscripción hasta tu llegada
            a Francia.
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

      {/* ¿Qué es la Visa Étudiant? */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: "#002654" }}
          >
            ¿Qué es la Visa Étudiant?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              La <strong>Visa Étudiant</strong> (Visa de Estudiante) te permite
              estudiar en Francia en instituciones de educación superior
              reconocidas: universidades, grandes écoles, escuelas de arte,
              institutos técnicos, y programas de maestría o doctorado.
            </p>
            <p className="mb-4">
              Francia es uno de los destinos más populares para estudiantes
              internacionales, ofreciendo educación de calidad mundial, costos
              accesibles (especialmente en universidades públicas), y la
              oportunidad de vivir en un país con rica cultura e historia.
            </p>
            <p className="mb-4">Con esta visa podés:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Estudiar en cualquier institución francesa reconocida</li>
              <li>Trabajar hasta 964 horas por año (aprox. 20h/semana)</li>
              <li>Viajar por el espacio Schengen</li>
              <li>Solicitar extensión para trabajar después de graduarte</li>
            </ul>
            <p>
              La duración de la visa corresponde a la duración de tus estudios,
              renovable cada año hasta completar tu programa académico.
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
            Requisitos para la Visa Étudiant
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Carta de aceptación de universidad francesa",
              "Pasaporte vigente con mínimo 3 meses de validez",
              "Formulario de solicitud Campus France completado",
              "Fotografías tipo pasaporte recientes (normas OACI)",
              "Comprobante de recursos económicos (€615/mes mínimo)",
              "Comprobante de alojamiento en Francia",
              "Seguro médico estudiantil válido",
              "Certificado de antecedentes penales",
              "Títulos académicos previos legalizados",
              "Certificado de nivel de francés (si aplica)",
              "Carta de motivación académica",
              "Pago de tasas consulares (€99) y Campus France (€215)",
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

      {/* Proceso Campus France */}
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
                title: "Elección de Universidad",
                description:
                  "Elegí tu programa de estudios y universidad. Te ayudamos a encontrar opciones que se ajusten a tu perfil académico y objetivos.",
              },
              {
                step: "2",
                title: "Inscripción Campus France",
                description:
                  "Creá tu expediente en Campus France y completá el procedimiento 'Études en France'. Es obligatorio para todos los estudiantes.",
              },
              {
                step: "3",
                title: "Postulación a Universidades",
                description:
                  "Aplicá a las universidades elegidas a través de la plataforma Campus France. Podés postular a varias instituciones.",
              },
              {
                step: "4",
                title: "Carta de Aceptación",
                description:
                  "Una vez aceptado, recibís la carta de admisión oficial de la universidad francesa.",
              },
              {
                step: "5",
                title: "Entrevista Campus France",
                description:
                  "Asistís a una entrevista pedagógica en Campus France para validar tu proyecto de estudios.",
              },
              {
                step: "6",
                title: "Solicitud de Visa",
                description:
                  "Con la aprobación de Campus France, solicitás la visa en el consulado francés. Te preparamos para todo el proceso.",
              },
              {
                step: "7",
                title: "Aprobación y Viaje",
                description:
                  "Una vez aprobada tu visa (2-4 semanas), podés viajar a Francia. Al llegar, validás tu visa y obtenés tu Titre de Séjour.",
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

      {/* Tipos de Estudios */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{ color: "#002654" }}
          >
            Tipos de Estudios en Francia
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Licenciatura (Licence)",
                duration: "3 años",
                description:
                  "Equivalente a grado universitario. Acceso directo con bachillerato.",
              },
              {
                title: "Maestría (Master)",
                duration: "2 años",
                description:
                  "Estudios de posgrado. Requiere título de grado previo.",
              },
              {
                title: "Doctorado (Doctorat)",
                duration: "3-4 años",
                description:
                  "Investigación avanzada. Requiere maestría y proyecto de investigación.",
              },
              {
                title: "Grandes Écoles",
                duration: "3-5 años",
                description:
                  "Instituciones de élite en ingeniería, negocios y administración pública.",
              },
              {
                title: "Cursos de Francés",
                duration: "Variable",
                description:
                  "Programas intensivos de idioma francés en escuelas especializadas.",
              },
              {
                title: "Formación Técnica",
                duration: "1-2 años",
                description:
                  "BTS, DUT y certificaciones profesionales técnicas.",
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
                  {item.title}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: "#ED2939" }}
                >
                  Duración: {item.duration}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Costos */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8"
            style={{ color: "#002654" }}
          >
            Costos de Estudiar en Francia
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <FileText
                className="w-12 h-12 mb-4"
                style={{ color: "#ED2939" }}
              />
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Matrícula Anual
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Universidad pública:
                  </span>
                  <span>€170-600/año</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Grandes Écoles:
                  </span>
                  <span>€500-15,000/año</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Escuelas privadas:
                  </span>
                  <span>€3,000-20,000/año</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Clock className="w-12 h-12 mb-4" style={{ color: "#ED2939" }} />
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Costo de Vida Mensual
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Alojamiento:
                  </span>
                  <span>€400-800</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Alimentación:
                  </span>
                  <span>€200-300</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Transporte:
                  </span>
                  <span>€50-75</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[140px]">
                    Total estimado:
                  </span>
                  <span>€800-1,200/mes</span>
                </li>
              </ul>
            </Card>
          </div>
          <Card className="mt-6 p-6 bg-blue-50 border-blue-200">
            <p className="text-gray-700 leading-relaxed">
              <strong>Importante:</strong> Debés demostrar recursos de al menos
              €615/mes (€7,380/año) para obtener la visa. Podés trabajar hasta
              964 horas/año para complementar tus ingresos.
            </p>
          </Card>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            Ventajas de Estudiar en Francia
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Educación de Calidad",
                description:
                  "Universidades reconocidas mundialmente con programas de excelencia",
              },
              {
                title: "Costos Accesibles",
                description:
                  "Matrículas muy bajas en universidades públicas comparado con otros países",
              },
              {
                title: "Derecho a Trabajar",
                description:
                  "Podés trabajar medio tiempo mientras estudiás para cubrir gastos",
              },
              {
                title: "Cultura e Historia",
                description:
                  "Vivir en un país con rica herencia cultural y artística",
              },
              {
                title: "Idioma Francés",
                description:
                  "Aprender o perfeccionar el francés, uno de los idiomas más hablados",
              },
              {
                title: "Oportunidades Post-Estudio",
                description:
                  "Visa de búsqueda de empleo por 1 año después de graduarte",
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
            Comenzá tu aventura académica en Francia
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contactanos para asesoría personalizada sobre estudios en Francia y
            el proceso de visa de estudiante
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
                q: "¿Necesito saber francés para estudiar en Francia?",
                a: "Depende del programa. Muchas maestrías se ofrecen en inglés, pero para licenciaturas generalmente se requiere nivel B2 de francés (certificado DELF/DALF).",
              },
              {
                q: "¿Puedo trabajar mientras estudio?",
                a: "Sí, podés trabajar hasta 964 horas por año (aproximadamente 20 horas por semana) con tu visa de estudiante.",
              },
              {
                q: "¿Qué pasa después de graduarme?",
                a: "Podés solicitar una visa de búsqueda de empleo (APS) por 12 meses para encontrar trabajo en Francia relacionado con tus estudios.",
              },
              {
                q: "¿Cuánto demora el proceso completo?",
                a: "Entre 4-6 meses desde la postulación hasta obtener la visa. Es importante empezar con anticipación.",
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
