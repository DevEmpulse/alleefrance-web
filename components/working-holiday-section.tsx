"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { OtherDestinationsCarousel } from "@/components/working-holiday/other-destinations-carousel";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

export function WorkingHolidaySection() {
  return (
    <section className="relative overflow-hidden bg-[#002590]">
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-linear-to-b from-[#002590] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-[#002590] to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-blue-300/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-8 h-96 w-96 rounded-full bg-indigo-400/10 blur-[140px]" />

      <div className="relative flex min-h-[600px] items-center overflow-hidden">
        <Image
          src="/Fondo-WH.png"
          alt="Working Holiday Francia"
          fill
          priority
          className="absolute inset-0 z-0 contrast-105 saturate-105"
          style={{ objectFit: "cover", objectPosition: "right top" }}
        />
        <div className="absolute inset-0 z-10 bg-linear-to-r from-[#002590]/70 via-[#002590]/35 to-transparent" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,#002590_0%,transparent_12%,transparent_88%,#002590_100%)]" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-16">
          <div className="max-w-xl">
            <AnimateOnScroll direction="left">
              <div>
                <span className="inline-flex items-center rounded-full border border-blue-300/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-200">
                  EDICIÓN {new Date().getFullYear()}
                </span>
                <h2 className="mt-5 text-5xl font-extrabold text-white leading-tight lg:text-6xl">
                  <span className="relative inline-block whitespace-nowrap">
                    Tu Working Holiday
                    <svg
                      className="absolute -bottom-1 left-0 h-2 w-full text-[#ED2939]/30"
                      viewBox="0 0 200 8"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <path
                        d="M0,5 Q50,0 100,5 T200,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  en <span className="text-[#ED2939]">Francia</span> empieza
                  acá.
                </h2>
                <ul className="mt-6 space-y-3 text-slate-200">
                  {[
                    "Gestión integral de visa",
                    "Alojamiento y empleo garantizado",
                    "Comunidad exclusiva de viajeros",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-base"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-blue-100">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  Más de 300 visas aprobadas
                </div>
                <div className="mt-8">
                  <Button
                    size="lg"
                    className="group bg-red-600 px-8 py-5 text-base font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
                    asChild
                  >
                    <Link
                      href="/working-holiday"
                      className="flex items-center gap-2"
                    >
                      Comenzá tu viaje
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mt-20">
          <AnimateOnScroll direction="fade">
            <div className="text-center">
              <h3 className="mt-3 text-3xl font-bold text-white">
                Otros destinos Working Holiday
              </h3>
              <p className="mt-3 text-lg text-blue-100/90">
                Explorá alternativas disponibles para residentes de
                Latinoamérica.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-8">
            <OtherDestinationsCarousel />
          </div>
        </div>

        <AnimateOnScroll direction="fade" delay={0.2}>
          <div className="mt-20 flex justify-center pb-12">
            <Button
              size="lg"
              className="bg-red-600 px-8 py-5 text-base font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
              asChild
            >
              <Link href="/working-holiday">Ver más destinos</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
