import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TerminosYCondicionesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Navbar />

      <main>
        <section
          className="pt-28 pb-10 px-4"
          style={{ backgroundColor: "#002654" }}
        >
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="text-4xl font-bold lg:text-5xl">
              Términos y Condiciones
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              Bienvenido/a a Allée France Lyon. Al acceder y utilizar
              alleefrance.com (en adelante, “el Sitio”), aceptás estos términos y
              condiciones de uso.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 pt-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-6 sm:p-10 shadow-sm">
            <div className="space-y-8 text-gray-700">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  1. Aceptación de los términos
                </h2>
                <p className="leading-relaxed">
                  El uso del Sitio implica la aceptación plena y sin reservas de
                  estos términos. Si no estás de acuerdo con alguna condición,
                  por favor no utilices el Sitio.
                </p>
                <p className="leading-relaxed">
                  Toda la información recabada a través del Sitio será tratada
                  conforme a nuestra Política de Privacidad.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  2. Información proporcionada por Allée France
                </h2>
                <p className="leading-relaxed">
                  Allée France Lyon brinda información y orientación sobre
                  procesos migratorios, visas y trámites administrativos en
                  Francia. El contenido del Sitio se basa en fuentes que
                  consideramos confiables y en experiencias verificadas, pero no
                  garantizamos su exactitud, integridad o actualización
                  permanente.
                </p>
                <p className="leading-relaxed">
                  La información publicada tiene fines informativos y no
                  constituye asesoramiento legal vinculante. Cada trámite puede
                  variar según la nacionalidad y la situación particular del
                  usuario.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  3. Uso adecuado del Sitio
                </h2>
                <p className="leading-relaxed">
                  El usuario se compromete a utilizar el Sitio de forma lícita y
                  respetuosa, sin afectar su funcionamiento ni los derechos de
                  terceros. Está prohibido el uso con fines fraudulentos, la
                  recolección automatizada de datos o cualquier acción que pueda
                  dañar la experiencia de otros usuarios.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  4. Propiedad intelectual
                </h2>
                <p className="leading-relaxed">
                  Todos los contenidos del Sitio, incluyendo textos, gráficos,
                  logotipos, imágenes, marcas y software, son propiedad de Allée
                  France Lyon o de terceros que autorizaron su uso. Queda
                  prohibida su reproducción o distribución sin autorización
                  expresa.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  5. Responsabilidades y limitaciones
                </h2>
                <p className="leading-relaxed">
                  Allée France Lyon no asume responsabilidad por decisiones
                  tomadas en base a la información publicada. El usuario utiliza
                  el contenido del Sitio bajo su propio riesgo.
                </p>
                <p className="leading-relaxed">
                  No garantizamos la disponibilidad continua del Sitio y podemos
                  modificar, suspender o interrumpir contenidos y servicios sin
                  previo aviso.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  6. Enlaces a terceros
                </h2>
                <p className="leading-relaxed">
                  El Sitio puede contener enlaces a sitios de terceros. Allée
                  France Lyon no es responsable por los contenidos, políticas o
                  prácticas de privacidad de esos sitios externos.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  7. Procesos de visado
                </h2>
                <p className="leading-relaxed">
                  La postulación, presentación de documentación y obtención de
                  visas es responsabilidad exclusiva del usuario. Aunque
                  brindamos acompañamiento y asesoría, no garantizamos la
                  aprobación o denegación por parte de autoridades competentes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  8. Cambios en los términos
                </h2>
                <p className="leading-relaxed">
                  Allée France Lyon puede modificar estos términos en cualquier
                  momento. La versión vigente será la publicada en el Sitio.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  9. Legislación aplicable
                </h2>
                <p className="leading-relaxed">
                  Estos términos se rigen por la legislación vigente en Francia.
                  Cualquier controversia será sometida a los tribunales
                  competentes de Lyon, Francia.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">10. Contacto</h2>
                <p className="leading-relaxed">
                  Si tenés consultas sobre estos términos, escribinos a{" "}
                  <a
                    href="mailto:contacto@alleefrance.com"
                    className="font-semibold text-[#002654] underline-offset-4 hover:underline"
                  >
                    contacto@alleefrance.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
