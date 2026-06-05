import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


const heroImage = "/student-studying-in-paris.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.visa-estudiante-francia.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function VisaEstudianteFranciaPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.visa-estudiante-francia" });

  const milestones = t.raw("milestones") as Array<{ title: string; detail: string }>;
  const funding = t.raw("funding") as Array<{ label: string; note: string }>;
  const docs = t.raw("docs") as string[];
  const arrivalSteps = t.raw("arrivalSteps") as string[];

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
              {t("roadmapTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white"
                >
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#002654" }}
                  >
                    {milestone.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {milestone.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("roadmapConclusion")}
            </p>
          </article>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              {t("campusTitle")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t("campusP1")}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t("campusP2")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#002654" }}
            >
              {t("docsTitle")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {docs.map((doc, index) => (
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
              {t("fundingTitle")}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {funding.map((option, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl shadow-lg border border-gray-100"
                >
                  <p className="text-sm uppercase tracking-widest text-gray-500">
                    {option.label}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    {option.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t("fundingConclusion")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              {t("arrivalTitle")}
            </h3>
            <ul className="list-decimal list-inside space-y-3 text-gray-700">
              {arrivalSteps.map((step, index) => (
                <li key={index}>{step}</li>
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
