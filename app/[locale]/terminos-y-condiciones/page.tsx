import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


export default async function TerminosYCondicionesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("TermsAndConditions");

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
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.2.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.2.p1")}
                </p>
                <p className="leading-relaxed">
                  {t("sections.2.p2")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.3.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.3.p1")}
                </p>
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
                <p className="leading-relaxed">
                  {t("sections.5.p2")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.6.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.6.p1")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.7.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.7.p1")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.8.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.8.p1")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.9.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.9.p1")}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#002654]">
                  {t("sections.10.title")}
                </h2>
                <p className="leading-relaxed">
                  {t("sections.10.p1")}
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
