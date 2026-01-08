import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PoliticaDePrivacidadPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Navbar />

      <main>
        <section
          className="pt-28 pb-10 px-4"
          style={{ backgroundColor: "#002654" }}
        >
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="text-4xl font-bold lg:text-5xl">Política de Privacidad</h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              Allée France Lyon opera alleefrance.com (en adelante, “el Sitio”).
              Respetamos tu privacidad y nos comprometemos a protegerla a través
              del cumplimiento de esta política.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 pt-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-6 sm:p-10 shadow-sm">
            <div className="space-y-8 text-gray-700">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  1. Información que recopilamos y usamos
                </h2>
                <p className="leading-relaxed">
                  A través del Sitio recibimos y almacenamos la información que
                  ingresás en formularios, solicitudes, consultas y mensajes de
                  contacto. Esto puede incluir datos que identifican a los
                  usuarios, como nombre, domicilio, correo electrónico,
                  nacionalidad, edad, género y datos demográficos.
                </p>
                <p className="leading-relaxed">
                  Cuando visitás el Sitio, también recopilamos información del
                  dispositivo, como dirección IP, tipo de navegador, zona
                  horaria, cookies instaladas y páginas visitadas. A esta
                  información la llamaremos “la Información”.
                </p>
                <p className="leading-relaxed">
                  Utilizamos “la Información” para detectar riesgos y prevenir
                  fraudes (en particular, tu dirección IP), y para mejorar la
                  experiencia de navegación, el contenido y nuestras campañas.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-[#002654]">
                    Finalidades principales:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Procesar y gestionar solicitudes de asesoría migratoria,
                      visas y trámites administrativos en Francia.
                    </li>
                    <li>
                      Personalizar la experiencia del usuario y ofrecer
                      contenidos relevantes.
                    </li>
                    <li>
                      Comunicarnos sobre consultas, turnos, documentación y
                      actualizaciones de servicios.
                    </li>
                    <li>
                      Mejorar nuestros servicios y desarrollar nuevas
                      soluciones.
                    </li>
                    <li>
                      Cumplir con obligaciones legales y regulatorias
                      aplicables.
                    </li>
                    <li>
                      Enviar comunicaciones generales y de marketing, como
                      newsletters y novedades del Sitio.
                    </li>
                  </ul>
                </div>
                <p className="leading-relaxed">
                  No consideraremos como información recopilada por el Sitio a
                  la información obtenida fuera de línea o a través de otros
                  medios, salvo que se mencione expresamente en esta política.
                </p>
                <p className="leading-relaxed">
                  Si hacés clic en un enlace y abandonás el Sitio, no somos
                  responsables por las prácticas de privacidad de terceros.
                  Recomendamos revisar las políticas de esos sitios.
                </p>
                <p className="leading-relaxed">
                  Si no estás de acuerdo con nuestras prácticas, podés optar por
                  no utilizar el Sitio. Al acceder o utilizar el Sitio, aceptás
                  esta política.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">2. Cookies</h2>
                <p className="leading-relaxed">
                  El Sitio utiliza cookies para recopilar información y mejorar
                  la navegación. Podés configurar tu navegador para rechazar
                  todas las cookies o para que te avise cuando se envía una.
                  Tené en cuenta que algunas partes del Sitio podrían no
                  funcionar correctamente si desactivás las cookies.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  3. Compartir tu información personal
                </h2>
                <p className="leading-relaxed">
                  La información que recopilamos puede compartirse con terceros
                  de acuerdo con lo descrito en esta política:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Proveedores de servicios que nos asisten con hosting,
                    analítica, mensajería y soporte técnico, bajo nuestras
                    instrucciones.
                  </li>
                  <li>
                    Autoridades administrativas o judiciales que requieran
                    información conforme a la normativa aplicable.
                  </li>
                  <li>
                    Prevención de fraude, protección de derechos y seguridad de
                    nuestros usuarios y del Sitio.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">4. Seguridad</h2>
                <p className="leading-relaxed">
                  Implementamos medidas razonables de seguridad para proteger
                  tus datos personales y reducir riesgos de pérdida, acceso no
                  autorizado o divulgación. Sin embargo, ningún método de
                  transmisión o almacenamiento es completamente seguro, por lo
                  que no podemos garantizar seguridad absoluta.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  5. Cambios en esta política
                </h2>
                <p className="leading-relaxed">
                  Podemos actualizar esta política en cualquier momento. Los
                  cambios tendrán efecto inmediato una vez publicados en el
                  Sitio. Te recomendamos revisar periódicamente esta página.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">6. Contacto</h2>
                <p className="leading-relaxed">
                  Si querés acceder, rectificar o eliminar información personal
                  o realizar consultas sobre esta política, escribinos a{" "}
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
