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

          {/* Google Map */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.0!2d4.8357!3d45.7640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C%20France!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses&hl=es"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Mapa de Lyon, Francia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
