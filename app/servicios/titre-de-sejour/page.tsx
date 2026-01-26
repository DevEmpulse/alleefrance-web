import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection, type FAQItem } from "@/components/faq-section";
import {
  CheckCircle2,
  Clock,
  FileText,
  Calendar,
  Shield,
  RefreshCw,
  UserCheck,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const titreDeSejourFaqs: FAQItem[] = [
  {
    question: "¿Cuándo debo renovar mi Titre de Séjour?",
    answer:
      "Debes iniciar el proceso de renovación 2-3 meses antes de que expire tu título actual. Esto asegura que tengas tiempo suficiente para completar todos los trámites.",
    category: ["Titre de Séjour"],
  },
  {
    question: "¿Puedo trabajar mientras espero la renovación?",
    answer:
      "Sí, mientras tu solicitud esté en trámite y tengas el récépissé (recibo de solicitud), puedes continuar trabajando legalmente.",
    category: ["Titre de Séjour"],
  },
  {
    question: "¿Qué pasa si mi Titre de Séjour expira?",
    answer:
      "Si tu título expira antes de renovarlo, puedes estar en situación irregular. Es importante iniciar el proceso con anticipación. Te ayudamos a evitar esta situación.",
    category: ["Titre de Séjour"],
  },
  {
    question: "¿Puedo cambiar de tipo de Titre de Séjour?",
    answer:
      "Sí, es posible cambiar de tipo (por ejemplo, de Étudiant a Salarié), pero requiere un proceso específico. Te asesoramos sobre los requisitos y pasos necesarios.",
    category: ["Titre de Séjour"],
  },
  {
    question: "¿Cuánto tiempo tarda el proceso?",
    answer:
      "El tiempo varía según el tipo y la prefectura, generalmente entre 3-6 semanas. Con nuestra ayuda, optimizamos el proceso para evitar retrasos.",
    category: ["Titre de Séjour"],
  },
  {
    question: "¿Necesito hablar francés para el trámite?",
    answer:
      "No es obligatorio, pero es recomendable. Nosotros te acompañamos en todas las comunicaciones con las autoridades francesas.",
    category: ["Titre de Séjour"],
  },
];

export default function TitreDeSejourPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
        }}
      >
        {/* Overlay para mejorar legibilidad */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "rgba(0, 38, 84, 0.85)" }}
        ></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Titre de Séjour - Permisos de Residencia en Francia
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            ¿Necesitas renovar o solicitar tu Titre de Séjour? Te acompañamos en todo el proceso para regularizar tu estancia en Francia.
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
                <SiWhatsapp className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-white hover:bg-gray-50"
              style={{ color: "#002654" }}
              asChild
            >
              <Link href="/#contacto">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar asesoría
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Información Resumida de Tipos de Titre de Séjour */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-12 text-center"
            style={{ color: "#002654" }}
          >
            Tipos de Titre de Séjour
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Titre de Séjour Salarié */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10" style={{ color: "#ED2939" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Salarié
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para trabajadores con contrato de trabajo en Francia. Renovación anual vinculada a tu empleo.
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Requisitos:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Contrato de trabajo vigente</li>
                    <li>• Justificantes de ingresos</li>
                    <li>• Comprobante de alojamiento</li>
                    <li>• Seguro médico</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Precio:</h4>
                  <p className="text-sm text-gray-700">250€</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Tiempo:</h4>
                  <p className="text-sm text-gray-700">3-6 semanas</p>
                </div>
              </div>
            </Card>

            {/* Titre de Séjour Saisonnier */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-10 h-10" style={{ color: "#002654" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Saisonnier
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para trabajadores estacionales. Renovación anual para cada temporada de trabajo.
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Requisitos:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Contrato de trabajo estacional</li>
                    <li>• Justificantes de ingresos</li>
                    <li>• Comprobante de alojamiento</li>
                    <li>• Seguro médico</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Precio:</h4>
                  <p className="text-sm text-gray-700">150€</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Tiempo:</h4>
                  <p className="text-sm text-gray-700">3-6 semanas</p>
                </div>
              </div>
            </Card>

            {/* Titre de Séjour Étudiant */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-10 h-10" style={{ color: "#ED2939" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Étudiant
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para estudiantes inscritos en instituciones educativas francesas. Renovación anual durante tus estudios.
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Requisitos:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Inscripción académica vigente</li>
                    <li>• Justificantes de recursos</li>
                    <li>• Comprobante de alojamiento</li>
                    <li>• Seguro médico</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Precio:</h4>
                  <p className="text-sm text-gray-700">150€</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Tiempo:</h4>
                  <p className="text-sm text-gray-700">3-6 semanas</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de Renovación */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            Proceso de Renovación o Solicitud
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Renovación */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-10 h-10" style={{ color: "#ED2939" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Renovación
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Si ya tienes un Titre de Séjour y necesitas renovarlo, te ayudamos con todo el proceso.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Pasos:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Revisión de documentos actuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Preparación de dossier completo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Solicitud en plataforma ANEF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Acompañamiento en prefectura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Seguimiento hasta obtención</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Nueva Solicitud */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-10 h-10" style={{ color: "#002654" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  Nueva Solicitud
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Si es tu primera vez solicitando un Titre de Séjour, te guiamos desde el inicio.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>Pasos:</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Evaluación de tu situación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Asesoría sobre tipo de título</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Reunión de documentos necesarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Preparación de dossier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                      <span>Acompañamiento completo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentación Necesaria */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            Documentación Necesaria
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#002654" }}>
                Documentos Básicos
              </h3>
              <ul className="space-y-3">
                {[
                  "Pasaporte vigente",
                  "Titre de Séjour actual (si renuevas)",
                  "Fotografías recientes",
                  "Comprobante de alojamiento",
                  "Justificantes de ingresos",
                  "Seguro médico",
                  "Formularios CERFA completos",
                ].map((doc, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#002654" }}>
                Documentos Específicos por Tipo
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#002654" }}>Salarié:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Contrato de trabajo</li>
                    <li>• Últimas 3 nóminas</li>
                    <li>• Certificado de empleador</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#002654" }}>Étudiant:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Certificado de inscripción</li>
                    <li>• Justificantes de recursos</li>
                    <li>• Certificado de asistencia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#002654" }}>Saisonnier:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Contrato estacional</li>
                    <li>• Justificantes de ingresos</li>
                    <li>• Certificado de empleador</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Experiencia Comprobada",
                description: "+500 trámites exitosos de renovación y solicitud de Titre de Séjour",
              },
              {
                title: "Acompañamiento Total",
                description: "Te guiamos desde la preparación hasta la obtención de tu título",
              },
              {
                title: "Atención Personalizada",
                description: "Cada caso es único. Adaptamos nuestra asesoría a tu situación específica",
              },
              {
                title: "Conocimiento Actualizado",
                description: "Estamos al día con los cambios en normativas y procedimientos",
              },
              {
                title: "Ahorro de Tiempo",
                description: "Evitamos errores comunes que retrasan el proceso",
              },
              {
                title: "Soporte Continuo",
                description: "Estamos disponibles para resolver dudas durante todo el proceso",
              },
            ].map((item, index: number) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-2 text-lg" style={{ color: "#002654" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Necesitas renovar o solicitar tu Titre de Séjour?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contactanos para una asesoría personalizada y descubrí cómo podemos ayudarte a regularizar tu estancia en Francia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold tracking-wide hover:opacity-90"
              style={{ backgroundColor: "#ED2939", color: "white" }}
              asChild
            >
              <a
                href="https://wa.me/33601526171?text=Hola%2C%20necesito%20ayuda%20con%20mi%20Titre%20de%20S%C3%A9jour."
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
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

      <FAQSection
        title="Preguntas Frecuentes"
        description="Resolvemos dudas clave sobre renovación, requisitos y tiempos del Titre de Séjour."
        allowedCategories={["Titre de Séjour"]}
        data={titreDeSejourFaqs}
      />

      <Footer />
    </div>
  );
}
