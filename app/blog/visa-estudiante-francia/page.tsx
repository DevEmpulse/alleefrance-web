import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BlogCTASections } from "@/components/blog/blog-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Visa de Estudiante en Francia: Admisión, Campus France y Consulado | Allée France",
  description:
    "Guía paso a paso para armar tu dossier de admisión, superar Campus France y obtener la visa VLS-TS Étudiant sin demoras.",
}

const milestones = [
  {
    title: "Selección de programa",
    detail: "Investigá 5/6 formaciones compatibles con tu perfil y verificá si exigen CampusArt, Parcoursup o candidatura directa.",
  },
  {
    title: "Campus France",
    detail:
      "Cargá el dossier, pagá la tasa y preparate para la entrevista. Lleva traducciones oficiales y justificá tu plan de financiamiento.",
  },
  {
    title: "Consulado",
    detail:
      "Reuní originales + copias, seguro, alojamiento y carta de aceptación. El pasaporte demora entre 7 y 15 días hábiles tras el turno.",
  },
]

const funding = [
  { label: "Cuenta propia", note: "Extractos bancarios con saldo ≥ 615 € por mes de estadía" },
  { label: "Sponsor familiar", note: "Carta de compromiso, copia DNI y prueba de ingresos mensuales estables" },
  { label: "Beca/contrato", note: "Constancia oficial que detalle montos, duración y si cubre alojamiento/comidas" },
]

const docs = [
  "Carta de aceptación definitiva o attestation de pré-inscription",
  "Certificado de idioma (DELF B2, TCF, IELTS) según la formación",
  "CV académico actualizado + proyecto de estudios",
  "Seguro médico de viaje (luego activarás la sécurité sociale)",
  "Justificante de alojamiento mínimo por 3 meses",
  "Medios económicos: 7.380 € al año como referencia",
]

export default function VisaEstudianteFranciaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70">Visas de Estudiante</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Visa de Estudiante: Pasos y Calendario</h1>
          <p className="text-xl leading-relaxed mb-6">
            Desglosamos el proceso desde la búsqueda de programas hasta la validación de tu VLS-TS Étudiant en Francia.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <article className="space-y-8">
            <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
              Roadmap: de la candidatura a la visa
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {milestones.map((milestone) => (
                <div key={milestone.title} className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#002654" }}>
                    {milestone.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{milestone.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Recomendamos iniciar la búsqueda con 9 meses de anticipación. Muchas escuelas privadas responden en 2 semanas, pero las
              universidades públicas y las formaciones selectivas (Sciences Po, BTS, másters especializados) pueden tardar 2/3 meses.
            </p>
          </article>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Cómo preparar el dossier de Campus France
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Subí diplomas, analíticos y traducciones juradas en PDF. En el apartado "Motivación" explicá por qué elegiste Francia,
              cuáles son tus objetivos profesionales y cómo vas a financiarte. La entrevista suele durar 15 minutos: llevan tu CV y
              proyecto impreso, te hacen preguntas en francés y comprueban que entendés el plan académico.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Después de la entrevista, Campus France envía el aval directamente al consulado. Recién entonces podés pedir turno para la
              visa; por eso es clave no dejar la entrevista para último momento.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
              Documentación para el consulado
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {docs.map((doc) => (
                <div key={doc} className="p-4 border border-gray-200 rounded-xl bg-white text-gray-700">
                  {doc}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Opciones de financiamiento aceptadas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {funding.map((option) => (
                <div key={option.label} className="p-5 rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-sm uppercase tracking-widest text-gray-500">{option.label}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">{option.note}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              Si combinás ahorro propio + sponsor, aclará los montos que aporta cada uno y adjuntá una tabla resumen. Cuanta más claridad,
              menos pedidos de información extra recibirás.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Después de llegar a Francia
            </h3>
            <ul className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Validá la VLS-TS en ANEF dentro de los 3 primeros meses.</li>
              <li>Inscribite en la sécurité sociale (étudiants internationaux) y elegí una mutuelle.</li>
              <li>Abrí tu cuenta bancaria y pedí la ayuda al alquiler (APL) si corresponde.</li>
              <li>Si tu visa permite trabajar, registrá el contrato en la plataforma adecuada y monitoreá tus horas.</li>
            </ul>
          </div>
        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  )
}
