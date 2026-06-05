import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


const heroImage = "/person-learning-french-language.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.aprender-frances-recursos.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function AprenderFrancesRecursosPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations("BlogPosts.aprender-frances-recursos");

  const pillars = t.raw("pillars") as Array<{ title: string; detail: string }>;
  const resources = t.raw("resources") as Array<{ name: string; note: string }>;
  const studyPlan = t.raw("studyPlan") as Array<{ phase: string; focus: string }>;
  const exams = t.raw("exams") as string[];

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
              {t("pillarsTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white"
                >
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#002654" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("pillarsConclusion")}
            </p>
          </article>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              {t("resourcesTitle")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl shadow-lg border border-gray-100"
                >
                  <p
                    className="text-lg font-semibold"
                    style={{ color: "#002654" }}
                  >
                    {resource.name}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    {resource.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t("resourcesConclusion")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              {t("studyPlanTitle")}
            </h3>
            <div className="space-y-3">
              {studyPlan.map((phase, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-xl bg-white"
                >
                  <p className="text-sm uppercase tracking-widest text-gray-500">
                    {phase.phase}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{phase.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold" style={{ color: "#002654" }}>
              {t("examsTitle")}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {exams.map((exam, index) => (
                <li key={index}>{exam}</li>
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
