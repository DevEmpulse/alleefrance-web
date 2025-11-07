"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Users,
  GraduationCap,
  FileText,
  Shield,
  Heart,
  Flag,
  Calculator,
  CheckCircle,
  Briefcase,
  Languages,
  HeartPulse,
  MessageCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", label: "Todos los Servicios" },
  { id: "visas", label: "Visas y Permisos" },
  { id: "administrative", label: "Trámites Administrativos" },
  { id: "consulting", label: "Asesorías" },
  { id: "other", label: "Otros Servicios" },
];

const services = [
  {
    id: 1,
    category: "consulting",
    icon: MessageCircle,
    title: "Asesorías Personalizadas",
    description:
      "Resuelve dudas específicas sobre migración en Francia con nuestros expertos.",
    details: [
      "Asesoría express (30 min): Dudas específicas - 30€",
      "Asesoría completa (1h): Revisión integral con resumen escrito - 50€",
    ],
    price: "Desde 30€",
    duration: "30 min - 1 hora",
    link: "/#contacto",
  },
  {
    id: 2,
    category: "administrative",
    icon: FileText,
    title: "Autorización de Trabajo",
    description: "Gestión completa de autorización de trabajo ante DREETS.",
    details: [
      "Publicación en France Travail",
      "Trámite ANEF ante DREETS",
      "Comunicación con empleador y trabajador",
      "Dossier listo para embajada",
    ],
    price: "150€",
    duration: "2-4 semanas",
    link: "/#contacto",
  },
  {
    id: 3,
    category: "visas",
    icon: Plane,
    title: "Visa Salarié/Saisonnier",
    description: "Acompañamiento completo para visa de trabajo en Francia.",
    details: [
      "Gestión integral en Francia y país de origen",
      "Autorización de trabajo",
      "Turno embajada",
      "Preparación de dossier completo",
      "Cartas y CV profesionales",
      "Estrategia para demostrar experiencia",
    ],
    price: "250€",
    duration: "4-8 semanas",
    link: "/servicios/visas-trabajo",
  },
  {
    id: 4,
    category: "other",
    icon: Shield,
    title: "Seguros de Viaje",
    description:
      "Coberturas internacionales para visado en Francia o vacaciones.",
    details: [
      "Asesoría personalizada",
      "Selección de póliza adecuada",
      "Coberturas para visado",
      "Seguros para vacaciones internacionales",
    ],
    price: "Variable",
    duration: "Inmediato",
    link: "/#contacto",
  },
  {
    id: 5,
    category: "visas",
    icon: Heart,
    title: "Visa Vie Privée et Familiale",
    description: "Residencia por vida privada y familiar en Francia.",
    details: [
      "Asesoría completa (no PACS)",
      "Preparación de dossier",
      "Acompañamiento en prefectura",
      "Seguimiento del proceso",
    ],
    price: "250€",
    duration: "4-6 semanas",
    link: "/#contacto",
  },
  {
    id: 6,
    category: "administrative",
    icon: Flag,
    title: "Nacionalización Francesa",
    description: "Proceso completo para obtener la nacionalidad francesa.",
    details: [
      "Revisión de requisitos",
      "Preparación de documentos (actas, casier, traducciones)",
      "Simulación de entrevista",
      "Acompañamiento completo",
    ],
    price: "500€",
    duration: "8-12 semanas",
    link: "/#contacto",
  },
  {
    id: 7,
    category: "visas",
    icon: GraduationCap,
    title: "Visa de Estudiante",
    description:
      "Campus France e inscripción académica para estudiar en Francia.",
    details: [
      "Proceso Campus France",
      "Inscripción académica",
      "Preparación de dossier para embajada",
      "Estrategia de recursos económicos",
      "Búsqueda de alojamiento",
    ],
    price: "250€",
    duration: "4-8 semanas",
    link: "/servicios/visa-etudiant",
  },
  {
    id: 8,
    category: "visas",
    icon: Users,
    title: "Reagrupación Familiar",
    description:
      "Reúne a tu familia en Francia con todos los trámites necesarios.",
    details: [
      "Expediente ante OFII/prefectura",
      "Asesoría sobre vivienda y recursos",
      "Estrategia documental",
      "Acompañamiento completo",
    ],
    price: "350€",
    duration: "6-10 semanas",
    link: "/#contacto",
  },
  {
    id: 9,
    category: "administrative",
    icon: Calculator,
    title: "Declaración de Impuestos",
    description: "Llenado completo de tu declaración de impuestos en Francia.",
    details: [
      "Llenado completo de declaración",
      "Asesoría sobre deducciones",
      "Acompañamiento en notificaciones",
      "Optimización fiscal",
    ],
    price: "50€",
    duration: "1-2 semanas",
    link: "/#contacto",
  },
  {
    id: 10,
    category: "administrative",
    icon: CheckCircle,
    title: "Validación de Visa",
    description: "Validación en plataforma OFII al llegar a Francia.",
    details: [
      "Validación en plataforma OFII",
      "Regularización de estancia",
      "Asesoría post-llegada",
    ],
    price: "15€",
    duration: "Inmediato",
    link: "/#contacto",
  },
  {
    id: 11,
    category: "visas",
    icon: FileText,
    title: "Titres de Séjour",
    description: "Renovación y obtención de permisos de residencia en Francia.",
    details: [
      "Salarié: 250€",
      "Saisonnier: 150€",
      "Étudiant: 150€",
      "Incluye asesoría y preparación de dossier",
      "Acompañamiento en prefectura",
    ],
    price: "Desde 150€",
    duration: "3-6 semanas",
    link: "/#contacto",
  },
  {
    id: 12,
    category: "visas",
    icon: Briefcase,
    title: "Visa Passeport Talent",
    description: "Para profesionales altamente cualificados y emprendedores.",
    details: [
      "Salarié qualifié",
      "Carte bleue européenne",
      "Jeune entreprise innovante",
      "Evaluación de elegibilidad",
      "Preparación de contratos/recursos",
      "Dossier ANEF completo",
      "Acompañamiento en prefectura/consulado",
    ],
    price: "250€",
    duration: "4-8 semanas",
    link: "/#contacto",
  },
  {
    id: 13,
    category: "administrative",
    icon: Briefcase,
    title: "Profession Libérale",
    description:
      "Cambio o solicitud de estatus para trabajar como independiente.",
    details: [
      "Definición de actividad (APE)",
      "Alta en URSSAF/INPI",
      "Plan de actividad e ingresos",
      "Armado de dossier",
      "Acompañamiento completo",
    ],
    price: "250€",
    duration: "4-6 semanas",
    link: "/#contacto",
  },
  {
    id: 14,
    category: "other",
    icon: Languages,
    title: "Traducciones Oficiales",
    description: "Traducciones juradas aceptadas por autoridades francesas.",
    details: [
      "Traducciones juradas oficiales",
      "Aceptadas por prefecturas",
      "Válidas para embajadas",
      "Reconocidas por universidades",
      "Cotización según páginas/palabras",
    ],
    price: "Variable",
    duration: "3-7 días",
    link: "/#contacto",
  },
  {
    id: 15,
    category: "administrative",
    icon: HeartPulse,
    title: "Seguridad Social",
    description: "Trámite completo para obtener tu carte vitale.",
    details: [
      "Formularios CERFA",
      "Subida de documentos",
      "Seguimiento del proceso",
      "Acompañamiento hasta obtención",
    ],
    price: "50€",
    duration: "2-4 semanas",
    link: "/#contacto",
  },
];

export default function ServiciosPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#002654" }}
            >
              Catálogo de Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gestoría Allée France Lyon - Soluciones completas para tu proceso
              migratorio y administrativo en Francia
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`font-medium ${
                  selectedCategory === category.id
                    ? "text-white"
                    : "bg-white hover:bg-gray-50"
                }`}
                style={
                  selectedCategory === category.id
                    ? { backgroundColor: "#002654" }
                    : { borderColor: "#002654", color: "#002654" }
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-opacity-100 group bg-white"
                  style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
                >
                  <div className="space-y-4">
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: "rgba(237, 41, 57, 0.1)" }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: "#ED2939" }}
                        />
                      </div>
                      <Badge
                        variant="secondary"
                        className="font-semibold"
                        style={{
                          backgroundColor: "rgba(0, 38, 84, 0.1)",
                          color: "#002654",
                        }}
                      >
                        {service.price}
                      </Badge>
                    </div>

                    {/* Title and Description */}
                    <div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "#002654" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {service.details.slice(0, 3).map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color: "#ED2939" }}
                          />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                      {service.details.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          +{service.details.length - 3} más...
                        </li>
                      )}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className="w-full font-semibold text-white hover:opacity-90"
                      style={{ backgroundColor: "#ED2939" }}
                    >
                      <Link href={service.link}>Solicitar Servicio</Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card
              className="p-8 bg-white border-2"
              style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                ¿No encuentras el servicio que necesitas?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Contáctanos para una consulta personalizada. Nuestro equipo de
                expertos está listo para ayudarte con cualquier trámite
                migratorio o administrativo en Francia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="text-white hover:opacity-90 font-semibold"
                  style={{ backgroundColor: "#ED2939" }}
                >
                  <a
                    href="https://wa.me/33601526171"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consulta Gratis por WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="font-semibold border-2 bg-transparent"
                  style={{ borderColor: "#002654", color: "#002654" }}
                >
                  <Link href="/#contacto">Formulario de Contacto</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
