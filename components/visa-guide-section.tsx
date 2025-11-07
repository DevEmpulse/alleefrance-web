import { Card } from "@/components/ui/card";
import { Briefcase, Sprout, GraduationCap } from "lucide-react";

const visaTypes = [
  {
    icon: Briefcase,
    title: "Visa Salarié",
    description:
      "Para trabajadores con contrato laboral en Francia. Incluye permisos de trabajo y residencia.",
    requirements: [
      "Contrato de trabajo",
      "Oferta laboral validada",
      "Documentación completa",
    ],
  },
  {
    icon: Sprout,
    title: "Visa Saisonier",
    description:
      "Visa temporal para trabajos estacionales en agricultura, turismo y otros sectores.",
    requirements: [
      "Contrato temporal",
      "Empleador registrado",
      "Duración máxima 6 meses",
    ],
  },
  {
    icon: GraduationCap,
    title: "Visa Étudiant",
    description:
      "Para estudiantes aceptados en instituciones educativas francesas reconocidas.",
    requirements: [
      "Carta de aceptación",
      "Prueba de recursos",
      "Seguro médico",
    ],
  },
];

export function VisaGuideSection() {
  return (
    <section id="guia-visas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#002654" }}
          >
            Guía de Visas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conocé los diferentes tipos de visas disponibles para Francia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visaTypes.map((visa, index) => {
            const Icon = visa.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-t-4"
                style={{
                  borderTopColor: index % 2 === 0 ? "#002654" : "#ED2939",
                }}
              >
                <div className="space-y-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "rgba(0, 38, 84, 0.1)"
                          : "rgba(237, 41, 57, 0.1)",
                    }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: index % 2 === 0 ? "#002654" : "#ED2939" }}
                    />
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: "#002654" }}
                    >
                      {visa.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {visa.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p
                      className="font-semibold text-sm tracking-wide"
                      style={{ color: "#002654" }}
                    >
                      REQUISITOS PRINCIPALES:
                    </p>
                    <ul className="space-y-2">
                      {visa.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: "#ED2939" }}
                          ></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
