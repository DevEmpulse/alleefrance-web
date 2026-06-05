import { setRequestLocale, getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { BlogCTASections } from "@/components/blog/blog-cta"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


const heroImage = "/esim-guide-france.webp"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.esim-guia-latinoamericanos-francia.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function EsimGuiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.esim-guia-latinoamericanos-francia" });

  const ventajas = t.raw("ventajas") as Array<{ icon: string; title: string; detail: string }>;
  const operadoresFranceses = t.raw("operadoresFranceses") as Array<{ name: string; detail: string }>;
  const operadoresLowCost = t.raw("operadoresLowCost") as Array<{ name: string; detail: string }>;
  const esimInternacionales = t.raw("esimInternacionales") as Array<{ name: string; detail: string }>;
  
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
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70">
            {t("hero.category")}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
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
        <div className="max-w-4xl mx-auto space-y-14">

          {/* Intro */}
          <AnimateOnScroll direction="up" delay={0}>
            <article className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("intro")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* De la tarjeta física al chip invisible */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("section1.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section1.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section1.p2")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* Cómo funciona */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("section2.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section2.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section2.p2")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* Ventajas */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("ventajasTitle")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {ventajas.map((v, index) => (
                  <div key={index} className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 flex gap-4 items-start">
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
                {t("section3.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section3.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section3.p2")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* Compañías */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("compTitle")}
              </h2>

              {/* Operadores clásicos */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#002654" }}>
                  {t("operadoresFrancesesTitle")}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {operadoresFranceses.map((op, index) => (
                    <div key={index} className="p-4 rounded-xl border border-gray-100 shadow-sm">
                      <p className="font-bold mb-1" style={{ color: "#002654" }}>{op.name}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{op.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Low cost */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#002654" }}>
                  {t("operadoresLowCostTitle")}
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {operadoresLowCost.map((op, index) => (
                    <div key={index} className="p-4 rounded-xl border border-gray-100 shadow-sm">
                      <p className="font-bold mb-1" style={{ color: "#002654" }}>{op.name}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{op.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* eSIM internacionales */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold" style={{ color: "#002654" }}>
                  {t("esimInternacionalesTitle")}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {esimInternacionales.map((op, index) => (
                    <div key={index} className="p-4 rounded-xl bg-blue-50 border border-blue-100">
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
                {t("section4.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section4.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section4.p2")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* Lo que hay que saber antes */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("section5.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section5.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("section5.p2")}
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
