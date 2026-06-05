import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


const heroImage = "/Fondo-WH.webp";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const p = await params;
  const t = await getTranslations({ locale: p.locale, namespace: "BlogPosts.working-holiday-francia.hero" });
  return {
    title: `${t("title")} | Allée France`,
    description: t("subtitle"),
  };
}

export default async function WorkingHolidayFranciaPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  const t = await getTranslations("BlogPosts.working-holiday-francia");

  const checklist = t.raw("checklist") as string[];
  const funds = t.raw("funds") as string[];
  const budget = t.raw("budget") as Array<{ label: string; amount: string; note: string }>;
  const landingSteps = t.raw("landingSteps") as Array<{ title: string; detail: string }>;

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
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

          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="p-6 rounded-2xl bg-gray-50">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#002654" }}
              >
                {t("checklistTitle")}
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                {checklist.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <div className="space-y-4">
              <h3
                className="text-2xl font-semibold"
                style={{ color: "#002654" }}
              >
                {t("fundsTitle")}
              </h3>
              {funds.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <div className="space-y-4">
              <h3
                className="text-2xl font-semibold"
                style={{ color: "#002654" }}
              >
                {t("budgetTitle")}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {budget.map((item, index) => (
                  <AnimateOnScroll
                    key={index}
                    direction="fade"
                    delay={index * 0.1}
                  >
                    <div className="p-5 rounded-2xl shadow-lg border border-gray-100">
                      <p className="text-sm uppercase tracking-widest text-gray-500">
                        {item.label}
                      </p>
                      <p
                        className="text-3xl font-bold my-2"
                        style={{ color: "#002654" }}
                      >
                        {item.amount}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.4}>
            <div className="space-y-4">
              <h3
                className="text-2xl font-semibold"
                style={{ color: "#002654" }}
              >
                {t("landingTitle")}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {landingSteps.map((step, index) => (
                  <AnimateOnScroll
                    key={index}
                    direction="up"
                    delay={index * 0.1}
                  >
                    <div className="p-5 rounded-2xl border border-gray-100 shadow-sm bg-white">
                      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                        {step.title}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("landingConclusion")}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <BlogCTASections />
      <Footer />
    </div>
  );
}
