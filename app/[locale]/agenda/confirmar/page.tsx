import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingConfirm } from "@/components/booking/booking-confirm";
import { BOOKING_PATH } from "@/data/consultations";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Booking" });
  return {
    ...buildMetadata({
      locale,
      path: `${BOOKING_PATH}/confirmar`,
      title: t("confirm.metaTitle"),
      description: t("select.metaDescription"),
      absoluteTitle: true,
    }),
    // A per-visitor step of the booking flow; the selection page is the one to index.
    robots: { index: false, follow: true },
  };
}

export default async function BookingConfirmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Booking.confirm" });

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />

      <main>
        <section className="pt-32 pb-12 px-6" style={{ backgroundColor: "#002654" }}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/80 mb-3">
              {t("eyebrow")}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{t("title")}</h1>
          </div>
        </section>

        <section className="py-10 lg:py-14 px-4 sm:px-6">
          {/* useSearchParams needs a Suspense boundary in a static export. */}
          <Suspense fallback={<div className="min-h-[32rem]" />}>
            <BookingConfirm />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
  );
}
