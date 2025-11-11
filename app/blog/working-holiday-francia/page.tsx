"use client"

import { Navbar } from "@/components/navbar"
import { BlogCTASections } from "@/components/blog/blog-cta"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"


const heroImage = "/happy-travelers-in-france.jpg"
const checklist = [
  "Pasaporte argentino con validez mínima de 12 meses",
  "Certificado de antecedentes penales (con apostilla) emitido hace menos de 3 meses",
  "Seguro médico integral de 12 meses que incluya repatriación",
  "Fondos comprobables de al menos 2.500 €",
  "Boleto de regreso o fondos adicionales para comprarlo",
  "Carta de motivación y CV en francés (sí, los piden)",
]

const landingSteps = [
  { title: "Primeros 7 días", detail: "Tramitá la cuenta bancaria online y comprá la línea telefónica para validar el seguro." },
  { title: "Semana 2", detail: "Buscá alojamiento estable (residencias, colocations, foyers) y formalizá el contrato." },
  { title: "Mes 1", detail: "Registrate en la CPAM para la sécurité sociale y activá tu número fiscal si conseguís un empleo." },
]

const budget = [
  { label: "Alojamiento temporario", amount: "600 €", note: "3 semanas en hostal o residencia mientras buscás colocation" },
  { label: "Garantías y depósitos", amount: "1.200 €", note: "1 mes de depósito + mes adelantado en ciudades grandes" },
  { label: "Transporte + set up", amount: "300 €", note: "Abono Navigo, chip, tarjeta SIM, trámites" },
  { label: "Fondo de emergencia", amount: "400 €", note: "Por si demora el primer sueldo" },
]

export default function WorkingHolidayFranciaPage() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />

      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 38, 84, 0.85)" }} />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70"
          >
            Working Holiday
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Working Holiday Francia: Checklist 2024
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl leading-relaxed mb-6"
          >
            Fechas de apertura, documentos obligatorios y plan financiero para que llegues a Francia con todo resuelto.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <AnimateOnScroll direction="up" delay={0}>
            <article className="space-y-8">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                Cupos y estrategia para conseguir turno
              </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              El consulado abre la agenda en dos tandas (marzo y octubre) y se agota en minutos. Creá tu usuario Francia-Visas con
              antelación, precargá el formulario y tené listo el comprobante del pago de tasa para el mismo día del turno. Usá un email
              secundario para evitar bloqueos y configurá alertas con nuestro bot de Telegram para enterarte apenas se liberen lugares.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Recordá que la visa Working Holiday es por 12 meses, no renovable, y no permite trabajar con contratos superiores a 6 meses
              por empleador. Sin embargo, podés alternar empleos y estudiar hasta 6 meses sin necesidad de otra visa.
            </p>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="p-6 rounded-2xl bg-gray-50">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                Checklist completo antes del turno
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
                Cómo demostrar fondos
              </h3>
            <p className="text-gray-700 leading-relaxed">
              Presentá extractos bancarios de los últimos 3 meses con movimientos claros. Si el dinero lo aporta un familiar, adjuntá carta
              notarizada, copia del documento y prueba de vínculo. Evitá transferencias grandes un día antes del turno; generan dudas y
              pueden pedirte explicaciones adicionales.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Muchos participantes combinan ahorros en pesos + compra de euros pocos días antes. Guardá los comprobantes de la casa de
              cambio para respaldar el origen del dinero.
            </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
                Presupuesto sugerido para el primer mes
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {budget.map((item, index) => (
                  <AnimateOnScroll key={item.label} direction="fade" delay={index * 0.1}>
                    <div className="p-5 rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-sm uppercase tracking-widest text-gray-500">{item.label}</p>
                  <p className="text-3xl font-bold my-2" style={{ color: "#002654" }}>
                    {item.amount}
                  </p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.note}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.4}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
                Llegada a Francia: qué hacer en tus primeras semanas
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {landingSteps.map((step, index) => (
                  <AnimateOnScroll key={step.title} direction="up" delay={index * 0.1}>
                    <div className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white">
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">{step.title}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{step.detail}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                Una vez firmes tu primer contrato, pedí al empleador que te dé la attestation Pôle Emploi y activá tu número de seguridad
                social provisional. Eso te permite acceder a la cobertura médica y cotizar para desempleo.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  )
}
