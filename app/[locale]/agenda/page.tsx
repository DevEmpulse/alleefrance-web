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
import { Euro, MessageCircle, ShieldCheck } from "lucide-react";
import { IncludesList } from "@/components/booking/includes-list";

const NAVY = "#002654";
const FRANCE_BLUE = "#0055A4";
const CTA_RED = "#DC1F2E";

/** One icon per `Booking.select.trust` item, in order: secure payment, fixed price, reply time. */
const TRUST_ICONS = [ShieldCheck, Euro, MessageCircle];

/** Items shown on each card before "Ver más", so long lists do not stretch every card. */
const VISIBLE_INCLUDES = 2;

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
  const steps = t.raw("select.steps") as { title: string; text: string }[];
  const trust = t.raw("select.trust") as { title: string; text: string }[];

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
        <section className="pt-32 pb-20 px-6" style={{ backgroundColor: NAVY }}>
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/80 mb-3">
              {t("select.eyebrow")}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{t("select.title")}</h1>
            <p className="mt-4 text-base lg:text-lg text-white/85 leading-relaxed">{t("select.subtitle")}</p>
          </div>
        </section>

        <div className="px-4 sm:px-6 pb-16">
          <section aria-label={t("select.stepsTitle")} className="max-w-7xl mx-auto -mt-10">
            <ol className="grid gap-3 md:grid-cols-3 md:gap-5">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-md"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: FRANCE_BLUE }}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-bold" style={{ color: NAVY }}>
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-600 leading-snug">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <ul className="max-w-7xl mx-auto mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CONSULTATIONS.map((consultation) => {
              const includes = t.raw(`details.${consultation.id}.includes`) as string[];
              return (
                <li
                  key={consultation.id}
                  className="flex flex-col gap-3 rounded-xl border border-gray-200 border-t-4 bg-white p-5 shadow-sm"
                  style={{ borderTopColor: consultation.durationMinutes ? FRANCE_BLUE : CTA_RED }}
                >
                  <div className="lg:min-h-[5.5rem]">
                    <h2 className="text-base font-bold leading-snug" style={{ color: NAVY }}>
                      {t(`consultations.${consultation.id}`)}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">{t(`details.${consultation.id}.ideal`)}</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-900">{consultation.priceEur} €</p>
                    {/* Reserves the line even without a duration so prices align across cards. */}
                    <p className="text-sm text-gray-600 mt-1 min-h-5">
                      {consultation.durationMinutes
                        ? t("duration", { minutes: consultation.durationMinutes })
                        : null}
                    </p>
                  </div>
                  <p className="border-t border-gray-200 pt-3 text-xs font-bold uppercase tracking-[0.08em] text-gray-500">
                    {t("select.includes")}
                  </p>
                  <div className="flex-1">
                    <IncludesList
                      items={includes}
                      visibleCount={VISIBLE_INCLUDES}
                      showMoreLabel={t("select.showMore", { count: includes.length - VISIBLE_INCLUDES })}
                      showLessLabel={t("select.showLess")}
                    />
                  </div>
                  <Link
                    href={buildConfirmHref(locale, consultation.id)}
                    className="mt-2 inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-bold text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: FRANCE_BLUE }}
                  >
                    {t("select.choose")}
                  </Link>
                </li>
              );
            })}
          </ul>

          <section className="max-w-7xl mx-auto mt-12 rounded-2xl bg-slate-100 p-6 lg:p-8">
            <h2 className="text-xl font-bold" style={{ color: NAVY }}>
              {t("select.trustTitle")}
            </h2>
            <ul className="mt-5 grid gap-5 md:grid-cols-3">
              {trust.map((item, index) => {
                const Icon = TRUST_ICONS[index];
                return (
                  <li key={item.title} className="flex gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"
                      style={{ color: FRANCE_BLUE }}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold" style={{ color: NAVY }}>
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-700 leading-snug">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
