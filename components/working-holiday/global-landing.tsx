"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQSection } from "@/components/faq-section";
import { CountrySelectorModal } from "@/components/country-selector-modal";
import { CountryIndicator } from "@/components/country-indicator";
import { OtherDestinationsCarousel } from "@/components/working-holiday/other-destinations-carousel";
import { useCountry } from "@/components/country-provider";
import { getFaqsByCategories } from "@/data/faqs";
import {
  PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES,
  WORKING_HOLIDAY_COUNTRIES,
  type WorkingHolidayCountryCode,
  type WorkingHolidayCountryConfig,
} from "@/lib/working-holiday-countries";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  Globe,
  Heart,
  MapPin,
  Plane,
  Shield,
  ShieldCheck,
  Backpack,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const beneficios = [
  {
    icon: Plane,
    title: "Viví un año en el destino elegido",
    description:
      "Residí hasta 12 meses con libertad para trabajar, viajar y sumar experiencia internacional.",
  },
  {
    icon: Briefcase,
    title: "Trabajar legalmente",
    description:
      "Podés realizar empleos temporales para financiar tu estadía y sumar experiencia internacional en tu CV.",
  },
  {
    icon: Globe,
    title: "Explorar nuevos países",
    description:
      "Combiná trabajo y turismo para conocer nuevas culturas mientras sostenés tu viaje.",
  },
  {
    icon: Heart,
    title: "Inmersión cultural real",
    description:
      "Mejorá el idioma, hacé amistades internacionales y viví el día a día local.",
  },
];

const pasos = [
  {
    title: "Preparación",
    description:
      "Armamos tu estrategia: revisión de requisitos, selección de fechas y check-list personalizado de documentos.",
  },
  {
    title: "Documentación",
    description:
      "Reunimos certificados, traducciones, comprobantes bancarios, seguro médico y cartas de motivación.",
  },
  {
    title: "Solicitud",
    description:
      "Reservamos turno, cargamos tu formulario y te ayudamos a presentar el dossier completo ante el consulado.",
  },
  {
    title: "Viaje y llegada",
    description:
      "Te guiamos en la activación del seguro, trámites iniciales, apertura de cuenta y tips para instalarte en Francia.",
  },
];

const documentos = [
  "Pasaporte vigente y formularios oficiales completos.",
  "CV y carta de motivación según destino.",
  "Comprobante de fondos (extractos bancarios o certificados).",
  "Reserva aérea o fondos equivalentes.",
  "Seguro médico internacional por toda la estadía.",
  "Certificado de antecedentes penales apostillado.",
];

const insuranceFeatures = [
  {
    icon: Shield,
    title: "Cobertura Schengen 24/7",
    description:
      "Atención médica, hospitalización y repatriación con respaldo internacional durante el programa.",
  },
  {
    icon: Globe,
    title: "Documentación consular",
    description:
      "Certificado oficial y carta personalizada para presentar en tu consulado o plataforma oficial.",
  },
  {
    icon: Heart,
    title: "Asistencia integral",
    description:
      "Incluye emergencias médicas, accidentes, telemedicina y acompañamiento en tu instalación en Francia.",
  },
  {
    icon: Plane,
    title: "Cobertura de viaje extendida",
    description:
      "Protección desde que sales de tu país, en todo el Espacio Schengen y con opción de extensión si decides quedarte.",
  },
];

const originCountries = PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.map((code) => {
  const country = WORKING_HOLIDAY_COUNTRIES[code];
  return {
    code,
    name: country.name,
    flagSrc: country.flagSrc,
    flagScale: country.flagScale,
  };
});

const destinationCatalog = [
  { name: "Alemania", image: "/countries/Alemania.webp" },
  { name: "Australia", image: "/countries/Australia.webp" },
  { name: "Austria", image: "/countries/Austria.webp" },
  { name: "Canadá", image: "/countries/Canada.webp" },
  { name: "Corea del Sur", image: "/countries/Corea-del-Sur.webp" },
  { name: "Dinamarca", image: "/countries/Dinamarca.webp" },
  { name: "España", image: "/countries/Espana.webp" },
  { name: "Irlanda", image: "/countries/Irlanda.webp" },
  { name: "Japón", image: "/countries/Japon.webp" },
  { name: "Noruega", image: "/countries/Noruega.webp" },
  { name: "Nueva Zelanda", image: "/countries/Nueva-Zelanda.webp" },
  { name: "Polonia", image: "/countries/Polonia.webp" },
  { name: "Portugal", image: "/countries/Portugal.webp" },
  { name: "Suecia", image: "/countries/Suecia.webp" },
  { name: "USA", image: "/countries/USA.webp" },
  { name: "Francia", image: "/hero-lyon.jpg" },
];

const destinationImageMap: Record<string, string> = {
  Alemania: "/countries/Alemania.webp",
  Australia: "/countries/Australia.webp",
  Austria: "/countries/Austria.webp",
  Canadá: "/countries/Canada.webp",
  Canada: "/countries/Canada.webp",
  "Corea del Sur": "/countries/Corea-del-Sur.webp",
  Dinamarca: "/countries/Dinamarca.webp",
  España: "/countries/Espana.webp",
  Francia: "/hero-lyon.jpg",
  Irlanda: "/countries/Irlanda.webp",
  Japón: "/countries/Japon.webp",
  Noruega: "/countries/Noruega.webp",
  "Nueva Zelanda": "/countries/Nueva-Zelanda.webp",
  Polonia: "/countries/Polonia.webp",
  Portugal: "/countries/Portugal.webp",
  Suecia: "/countries/Suecia.webp",
  "Reino Unido": "/countries/Reino-Unido.webp",
  "Países Bajos": "/countries/Paises-Bajos.webp",
  Hungría: "/countries/Hungria.webp",
  México: "/countries/Mexico.webp",
};

const normalizeDestinationName = (value: string) =>
  value.replace(/\s*\(.*?\)\s*/g, "").trim();

const getDestinationImage = (value: string) =>
  destinationImageMap[normalizeDestinationName(value)];

const insuranceHighlights = [
  {
    icon: ShieldCheck,
    title: "Cobertura obligatoria",
    description:
      "Asistencia médica, hospitalización y repatriación alineadas a los requisitos consulares.",
  },
  {
    icon: Globe,
    title: "Validez internacional",
    description:
      "Protección durante toda la estadía y viajes secundarios dentro de tu Working Holiday.",
  },
  {
    icon: Plane,
    title: "Certificado inmediato",
    description:
      "Emitimos el comprobante en minutos para presentar en consulado o plataforma oficial.",
  },
];

const heroHighlights = [
  { icon: Compass, label: "Guías por nacionalidad" },
  { icon: Briefcase, label: "Opciones de trabajo legal" },
  { icon: MapPin, label: "Destinos en 4 continentes" },
];

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

export function WorkingHolidayGlobalLanding() {
  const router = useRouter();
  const { setCountry } = useCountry();

  const handleOriginSelect = (code: WorkingHolidayCountryCode) => {
    setCountry(code);
    router.push(`/working-holiday/${code}`);
  };

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
          <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-[#ED2939]/20 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-5xl mx-auto text-center">
              <Badge className="mb-6 bg-white/10 text-white border-white/20 uppercase tracking-[0.3em]">
                Working Holiday Global
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Viví y Trabajá en el mundo.
              </h1>
              <p className="text-lg lg:text-xl text-white/85 leading-relaxed mb-8 max-w-3xl mx-auto">
                Tu nacionalidad es tu pasaporte a nuevas oportunidades. Elegí tu
                país de origen, encontrá destinos disponibles y armá una
                estrategia realista para viajar, trabajar y aprender.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-white font-semibold hover:opacity-90"
                  style={{ backgroundColor: "#ED2939" }}
                  asChild
                >
                  <a href="#origen">Seleccionar país de origen</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                  asChild
                >
                  <a href="#destinos">Explorar destinos</a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-white/80">
                {heroHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5"
                  >
                    <item.icon className="h-5 w-5 text-white" />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                ))}
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
                Selecciona tu país de origen
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                Tu ruta empieza acá
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Elegí tu nacionalidad para acceder a requisitos, tiempos de
                apertura y recomendaciones específicas para tu postulación.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {originCountries.map((country) => (
                <Link
                  key={country.code}
                  href={`/working-holiday/${country.code}`}
                  onClick={() => setCountry(country.code)}
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
                        {country.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Ver destinos disponibles
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ED2939]">
                    Explorar guía
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
                  Destinos disponibles
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-bold"
                  style={{ color: "#002654" }}
                >
                  Elegí dónde querés vivir la experiencia
                </h2>
              </div>
              <p className="text-gray-600 max-w-lg">
                Seleccioná un destino para descubrir requisitos, cupos y
                oportunidades laborales vigentes en cada país.
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
                      Ver programas activos
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
                Acompañamiento estratégico en tu Working Holiday
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Centralizamos información, te ayudamos a planificar tiempos y a
                preparar un dossier sólido para que tu viaje no quede en teoría.
                Nuestra asesoría se adapta a tu país de origen y al destino que
                elijas.
              </p>
              <div className="grid gap-4">
                {[
                  "Diagnóstico de requisitos y calendario de aperturas.",
                  "Checklist de documentos y control de fondos.",
                  "Plan de viaje con opciones de trabajo y alojamiento.",
                ].map((item) => (
                  <Card
                    key={item}
                    className="p-4 border border-gray-200 bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-1 h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#ED2939" }}
                      />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-3">
                Tu plan en foco
              </p>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "#002654" }}
              >
                ¿Listo para dar el primer paso?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Coordiná una sesión con nuestro equipo para revisar tu perfil,
                elegir el destino ideal y definir la mejor estrategia de
                postulación.
              </p>
              <Button
                size="lg"
                className="w-full text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar por WhatsApp
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
                Seguro de viaje
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Contratá tu seguro obligatorio para Working Holiday
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                Protegé tu experiencia con una póliza válida para consulados y
                programas oficiales. Incluye asistencia médica, repatriación y
                certificados listos para presentar.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {insuranceHighlights.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white/15 p-3">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
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
                className="text-white font-semibold px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotiza tu seguro
                </a>
              </Button>
              <p className="text-sm text-white/80 max-w-2xl">
                Recibís el certificado oficial y la carta para presentar en tu
                consulado o plataforma de aplicación.
              </p>
            </div>
          </div>
        </section>

        <FAQSection
          title="Preguntas frecuentes sobre Working Holiday"
          description="Resolvé dudas clave sobre requisitos, seguros, trabajo y tiempos de aplicación."
          allowedCategories={workingHolidayFaqCategories}
          data={workingHolidayFaqs}
        />

        <section className="py-16 px-6 bg-[#0F2354] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para empezar tu plan Working Holiday?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Coordinemos una sesión para revisar tu perfil, confirmar
              requisitos y definir los próximos pasos con claridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                asChild
              >
                <Link href="/#contacto">Reservar asesoría</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <CountrySelectorModal onSelect={handleOriginSelect} />
      <CountryIndicator />
    </div>
  );
}

type WorkingHolidayCountryPageProps = {
  config: WorkingHolidayCountryConfig;
  showCountryGrid?: boolean;
};

export function WorkingHolidayCountryPage({
  config,
  showCountryGrid = false,
}: WorkingHolidayCountryPageProps) {
  const router = useRouter();
  const { setCountry } = useCountry();

  const audienceLabel =
    config.code === "global" ? "cada país de Latinoamérica" : config.name;

  const navigateToCountry = (code: WorkingHolidayCountryCode) => {
    if (code === "global") {
      router.push("/working-holiday");
      return;
    }
    router.push(`/working-holiday/${code}`);
  };

  const handleGridSelection = (code: WorkingHolidayCountryCode) => {
    setCountry(code);
    navigateToCountry(code);
  };

  const requirementsTitle = "Requisitos de postulación";
  const showAcademicAlert = config.code === "pe" || config.code === "ec";
  const faqCategories = ["WH: General", "Seguros", `WH: ${config.name}`];
  const faqItems = getFaqsByCategories(faqCategories);
  const whatsappConsultLink = `https://wa.me/33601526171?text=${encodeURIComponent(
    `Hola, soy de ${config.name} y me interesa una Working Holiday.`
  )}`;

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />

      <main>
        <section
          className="pt-32 pb-8 px-6"
          style={{ backgroundColor: "#002654" }}
        >
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 uppercase tracking-widest">
              Working Holiday {config.name}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {config.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10">
              {config.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href={whatsappConsultLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                asChild
              >
                <a href="/#contacto" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reservar Asesoría
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Cupos limitados por país · Nuestro equipo te ayuda a llegar con
              todo listo sin importar que partas desde {audienceLabel}.
            </p>
          </div>
        </section>

        {showCountryGrid ? (
          <CountryGrid onSelect={handleGridSelection} />
        ) : null}

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400 mb-3">
                  Destinos para {config.name}
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-bold"
                  style={{ color: "#002654" }}
                >
                  Elegí tu próximo destino
                </h2>
              </div>
              <p className="text-gray-600 max-w-lg">
                Estos son los programas Working Holiday disponibles para tu
                pasaporte. Te ayudamos a comparar requisitos y tiempos reales.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {config.destinations.map((destination) => {
                const normalizedDestination =
                  normalizeDestinationName(destination);
                const imageSrc = getDestinationImage(destination);
                const isUpcoming = destination
                  .toLowerCase()
                  .includes("próximamente");
                return (
                  <div
                    key={destination}
                    className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-32 bg-gray-100">
                      {imageSrc ? (
                        <>
                          <Image
                            src={imageSrc}
                            alt={`Destino ${normalizedDestination}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-linear-to-br from-[#0F2354] via-[#193B7A] to-[#2E4EA1] flex items-center justify-center">
                          <span className="text-white/80 text-sm font-semibold text-center px-4">
                            {normalizedDestination}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-base font-semibold text-[#002654]">
                        {destination}
                      </p>
                      <p className="text-sm text-gray-500">
                        {isUpcoming ? "Próximamente" : "Programas activos"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                ¿Qué es la Visa Working Holiday?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                La Working Holiday permite a jóvenes de {audienceLabel} residir
                en el exterior por hasta 12 meses con libertad para trabajar de
                forma temporal y recorrer el país elegido. Es una excelente
                oportunidad para mejorar el idioma, financiar tu experiencia y
                vivir una inmersión cultural total.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Desde Allée France te guiamos en cada etapa: planificación,
                papeles, turnos consulares y adaptación al llegar. Nos
                enfocamos en anticipar problemas y fortalecer tu dossier para
                que puedas aprovechar los cupos sin contratiempos.
              </p>
            </div>
            <Card className="p-6 bg-gray-50 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-[#ED2939]" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500">
                    Cupo estimado · {config.label}
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#002654" }}
                  >
                    {config.quotaText ?? "Cupo oficial a confirmar"}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                La demanda supera rápidamente los cupos, por eso es clave
                preparar la documentación con anticipación y llegar al día de
                apertura con todo listo. Nuestro equipo te ayuda a revisar cada
                detalle.
              </p>
            </Card>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-bold text-center mb-12"
              style={{ color: "#002654" }}
            >
              Beneficios de la Working Holiday francesa
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {beneficios.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(0, 38, 84, 0.08)" }}
                  >
                    <benefit.icon
                      className="w-6 h-6"
                      style={{ color: "#002654" }}
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "#002654" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                {requirementsTitle}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Preparar la solicitud con tiempo es clave para ingresar en los
                cupos anuales. Estos son los requisitos que revisamos juntos
                antes de enviar tu dossier:
              </p>
              {showAcademicAlert ? (
                <Card className="mb-6 border border-amber-200 bg-amber-50/80">
                  <div className="flex items-start gap-3 p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <p className="text-sm text-amber-900">
                      Requiere estudios superiores y/o inglés.
                    </p>
                  </div>
                </Card>
              ) : null}
              <div className="space-y-4">
                {config.requisitos.map((req) => (
                  <Card
                    key={req}
                    className="p-4 border-l-4"
                    style={{ borderLeftColor: "#ED2939" }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-1"
                        style={{ color: "#ED2939" }}
                      />
                      <p className="text-gray-700 leading-relaxed">{req}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-[#002654] text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Checklist express</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Organizamos tu documentación en bloques para que avances con
                claridad y evites rechazos por detalles formales.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>
                    Plan de viaje y ciudades objetivo (trabajo, alojamiento
                    temporal, transporte).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1" />
                  <span>
                    Línea de tiempo personalizada para saber qué presentar en
                    cada etapa.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Backpack className="w-5 h-5 mt-1" />
                  <span>
                    Lista de documentos traducidos, apostillados o certificados.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 mt-1" />
                  <span>
                    Revisión de seguros y coberturas exigidas por el consulado.
                  </span>
                </li>
              </ul>
              {config.keyDates?.length ? (
                <div className="mt-8 border-t border-white/20 pt-6">
                  <h4 className="text-lg font-semibold mb-4">
                    Fechas importantes
                  </h4>
                  <ul className="space-y-4 text-white/90">
                    {config.keyDates.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="relative py-16 px-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                "linear-gradient(120deg, rgba(0,38,84,1) 0%, rgba(19,64,142,1) 50%, rgba(237,41,57,1) 100%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto text-white">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70 mb-3">
                Seguro obligatorio
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Contratá tu seguro VVT para {config.name}
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                {config.insuranceNote}
              </p>
              <p className="mt-4 text-sm text-white/70">
                Sin este seguro válido, el consulado no acepta el dossier ni
                emite la visa.
              </p>
              <div className="mt-6 flex flex-col items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Socio asegurador
                </p>
                <div className="bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center justify-center backdrop-blur">
                  <Image
                    src="/ATV_logo-naranja-blanco.webp"
                    alt="Aseguratuviaje.com"
                    width={170}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {insuranceFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white/15 p-3">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <Button
                size="lg"
                className="text-white font-semibold px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotiza tu seguro
                </a>
              </Button>
              <p className="text-sm text-white/80 max-w-2xl">
                Te entregamos el certificado en minutos y lo dejamos listo para
                adjuntar en France-Visas o imprimirlo junto a tu OFII. Además,
                gestionamos las extensiones o reembolsos si cambiás tus fechas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-bold text-center mb-12"
              style={{ color: "#002654" }}
            >
              Proceso paso a paso
            </h2>
            <div className="space-y-6">
              {pasos.map((paso, index) => (
                <Card key={paso.title} className="p-6 flex gap-4 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
                    style={{ backgroundColor: "var(--chart-2)" }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "#002654" }}
                    >
                      {paso.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {paso.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-[#002654] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para postularte?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Te ayudamos a preparar un dossier competitivo, cumplir con los
              tiempos oficiales y aterrizar en Francia con un plan claro de
              alojamiento, trabajo temporal y trámites de instalación, sin
              importar que partas desde {audienceLabel}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href={whatsappConsultLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Plane className="w-5 h-5 mr-2" />
                  Empezar mi Working Holiday
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                asChild
              >
                <Link href="/#contacto">
                  <Globe className="w-5 h-5 mr-2" />
                  Hablar con el equipo
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr,0.8fr] gap-10">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                Documentación esencial del dossier
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cada documento debe respetar formato, idioma y vigencia
                específicos. Te compartimos modelos y plantillas para que tu
                presentación sea clara y profesional.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {documentos.map((doc) => (
                  <Card key={doc} className="p-4 flex gap-3 items-start">
                    <CheckCircle2
                      className="w-5 h-5 mt-1 shrink-0"
                      style={{ color: "#002654" }}
                    />
                    <p className="text-gray-700">{doc}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gray-50">
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: "#002654" }}
                >
                  Tips rápidos para el turno consular
                </h3>
                <ul className="space-y-4 text-gray-700 leading-relaxed">
                  <li>
                    Ordená el dossier según el checklist oficial. Usamos
                    separadores para agilizar la revisión.
                  </li>
                  <li>
                    Tené listos comprobantes impresos y digitales en un pendrive
                    o carpeta en la nube.
                  </li>
                  <li>
                    Prepará respuestas claras sobre tu plan de viaje,
                    alojamiento, fondos y objetivos.
                  </li>
                  <li>
                    Llegá con al menos 20 minutos de anticipación y revisá que
                    tu seguro esté impreso en francés o inglés.
                  </li>
                </ul>
              </Card>
              {config.notas?.length ? (
                <Card className="p-6 bg-white border border-gray-100">
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "#002654" }}
                  >
                    Notas específicas para {config.name}
                  </h3>
                  <ul className="space-y-3 text-gray-700 leading-relaxed">
                    {config.notas.map((note) => (
                      <li key={note} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 mt-1 shrink-0"
                          style={{ color: "#ED2939" }}
                        />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ) : null}
            </div>
          </div>
        </section>

        <FAQSection
          title="Preguntas frecuentes sobre Working Holiday"
          description="Resolvemos dudas clave sobre requisitos, seguros, trabajo y errores frecuentes en la postulación."
          allowedCategories={faqCategories}
          data={faqItems}
        />

        <section className="py-16 px-6 bg-[#0F2354] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Cuál visa es la adecuada para vos?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Contactanos para una asesoría personalizada y descubrí cuál es la
              mejor opción según tus planes, tiempos y país de origen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href={whatsappConsultLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  Envíanos un WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#002654] font-semibold hover:bg-gray-100"
                asChild
              >
                <Link href="/servicios">
                  <Globe className="w-5 h-5 mr-2" />
                  Ver más servicios
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CountrySelectorModal onSelect={navigateToCountry} />
      <CountryIndicator />
    </div>
  );
}

type CountryGridProps = {
  onSelect: (code: WorkingHolidayCountryCode) => void;
};

function CountryGrid({ onSelect }: CountryGridProps) {
  return (
    <section className="py-12 px-6 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-400 mb-3">
          Selecciona tu país
        </p>
        <h3
          className="text-2xl lg:text-3xl font-bold mb-10"
          style={{ color: "#002654" }}
        >
          Ingresa directo a la guía por país
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.map((code) => {
            const country = WORKING_HOLIDAY_COUNTRIES[code];
            const quotaLabel = country.quotaText ?? "Cupo oficial";
            const isLastCard =
              code ===
              PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES[
                PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES.length - 1
              ];
            return (
              <button
                key={country.code}
                className={[
                  "rounded-2xl border-2 border-gray-200 p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED2939] cursor-pointer",
                  "flex h-full flex-col",
                  isLastCard ? "lg:col-start-2" : "",
                ].join(" ")}
                onClick={() => onSelect(country.code)}
              >
                <div className="flex items-center gap-4">
                  {country.flagSrc ? (
                    <Image
                      src={country.flagSrc}
                      alt={`Bandera de ${country.name}`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover shadow-sm"
                      style={{
                        transform: country.flagScale
                          ? `scale(${country.flagScale})`
                          : undefined,
                      }}
                    />
                  ) : null}
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {quotaLabel}
                  </span>
                </div>
                <div className="mt-4 flex-1">
                  <p className="text-base font-semibold mb-2 text-gray-900">
                    {country.name}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {country.heroSubtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
