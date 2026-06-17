import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { SiWhatsapp } from "react-icons/si";
import { buildWhatsAppLink } from "@/lib/utils";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

const heroImage = "/titre-sejour-france-guide.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.titre-sejour-francia.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function TitreSejourPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.titre-sejour-francia" });

  const types = t.raw("types") as Array<{
    name: string; icon: string; description: string; duration: string; canWork: boolean;
  }>;
  const docsGeneral = t.raw("docsGeneral") as string[];
  const steps = t.raw("steps") as Array<{ step: string; title: string; detail: string }>;

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
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 38, 84, 0.88)" }}
        />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70">
            {t("hero.category")}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl leading-relaxed mb-6 text-white/90">
            {t("hero.subtitle")}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-white/60">
            <span>{t("hero.date")}</span>
            <span>·</span>
            <span>{t("hero.readTime")}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Intro */}
          <AnimateOnScroll direction="up" delay={0}>
            <article className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("intro.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("intro.p2")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* Qué es */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("whatIs.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("whatIs.p1")}
              </p>
              <div
                className="p-5 rounded-2xl border-l-4 text-gray-700 leading-relaxed"
                style={{ backgroundColor: "#f0f4fb", borderColor: "#002654" }}
              >
                {t("whatIs.warning")}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Tipos */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("typesTitle")}
              </h2>
              <div className="space-y-4">
                {types.map((type) => (
                  <div
                    key={type.name}
                    className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{type.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h3 className="text-lg font-bold" style={{ color: "#002654" }}>
                            {type.name}
                          </h3>
                          <span
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: type.canWork ? "#dcfce7" : "#fef9c3",
                              color: type.canWork ? "#166534" : "#713f12",
                            }}
                          >
                            {type.canWork ? t("canWork") : t("cannotWork")}
                          </span>
                          <span className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
                            {type.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Cuándo iniciar */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("whenTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("when.p1")}
              </p>
              <div
                className="p-5 rounded-2xl border-l-4 text-gray-700 leading-relaxed"
                style={{ backgroundColor: "#f0f9f4", borderColor: "#16a34a" }}
              >
                {t("when.recipisse")}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ANEF */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("anefTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("anef.p1")}
              </p>
              <a
                href="https://administration-etrangers-en-france.interieur.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#002654" }}
              >
                🏛️ {t("anef.cta")}
              </a>
              <p className="text-sm text-gray-500">{t("anef.note")}</p>
            </div>
          </AnimateOnScroll>

          {/* Documentación */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("docsTitle")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {docsGeneral.map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50"
                  >
                    <span className="text-blue-600 font-bold mt-0.5">✓</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Tiempos */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("timingTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("timing.p1")}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Renovación */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("renewalTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("renewal.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("renewal.p2")}
              </p>
            </div>
          </AnimateOnScroll>

          {/* CTA final */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div
              className="p-8 rounded-2xl text-center space-y-4"
              style={{ backgroundColor: "#f0f4fb", border: "1px solid #00265420" }}
            >
              <p className="text-sm uppercase tracking-widest text-gray-500">{t("cta.label")}</p>
              <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                {t("cta.title")}
              </h3>
              <a
                href={buildWhatsAppLink("Hola, necesito ayuda con mi Titre de Séjour.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <SiWhatsapp className="w-5 h-5" />
                {t("cta.button")}
              </a>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  );
}
