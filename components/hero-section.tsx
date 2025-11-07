import { Button } from "@/components/ui/button"
import { CountryName } from "@/components/country-name"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background with Paris Image and Blue Overlay */}
      <div className="relative min-h-[600px] lg:min-h-[700px] pt-16" style={{ backgroundColor: "#1e3a8a" }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-lyon.png"
            alt="Torre Eiffel y río Sena en París - Allée France"
            fill
            className="object-cover object-center blur-[0.5px]"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Overlay azul suave */}
          <div className="absolute inset-0 bg-blue-700/40 pointer-events-none"></div>
          {/* Degradado negro en la parte superior */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight">
            Todo lo que necesitas saber
            <br />
            para viajar a Francia desde{" "}
            <CountryName
              withEmoji
              className="inline-flex items-center gap-2 text-[#FEE08B] drop-shadow-sm lg:text-6xl"
            />
          </h1>

          <Button
            size="lg"
            className="text-white font-semibold tracking-wide text-base px-10 py-6 rounded-full hover:opacity-90 transition-opacity shadow-xl"
            style={{ backgroundColor: "#ED2939" }}
            asChild
          >
            <a href="https://wa.me/33601526171" target="_blank" rel="noopener noreferrer">
              AGENDA TU ASESORÍA
            </a>
          </Button>
        </div>

        {/* Curved Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  )
}
