"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CountrySelectorModal } from "@/components/country-selector-modal";
import { CountryIndicator } from "@/components/country-indicator";
import {
  Plane,
  Clock,
  Globe,
  CheckCircle2,
  Calendar,
  MapPin,
  Briefcase,
  Heart,
  Shield,
  Backpack,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import {
  PUBLIC_WORKING_HOLIDAY_COUNTRY_CODES,
  WORKING_HOLIDAY_COUNTRIES,
  type WorkingHolidayCountryConfig,
  type WorkingHolidayCountryCode,
} from "@/lib/working-holiday-countries";
import { useCountry } from "@/components/country-provider";

type WorkingHolidayCountryPageProps = {
  config: WorkingHolidayCountryConfig;
  showCountryGrid?: boolean;
};

const beneficios = [
  {
    icon: Plane,
    title: "Viví un año en Francia",
    description:
      "Residí 12 meses con libertad para moverte por todo el territorio francés y el Espacio Schengen.",
  },
  {
    icon: Briefcase,
    title: "Trabajar legalmente",
    description:
      "Podés realizar empleos temporales para financiar tu estadía y sumar experiencia internacional en tu CV.",
  },
  {
    icon: Globe,
    title: "Explorar Europa",
    description:
      "Usá Francia como base para viajar y conocer otros países europeos durante tus vacaciones.",
  },
  {
    icon: Heart,
    title: "Inmersión cultural",
    description:
      "Mejorá tu francés, hacé amistades internacionales y conocé de cerca el estilo de vida francés.",
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
  "Formulario OFII completo y firmado.",
  "CV y carta de motivación en francés o inglés.",
  "Comprobante de fondos (extractos bancarios o certificados).",
  "Reserva aérea ida y vuelta o fondos equivalentes.",
  "Seguro médico internacional (cobertura mínima €30.000).",
  "Certificado de antecedentes penales apostillado.",
];

const insuranceFeatures = [
  {
    icon: Shield,
    title: "Cobertura Schengen 24/7",
    description:
      "Atención médica, hospitalización y repatriación con respaldo internacional durante los 12 meses del programa.",
  },
  {
    icon: Globe,
    title: "Documentación en francés",
    description:
      "Certificado oficial y carta personalizada para presentar en tu consulado o subir a France-Visas sin rechazos.",
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

  const requirementsTitle =
    config.code === "global"
      ? "Requisitos principales del programa"
      : `Requisitos principales para ${config.name}`;

  const whatsappConsultLink =
    "https://wa.me/33601526171?text=Hola%20All%C3%A9e%20France,%20quiero%20saber%20qu%C3%A9%20visa%20me%20conviene%20para%20Francia.";

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
              Working Holiday Francia 2025
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
                  href="https://wa.me/33601526171"
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

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                ¿Qué es la Visa Working Holiday Francia?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                La Visa Vacaciones y Trabajo (Programme Vacances-Travail)
                permite a jóvenes de {audienceLabel} residir en Francia durante
                12 meses con libertad para trabajar de forma temporal y recorrer
                el país. Es una excelente oportunidad para mejorar el idioma,
                financiar tu experiencia y vivir una inmersión cultural total.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Desde Allée France te guiamos en cada etapa: planificación,
                papeles, entrevista consular y adaptación al llegar. Nos
                enfocamos en anticipar problemas y fortalecer tu dossier para
                que puedas aprovechar el cupo anual sin contratiempos.
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
                  href="https://wa.me/33601526171"
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
