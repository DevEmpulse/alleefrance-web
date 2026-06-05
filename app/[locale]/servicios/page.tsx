import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ServicesCatalog } from "@/components/servicios/services-catalog";
import { getPersonas, getServices } from "@/lib/services-data";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Calendar } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { buildWhatsAppLink } from "@/lib/utils";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.services" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "servicios migratorios francia",
      "asesoría visa francia",
      "trámites migratorios francia",
      "gestoría visa francia",
      "visa trabajo francia",
      "visa estudiante francia",
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://alleefrance.com/${locale}/servicios`,
      type: "website",
    },
    alternates: {
      canonical: `https://alleefrance.com/${locale}/servicios`,
    },
  };
}

export default async function ServiciosPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);

  const t = await getTranslations("ServicesData");
  const tPage = await getTranslations("ServicesPage");
  const personas = getPersonas(t);
  const services = getServices(t);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Navbar />

      <main>
        {/* HERO CATÁLOGO */}
        <section
          className="pt-28 pb-8 px-4"
          style={{ backgroundColor: "#002654" }}
        >
          <div className="mx-auto max-w-7xl">
            <AnimateOnScroll direction="fade" delay={0.1}>
              <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                  {tPage("title")}
                </h1>

                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  {tPage("subtitle")}
                </p>

                {/* Microcopy de ayuda */}
                <p className="mt-4 text-sm lg:text-base text-white/80">
                  {tPage("helpText")}
                </p>

                {/* Botones principales */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  {/* CTA principal: Reservar asesoría */}
                  <Button
                    size="lg"
                    className="text-white font-semibold tracking-wide px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                    style={{ backgroundColor: "#ED2939" }}
                    asChild
                  >
                    <Link
                      href={`/${p.locale}#contacto`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      {tPage("bookConsulting")}
                    </Link>
                  </Button>

                  {/* CTA secundario: WhatsApp */}
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-[#002654] font-semibold tracking-wide px-8 py-6 rounded-full border-0 shadow-md hover:bg-gray-100 hover:shadow-lg transition-all"
                    asChild
                  >
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiWhatsapp className="w-5 h-5 mr-2" />
                      {tPage("whatsappConsulting")}
                    </a>
                  </Button>
                </div>

                {/* Tiempo de respuesta */}
                <p className="mt-4 text-xs sm:text-sm text-white/70">
                  {tPage("responseTime")}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CONTENIDO CATÁLOGO */}
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16">
          <ServicesCatalog personas={personas} services={services} />

          {/* CTA FINAL */}
          <AnimateOnScroll direction="fade" delay={0.3}>
            <div className="mt-16 text-center">
              <Card className="border border-slate-100 bg-white rounded-2xl p-8 shadow-md lg:p-10">
                <h2 className="mb-4 text-2xl font-bold text-[#002654]">
                  {tPage("notFoundTitle")}
                </h2>
                <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-gray-600">
                  {tPage("notFoundDesc")}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    className="font-semibold text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                    style={{ backgroundColor: "#ED2939" }}
                  >
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tPage("freeConsulting")}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 bg-white font-semibold text-[#002654] px-8 py-6 rounded-full hover:bg-gray-50 transition-colors"
                    style={{ borderColor: "#002654" }}
                  >
                    <Link href={`/${p.locale}#contacto`}>{tPage("contactForm")}</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
}
