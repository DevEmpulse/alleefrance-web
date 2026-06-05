import { setRequestLocale, getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


export default async function PoliticaDePrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PrivacyPolicy");

  const purposes = t.raw("sections.1.purposes") as string[];
  const list = t.raw("sections.3.list") as string[];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Navbar />

      <main>
        <section
          className="pt-28 pb-10 px-4"
          style={{ backgroundColor: "#002654" }}
        >
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="text-4xl font-bold lg:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              {t("intro")}
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 pt-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white p-6 sm:p-10 shadow-sm">
            <div className="space-y-8 text-gray-700">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.1.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.1.p1")}
                </p>
                <p className="leading-relaxed">
                  {t("sections.1.p2")}
                </p>
                <p className="leading-relaxed">
                  {t("sections.1.p3")}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-[#002654]">
                    {t("sections.1.purposesTitle")}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {purposes.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
                <p className="leading-relaxed">
                  {t("sections.1.p4")}
                </p>
                <p className="leading-relaxed">
                  {t("sections.1.p5")}
                </p>
                <p className="leading-relaxed">
                  {t("sections.1.p6")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.2.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.2.p1")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.3.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.3.p1")}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.4.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.4.p1")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.5.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.5.p1")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.6.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.6.p1")}
                  <a
                    href="mailto:contacto@alleefrance.com"
                    className="font-semibold text-[#002654] underline-offset-4 hover:underline"
                  >
                    contacto@alleefrance.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
