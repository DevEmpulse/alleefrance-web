"use client";

import { useEffect, useState } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

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
];

export function OtherDestinationsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;
    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => window.clearInterval(interval);
  }, [api, isPaused]);

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      setApi={setApi}
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CarouselContent className="-ml-6 py-6">
        {otherDestinations.map((destination) => (
          <CarouselItem
            key={destination.name}
            className="pl-6 basis-60 sm:basis-[260px] lg:basis-[280px]"
          >
            <Card className="overflow-hidden rounded-3xl border border-white/10 bg-blue-800/50 shadow-xl backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <div
                className={`relative h-28 bg-linear-to-br ${destination.gradient}`}
              >
                <div className="absolute inset-0 bg-[#0b1c4a]/30" />
                <div className="absolute inset-0">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/30 blur-lg" />
                  <div className="absolute bottom-4 left-4 h-10 w-32 rounded-full bg-white/30" />
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-5">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl shadow-inner"
                  aria-hidden="true"
                >
                  {destination.flag}
                </span>
                <p className="text-lg font-semibold text-white">
                  {destination.name}
                </p>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 h-12 w-12 border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur hover:bg-white/20 cursor-pointer [&>svg]:h-6 [&>svg]:w-6 md:-left-6" />
      <CarouselNext className="right-3 h-12 w-12 border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur hover:bg-white/20 cursor-pointer [&>svg]:h-6 [&>svg]:w-6 md:-right-6" />
    </Carousel>
  );
}
