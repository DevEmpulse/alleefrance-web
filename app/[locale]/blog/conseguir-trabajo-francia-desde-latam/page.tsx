import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

const heroImage = "/conseguir-trabajo-francia.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.conseguir-trabajo-francia-desde-latam.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function ConseguirTrabajoFranciaLatamPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.conseguir-trabajo-francia-desde-latam" });

  const plataformas = t.raw("plataformas") as Array<{ name: string; text: string }>;
  const sectores = t.raw("sectores") as string[];
  const cvList = t.raw("cvList") as string[];
  const procesoList = t.raw("procesoList") as string[];

  return (
    <div className="min-h-screen bg-white">
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
          
          {/* Section 1 */}
          <AnimateOnScroll direction="up" delay={0}>
            <article className="space-y-8">
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

          {/* Plataformas */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
                {t("plataformasTitle")}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {plataformas.map((plat, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl shadow-lg border border-gray-100 bg-white"
                  >
                    <h4
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#002654" }}
                    >
                      {plat.name}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {plat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Sectores */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                {t("sectoresTitle")}
              </h3>
              <p className="text-gray-700 mb-4">{t("sectoresText")}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {sectores.map((sector, index) => (
                  <li key={index}>{sector}</li>
                ))}
              </ul>
              <p className="text-gray-700 italic">{t("sectoresConclusion")}</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* CV */}
              <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                  {t("cvTitle")}
                </h3>
                <p className="text-gray-700 mb-4">{t("cvText")}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {cvList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 text-sm">{t("cvConclusion")}</p>
              </div>

              {/* Proceso */}
              <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#002654" }}>
                  {t("procesoTitle")}
                </h3>
                <p className="text-gray-700 mb-4">{t("procesoText")}</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  {procesoList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <p className="text-gray-700 text-sm">{t("procesoConclusion")}</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Asesoría */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="p-8 rounded-2xl" style={{ backgroundColor: "#002654", color: "white" }}>
              <h3 className="text-2xl font-semibold mb-4">
                {t("asesoriaTitle")}
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                {t("asesoriaText")}
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
