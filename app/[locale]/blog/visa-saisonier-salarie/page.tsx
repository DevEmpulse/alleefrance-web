import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


const heroImage = "/seasonal-worker-in-french-vineyard.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.visa-saisonnier-salarie.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function VisasaisonnierSalariePage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations("BlogPosts.visa-saisonnier-salarie");

  const timeline = t.raw("timeline") as Array<{ month: string; detail: string }>;
  const documents = t.raw("docs") as string[];
  const sectors = t.raw("sectors") as Array<{ title: string; text: string }>;
  const reqs = t.raw("reqs") as string[];
  const adv = t.raw("adv") as string[];
  const tips = t.raw("tips") as string[];

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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#002654" }}
              >
                {t("reqsTitle")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {reqs.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#002654" }}
              >
                {t("advTitle")}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {adv.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#002654" }}
            >
              {t("timelineTitle")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                    {item.month}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              {t("docsTitle")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-xl bg-white text-gray-700"
                >
                  {doc}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              {t("sectorsTitle")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl shadow-lg border border-gray-100"
                >
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#002654" }}
                  >
                    {sector.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {sector.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              {t("tipsTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  );
}
