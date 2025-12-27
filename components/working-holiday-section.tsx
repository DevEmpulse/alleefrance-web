"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const otherDestinations = [
  {
    name: "Alemania",
    flag: "🇩🇪",
    gradient: "from-amber-200 via-orange-200 to-rose-200",
  },
  {
    name: "Andorra",
    flag: "🇦🇩",
    gradient: "from-sky-200 via-blue-200 to-indigo-200",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    gradient: "from-rose-200 via-orange-200 to-yellow-200",
  },
  {
    name: "Austria",
    flag: "🇦🇹",
    gradient: "from-red-200 via-rose-200 to-orange-200",
  },
  {
    name: "Corea",
    flag: "🇰🇷",
    gradient: "from-indigo-200 via-slate-200 to-rose-200",
  },
  {
    name: "Dinamarca",
    flag: "🇩🇰",
    gradient: "from-rose-200 via-pink-200 to-orange-100",
  },
  {
    name: "Eslovaquia",
    flag: "🇸🇰",
    gradient: "from-sky-200 via-blue-200 to-emerald-200",
  },
  {
    name: "España",
    flag: "🇪🇸",
    gradient: "from-amber-200 via-yellow-200 to-rose-200",
  },
  {
    name: "Holanda",
    flag: "🇳🇱",
    gradient: "from-orange-200 via-rose-200 to-sky-200",
  },
  {
    name: "Hungría",
    flag: "🇭🇺",
    gradient: "from-emerald-200 via-teal-200 to-rose-200",
  },
  {
    name: "Irlanda",
    flag: "🇮🇪",
    gradient: "from-emerald-200 via-lime-200 to-amber-200",
  },
  {
    name: "Japón",
    flag: "🇯🇵",
    gradient: "from-rose-200 via-pink-200 to-slate-200",
  },
  {
    name: "Noruega",
    flag: "🇳🇴",
    gradient: "from-blue-200 via-indigo-200 to-slate-200",
  },
  {
    name: "Nueva Zelanda",
    flag: "🇳🇿",
    gradient: "from-sky-200 via-indigo-200 to-emerald-200",
  },
  {
    name: "Polonia",
    flag: "🇵🇱",
    gradient: "from-rose-200 via-slate-200 to-amber-200",
  },
  {
    name: "Portugal",
    flag: "🇵🇹",
    gradient: "from-emerald-200 via-lime-200 to-rose-200",
  },
  {
    name: "Suecia",
    flag: "🇸🇪",
    gradient: "from-sky-200 via-blue-200 to-amber-200",
  },
]

function DestinationsCarousel() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="relative"
    >
      <CarouselContent className="-ml-6">
        {otherDestinations.map((destination) => (
          <CarouselItem
            key={destination.name}
            className="pl-6 basis-[240px] sm:basis-[260px] lg:basis-[280px]"
          >
            <Card className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <div
                className={`relative h-36 bg-gradient-to-br ${destination.gradient}`}
              >
                <div className="absolute inset-0">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/40 blur-lg" />
                  <div className="absolute bottom-4 left-4 h-10 w-32 rounded-full bg-white/40" />
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-5">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-2xl shadow-inner"
                  aria-hidden="true"
                >
                  {destination.flag}
                </span>
                <p className="text-lg font-semibold text-[#2A0E2F]">
                  {destination.name}
                </p>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 border-none bg-white shadow-lg hover:bg-slate-50" />
      <CarouselNext className="-right-4 border-none bg-white shadow-lg hover:bg-slate-50" />
    </Carousel>
  )
}

export function WorkingHolidaySection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(180deg, #1E3A8A 0%, #172554 100%)",
      }}
    >
      <div className="pointer-events-none absolute -top-12 left-0 h-16 w-full bg-gradient-to-b from-[#1e3a8a] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <AnimateOnScroll direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-red-200">
                Working Holiday Francia
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
                Tu próximo año en Francia empieza acá
              </h2>
              <p className="mt-4 text-lg text-blue-100/90 leading-relaxed">
                Preparamos tu estrategia para la Visa Working Holiday Francia:
                requisitos, cupos, documentación y acompañamiento personalizado
                para que llegues con todo listo.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-sm">
                  12 meses de estadía
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-sm">
                  Trabajo legal
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-sm">
                  Guía consular completa
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <Card className="relative overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#002654]/20 via-transparent to-[#ED2939]/20" />
              <Image
                src="/person-holding-french-flag-in-front-of-eiffel-towe.jpg"
                alt="Working Holiday en Francia"
                width={720}
                height={520}
                className="h-[320px] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Enfoque principal
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#002654]">
                  Francia 2025
                </p>
                <p className="mt-3 text-slate-600">
                  Cupos limitados, fechas clave y checklist listo para tu
                  consulado.
                </p>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>

        <div className="mt-16">
          <AnimateOnScroll direction="fade">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">
                Otros destinos Working Holiday
              </h3>
              <p className="mt-3 text-lg text-blue-100/90">
                Explorá alternativas disponibles para argentinos y residentes
                LATAM.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-10">
            <DestinationsCarousel />
          </div>
        </div>

        <AnimateOnScroll direction="fade" delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Button
              size="lg"
              className="bg-[#ED2939] px-10 py-6 text-base font-semibold text-white shadow-xl transition-transform hover:scale-105"
              asChild
            >
              <Link href="/working-holiday">Ver más destinos</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
