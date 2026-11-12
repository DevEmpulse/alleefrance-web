import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { BlogCTASections } from "@/components/blog/blog-cta";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { SiWhatsapp } from "react-icons/si";
import { buildWhatsAppLink } from "@/lib/utils";

const SLUG = "renovar-titre-de-sejour-2026";
const heroImage = "/renovar-titre-de-sejour-2026.webp";

const SOURCES = [
  "https://www.service-public.gouv.fr/particuliers/vosdroits/F36206",
  "https://www.conseil-etat.fr/site/Media/actualites/documents/2026/mai-2026/502860.pdf",
  "https://www.service-public.gouv.fr/particuliers/vosdroits/F34501?lang=fr",
];

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: `BlogPosts.${SLUG}.seo` });
  const title = t("metaTitle");
  const description = t("metaDescription");
  const keywords = t.raw("keywords") as string[];
  const url = `https://alleefrance.com/${locale}/blog/${SLUG}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        es: `https://alleefrance.com/es/blog/${SLUG}`,
        en: `https://alleefrance.com/en/blog/${SLUG}`,
        fr: `https://alleefrance.com/fr/blog/${SLUG}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: heroImage,
          width: 1376,
          height: 768,
          alt: title,
        },
      ],
    },
  };
}

export default async function RenovarTitreSejourPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: `BlogPosts.${SLUG}` });

  const whenTable = t.raw("whenToRenew.table") as {
    headers: [string, string, string];
    rows: Array<{ expires: string; from: string; until: string }>;
  };
  const anefSteps = t.raw("anef.steps") as string[];
  const documentItems = t.raw("documents.items") as string[];
  const attestationItems = t.raw("attestation.items") as Array<{ label: string; detail: string }>;
  const expiredSteps = t.raw("expired.steps") as Array<{ lead: string; detail: string }>;
  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>;
  const sourceLinks = t.raw("sources.links") as string[];

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
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 38, 84, 0.88)" }} />
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
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/60">
            <span>{t("hero.date")}</span>
            <span>·</span>
            <span>{t("hero.readTime")}</span>
            <span>·</span>
            <span>{t("hero.byline")}</span>
            <span>·</span>
            <span>{t("hero.updated")}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Short answer */}
          <AnimateOnScroll direction="up" delay={0}>
            <div
              className="p-6 rounded-2xl border-l-4 text-lg text-gray-700 leading-relaxed"
              style={{ backgroundColor: "#f0f4fb", borderColor: "#002654" }}
            >
              {t("shortAnswer")}
            </div>
          </AnimateOnScroll>

          {/* When to renew */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("whenToRenew.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("whenToRenew.p1")}
              </p>

              <div className="overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      {whenTable.headers.map((header) => (
                        <th
                          key={header}
                          className="px-4 py-3 font-semibold"
                          style={{ color: "#002654" }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {whenTable.rows.map((row) => (
                      <tr key={row.expires} className="border-t border-gray-100">
                        <td className="px-4 py-3 text-gray-700">{row.expires}</td>
                        <td className="px-4 py-3 text-gray-700">{row.from}</td>
                        <td className="px-4 py-3 text-gray-700">{row.until}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="p-5 rounded-2xl border-l-4 text-gray-700 leading-relaxed"
                style={{ backgroundColor: "#f0f9f4", borderColor: "#16a34a" }}
              >
                {t("whenToRenew.tip")}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ANEF */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("anef.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("anef.intro")}
              </p>
              <div
                className="p-5 rounded-2xl border-l-4 text-gray-700 leading-relaxed"
                style={{ backgroundColor: "#fef9c3", borderColor: "#ED2939" }}
              >
                {t("anef.warning")}
              </div>
              <ol className="space-y-3 list-decimal list-inside">
                {anefSteps.map((step, index) => (
                  <li key={index} className="text-gray-700 text-base leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </AnimateOnScroll>

          {/* Documents */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("documents.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("documents.intro")}
              </p>
              <ul className="space-y-2 list-disc list-inside">
                {documentItems.map((item, index) => (
                  <li key={index} className="text-gray-700 text-base leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Attestation */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("attestation.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("attestation.intro")}
              </p>
              <ul className="space-y-3">
                {attestationItems.map((item) => (
                  <li key={item.label} className="text-gray-700 text-base leading-relaxed">
                    <span className="font-semibold" style={{ color: "#002654" }}>
                      {item.label}:
                    </span>{" "}
                    {item.detail}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("attestation.conseilEtat")}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Expired titre */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("expired.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("expired.intro")}
              </p>
              <ol className="space-y-3 list-decimal list-inside">
                {expiredSteps.map((step, index) => (
                  <li key={index} className="text-gray-700 text-base leading-relaxed">
                    <span className="font-semibold" style={{ color: "#002654" }}>
                      {step.lead}
                    </span>{" "}
                    {step.detail}
                  </li>
                ))}
              </ol>
            </div>
          </AnimateOnScroll>

          {/* 2026 changes */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-5">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("changes2026.title")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("changes2026.p1")}
              </p>
            </div>
          </AnimateOnScroll>

          {/* FAQ */}
          <AnimateOnScroll direction="up" delay={0.05}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold" style={{ color: "#002654" }}>
                {t("faq.title")}
              </h2>
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="space-y-2">
                    <h3 className="text-lg font-semibold" style={{ color: "#002654" }}>
                      {item.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div
              className="p-8 rounded-2xl text-center space-y-4"
              style={{ backgroundColor: "#f0f4fb", border: "1px solid #00265420" }}
            >
              <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                {t("cta.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {t("cta.body")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={buildWhatsAppLink(t("cta.whatsappMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <SiWhatsapp className="w-5 h-5" />
                  {t("cta.whatsappButton")}
                </a>
                <a
                  href={`/${locale}#contacto`}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#002654" }}
                >
                  {t("cta.bookLabel")}
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Legal + Sources */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="space-y-4 border-t border-gray-100 pt-8">
              <p className="text-sm text-gray-500 italic leading-relaxed">
                {t("legal")}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                <span className="font-semibold">{t("sources.label")}</span>{" "}
                {sourceLinks.map((label, index) => (
                  <span key={label}>
                    <a
                      href={SOURCES[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                      style={{ color: "#002654" }}
                    >
                      {label}
                    </a>
                    {index < sourceLinks.length - 1 ? " · " : ""}
                  </span>
                ))}
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
