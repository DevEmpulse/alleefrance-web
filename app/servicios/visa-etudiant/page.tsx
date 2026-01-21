"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  FileText,
  Calendar,
  GraduationCap,
  Building2,
  Globe,
  Scale,
  Link as LinkIcon,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Users,
  Briefcase,
  Plane,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Navbar } from "@/components/navbar";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { getFaqsByCategories } from "@/data/faqs";

export default function VisaEtudiantPage() {
  const studentFaqs = getFaqsByCategories([
    "Estudios",
    "Errores Frecuentes",
    "Asesoría",
    "Seguros",
  ]);
  const studentFaqCategories = [
    "Estudios",
    "Errores Frecuentes",
    "Asesoría",
    "Seguros",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
          backgroundImage: "url('/student-studying-in-paris.jpg')",
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
            <GraduationCap className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visa de Estudiante para Francia
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Información esencial para estudiantes internacionales
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
        </div>
      </section>

      {/* Introducción */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="prose prose-lg max-w-none text-center mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                La visa de estudiante permite a ciudadanos no europeos vivir y
                estudiar en Francia. Su obtención implica un proceso oficial con
                diversos organismos del Estado francés. Esta sección resume
                información clave para preparar tu solicitud.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Organismos que Intervienen */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Organismos que Intervienen
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Conoce las instituciones clave en el proceso de tu visa de
                estudiante
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll direction="up" delay={0.2}>
              <Card
                className="p-6 border-t-4 hover:shadow-lg transition-all"
                style={{ borderTopColor: "#002654" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    Campus France
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Evalúa tu proyecto académico. La validación es obligatoria en
                  muchos países de América Latina antes de solicitar la visa.
                </p>
                <a
                  href="https://www.campusfrance.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{
                    backgroundColor: "rgba(0, 38, 84, 0.08)",
                    color: "#002654",
                  }}
                >
                  <Globe className="w-4 h-4" />
                  Visitar sitio oficial
                </a>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.3}>
              <Card
                className="p-6 border-t-4 hover:shadow-lg transition-all"
                style={{ borderTopColor: "#002654" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    France-Visas
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Portal oficial del gobierno francés para solicitudes de visa y
                  agendamiento de citas consulares.
                </p>
                <a
                  href="https://france-visas.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{
                    backgroundColor: "rgba(0, 38, 84, 0.08)",
                    color: "#002654",
                  }}
                >
                  <Globe className="w-4 h-4" />
                  Visitar sitio oficial
                </a>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.4}>
              <Card
                className="p-6 border-t-4 hover:shadow-lg transition-all"
                style={{ borderTopColor: "#002654" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    Consulado de Francia
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Analiza el expediente completo y toma la decisión final sobre
                  la visa. Es donde presentarás tu solicitud.
                </p>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.5}>
              <Card
                className="p-6 border-t-4 hover:shadow-lg transition-all"
                style={{ borderTopColor: "#002654" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    Service-Public.fr
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Define las reglas oficiales, recursos económicos requeridos, y
                  derechos y obligaciones de los estudiantes.
                </p>
                <a
                  href="https://www.service-public.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{
                    backgroundColor: "rgba(0, 38, 84, 0.08)",
                    color: "#002654",
                  }}
                >
                  <Globe className="w-4 h-4" />
                  Visitar sitio oficial
                </a>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* --- PROCESO (TIMELINE VERTICAL) --- */}
      <section className="py-20 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll direction="fade">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002654] mb-4">
                Tu Camino a Francia
              </h2>
              <p className="text-lg text-slate-500">
                El paso a paso simplificado para obtener tu visa.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Línea Central */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#002654] via-blue-200 to-transparent" />

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Aceptación Académica",
                  desc: "Obtén la carta de aceptación o preinscripción de tu escuela o universidad.",
                  icon: CheckCircle2,
                },
                {
                  step: "02",
                  title: "Campus France",
                  desc: "Completa el proceso 'Etudes en France', pago y entrevista académica.",
                  icon: Building2,
                },
                {
                  step: "03",
                  title: "Solicitud de Visa",
                  desc: "Llena el formulario en France-Visas y reúne tu expediente consular.",
                  icon: FileText,
                },
                {
                  step: "04",
                  title: "Cita Consular",
                  desc: "Presenta tus documentos biométricos y espera la decisión (7-15 días).",
                  icon: Plane,
                },
              ].map((item, idx) => (
                <AnimateOnScroll key={idx} direction="up" delay={idx * 0.1}>
                  <div
                    className={`relative flex items-center gap-8 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Contenido */}
                    <div className="flex-1 ml-12 md:ml-0">
                      <div
                        className={`bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#002654] ${
                          idx % 2 === 0
                            ? "md:text-right md:border-l-0 md:border-r-4"
                            : ""
                        }`}
                      >
                        {/* --- CORRECCIÓN AQUÍ --- */}
                        {/* Se eliminó la condición que ocultaba el número y se ajustó el color */}
                        <div className="text-5xl font-bold text-[#002654]/10 mb-2 select-none">
                          {item.step}
                        </div>

                        <h3 className="text-xl font-bold text-[#002654] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>

                    {/* Icono Central */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ED2939] border-4 border-white shadow-lg z-10 flex items-center justify-center">
                      {/* <item.icon className="w-4 h-4 text-white" /> */}
                    </div>

                    {/* Espacio vacío para balancear el flex en desktop */}
                    <div className="flex-1 hidden md:block text-center md:px-8">
                      <span className="text-8xl font-bold text-slate-200 opacity-40 select-none">
                        {item.step}
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Estudios */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Tipos de Estudios que Aplican
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll direction="left" delay={0.2}>
              <Card
                className="p-6 border-t-4 bg-white"
                style={{ borderTopColor: "#10B981" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    Aplican
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Cursos de francés (mínimo 20 horas semanales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Licenciaturas y Másters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Másters en escuelas privadas reconocidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span>Formaciones largas y estructuradas</span>
                  </li>
                </ul>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.3}>
              <Card
                className="p-6 border-t-4 bg-white"
                style={{ borderTopColor: "#EF4444" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-8 h-8 text-red-600" />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    No siempre aplican
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span>Cursos cortos (menos de 20 horas semanales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span>Formaciones sin carga horaria suficiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span>Estudios incoherentes con el perfil académico</span>
                  </li>
                </ul>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Cambio de Estatus */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <Card
              className="p-8 border-t-4"
              style={{ borderTopColor: "#002654" }}
            >
              <div className="flex items-start gap-4 mb-6">
                <Briefcase className="w-8 h-8" style={{ color: "#002654" }} />
                <div>
                  <h2
                    className="text-2xl lg:text-3xl font-bold mb-4"
                    style={{ color: "#002654" }}
                  >
                    Cambio de Estatus
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En algunos casos, es posible cambiar de estatus una vez en
                    Francia, generalmente después de terminar tus estudios. Este
                    cambio no es automático y depende del diploma obtenido y de
                    la coherencia de tu proyecto académico y profesional. Cada
                    situación se evalúa caso por caso por la administración
                    francesa.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ejemplos de cambios posibles: pasar de visa de estudiante a
                    visa de trabajo (Salarié) si encuentras un empleo que
                    corresponda a tu perfil y estudios, o a visa de emprendedor
                    si decides crear tu propia empresa.
                  </p>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Consejos Importantes */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <Card
              className="p-8 border-t-4 bg-linear-to-br from-blue-50 to-white"
              style={{ borderTopColor: "#ED2939" }}
            >
              <div className="flex items-start gap-4">
                <Info className="w-8 h-8" style={{ color: "#ED2939" }} />
                <div>
                  <h2
                    className="text-2xl lg:text-3xl font-bold mb-4"
                    style={{ color: "#002654" }}
                  >
                    Consejos Importantes
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong>
                        La visa de estudiante es un proyecto académico, no solo
                        un trámite administrativo.
                      </strong>
                      La coherencia de tu expediente es clave para evitar
                      retrasos o rechazos.
                    </p>
                    <p>
                      <strong>Informarte con anticipación</strong> te permite
                      tomar mejores decisiones y preparar todos los documentos
                      necesarios con tiempo suficiente.
                    </p>
                    <p>
                      <strong>Planifica con tiempo:</strong> El proceso
                      completo, desde la búsqueda de formación hasta la
                      obtención de la visa, puede tomar de 6 a 9 meses. Inicia
                      tu búsqueda con suficiente anticipación.
                    </p>
                    <p>
                      <strong>Documentación completa:</strong> Asegúrate de
                      tener todos los documentos traducidos y legalizados cuando
                      corresponda. Un expediente incompleto puede generar
                      retrasos significativos.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQSection
        title="Preguntas Frecuentes"
        description="Resuelve tus dudas sobre la visa de estudiante"
        allowedCategories={studentFaqCategories}
        defaultCategory="Estudios"
        data={studentFaqs}
      />

      {/* CTA Final */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="text-center">
              <div
                className="bg-white rounded-2xl p-8 shadow-xl border-2"
                style={{ borderColor: "#002654" }}
              >
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#002654" }}
                >
                  ¿Necesitas ayuda con tu visa de estudiante?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Te acompañamos en todo el proceso: Campus France, inscripción
                  académica, preparación de dossier y estrategia de recursos
                  económicos.
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

      <Footer />
    </div>
  );
}
