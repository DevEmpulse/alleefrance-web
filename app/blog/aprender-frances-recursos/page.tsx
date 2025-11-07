import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BlogCTASections } from "@/components/blog/blog-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Aprender Francés Rápido: Recursos, Métodos y Plan de Estudio | Allée France",
  description:
    "Combiná apps, clases, inmersión y exámenes oficiales para alcanzar el nivel B1/B2 que exigen las visas francesas en menos de 9 meses.",
}

const pillars = [
  {
    title: "Input diario",
    detail: "Podcast de RFI Journal en français facile + 20 minutos de lectura graduada (News in Slow French, Frantastique).",
  },
  {
    title: "Producción guiada",
    detail: "2 clases semanales (online o presencial) centradas en conversación y corrección de pronunciación.",
  },
  {
    title: "Evaluación mensual",
    detail: "Simulacros DELF/TCF para medir progreso y ajustar el plan antes de la fecha de examen.",
  },
]

const resources = [
  { name: "Alliance Française online", note: "Aulas en vivo + feedback escrito. Ideal para pasar de A2 a B1." },
  { name: "Italki / Preply", note: "Profes personalizados desde 12 € la hora. Elegí nativos especializados en visas o estudios." },
  { name: "Anki + decks B1", note: "Tarjetas con pronunciación para incorporar vocabulario profesional." },
  { name: "TV5 Monde Apprendre", note: "Videos cortos con ejercicios autocorregibles." },
  { name: "Meetup conversacional", note: "Practicá en tu ciudad con nativos que viven en Argentina." },
]

const studyPlan = [
  { phase: "Meses 1-2", focus: "Consolidá la base gramatical A2. 30 minutos diarios de app + 2 clases grupales." },
  { phase: "Meses 3-5", focus: "Saltá a B1: escritura semanal de correos y simulacros orales grabados." },
  { phase: "Meses 6-7", focus: "Preparación DELF: ejercicios cronometrados y feedback correctivo individual." },
  { phase: "Meses 8-9", focus: "Profundizá vocabulario profesional y arma un portfolio de proyectos/ensayos en francés." },
]

export default function AprenderFrancesRecursosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70">Idioma y Cultura</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Aprender Francés: Recursos y Métodos</h1>
          <p className="text-xl leading-relaxed mb-6">
            Un plan accionable para llegar al nivel que exigen las visas francesas, aunque partas desde cero.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <article className="space-y-8">
            <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
              Los 3 pilares para progresar
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#002654" }}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{pillar.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              La constancia es más importante que la cantidad. 45 minutos diarios bien enfocados superan a sesiones largas pero irregulares.
              Usá un calendario compartido para registrar horas de estudio y detectar semanas flojas.
            </p>
          </article>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Recursos recomendados en 2024
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div key={resource.name} className="p-5 rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-lg font-semibold" style={{ color: "#002654" }}>
                    {resource.name}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">{resource.note}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              Complementá los materiales digitales con inmersión real: cambiá el idioma del celular, seguí cuentas francesas en redes y
              buscá tandems lingüísticos. La exposición constante acelera la comprensión auditiva.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Plan de estudio de 9 meses
            </h3>
            <div className="space-y-3">
              {studyPlan.map((phase) => (
                <div key={phase.phase} className="p-4 border border-gray-200 rounded-xl bg-white">
                  <p className="text-sm uppercase tracking-widest text-gray-500">{phase.phase}</p>
                  <p className="text-gray-700 leading-relaxed">{phase.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Preparación para exámenes oficiales
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Elegí el examen según tu objetivo: DELF B1/B2 para visas, TCF IRN para naturalización, TEF Canadá para migración.</li>
              <li>Practica con cronómetro. Las pruebas orales duran 10-15 minutos, así que entrená respuestas concisas.</li>
              <li>Grabate respondiendo temas típicos y analizá muletillas o errores de pronunciación.</li>
              <li>Simulá la parte escrita en computadora si vas a rendir TCF SO, o a mano para DELF.</li>
            </ul>
          </div>
        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  )
}
