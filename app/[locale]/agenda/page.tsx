import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getBreadcrumbNames } from "@/lib/schema-server";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { BOOKING_PATH, CONSULTATIONS, buildConfirmHref } from "@/data/consultations";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Booking.select" });
  return buildMetadata({
    locale,
    path: BOOKING_PATH,
    title: t("metaTitle"),
    description: t("metaDescription"),
    absoluteTitle: true,
  });
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Booking" });
  const names = await getBreadcrumbNames(locale);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          { name: names.home, path: "" },
          { name: t("select.title"), path: BOOKING_PATH },
        ])}
      />
      <Navbar />

      <main>
        <section className="pt-32 pb-12 px-6" style={{ backgroundColor: "#002654" }}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/80 mb-3">
              {t("select.eyebrow")}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{t("select.title")}</h1>
          </div>
        </section>

        <section className="py-12 lg:py-16 px-4 sm:px-6">
          <ul className="max-w-7xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CONSULTATIONS.map((consultation) => (
              <li
                key={consultation.id}
                className="flex flex-col gap-4 rounded-xl border border-gray-200 border-t-4 bg-white p-5 shadow-sm"
                style={{ borderTopColor: consultation.durationMinutes ? "#0055A4" : "#DC1F2E" }}
              >
                <h2 className="text-base font-bold leading-snug lg:min-h-[4.5rem]" style={{ color: "#002654" }}>
                  {t(`consultations.${consultation.id}`)}
                </h2>
                <div className="mt-auto">
                  <p className="text-4xl font-bold text-gray-900">{consultation.priceEur} €</p>
                  {/* Reserves the line even without a duration so prices align across cards. */}
                  <p className="text-sm text-gray-600 mt-1 min-h-5">
                    {consultation.durationMinutes
                      ? t("duration", { minutes: consultation.durationMinutes })
                      : null}
                  </p>
                </div>
                <Link
                  href={buildConfirmHref(locale, consultation.id)}
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-bold text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#0055A4" }}
                >
                  {t("select.choose")}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
