import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection, type FAQItem } from "@/components/faq-section";
import {
  CheckCircle2,
  Clock,
  FileText,
  Calendar,
  Shield,
  RefreshCw,
  UserCheck,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

export default async function TitreDeSejourPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const locale = p.locale;

  const t = await getTranslations("TitreDeSejourPage");
  const tFaq = await getTranslations("FAQData");
  const titreDeSejourFaqs = tFaq.raw("titreDeSejour") as FAQItem[];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
        }}
      >
        {/* Overlay para mejorar legibilidad */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "rgba(0, 38, 84, 0.85)" }}
        ></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold tracking-wide text-white hover:opacity-90"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <a
                href="https://wa.me/33601526171"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                {t("hero.whatsappCta")}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-white hover:bg-gray-50"
              style={{ color: "#002654" }}
              asChild
            >
              <Link href={`/${locale}#contacto`}>
                <Calendar className="mr-2 h-5 w-5" />
                {t("hero.advisorCta")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Información Resumida de Tipos de Titre de Séjour */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-12 text-center"
            style={{ color: "#002654" }}
          >
            {t("types.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Titre de Séjour Salarié */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10" style={{ color: "#ED2939" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  {t("types.salarie.title")}
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t("types.salarie.description")}
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.salarie.requirementsTitle")}</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {(t.raw("types.salarie.requirements") as string[]).map((req: string, idx: number) => (
                      <li key={idx}>• {req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.salarie.priceTitle")}</h4>
                  <p className="text-sm text-gray-700">{t("types.salarie.price")}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.salarie.durationTitle")}</h4>
                  <p className="text-sm text-gray-700">{t("types.salarie.duration")}</p>
                </div>
              </div>
            </Card>

            {/* Titre de Séjour Saisonnier */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-10 h-10" style={{ color: "#002654" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  {t("types.saisonnier.title")}
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t("types.saisonnier.description")}
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.saisonnier.requirementsTitle")}</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {(t.raw("types.saisonnier.requirements") as string[]).map((req: string, idx: number) => (
                      <li key={idx}>• {req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.saisonnier.priceTitle")}</h4>
                  <p className="text-sm text-gray-700">{t("types.saisonnier.price")}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.saisonnier.durationTitle")}</h4>
                  <p className="text-sm text-gray-700">{t("types.saisonnier.duration")}</p>
                </div>
              </div>
            </Card>

            {/* Titre de Séjour Étudiant */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-10 h-10" style={{ color: "#ED2939" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  {t("types.etudiant.title")}
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t("types.etudiant.description")}
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.etudiant.requirementsTitle")}</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {(t.raw("types.etudiant.requirements") as string[]).map((req: string, idx: number) => (
                      <li key={idx}>• {req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.etudiant.priceTitle")}</h4>
                  <p className="text-sm text-gray-700">{t("types.etudiant.price")}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("types.etudiant.durationTitle")}</h4>
                  <p className="text-sm text-gray-700">{t("types.etudiant.duration")}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Proceso de Renovación */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            {t("process.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Renovación */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-10 h-10" style={{ color: "#ED2939" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  {t("process.renewal.title")}
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t("process.renewal.description")}
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("process.renewal.stepsTitle")}</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {(t.raw("process.renewal.steps") as string[]).map((step: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Nueva Solicitud */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-10 h-10" style={{ color: "#002654" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#002654" }}>
                  {t("process.newRequest.title")}
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t("process.newRequest.description")}
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: "#002654" }}>{t("process.newRequest.stepsTitle")}</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {(t.raw("process.newRequest.steps") as string[]).map((step: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentación Necesaria */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            {t("documents.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#002654" }}>
                {t("documents.basic.title")}
              </h3>
              <ul className="space-y-3">
                {(t.raw("documents.basic.items") as string[]).map((doc: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#ED2939]" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#002654" }}>
                {t("documents.specific.title")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#002654" }}>{t("documents.specific.salarie.title")}</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {(t.raw("documents.specific.salarie.items") as string[]).map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#002654" }}>{t("documents.specific.etudiant.title")}</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {(t.raw("documents.specific.etudiant.items") as string[]).map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: "#002654" }}>{t("documents.specific.saisonnier.title")}</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {(t.raw("documents.specific.saisonnier.items") as string[]).map((item: string, idx: number) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            {t("advantages.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {(t.raw("advantages.items") as Array<{ title: string; description: string }>).map((item, index: number) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-2 text-lg" style={{ color: "#002654" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold tracking-wide hover:opacity-90"
              style={{ backgroundColor: "#ED2939", color: "white" }}
              asChild
            >
              <a
                href="https://wa.me/33601526171?text=Hola%2C%20necesito%20ayuda%20con%20mi%20Titre%20de%20S%C3%A9jour."
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                {t("cta.whatsapp")}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-white hover:bg-gray-50"
              style={{ color: "#002654" }}
              asChild
            >
              <Link href={`/${locale}/servicios`}>{t("cta.moreServices")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection
        title={t("faq.title")}
        description={t("faq.description")}
        allowedCategories={["Titre de Séjour"]}
        data={titreDeSejourFaqs}
      />

      <Footer />
    </div>
  );
}
