"use client"

import { Navbar } from "@/components/navbar"
import { BlogCTASections } from "@/components/blog/blog-cta"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"

const heroImage = "/bancos-france-inmigrantes.webp"

const bancosTradicionales = [
  "BNP Paribas",
  "Société Générale",
  "Crédit Agricole",
  "La Banque Postale",
  "CIC",
]

const ventajasFisicos = [
  {
    title: "Reconocimiento institucional",
    detail:
      "Muchos organismos públicos, arrendadores y empleadores prefieren o exigen una cuenta en un banco \"tradicional\", especialmente para la domiciliación de salario o el pago de alquiler mediante cheque.",
  },
  {
    title: "Acceso a productos financieros completos",
    detail:
      "Préstamos, créditos, planes de ahorro, seguros vinculados. Para quien lleva tiempo en Francia y quiere construir un historial financiero, son la opción más completa.",
  },
  {
    title: "Red de cajeros automáticos gratuita",
    detail:
      "La mayoría de estos bancos ofrecen retiro sin comisión en su propia red.",
  },
  {
    title: "Soporte presencial",
    detail:
      "Para personas que prefieren gestionar sus finanzas cara a cara, tener un asesor asignado puede ser un punto a favor.",
  },
]

const desventajasFisicos = [
  {
    title: "Documentación exigente",
    detail:
      "En general solicitan: comprobante de domicilio en Francia (a veces con antigüedad mínima), contrato de trabajo o justificante de ingresos, y en algunos casos, historial bancario previo.",
  },
  {
    title: "Barreras para inmigrantes recientes",
    detail:
      "Si llegas con una visa nueva, sin contrato indefinido o viviendo en alojamiento temporal, muchos bancos simplemente rechazan la solicitud.",
  },
  {
    title: "Comisiones mensuales",
    detail:
      "La mayoría cobran entre 7€ y 15€ al mes por mantenimiento de cuenta, más costos adicionales por tarjeta o servicios extra.",
  },
  {
    title: "Atención en francés únicamente",
    detail:
      "Para quienes aún no dominan el idioma, navegar el sistema puede ser frustrante.",
  },
  {
    title: "Plazos largos",
    detail:
      "Desde la solicitud hasta recibir la tarjeta pueden pasar 2 a 4 semanas.",
  },
]

const neobancos = [
  {
    name: "Wise",
    emoji: "💱",
    subtitle: "Transferencias internacionales al mejor precio",
    color: "#009580",
    bgColor: "#f0faf8",
    ventajas: [
      "Cuenta multidivisa: euros, dólares, pesos y muchas otras monedas al mismo tiempo.",
      "Transferencias al exterior con las comisiones más bajas del mercado, sin márgenes ocultos en el tipo de cambio.",
      "Apertura de cuenta sin necesidad de un domicilio francés previo.",
      "Tarjeta de débito Visa disponible en varios países.",
      "Interfaz disponible en español.",
    ],
    desventajas: [
      "No es un banco en el sentido estricto: los fondos no están cubiertos por el sistema de garantía de depósitos de la UE de la misma manera.",
      "No ofrece domiciliación de nómina de forma estándar en todos los empleadores franceses.",
      "La tarjeta física tiene un costo de emisión.",
      "Las funciones más avanzadas requieren el plan de pago.",
    ],
    idealPara: "Personas que envían o reciben dinero del extranjero con frecuencia y buscan el mejor tipo de cambio.",
    affiliate: {
      label: "Abrí tu cuenta Wise →",
      url: "https://wise.com/invite/ahpc/jiovannyalis",
    },
  },
  {
    name: "Qonto",
    emoji: "🏢",
    subtitle: "Para autónomos y pequeñas empresas",
    color: "#002654",
    bgColor: "#f0f4fb",
    ventajas: [
      "Apertura completamente en línea en menos de 24 horas.",
      "IBAN francés desde el primer día, ideal para emitir facturas y recibir pagos profesionales.",
      "Herramientas de contabilidad integradas: categorización de gastos, exportación de datos, conexión con software contable.",
      "Soporte en varios idiomas, incluyendo español.",
      "Reconocida y aceptada por la mayoría de organismos administrativos franceses.",
    ],
    desventajas: [
      "No está orientada al uso personal: es una cuenta de negocios, no una cuenta corriente para el día a día.",
      "Tarifas mensuales más elevadas que otros neobancos: desde 9€ al mes para el plan básico.",
      "No permite retiro de efectivo en condiciones tan flexibles como Revolut.",
    ],
    idealPara:
      "Auto-entrepreneurs, trabajadores por cuenta propia y cualquier persona que necesite una cuenta profesional seria desde el primer día.",
    affiliate: null,
  },
  {
    name: "Revolut",
    emoji: "⭐",
    subtitle: "El neobanco más completo para el día a día",
    color: "#191c1f",
    bgColor: "#f5f5f7",
    badge: "Recomendado",
    ventajas: [
      "Apertura de cuenta 100% en línea en menos de 10 minutos, sin necesidad de domicilio previo en Francia.",
      "IBAN europeo desde el primer día.",
      "Transferencias en euros sin comisión dentro de la zona SEPA.",
      "Cambio de divisas con tipos de cambio reales (hasta un límite mensual en el plan gratuito).",
      "Tarjeta de débito virtual inmediata y tarjeta física disponible.",
      "Pagos por Google Pay y Apple Pay desde el momento de la activación.",
      "Interfaz disponible en español y muy intuitiva.",
      "Controles de gasto, estadísticas de consumo y opciones de ahorro integradas.",
      "Sistema de puntos RevPoints: por cada compra, acumulás puntos canjeables por descuentos en ropa, comida, viajes y experiencias.",
    ],
    desventajas: [
      "En el plan gratuito, el retiro de efectivo tiene un límite mensual (200€ sin comisión).",
      "Algunos empleadores en Francia prefieren cuentas en bancos más establecidos para domiciliar el salario, aunque esto es cada vez menos frecuente.",
      "El soporte al cliente en el plan gratuito puede ser lento.",
    ],
    idealPara:
      "Cualquier persona que llega a Francia y necesita una cuenta operativa de inmediato, con buenas condiciones para el uso cotidiano y los beneficios de un sistema de recompensas real.",
    affiliate: {
      label: "Abrí tu cuenta Revolut →",
      url: "https://revolut.com/referral/?referral-code=jiovannyali!MAY2-26-AR-RPB-H2&geo-redirect",
    },
  },
  {
    name: "N26",
    emoji: "🇩🇪",
    subtitle: "El neobanco europeo pensado para la simplicidad",
    color: "#3a3a3a",
    bgColor: "#f8f8f8",
    ventajas: [
      "Licencia bancaria europea completa: depósitos protegidos hasta 100.000€ por el fondo de garantía alemán.",
      "Apertura de cuenta 100% en línea, sin necesidad de comprobante de domicilio previo en Francia.",
      "IBAN alemán (DE) aceptado en toda la zona SEPA, válido para recibir salarios y domiciliar pagos.",
      "Plan gratuito funcional con tarjeta Mastercard incluida y sin comisión de mantenimiento.",
      "Interfaz disponible en español, muy intuitiva y fácil de usar desde el primer día.",
      "Notificaciones en tiempo real y herramientas básicas de control de gastos.",
      "Espacios de ahorro integrados directamente en la app.",
    ],
    desventajas: [
      "El IBAN alemán puede generar reticencia en algunos arrendadores o empleadores franceses que prefieren un IBAN FR, aunque es cada vez menos frecuente.",
      "El retiro de efectivo en el plan gratuito está limitado a 3 retiros por mes sin comisión.",
      "Funciones avanzadas requieren los planes de pago (N26 Smart, You o Metal).",
      "El soporte al cliente en el plan gratuito puede ser lento en momentos de alta demanda.",
    ],
    idealPara:
      "Inmigrantes que buscan un neobanco con respaldo bancario real, cobertura de garantía de depósitos europea y una experiencia de uso muy sencilla desde el primer día en Francia.",
    affiliate: null,
  },
  {
    name: "Global66",
    emoji: "🌎",
    subtitle: "La mejor opción para enviar dinero a Latinoamérica",
    color: "#E63946",
    bgColor: "#fff5f5",
    ventajas: [
      "Tipos de cambio muy competitivos hacia monedas latinoamericanas: pesos colombianos, pesos chilenos, bolívares, soles peruanos, entre otras.",
      "Transferencias rápidas, en muchos casos acreditadas en minutos o pocas horas.",
      "Interfaz en español, diseñada pensando en el usuario latinoamericano.",
      "Sin comisiones ocultas: el tipo de cambio que ves al inicio es el que se aplica.",
      "Disponible como app móvil y plataforma web, fácil de usar desde cualquier dispositivo.",
      "Registro sencillo, sin necesidad de cuenta bancaria francesa previa para comenzar.",
    ],
    desventajas: [
      "No es una cuenta bancaria: no emite IBAN, no permite domiciliar el salario ni pagar facturas en Francia.",
      "Su función es exclusivamente enviar dinero al exterior, no gestionar las finanzas del día a día en Europa.",
      "La disponibilidad de destinos y monedas está enfocada en Latinoamérica.",
      "Requiere fondear la transferencia desde una cuenta bancaria o neobanco europeo previo.",
    ],
    idealPara:
      "Inmigrantes latinoamericanos en Francia que necesitan enviar dinero a su familia en América Latina de forma rápida, segura y con el mejor tipo de cambio posible. Se usa en combinación con un neobanco europeo, no en su lugar.",
    affiliate: {
      label: "Registrate en Global66 →",
      url: "https://share.global66.com/JIOSAN2",
    },
  },
]

const cuandoUsar = [
  {
    icon: "✈️",
    title: "Si acabás de llegar a Francia",
    detail:
      "Un banco virtual es tu mejor punto de partida. Te da acceso a una cuenta operativa de inmediato, sin burocracia, y te permite cobrar tu primer salario, pagar tus gastos y recibir transferencias sin esperar semanas.",
  },
  {
    icon: "📋",
    title: "Si ya llevás tiempo en Francia y tenés estatus estable",
    detail:
      "Considerá complementar tu cuenta virtual con una cuenta en un banco tradicional. Algunos trámites oficiales, solicitudes de crédito o arrendamientos de largo plazo pueden facilitarse con un banco físico de respaldo.",
  },
  {
    icon: "💡",
    title: "La estrategia más inteligente",
    detail:
      "Usar ambos: un neobanco para la operativa diaria y las transferencias internacionales, y un banco tradicional cuando el proceso burocrático lo exija.",
  },
]

export default function BancosPage() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 38, 84, 0.88)" }} />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70"
          >
            Finanzas para Inmigrantes
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Bancos físicos vs bancos virtuales en Francia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl leading-relaxed mb-6 text-white/90"
          >
            ¿Cuál es la mejor opción para inmigrantes?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4 text-sm text-white/60"
          >
            <span>2 Junio 2026</span>
            <span>·</span>
            <span>12 min de lectura</span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Intro */}
          <AnimateOnScroll direction="up" delay={0}>
            <article className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                Si estás llegando a Francia como inmigrante y te preguntás qué banco abrir, la respuesta corta es:{" "}
                <strong>un banco virtual es casi siempre la mejor opción para empezar.</strong> Los bancos virtuales
                en Francia como Wise, Revolut y Qonto ofrecen apertura de cuenta 100% en línea, sin necesidad de un
                domicilio francés consolidado ni de un contrato de trabajo previo, con tarifas mucho más bajas que los
                bancos tradicionales y con interfaces disponibles en varios idiomas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En cambio, los bancos físicos como BNP Paribas, Société Générale o Crédit Agricole suelen exigir
                documentación extensa, citas presenciales y, en muchos casos, rechazan solicitudes de personas con
                estatus migratorio reciente o en proceso de regularización. Conocer las diferencias entre ambos modelos
                puede ahorrarte semanas de trámites y muchos dolores de cabeza.
              </p>
            </article>
          </AnimateOnScroll>

          {/* El sistema bancario */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                El sistema bancario en Francia: lo que nadie te explica antes de llegar
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Francia tiene un sistema bancario sólido y bien regulado, pero también notoriamente burocrático. Abrir
                una cuenta bancaria en un banco tradicional puede convertirse en una misión casi imposible durante los
                primeros meses de estadía, precisamente cuando más la necesitás.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Para cobrar un salario, pagar un alquiler, recibir transferencias del exterior o simplemente sobrevivir
                económicamente en Francia, necesitás una cuenta bancaria. Pero conseguirla puede ser el primer
                obstáculo con el que chocás. Aquí es donde la distinción entre bancos físicos y bancos virtuales se
                vuelve crucial.
              </p>
            </article>
          </AnimateOnScroll>

          {/* Bancos físicos */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                Bancos físicos en Francia: ventajas y desventajas
              </h2>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-semibold mb-3" style={{ color: "#002654" }}>
                  Los más conocidos
                </h3>
                <div className="flex flex-wrap gap-2">
                  {bancosTradicionales.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: "#002654" }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2" style={{ color: "#002654" }}>
                    <span className="text-green-500">✓</span> Ventajas
                  </h3>
                  <div className="space-y-3">
                    {ventajasFisicos.map((v) => (
                      <div key={v.title} className="p-4 rounded-xl bg-green-50 border border-green-100">
                        <p className="font-semibold text-sm text-green-800 mb-1">{v.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{v.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2" style={{ color: "#002654" }}>
                    <span className="text-red-500">✗</span> Desventajas
                  </h3>
                  <div className="space-y-3">
                    {desventajasFisicos.map((d) => (
                      <div key={d.title} className="p-4 rounded-xl bg-red-50 border border-red-100">
                        <p className="font-semibold text-sm text-red-800 mb-1">{d.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{d.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Bancos virtuales */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
              Bancos virtuales en Francia: los mejores para inmigrantes
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Los neobancos operan completamente en línea, sin sucursales físicas. Estos son los más utilizados por
              la comunidad latinoamericana en Francia:
            </p>
          </AnimateOnScroll>

          {/* Cards de neobancos */}
          <div className="space-y-8">
            {neobancos.map((neo, index) => (
              <AnimateOnScroll key={neo.name} direction="up" delay={index * 0.08}>
                <div
                  className="rounded-2xl overflow-hidden border shadow-sm"
                  style={{ borderColor: `${neo.color}30` }}
                >
                  {/* Header */}
                  <div
                    className="px-6 py-5 flex items-center justify-between"
                    style={{ backgroundColor: neo.bgColor }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{neo.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl font-bold" style={{ color: neo.color }}>
                            {neo.name}
                          </h3>
                          {"badge" in neo && neo.badge && (
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                              style={{ backgroundColor: "#ED2939" }}
                            >
                              {neo.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{neo.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">✓ Ventajas</p>
                      <ul className="space-y-2">
                        {neo.ventajas.map((v) => (
                          <li key={v} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                            <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3">✗ Desventajas</p>
                      <ul className="space-y-2">
                        {neo.desventajas.map((d) => (
                          <li key={d} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">•</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t"
                    style={{ backgroundColor: neo.bgColor, borderColor: neo.color + "20" }}
                  >
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold" style={{ color: neo.color }}>
                        Ideal para:{" "}
                      </span>
                      {neo.idealPara}
                    </p>
                    {neo.affiliate && (
                      <a
                        href={neo.affiliate.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex-shrink-0 text-sm font-bold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-85"
                        style={{ backgroundColor: neo.color }}
                      >
                        {neo.affiliate.label}
                      </a>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* RevPoints callout */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div
              className="p-6 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #191c1f 0%, #2d3436 100%)" }}
            >
              <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Beneficio destacado</p>
              <h2 className="text-2xl font-bold text-white mb-4">
                ¿Por qué los RevPoints de Revolut valen la pena?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Uno de los aspectos más interesantes de Revolut para quienes recién llegan a Francia es su programa
                de recompensas. Cada vez que pagás con tu tarjeta Revolut, acumulás RevPoints. Estos puntos se pueden
                canjear directamente en la plataforma por descuentos en compras, productos de marcas seleccionadas,
                cashback o acceso a experiencias.
              </p>
              <p className="text-white/80 leading-relaxed">
                Para alguien que está construyendo su vida desde cero en un nuevo país, cada compra cotidiana —desde
                el supermercado hasta el transporte— se convierte en una oportunidad de acumular valor. No es un
                sistema exagerado, pero es real, funcional y se integra de forma natural al uso diario de la cuenta.
              </p>
              <a
                href="https://revolut.com/referral/?referral-code=jiovannyali!MAY2-26-AR-RPB-H2&geo-redirect"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block mt-5 text-sm font-bold px-5 py-2.5 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Abrí tu cuenta Revolut y empezá a acumular →
              </a>
            </div>
          </AnimateOnScroll>

          {/* ¿Cuándo usar cada uno? */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                Entonces, ¿banco físico o virtual?
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {cuandoUsar.map((item) => (
                  <div key={item.title} className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white h-full">
                    <span className="text-3xl block mb-3">{item.icon}</span>
                    <p className="font-bold text-sm mb-2" style={{ color: "#002654" }}>{item.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Conclusión */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                Conclusión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                El sistema bancario en Francia puede parecer un laberinto al principio, pero hoy existen herramientas
                reales que lo hacen mucho más accesible. Los bancos virtuales han democratizado el acceso financiero
                para inmigrantes, y opciones como Wise, Qonto y Revolut ofrecen soluciones concretas según cada
                perfil y necesidad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Si buscás empezar rápido, con una cuenta funcional desde el primer día y beneficios que se acumulan
                con cada gasto cotidiano, Revolut es difícilmente superable como punto de entrada al sistema
                financiero francés.
              </p>
            </article>
          </AnimateOnScroll>

          {/* Affiliate links CTA */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div
              className="p-6 rounded-2xl text-center space-y-4"
              style={{ backgroundColor: "#f0f4fb", border: "1px solid #00265420" }}
            >
              <p className="text-sm uppercase tracking-widest text-gray-500">Empezá hoy</p>
              <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                Usá mis enlaces y empezá a acumular beneficios desde el Día 1
              </h3>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href="https://revolut.com/referral/?referral-code=jiovannyali!MAY2-26-AR-RPB-H2&geo-redirect"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#191c1f" }}
                >
                  Revolut →
                </a>
                <a
                  href="https://share.global66.com/JIOSAN2"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#E63946" }}
                >
                  Global66 →
                </a>
                <a
                  href="https://wise.com/invite/ahpc/jiovannyalis"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#009580" }}
                >
                  Wise →
                </a>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  )
}
