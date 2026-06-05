import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


const heroImage = "/bancos-france-inmigrantes.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.bancos-fisicos-vs-virtuales-francia.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function BancosPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations("BlogPosts.bancos-fisicos-vs-virtuales-francia");

  const bancosTradicionales = t.raw("bancosTradicionales") as string[];
  const ventajasFisicos = t.raw("ventajasFisicos") as Array<{ title: string; detail: string }>;
  const desventajasFisicos = t.raw("desventajasFisicos") as Array<{ title: string; detail: string }>;
  const neobancos = t.raw("neobancos") as Array<{
    name: string; emoji: string; subtitle: string; color: string; bgColor: string; badge?: string;
    ventajas: string[]; desventajas: string[]; idealPara: string; affiliate: { label: string; url: string } | null;
  }>;
  const cuandoUsar = t.raw("cuandoUsar") as Array<{ icon: string; title: string; detail: string }>;
  
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
                {t.rich("intro.p1", {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("intro.p2")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* El sistema bancario */}
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

          {/* Bancos físicos */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("fisicosTitle")}
              </h2>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "#002654" }}
                >
                  {t("losMasConocidos")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {bancosTradicionales.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: "#002654" }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3
                    className="text-xl font-semibold flex items-center gap-2"
                    style={{ color: "#002654" }}
                  >
                    <span className="text-green-500">✓</span> {t("ventajasFisicosLabel")}
                  </h3>
                  <div className="space-y-3">
                    {ventajasFisicos.map((v, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-green-50 border border-green-100"
                      >
                        <p className="font-semibold text-sm text-green-800 mb-1">
                          {v.title}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {v.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3
                    className="text-xl font-semibold flex items-center gap-2"
                    style={{ color: "#002654" }}
                  >
                    <span className="text-red-500">✗</span> {t("desventajasFisicosLabel")}
                  </h3>
                  <div className="space-y-3">
                    {desventajasFisicos.map((d, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-red-50 border border-red-100"
                      >
                        <p className="font-semibold text-sm text-red-800 mb-1">
                          {d.title}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {d.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Bancos virtuales */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
              {t("virtualesTitle")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              {t("virtualesIntro")}
            </p>
          </AnimateOnScroll>

          {/* Cards de neobancos */}
          <div className="space-y-8">
            {neobancos.map((neo, index) => (
              <AnimateOnScroll
                key={index}
                direction="up"
                delay={index * 0.08}
              >
                <div
                  className="rounded-2xl overflow-hidden border shadow-sm"
                  style={{ borderColor: `${neo.color}30` }}
                >
                  {/* Header */}
                  <div
                    className="px-6 py-5 flex items-center justify-between"
                    style={{ backgroundColor: neo.bgColor }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{neo.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3
                            className="text-2xl font-bold"
                            style={{ color: neo.color }}
                          >
                            {neo.name}
                          </h3>
                          {"badge" in neo && neo.badge && (
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                              style={{ backgroundColor: "#ED2939" }}
                            >
                              {neo.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{neo.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">
                        ✓ {t("ventajasLabel")}
                      </p>
                      <ul className="space-y-2">
                        {neo.ventajas.map((v, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm text-gray-700 leading-relaxed"
                          >
                            <span className="text-green-500 mt-0.5 shrink-0">
                              •
                            </span>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3">
                        ✗ {t("desventajasLabel")}
                      </p>
                      <ul className="space-y-2">
                        {neo.desventajas.map((d, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm text-gray-700 leading-relaxed"
                          >
                            <span className="text-red-400 mt-0.5 shrink-0">
                              •
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t"
                    style={{
                      backgroundColor: neo.bgColor,
                      borderColor: neo.color + "20",
                    }}
                  >
                    <p className="text-sm text-gray-600">
                      <span
                        className="font-semibold"
                        style={{ color: neo.color }}
                      >
                        {t("idealParaLabel")}{" "}
                      </span>
                      {neo.idealPara}
                    </p>
                    {neo.affiliate && (
                      <a
                        href={neo.affiliate.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="shrink-0 text-sm font-bold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-85"
                        style={{ backgroundColor: neo.color }}
                      >
                        {neo.affiliate.label}
                      </a>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* RevPoints callout */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #191c1f 0%, #2d3436 100%)",
              }}
            >
              <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
                {t("revPoints.badge")}
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">
                {t("revPoints.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {t("revPoints.p1")}
              </p>
              <p className="text-white/80 leading-relaxed">
                {t("revPoints.p2")}
              </p>
              <a
                href="https://revolut.com/referral/?referral-code=jiovannyali!MAY2-26-AR-RPB-H2&geo-redirect"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block mt-5 text-sm font-bold px-5 py-2.5 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors"
              >
                {t("revPoints.cta")}
              </a>
            </div>
          </AnimateOnScroll>

          {/* ¿Cuándo usar cada uno? */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("cuandoUsarTitle")}
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {cuandoUsar.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white h-full"
                  >
                    <span className="text-3xl block mb-3">{item.icon}</span>
                    <p
                      className="font-bold text-sm mb-2"
                      style={{ color: "#002654" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Conclusión */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <article className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("conclusion.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("conclusion.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("conclusion.p2")}
              </p>
            </article>
          </AnimateOnScroll>

          {/* Affiliate links CTA */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div
              className="p-6 rounded-2xl text-center space-y-4"
              style={{
                backgroundColor: "#f0f4fb",
                border: "1px solid #00265420",
              }}
            >
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {t("affiliateCTA.subtitle")}
              </p>
              <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                {t("affiliateCTA.title")}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href="https://revolut.com/referral/?referral-code=jiovannyali!MAY2-26-AR-RPB-H2&geo-redirect"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#191c1f" }}
                >
                  Revolut →
                </a>
                <a
                  href="https://share.global66.com/JIOSAN2"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#E63946" }}
                >
                  Global66 →
                </a>
                <a
                  href="https://wise.com/invite/ahpc/jiovannyalis"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#009580" }}
                >
                  Wise →
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  );
}
