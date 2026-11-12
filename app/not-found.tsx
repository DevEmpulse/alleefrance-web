import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/messages/es.json";

// A static export produces a single 404 file, so there is no locale to read:
// the copy is inline in the three site languages, each linking to its home.
const COPY = [
  {
    code: "es",
    title: "No encontramos la página que buscas",
    description:
      "Puede que el enlace esté roto o que se haya movido el contenido. Estamos listos para ayudarte a continuar tu plan migratorio hacia Francia.",
    cta: "Volver al inicio",
    href: "/es/",
  },
  {
    code: "en",
    title: "We couldn't find the page you're looking for",
    description:
      "The link may be broken or the content may have moved. We're ready to help you move forward with your plan to move to France.",
    cta: "Back to home",
    href: "/en/",
  },
  {
    code: "fr",
    title: "Nous n'avons pas trouvé la page que vous cherchez",
    description:
      "Le lien est peut-être rompu ou le contenu a été déplacé. Nous sommes prêts à vous aider à poursuivre votre projet d'installation en France.",
    cta: "Retour à l'accueil",
    href: "/fr/",
  },
];

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
                <h1 className="text-sm uppercase tracking-[0.3em] text-blue-200 font-normal">
                  Error 404
                </h1>

                <div className="grid gap-6 md:grid-cols-3 text-left">
                  {COPY.map((item) => (
                    <div
                      key={item.code}
                      lang={item.code}
                      className="bg-white/5 border border-white/15 rounded-3xl p-8 flex flex-col gap-4"
                    >
                      <h2 className="text-2xl font-black tracking-tight">
                        {item.title}
                      </h2>
                      <p className="text-blue-100 flex-1">{item.description}</p>
                      <Button
                        asChild
                        className="bg-[#ED2939] hover:bg-[#ED2939]/90 text-white px-6 py-5 text-base rounded-full shadow-lg shadow-red-900/40 self-start"
                      >
                        <Link href={item.href} hrefLang={item.code}>
                          {item.cta}
                        </Link>
                      </Button>
                    </div>
                  ))}
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
