import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sofía M.",
    quote: "Excelente servicio. Me ayudaron con todos los documentos y el proceso fue mucho más simple de lo que imaginaba. Recomiendo 100%.",
    visaType: "Visa Étudiant",
  },
  {
    name: "Martín R.",
    quote: "Profesionales y atentos en cada detalle. Gracias a su asesoría conseguí mi visa de trabajo sin problemas.",
    visaType: "Visa Salarié",
  },
  {
    name: "Lucía P.",
    quote: "Me acompañaron durante todo el proceso. Siempre respondieron mis dudas rápidamente. Muy recomendable.",
    visaType: "Visa Saisonier",
  },
]

export function SuccessStoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
          Historias reales, resultados comprobados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Lo que dicen nuestros clientes sobre su experiencia
          Más de 100 clientes han logrado su sueño de vivir en Francia con nuestra asesoría
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 bg-white border border-gray-200"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: "#ED2939" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Separator */}
                <div className="border-t border-gray-200"></div>

                {/* Customer Name */}
                <p className="font-bold text-gray-800">
                  {testimonial.name}
                </p>

                {/* Visa Type (optional) */}
                {testimonial.visaType && (
                  <p className="text-sm font-medium" style={{ color: "#ED2939" }}>
                    {testimonial.visaType}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
