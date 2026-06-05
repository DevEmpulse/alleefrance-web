"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFaqsByCategories } from "@/data/faqs";
import { type WorkingHolidayCountryCode } from "@/lib/working-holiday-countries";
import {
  buildOriginCountries,
  destinationCatalog,
} from "@/components/working-holiday/working-holiday-content";
import { ArrowRight, Briefcase, Compass, MapPin } from "lucide-react";
import { WorkingHolidayGlobalClient } from "@/components/working-holiday/working-holiday-global-client";
import { useLocale, useTranslations } from "next-intl";
import {
  ShieldCheck,
  Globe,
  Plane,
} from "lucide-react";

const workingHolidayFaqs = getFaqsByCategories([
  "WH: General",
  "WH: Argentina",
  "WH: Chile",
  "Errores Frecuentes",
  "Seguros",
  "Trabajo",
]);
const workingHolidayFaqCategories = [
  "WH: General",
  "WH: Argentina",
  "WH: Chile",
  "Errores Frecuentes",
  "Seguros",
  "Trabajo",
];

const OtherDestinationsCarousel = dynamic(
  () =>
    import("@/components/working-holiday/other-destinations-carousel").then(
      (mod) => mod.OtherDestinationsCarousel,
    ),
  {
    loading: () => (
      <div
        className="h-56 rounded-4xl bg-white/5 animate-pulse"
        aria-hidden="true"
      />
    ),
  },
);

const FAQSection = dynamic(
  () => import("@/components/faq-section").then((mod) => mod.FAQSection),
  {
    ssr: false,
    loading: () => (
      <section className="py-20 text-center text-sm text-gray-500">
        {/* Loading text rendered by parent */}
      </section>
    ),
  },
);

export function WorkingHolidayGlobalLanding() {
  const originCountries = buildOriginCountries();
  const locale = useLocale();
  const t = useTranslations("WorkingHolidayPage.global");
  const tCountry = useTranslations("WorkingHolidayCountries");

  const highlightIcons = [Compass, Briefcase, MapPin];
  const insuranceIcons = [ShieldCheck, Globe, Plane];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />

      <main>
        <section
          className="relative pt-32 pb-16 px-6 text-white overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 10% 10%, rgba(237,41,57,0.18), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12), transparent 40%), linear-gradient(135deg, #001C45 0%, #002654 55%, #0b1c4a 100%)",
          }}
        >
          <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-[#DC1F2E]/20 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 uppercase tracking-[0.3em]">
              {t("badge")}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg lg:text-xl text-white/85 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-bold hover:opacity-90"
                style={{ backgroundColor: "#DC1F2E" }}
                asChild
              >
                <a href="#origen">{t("hero.ctaPrimary")}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                asChild
              >
                <a href="#destinos">{t("hero.ctaSecondary")}</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-white/80">
              {(t.raw("highlights") as Array<{ label: string }>).map((item, idx) => {
                const Icon = highlightIcons[idx % highlightIcons.length];
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5"
                  >
                    <Icon className="h-5 w-5 text-white" />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-12 max-w-6xl mx-auto">
            <OtherDestinationsCarousel />
          </div>
        </section>

        <section id="origen" className="py-16 px-6 bg-[#F8F9FC]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400 mb-3">
                {t("origin.eyebrow")}
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                {t("origin.title")}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t("origin.description")}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {originCountries.map((country) => (
                <Link
                  key={country.code}
                  href={`/${locale}/working-holiday/${country.code}`}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {country.flagSrc ? (
                      <Image
                        src={country.flagSrc}
                        alt={`Bandera de ${country.name}`}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover shadow-sm border border-gray-100"
                        style={{
                          transform: country.flagScale
                            ? `scale(${country.flagScale})`
                            : undefined,
                        }}
                      />
                    ) : null}
                    <div>
                      <p className="text-lg font-semibold text-[#002654]">
                        {tCountry(`${country.code}.name`)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t("origin.countryLink")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#DC1F2E]">
                    {t("origin.countryExplore")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="destinos" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400 mb-3">
                  {t("destinations.eyebrow")}
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-bold"
                  style={{ color: "#002654" }}
                >
                  {t("destinations.title")}
                </h2>
              </div>
              <p className="text-gray-600 max-w-lg">
                {t("destinations.description")}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destinationCatalog.map((destination) => (
                <Link
                  key={destination.name}
                  href="#"
                  className="group rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg cursor-default"
                >
                  <div className="relative h-32 bg-gray-100">
                    <Image
                      src={destination.image}
                      alt={`Bandera de ${destination.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-base font-semibold text-[#002654]">
                      {destination.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t("destinations.activePrograms")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                {t("advisory.title")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t("advisory.description")}
              </p>
              <div className="grid gap-4">
                {(t.raw("advisory.items") as string[]).map((item) => (
                  <Card
                    key={item}
                    className="p-4 border border-gray-200 bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-1 h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#DC1F2E" }}
                      />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-3">
                {t("advisory.cardEyebrow")}
              </p>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#002654" }}
              >
                {t("advisory.cardTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("advisory.cardDescription")}
              </p>
              <Button
                size="lg"
                className="w-full text-white font-bold hover:opacity-90"
                style={{ backgroundColor: "#DC1F2E" }}
                asChild
              >
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("advisory.cardButton")}
                </a>
              </Button>
            </Card>
          </div>
        </section>

        <section className="relative py-16 px-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-95"
            style={{
              background:
                "linear-gradient(120deg, rgba(0,38,84,1) 0%, rgba(19,64,142,1) 55%, rgba(237,41,57,1) 100%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto text-white">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70 mb-3">
                {t("insurance.eyebrow")}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("insurance.title")}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                {t("insurance.description")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {(t.raw("insurance.features") as Array<{ title: string; description: string }>).map((feature, idx) => {
                const Icon = insuranceIcons[idx % insuranceIcons.length];
                return (
                  <Card
                    key={feature.title}
                    className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-white/15 p-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {feature.title}
                        </h3>
                        <p className="text-white/80">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 text-center">
              <div className="bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center justify-center backdrop-blur">
                <Image
                  src="/ATV_logo-naranja-blanco.webp"
                  alt="Aseguratuviaje.com"
                  width={170}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <Button
                size="lg"
                className="text-white font-bold px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
                style={{ backgroundColor: "#DC1F2E" }}
                asChild
              >
                <a
                  href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("insurance.ctaButton")}
                </a>
              </Button>
              <p className="text-sm text-white/80 max-w-2xl">
                {t("insurance.ctaNote")}
              </p>
            </div>
          </div>
        </section>

        <FAQSection
          title={t("faqSection.title")}
          description={t("faqSection.description")}
          allowedCategories={workingHolidayFaqCategories}
          data={workingHolidayFaqs}
        />

        <section className="py-16 px-6 bg-[#0F2354] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-bold hover:opacity-90"
                style={{ backgroundColor: "#DC1F2E" }}
                asChild
              >
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("cta.ctaPrimary")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                asChild
              >
                <Link href={`/${locale}#contacto`}>{t("cta.ctaSecondary")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WorkingHolidayGlobalClient />
    </div>
  );
}
