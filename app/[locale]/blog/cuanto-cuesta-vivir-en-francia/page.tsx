import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

const heroImage = "/cuanto-cuesta-vivir-en-francia.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.cuanto-cuesta-vivir-en-francia.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function CuantoCuestaVivirEnFranciaPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.cuanto-cuesta-vivir-en-francia" });

  const alquilerList = t.raw("alquiler.list") as string[];
  const alimentacionList = t.raw("alimentacion.list") as string[];
  const transporteList = t.raw("transporte.list") as string[];
  const serviciosList = t.raw("servicios.list") as string[];
  const presupuestoList = t.raw("presupuesto.list") as string[];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

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
          style={{ backgroundColor: "rgba(0, 38, 84, 0.85)" }}
        />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-white/70">
            {t("hero.category")}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl leading-relaxed mb-6">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Intro & Section 1 */}
          <AnimateOnScroll direction="up" delay={0}>
            <article className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {t("intro")}
              </p>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                  {t("section1.title")}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("section1.p1")}
                </p>
              </div>
            </article>
          </AnimateOnScroll>

          {/* Alquiler */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="p-6 rounded-2xl shadow-lg border border-gray-100 bg-white">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                {t("alquiler.title")}
              </h3>
              <p className="text-gray-700 mb-4 text-lg">{t("alquiler.p1")}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                {alquilerList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 text-lg mb-4">{t("alquiler.p2")}</p>
              <p className="text-sm italic text-gray-500 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                {t("alquiler.p3")}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Alimentación */}
              <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                  {t("alimentacion.title")}
                </h3>
                <p className="text-gray-700 mb-4">{t("alimentacion.p1")}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {alimentacionList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Transporte */}
              <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                  {t("transporte.title")}
                </h3>
                <p className="text-gray-700 mb-4">{t("transporte.p1")}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {transporteList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 text-sm italic">{t("transporte.p2")}</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Servicios */}
              <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                  {t("servicios.title")}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {serviciosList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Salud */}
              <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                  {t("salud.title")}
                </h3>
                <p className="text-gray-700 mb-4">{t("salud.p1")}</p>
                <p className="text-gray-700 text-sm italic">{t("salud.p2")}</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Presupuesto */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                {t("presupuesto.title")}
              </h3>
              <p className="text-gray-700 mb-4 text-lg">{t("presupuesto.p1")}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 bg-white p-6 rounded-xl border border-gray-100">
                {presupuestoList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="font-semibold text-lg" style={{ color: "#002654" }}>
                {t("presupuesto.conclusion")}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Ahorros */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
                {t("ahorros.title")}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("ahorros.p1")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* Asesoría */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="p-8 rounded-2xl" style={{ backgroundColor: "#002654", color: "white" }}>
              <h3 className="text-2xl font-semibold mb-4">
                {t("asesoria.title")}
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                {t("asesoria.p1")}
              </p>
            </article>
          </AnimateOnScroll>

        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  );
}
