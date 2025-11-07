import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BlogCTASections } from "@/components/blog/blog-cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Visa Saisonier o Salarié en Francia 2024 | Allée France",
  description:
    "Checklist completa para postular a la visa Saisonier o Salarié en Francia: requisitos, contrato, plazos, documentación y consejos prácticos.",
}

const timeline = [
  { month: "Mes 1", detail: "Definí sector, región y contactos. Prepará CV/Carta en francés y empezá a enviar candidaturas." },
  { month: "Mes 2", detail: "Cerrá contrato + promesa de empleo, reuní documentación personal y pedí turno consular." },
  { month: "Mes 3", detail: "Entrevista en el consulado, espera del pasaporte y organización del viaje (seguro, alojamiento, llegada)." },
]

const documents = [
  "Contrato de trabajo visado por la DIRECCTE o validado vía ANEF",
  "Pasaporte vigente + copia completa",
  "Carta de motivación y CV en francés",
  "Seguro médico internacional que cubra toda la estadía",
  "Comprobante de alojamiento o attestation d'hébergement",
  "Fondos suficientes (extractos bancarios de los últimos 3 meses)",
]

const sectors = [
  {
    title: "Agro / Vendimias",
    text: "Alta demanda entre agosto y octubre. Es clave postular con antelación y mostrar experiencia previa o ganas de aprender rápido.",
  },
  {
    title: "Hostelería y turismo",
    text: "Hoteles de estaciones de ski y zonas costeras contratan para temporada alta. Buscan francés conversacional y disponibilidad de 4/6 meses.",
  },
  {
    title: "Servicios urbanos",
    text: "Restaurantes, mudanzas y delivery suman personal en ciudades grandes. La red de contactos locales acelera tu búsqueda.",
  },
]

export default function VisaSaisonierSalariePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70">Visas de Trabajo</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Visa Saisonier o Salarié: Guía 2024</h1>
          <p className="text-xl leading-relaxed mb-6">
            Cómo conseguir un contrato temporal, preparar tu dossier y presentar la visa sin cometer los errores que más rechazos generan.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <article className="space-y-8">
            <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
              ¿Qué cubre la visa Saisonier / Salarié?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Permite trabajar en Francia entre 3 y 6 meses (renovable hasta 9) en sectores con demanda temporal. La empresa francesa
              inicia el expediente y valida el contrato ante la DIRECCTE o mediante la plataforma ANEF. Con ese contrato y una carta de
              motivación consistente demostrás que volverás al finalizar la temporada.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              No necesitás demostrar francés perfecto, pero sí entender las tareas básicas. Contar con experiencia relacionada, cursos
              cortos o referencias laborales ayuda a que Recursos Humanos confíe en tu perfil y acelere el trámite.
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                Requisitos imprescindibles
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Contrato temporal firmado + autorización de trabajo</li>
                <li>Seguro médico por todo el periodo y repatriación</li>
                <li>Fondos mínimos de 600 € mensuales si el empleador no cubre alojamiento</li>
                <li>Pasaje de regreso o dinero reservado para comprarlo</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                Ventajas
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Posibilidad de encadenar contratos y volver cada temporada</li>
                <li>Acceso a alojamiento de empresa en agro y hostelería</li>
                <li>Sumás experiencia francesa para futuras visas de trabajo</li>
                <li>Podés cambiar a una visa de trabajo larga si recibís un CDI</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
              Cronograma sugerido
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((item) => (
                <div key={item.month} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">{item.month}</p>
                  <p className="text-gray-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Documentación que revisan con lupa
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc) => (
                <div key={doc} className="p-4 border border-gray-200 rounded-xl bg-white text-gray-700">
                  {doc}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Sectores con mayor demanda en 2024
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {sectors.map((sector) => (
                <div key={sector.title} className="p-5 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-semibold mb-2" style={{ color: "#002654" }}>
                    {sector.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{sector.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              Tips para presentar el expediente
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Agendá el turno apenas recibas el contrato; en temporada alta se agotan rápido.</li>
              <li>Si tu empleador cubre alojamiento o comidas, pedí que lo indiquen por escrito para justificar fondos menores.</li>
              <li>Incluí cartas de recomendación traducidas al francés para fortalecer tu perfil.</li>
              <li>Organizá el dossier en el orden que pide el consulado y llevá copias extra.</li>
            </ul>
          </div>
        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  )
}
