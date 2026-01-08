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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function VisaEtudiantPage() {
  const faqs = [
    {
      question: "¿Los estudiantes latinoamericanos tienen requisitos diferentes?",
      answer: "No, los criterios son los mismos para todos los estudiantes internacionales. Sin embargo, los procedimientos administrativos pueden variar según el país (por ejemplo, la validación de Campus France es obligatoria en muchos países de América Latina).",
    },
    {
      question: "¿Cuánto dinero necesito demostrar?",
      answer: "Como mínimo, necesitas demostrar 615 euros por mes de estadía, o su equivalente anual. Para un año completo, esto representa aproximadamente 7.380 euros. Puedes combinar varias fuentes: cuenta propia, sponsor familiar, becas, contratos de trabajo futuro, etc.",
    },
    {
      question: "¿Puedo trabajar con visa de estudiante?",
      answer: "Sí, la visa de estudiante te permite trabajar hasta 964 horas por año (equivalente a aproximadamente 60% de tiempo completo). Esto te permite complementar tus ingresos durante tus estudios.",
    },
    {
      question: "¿Es obligatorio tener seguro médico?",
      answer: "Sí, es obligatorio contar con un seguro médico al menos para el inicio de la estadía en Francia. Una vez en Francia, deberás inscribirte en la sécurité sociale estudiantil (seguro social para estudiantes internacionales).",
    },
    {
      question: "¿Puedo aplicar sin haber terminado mis estudios previos?",
      answer: "Sí, es posible siempre que tu trayectoria académica y la nueva formación sean coherentes con tu perfil. Por ejemplo, un estudiante que está por terminar el bachillerato puede aplicar a una formación universitaria, siempre que demuestre coherencia en su proyecto.",
    },
    {
      question: "¿Puedo aplicar solo con preinscripción?",
      answer: "Sí, en muchos casos es posible aplicar con una attestation de pré-inscription (preinscripción). Debe ser oficial, emitida por la institución educativa, y contener información detallada sobre el programa, duración y condiciones.",
    },
    {
      question: "¿Qué pasa si mi proyecto de estudios no es coherente?",
      answer: "Un proyecto académico incoherente es una de las causas principales de rechazo. Tus estudios deben tener sentido dentro de tu trayectoria académica y profesional. La administración francesa evalúa la coherencia entre tu perfil, tus estudios previos y tu nuevo proyecto de formación.",
    },
    {
      question: "¿Necesito nivel de francés obligatorio?",
      answer: "Depende del tipo de formación. Para cursos de francés, generalmente no se exige nivel previo. Para licenciaturas o másters, generalmente se requiere nivel B2 (DELF, TCF) o equivalente. Algunos programas en inglés pueden requerir IELTS o TOEFL.",
    },
    {
      question: "¿Puedo aplicar con cursos de idiomas?",
      answer: "Sí, siempre que el curso tenga al menos 20 horas semanales, sea de una escuela reconocida y tenga duración suficiente. Los cursos intensivos de francés son una opción válida para obtener la visa de estudiante.",
    },
    {
      question: "¿Puedo trabajar tiempo completo con visa de estudiante?",
      answer: "No, no está permitido trabajar tiempo completo con visa de estudiante. El límite es de 964 horas por año. Trabajar más horas podría poner en riesgo tu estatus de estudiante.",
    },
    {
      question: "¿Qué pasa si mis recursos económicos no están justificados?",
      answer: "Si los recursos económicos no están debidamente justificados, el consulado puede solicitar documentos adicionales, generar retrasos en el proceso, o incluso rechazar la solicitud. Es fundamental presentar documentación clara y oficial.",
    },
    {
      question: "¿Puedo renovar la visa de estudiante en Francia?",
      answer: "Sí, puedes renovar tu visa de estudiante en Francia siempre que continúes estudiando, mantengas tu progreso académico y sigas cumpliendo con los requisitos de recursos económicos. La renovación se hace a través de ANEF.",
    },
    {
      question: "¿Puedo cambiar de estatus después de estudiar?",
      answer: "Sí, en algunos casos es posible cambiar de estatus después de terminar tus estudios. Esto depende del diploma obtenido, tu proyecto profesional y la coherencia con tus estudios. Por ejemplo, puedes pasar a visa de trabajo (Salarié) si encuentras un empleo que corresponda a tu perfil.",
    },
    {
      question: "¿La visa de estudiante es un camino directo para quedarme en Francia?",
      answer: "No, la visa de estudiante es temporal y está vinculada a un proyecto académico específico. Para permanecer en Francia después de terminar tus estudios, necesitarás nuevas condiciones legales (por ejemplo, visa de trabajo, visa de emprendedor, reagrupación familiar, etc.).",
    },
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
                La visa de estudiante permite a ciudadanos no europeos vivir y estudiar en Francia. 
                Su obtención implica un proceso oficial con diversos organismos del Estado francés. 
                Esta sección resume información clave para preparar tu solicitud.
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
                Conoce las instituciones clave en el proceso de tu visa de estudiante
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll direction="up" delay={0.2}>
              <Card className="p-6 border-t-4 hover:shadow-lg transition-all" style={{ borderTopColor: "#002654" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                    Campus France
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Evalúa tu proyecto académico. La validación es obligatoria en muchos países de América Latina antes de solicitar la visa.
                </p>
                <a
                  href="https://www.campusfrance.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ backgroundColor: "rgba(0, 38, 84, 0.08)", color: "#002654" }}
                >
                  <Globe className="w-4 h-4" />
                  Visitar sitio oficial
                </a>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.3}>
              <Card className="p-6 border-t-4 hover:shadow-lg transition-all" style={{ borderTopColor: "#002654" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                    France-Visas
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Portal oficial del gobierno francés para solicitudes de visa y agendamiento de citas consulares.
                </p>
                <a
                  href="https://france-visas.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ backgroundColor: "rgba(0, 38, 84, 0.08)", color: "#002654" }}
                >
                  <Globe className="w-4 h-4" />
                  Visitar sitio oficial
                </a>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.4}>
              <Card className="p-6 border-t-4 hover:shadow-lg transition-all" style={{ borderTopColor: "#002654" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                    Consulado de Francia
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Analiza el expediente completo y toma la decisión final sobre la visa. Es donde presentarás tu solicitud.
                </p>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.5}>
              <Card className="p-6 border-t-4 hover:shadow-lg transition-all" style={{ borderTopColor: "#002654" }}>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8" style={{ color: "#002654" }} />
                  <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                    Service-Public.fr
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Define las reglas oficiales, recursos económicos requeridos, y derechos y obligaciones de los estudiantes.
                </p>
                <a
                  href="https://www.service-public.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ backgroundColor: "rgba(0, 38, 84, 0.08)", color: "#002654" }}
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
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#002654] via-blue-200 to-transparent" />

                <div className="space-y-12">
                    {[
                        {
                            step: "01",
                            title: "Aceptación Académica",
                            desc: "Obtén la carta de aceptación o preinscripción de tu escuela o universidad.",
                            icon: CheckCircle2
                        },
                        {
                            step: "02",
                            title: "Campus France",
                            desc: "Completa el proceso 'Etudes en France', pago y entrevista académica.",
                            icon: Building2
                        },
                        {
                            step: "03",
                            title: "Solicitud de Visa",
                            desc: "Llena el formulario en France-Visas y reúne tu expediente consular.",
                            icon: FileText
                        },
                        {
                            step: "04",
                            title: "Cita Consular",
                            desc: "Presenta tus documentos biométricos y espera la decisión (7-15 días).",
                            icon: Plane
                        },
                    ].map((item, idx) => (
                        <AnimateOnScroll key={idx} direction="up" delay={idx * 0.1}>
                            <div className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                
                                {/* Contenido */}
                                <div className="flex-1 ml-12 md:ml-0">
                                    <div className={`bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#002654] ${idx % 2 === 0 ? 'md:text-right md:border-l-0 md:border-r-4' : ''}`}>
                                        <div className={`text-4xl font-bold text-slate-100 mb-2 select-none ${idx % 2 === 0 ? 'md:hidden' : ''}`}>{item.step}</div>
                                        <h3 className="text-xl font-bold text-[#002654] mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Icono Central */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ED2939] border-4 border-white shadow-lg z-10 flex items-center justify-center">
                                    {/* <item.icon className="w-4 h-4 text-white" /> */}
                                </div>
                                
                                {/* Espacio vacío para balancear el flex en desktop */}
                                <div className="flex-1 hidden md:block text-center md:px-8">
                                     <span className="text-6xl font-bold text-slate-100 opacity-50">{item.step}</span>
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
              <Card className="p-6 border-t-4 bg-white" style={{ borderTopColor: "#10B981" }}>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                    Aplican
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Cursos de francés (mínimo 20 horas semanales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Licenciaturas y Másters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Másters en escuelas privadas reconocidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Formaciones largas y estructuradas</span>
                  </li>
                </ul>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.3}>
              <Card className="p-6 border-t-4 bg-white" style={{ borderTopColor: "#EF4444" }}>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                    No siempre aplican
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Cursos cortos (menos de 20 horas semanales)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Formaciones sin carga horaria suficiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
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
            <Card className="p-8 border-t-4" style={{ borderTopColor: "#002654" }}>
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
                    En algunos casos, es posible cambiar de estatus una vez en Francia, generalmente después de terminar tus estudios. 
                    Este cambio no es automático y depende del diploma obtenido y de la coherencia de tu proyecto académico y profesional. 
                    Cada situación se evalúa caso por caso por la administración francesa.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ejemplos de cambios posibles: pasar de visa de estudiante a visa de trabajo (Salarié) si encuentras un empleo 
                    que corresponda a tu perfil y estudios, o a visa de emprendedor si decides crear tu propia empresa.
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
            <Card className="p-8 border-t-4 bg-gradient-to-br from-blue-50 to-white" style={{ borderTopColor: "#ED2939" }}>
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
                      <strong>La visa de estudiante es un proyecto académico, no solo un trámite administrativo.</strong> 
                      La coherencia de tu expediente es clave para evitar retrasos o rechazos.
                    </p>
                    <p>
                      <strong>Informarte con anticipación</strong> te permite tomar mejores decisiones y preparar 
                      todos los documentos necesarios con tiempo suficiente.
                    </p>
                    <p>
                      <strong>Planifica con tiempo:</strong> El proceso completo, desde la búsqueda de formación hasta 
                      la obtención de la visa, puede tomar de 6 a 9 meses. Inicia tu búsqueda con suficiente anticipación.
                    </p>
                    <p>
                      <strong>Documentación completa:</strong> Asegúrate de tener todos los documentos traducidos y legalizados 
                      cuando corresponda. Un expediente incompleto puede generar retrasos significativos.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>
 

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-gray-700">
                Resuelve tus dudas sobre la visa de estudiante
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="fade" delay={0.2}>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border-2 rounded-lg px-6 data-[state=open]:border-opacity-100 mb-4"
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
                ))}
              </Accordion>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: "#002654" }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#002654" }}>
                  ¿Necesitas ayuda con tu visa de estudiante?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Te acompañamos en todo el proceso: Campus France, inscripción académica, 
                  preparación de dossier y estrategia de recursos económicos.
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
