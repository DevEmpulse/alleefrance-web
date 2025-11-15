"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Clock,
  CheckCircle,
  MessageCircle,
  FileText,
  Plane,
  Shield,
  Heart,
  Flag,
  GraduationCap,
  Users,
  Calculator,
  Briefcase,
  Languages,
  HeartPulse,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import type {
  IconName,
  Persona,
  PersonaId,
  ServiceCard,
} from "@/lib/services-data";
import type { LucideIcon } from "lucide-react";

type ServicesCatalogProps = {
  personas: Persona[];
  services: ServiceCard[];
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const iconMap: Record<IconName, LucideIcon> = {
  MessageCircle,
  FileText,
  Plane,
  Shield,
  Heart,
  Flag,
  GraduationCap,
  Users,
  Calculator,
  CheckCircle,
  Briefcase,
  Languages,
  HeartPulse,
};

const WHATSAPP_NUMBER = "33601526171";

const buildWhatsAppLink = (serviceTitle: string) => {
  const message = `Hola, me interesa el servicio "${serviceTitle}" y quiero recibir más información.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export function ServicesCatalog({ personas, services }: ServicesCatalogProps) {
  const defaultPersona = personas[0]?.id ?? "general";
  const [selectedPersona, setSelectedPersona] =
    useState<PersonaId>(defaultPersona);

  const filteredServices = services.filter((service) =>
    service.personas.includes(selectedPersona)
  );

  return (
    <>
      {/* Pills de personas */}
      <AnimateOnScroll direction="fade" delay={0.2}>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center">
          {personas.map((persona) => {
            const isActive = selectedPersona === persona.id;
            return (
              <motion.button
                key={persona.id}
                type="button"
                onClick={() => setSelectedPersona(persona.id)}
                className={`relative w-full cursor-pointer overflow-hidden rounded-2xl border-2 px-6 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED2939]/60 md:w-auto md:rounded-full
                ${
                  isActive
                    ? "border-transparent"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                aria-pressed={isActive}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="persona-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(120deg, #002654, #003b8e)",
                    }}
                    aria-hidden="true"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  />
                )}
                <div className="relative flex flex-col gap-1">
                  <span
                    className={`text-base font-semibold ${
                      isActive ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {persona.label}
                  </span>
                  <span
                    className={`text-xs ${
                      isActive ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {persona.helper}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Texto guía */}
        <p className="mb-10 text-center text-sm md:text-base text-slate-600">
          Elige tu perfil y descubre los servicios recomendados para tu situación.
        </p>
      </AnimateOnScroll>

      {/* Grid de servicios */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPersona}
          variants={gridVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon];
            const whatsappLink = buildWhatsAppLink(service.title);
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="h-full"
              >
                <Card
                  className="group relative h-full overflow-hidden rounded-2xl border border-slate-100
                             bg-white/95 p-6 shadow-md transition-all duration-300
                             hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative space-y-5">
                    {/* Icono + precio */}
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full
                                   bg-[rgba(237,41,57,0.08)] text-[#ED2939]"
                      >
                        <Icon className="h-6 w-6 stroke-2" strokeWidth={2} />
                      </div>
                      <Badge
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium
                                   text-slate-700 shadow-sm"
                      >
                        {service.price}
                      </Badge>
                    </div>

                    {/* Título + descripción */}
                    <div>
                      <h3 className="mb-1.5 text-lg font-bold text-[#002654]">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    {/* Detalles */}
                    <ul className="space-y-2.5">
                      {service.details.slice(0, 3).map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ED2939]" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                      {service.details.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{service.details.length - 3} más…
                        </li>
                      )}
                    </ul>

                    {/* CTA */}
                    <Button
                      asChild
                      className="mt-2 w-full rounded-full bg-[#ED2939] font-semibold text-white
                                 shadow-md transition-all hover:bg-[#d42032] hover:shadow-lg"
                    >
                      <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar este servicio
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
