"use client"

import { Navbar } from "@/components/navbar"
import { BlogCTASections } from "@/components/blog/blog-cta"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"

const heroImage = "/esim-guide-france.webp"

const ventajas = [
  {
    icon: "⚡",
    title: "Activación instantánea",
    detail: "Código QR y listo, sin ir a ninguna tienda.",
  },
  {
    icon: "📱",
    title: "Doble perfil",
    detail: "Número de origen y número francés en el mismo teléfono.",
  },
  {
    icon: "🌍",
    title: "Cobertura global",
    detail: "Plataformas como Airalo o Holafly cubren Francia desde tu país.",
  },
  {
    icon: "🔒",
    title: "Sin riesgo de pérdida",
    detail: "Es digital: no se rompe, no se extravía, no se daña.",
  },
]

const operadoresFranceses = [
  { name: "Orange", detail: "Excelente cobertura nacional, pero suele ser más costoso." },
  { name: "Bouygues Telecom", detail: "Buena cobertura y planes competitivos." },
  { name: "Free Mobile", detail: "Muy popular entre estudiantes y trabajadores extranjeros por sus precios bajos." },
  { name: "SFR", detail: "Cobertura sólida en grandes ciudades y zonas rurales." },
]

const operadoresLowCost = [
  { name: "Lebara", detail: "Muy utilizada por latinoamericanos por sus llamadas internacionales económicas." },
  { name: "Lycamobile", detail: "Popular para llamadas al extranjero y activación rápida." },
  { name: "Syma Mobile", detail: "Planes baratos y fáciles de contratar sin demasiados requisitos." },
]

const esimInternacionales = [
  { name: "Airalo", detail: "Muy práctica para activar datos antes del viaje." },
  { name: "Holafly", detail: "Datos ilimitados en muchos planes y soporte en español." },
]

export default function EsimGuiaPage() {
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
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 38, 84, 0.85)" }} />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70"
          >
            Conectividad y Tecnología
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            ¿Qué es una eSIM y por qué es tan útil hoy en día?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl leading-relaxed mb-6 text-white/90"
          >
            La guía que todo latinoamericano debería leer antes de aterrizar en Francia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4 text-sm text-white/60"
          >
            <span>2 Junio 2026</span>
            <span>·</span>
            <span>8 min de lectura</span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* Intro */}
          <AnimateOnScroll direction="up" delay={0}>
            <article className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                Una eSIM (embedded SIM) es una tarjeta SIM digital integrada directamente en el chip del teléfono,
                que permite activar un plan de datos o llamadas sin necesidad de insertar una tarjeta física.
                Se activa en minutos mediante un código QR, puede almacenar varios perfiles de operador
                simultáneamente, y es especialmente útil para viajeros, trabajadores internacionales e inmigrantes
                porque permite tener conectividad activa desde el momento en que aterrizas en un nuevo país, sin
                filas, sin esperas y sin depender de una tienda de telefonía.
              </p>
            </article>
          </AnimateOnScroll>

          {/* De la tarjeta física al chip invisible */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                De la tarjeta física al chip invisible
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Durante años, llegar a un nuevo país significaba buscar una tienda de teléfonos, pedir una SIM local
                y esperar que el proceso no tardara demasiado. Un ritual lento y frustrante, especialmente cuando uno
                acaba de bajarse de un vuelo largo y lo único que quiere es avisar que llegó bien.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La eSIM elimina todo ese proceso. Al estar integrada en el hardware del teléfono, no hay nada que
                insertar ni intercambiar. Se escanea un código QR, se siguen unos pasos en los ajustes del
                dispositivo, y en minutos el teléfono ya tiene señal local. Esta tecnología ya viene de serie en la
                mayoría de los teléfonos lanzados desde 2020.
              </p>
            </article>
          </AnimateOnScroll>

          {/* Cómo funciona */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                ¿Cómo funciona exactamente?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cuando se contrata un plan con un operador compatible, este envía un perfil digital que se instala
                directamente en el chip del teléfono. Ese perfil contiene toda la información necesaria para
                conectarse a la red: número, acceso a datos e identificación del usuario.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lo más valioso es que un mismo teléfono puede tener varios perfiles de eSIM instalados al mismo
                tiempo, aunque normalmente solo uno activo. Esto significa que se puede conservar el número del país
                de origen y usar un número francés en paralelo, sin tener que elegir entre uno u otro. Para alguien
                en proceso migratorio, esa es una ventaja muy concreta.
              </p>
            </article>
          </AnimateOnScroll>

          {/* Ventajas */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                Las ventajas clave
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {ventajas.map((v) => (
                  <div key={v.title} className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 flex gap-4 items-start">
                    <span className="text-3xl">{v.icon}</span>
                    <div>
                      <p className="font-semibold text-base mb-1" style={{ color: "#002654" }}>{v.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{v.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Por qué es clave */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                ¿Por qué la eSIM es clave para quien llega a Francia?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Si vienes a Francia con algún visado, o simplemente como turista, tener una eSIM te va a facilitar
                mucho tu estadía en Francia, pues ya habrás resuelto uno de los principales problemas que
                experimentamos todos, sin importar en donde nos encontremos: la conectividad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con una eSIM contratada antes de viajar, el teléfono llega a Francia con conexión activa. Y si se
                prefiere esperar, el proceso de activación se puede hacer desde el wifi del aeropuerto antes de pasar
                por aduana. Sin depender de que haya una tienda abierta, sin entender contratos en francés el primer
                día, sin perder tiempo.
              </p>
            </article>
          </AnimateOnScroll>

          {/* Compañías */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                ¿Qué compañías ofrecen eSIM en Francia?
              </h2>

              {/* Operadores clásicos */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#002654" }}>
                  Operadores franceses clásicos
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {operadoresFranceses.map((op) => (
                    <div key={op.name} className="p-4 rounded-xl border border-gray-100 shadow-sm">
                      <p className="font-bold mb-1" style={{ color: "#002654" }}>{op.name}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{op.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Low cost */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#002654" }}>
                  Operadores low cost muy usados por inmigrantes
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {operadoresLowCost.map((op) => (
                    <div key={op.name} className="p-4 rounded-xl border border-gray-100 shadow-sm">
                      <p className="font-bold mb-1" style={{ color: "#002654" }}>{op.name}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{op.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* eSIM internacionales */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#002654" }}>
                  eSIM internacionales para llegar ya conectado
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {esimInternacionales.map((op) => (
                    <div key={op.name} className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                      <p className="font-bold mb-1" style={{ color: "#002654" }}>{op.name}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{op.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Compatibilidad */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                ¿Mi teléfono es compatible?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                La mayoría de los iPhones desde el modelo XS (2018) son compatibles. En Android, marcas como
                Samsung, Google Pixel, Motorola y Xiaomi tienen modelos compatibles desde hace varios años, aunque no
                todos los modelos de cada marca la incluyen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Para verificarlo, basta con ir a los ajustes del teléfono, buscar la sección SIM y revisar si
                aparece la opción de agregar un plan digital. Si está ahí, el teléfono es compatible. Un detalle a
                tener en cuenta: algunos teléfonos comprados con bloqueo de operador pueden no aceptar eSIM externas
                hasta que se desbloqueen, así que conviene confirmarlo antes de viajar.
              </p>
            </article>
          </AnimateOnScroll>

          {/* Lo que hay que saber antes */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                Lo que hay que tener claro antes de contratar
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                No todas las eSIM son iguales. Hay opciones que ofrecen solo datos, y otras que incluyen número de
                teléfono local, llamadas y datos. Para trámites en Francia, donde muchos formularios oficiales piden
                un número francés, conviene optar por la segunda opción, aunque el coste sea algo mayor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La eSIM es la solución ideal para los primeros días o semanas, mientras se estabilizan los trámites
                y se tiene una dirección fija. Una vez instalado, lo más conveniente suele ser migrar a un forfait
                mensual con un operador local, que ofrece mejores condiciones para un uso continuo a largo plazo.
              </p>
            </article>
          </AnimateOnScroll>

        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  )
}
