import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CountryName } from "@/components/country-name"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
            CONTACTO
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed mb-8">
              ¿Listo para comenzar tu proceso migratorio desde{" "}
              <CountryName withEmoji className="text-[#ED2939]" />? Completa el formulario y nos pondremos en contacto
              contigo para una consulta inicial gratuita.
            </p>

            <form className="space-y-4">
              <Input placeholder="Nombre" className="border-2" style={{ borderColor: "rgba(0, 38, 84, 0.2)" }} />
              <Input
                type="email"
                placeholder="Email"
                className="border-2"
                style={{ borderColor: "rgba(0, 38, 84, 0.2)" }}
              />
              <Input
                type="tel"
                placeholder="Teléfono"
                className="border-2"
                style={{ borderColor: "rgba(0, 38, 84, 0.2)" }}
              />
              <Textarea
                placeholder="Mensaje"
                rows={5}
                className="border-2"
                style={{ borderColor: "rgba(0, 38, 84, 0.2)" }}
              />
              <Button
                type="submit"
                className="w-full text-white font-semibold py-6 hover:opacity-90"
                style={{ backgroundColor: "#ED2939" }}
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* France Map */}
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M200,50 L220,60 L240,55 L260,65 L280,60 L300,70 L310,90 L320,110 L325,130 L330,150 L328,170 L320,190 L310,210 L300,230 L285,245 L270,255 L250,265 L230,270 L210,268 L190,260 L170,250 L150,235 L135,220 L120,200 L110,180 L105,160 L100,140 L95,120 L100,100 L110,85 L125,70 L145,60 L165,55 L185,52 Z"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse cx="320" cy="300" rx="15" ry="25" fill="none" stroke="#1e3a8a" strokeWidth="2" />
              <circle cx="200" cy="150" r="5" fill="#ED2939" />
              <text x="200" y="140" textAnchor="middle" fill="#002654" fontSize="14" fontWeight="bold">
                Paris
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
