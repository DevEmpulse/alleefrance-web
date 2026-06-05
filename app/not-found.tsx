import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/messages/es.json";

export default function NotFound() {
  setRequestLocale("es");

  // Pasamos SOLO lo que Navbar y Footer necesitan estrictamente para no crashear,
  // manteniendo la página rapidísima y sin el objeto JSON de 140KB.
  const minimalMessages = {
    Navbar: messages.Navbar,
    Footer: messages.Footer,
  };

  return (
    <html lang="es">
      <body className="antialiased overflow-x-hidden">
        <NextIntlClientProvider locale="es" messages={minimalMessages as any}>
          <main className="min-h-screen w-full bg-slate-950 text-white flex flex-col">
            <Navbar />

            <section className="flex-1 px-4 py-20 md:py-28">
              <div className="container mx-auto max-w-5xl text-center space-y-10">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
                  Error 404
                </p>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                  No encontramos la página que buscas
                </h1>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                  Puede que el enlace esté roto o que se haya movido el contenido.
                  Pero estamos listos para ayudarte a continuar tu plan migratorio
                  hacia Francia.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    asChild
                    className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/80 text-white px-8 py-6 text-base rounded-full shadow-lg shadow-blue-900/40"
                  >
                    <Link href="/">Volver al inicio</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#ED2939] hover:bg-[#ED2939]/90 text-white px-8 py-6 text-base rounded-full shadow-lg shadow-red-900/40"
                  >
                    <Link href="/#contacto">Ir a contacto</Link>
                  </Button>
                </div>

                <div className="mt-16 bg-white/5 border border-white/15 rounded-3xl p-8 md:p-10 text-left relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-transparent pointer-events-none" />
                  <div className="relative space-y-4">
                    <h2 className="text-2xl font-semibold">
                      ¿Te ayudamos a retomar tu proyecto migratorio?
                    </h2>
                    <p className="text-blue-100">
                      Agenda una llamada gratuita y recibe orientación personalizada
                      de nuestro equipo de consejeros franceses. Estamos aquí para
                      acompañarte en cada paso.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        className="bg-[#ED2939] hover:bg-[#ED2939]/90 text-white px-6 py-5 text-base rounded-2xl shadow-lg shadow-red-900/40"
                      >
                        <Link href="/#contacto">Agendar asesoría</Link>
                      </Button>
                      <Button
                        asChild
                        className="bg-[#ED2939] hover:bg-[#ED2939]/90 text-white px-6 py-5 text-base rounded-2xl shadow-lg shadow-red-900/40"
                      >
                        <Link
                          href="https://wa.me/33601526171"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Envíanos un WhatsApp
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
