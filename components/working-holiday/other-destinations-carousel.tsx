"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  { name: "Alemania", image: "/countries/Alemania.webp" },
  { name: "Andorra", image: "/countries/Andorra.webp" },
  { name: "Australia", image: "/countries/Australia.webp" },
  { name: "Austria", image: "/countries/Austria.webp" },
  { name: "Canada", image: "/countries/Canada.webp" },
  { name: "Corea del Sur", image: "/countries/Corea-del-Sur.webp" },
  { name: "Dinamarca", image: "/countries/Dinamarca.webp" },
  { name: "Eslovaquia", image: "/countries/Eslovaquia.webp" },
  { name: "España", image: "/countries/Espana.webp" },
  { name: "Holanda", image: "/countries/Paises-Bajos.webp" },
  { name: "Hungría", image: "/countries/Hungria.webp" },
  { name: "Irlanda", image: "/countries/Irlanda.webp" },
  { name: "Japón", image: "/countries/Japon.webp" },
  { name: "Mexico", image: "/countries/Mexico.webp" },
  { name: "Noruega", image: "/countries/Noruega.webp" },
  { name: "Nueva Zelanda", image: "/countries/Nueva-Zelanda.webp" },
  { name: "Polonia", image: "/countries/Polonia.webp" },
  { name: "Portugal", image: "/countries/Portugal.webp" },
  { name: "Reino Unido", image: "/countries/Reino-Unido.webp" },
  { name: "Suecia", image: "/countries/Suecia.webp" },
  { name: "Estados Unidos", image: "/countries/USA.webp" },
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
              <div className="relative h-36 bg-[#0b1c4a]/40">
                {destination.image ? (
                  <Image
                    src={destination.image}
                    alt={`Destino ${destination.name}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-blue-400/30 via-blue-500/10 to-indigo-500/20" />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-[#0b1c4a]/70 via-transparent to-transparent" />
              </div>
              <div className="px-5 py-5">
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
