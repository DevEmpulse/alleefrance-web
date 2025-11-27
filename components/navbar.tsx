"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOtherDestinationsOpen, setIsOtherDestinationsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const otherDestinationsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Asegurar que el scroll no se bloquee cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      // No bloquear el scroll en mobile, solo prevenir el scroll del body si es necesario
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Cerrar el desplegable de escritorio si se hace click fuera de él
  useEffect(() => {
    if (!isServicesOpen) return;

    const isDesktopView =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktopView) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isServicesOpen]);

  // Cerrar el desplegable de otros destinos en escritorio al hacer click afuera
  useEffect(() => {
    if (!isOtherDestinationsOpen) return;

    const isDesktopView =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktopView) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        otherDestinationsRef.current &&
        !otherDestinationsRef.current.contains(event.target as Node)
      ) {
        setIsOtherDestinationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOtherDestinationsOpen]);

  const navLinks = [{ href: "/#nosotros", label: "Nosotros" }];

  const serviceLinks = [
    { href: "/servicios/visas-trabajo", label: "Visa Salarié/Saisonier" },
    { href: "/servicios/titre-de-sejour", label: "Titre de Séjour" },
    { href: "/servicios", label: "Ver Todos los Servicios", featured: true },
  ];

  const otherDestinationsLinks = [
    { href: "/working-holiday?dest=austria", label: "Austria" },
    { href: "/working-holiday?dest=australia", label: "Australia" },
    { href: "/working-holiday?dest=hungria", label: "Hungría" },
    { href: "/working-holiday?dest=alemania", label: "Alemania" },
    { href: "/working-holiday?dest=andorra", label: "Andorra" },
    { href: "/working-holiday", label: "Ver todos los destinos", featured: true },
  ];

  const otherLinks = [
    { href: "/blog/visa-estudiante-francia", label: "Visa estudiantes" },
    { href: "/working-holiday", label: "Working Holiday" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 backdrop-blur-md transition-all duration-300 ${
    isScrolled
      ? "bg-[#0D1E46] border-b border-white/10"
      : "bg-transparent"
  }`}
>
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between min-h-14 md:min-h-16 py-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-2 group shrink-0 transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logofondotransparente.png"
                alt="Allée France Logo"
                width={140}
                height={56}
                className="h-full w-auto object-contain transition-all duration-300"
                priority
                style={{
                  mixBlendMode: "normal",
                }}
              />
            </div>
            <span
              className="hidden md:inline-flex items-center text-white text-base md:text-xl font-black uppercase whitespace-nowrap transition-all duration-300 group-hover:text-blue-300 tracking-[0.08em]"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                textShadow: "0 0 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              <span className="tracking-[0.12em]">ALLÉE</span>
              <span className="ml-1 tracking-[0.08em]">FRANCE</span>
            </span>
          </Link>

          {/* Mobile Site Name */}
          <div className="md:hidden flex-1 flex justify-center">
            <span
              className="inline-flex items-center text-white text-sm font-black uppercase tracking-[0.08em] drop-shadow-[0_0_6px_rgba(0,0,0,0.45)]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              <span className="tracking-[0.12em]">ALLÉE</span>
              <span className="ml-0.5 tracking-[0.08em]">FRANCE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-4 -ml-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative cursor-pointer font-medium text-white transition-all duration-300 hover:text-blue-300 group/link"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover/link:w-full"></span>
                </Link>
              ))}

              <div className="relative" ref={servicesRef}>
                <button
                  type="button"
                  className="cursor-pointer relative flex items-center gap-1 font-medium text-white transition-all duration-300 hover:text-blue-300 group/services"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                >
                  Servicios
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    } group-hover/services:translate-y-0.5`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover/services:w-full"></span>
                </button>

                {isServicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 backdrop-blur-md shadow-xl border border-white/20 py-2 rounded-lg animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
                    style={{ backgroundColor: "rgba(30, 58, 138, 0.95)" }}
                  >
                    {serviceLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative block px-4 py-2.5 transition-all duration-300 font-medium overflow-hidden group/item cursor-pointer"
                        style={{
                          color: link.featured ? "#93c5fd" : "#ffffff",
                          fontWeight: link.featured ? "700" : "500",
                          animationDelay: `${index * 50}ms`,
                        }}
                        onClick={(e) => {
                          // Permitir que el click funcione normalmente
                          setIsServicesOpen(false);
                        }}
                      >
                        <span className="relative z-10 transition-all duration-300 group-hover/item:translate-x-2 inline-block">
                          {link.label}
                        </span>
                        <span className="absolute inset-0 bg-linear-to-r from-blue-400/25 to-transparent -translate-x-full group-hover/item:translate-x-0 transition-transform duration-300"></span>
                        {!link.featured && (
                          <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-center"></span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={otherLinks[0].href}
                className="relative cursor-pointer font-medium text-white transition-all duration-300 hover:text-blue-300 group/link"
              >
                {otherLinks[0].label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover/link:w-full"></span>
              </Link>

              <Link
                href={otherLinks[1].href}
                className="relative cursor-pointer font-medium text-white transition-all duration-300 hover:text-blue-300 group/link"
              >
                {otherLinks[1].label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover/link:w-full"></span>
              </Link>

              <div className="relative" ref={otherDestinationsRef}>
                <button
                  type="button"
                  className="cursor-pointer relative flex items-center gap-1 font-medium text-white transition-all duration-300 hover:text-blue-300 group/services"
                  onClick={() => setIsOtherDestinationsOpen((prev) => !prev)}
                >
                  Otros destinos
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOtherDestinationsOpen ? "rotate-180" : ""
                    } group-hover/services:translate-y-0.5`}
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover/services:w-full"></span>
                </button>

                {isOtherDestinationsOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 backdrop-blur-md shadow-xl border border-white/20 py-2 rounded-lg animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
                    style={{ backgroundColor: "rgba(30, 58, 138, 0.95)" }}
                  >
                    {otherDestinationsLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative block px-4 py-2.5 transition-all duration-300 font-medium overflow-hidden group/item cursor-pointer"
                        style={{
                          color: link.featured ? "#93c5fd" : "#ffffff",
                          fontWeight: link.featured ? "700" : "500",
                          animationDelay: `${index * 50}ms`,
                        }}
                        onClick={() => {
                          setIsOtherDestinationsOpen(false);
                        }}
                      >
                        <span className="relative z-10 transition-all duration-300 group-hover/item:translate-x-2 inline-block">
                          {link.label}
                        </span>
                        <span className="absolute inset-0 bg-linear-to-r from-blue-400/25 to-transparent -translate-x-full group-hover/item:translate-x-0 transition-transform duration-300"></span>
                        {!link.featured && (
                          <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-center"></span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={otherLinks[2].href}
                className="relative cursor-pointer font-medium text-white transition-all duration-300 hover:text-blue-300 group/link"
              >
                {otherLinks[2].label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover/link:w-full"></span>
              </Link>
            </div>
          </div>

          <Button
            asChild
            className="hidden md:inline-flex text-white ml-6 lg:ml-10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
            style={{ backgroundColor: "#ED2939" }}
          >
            <a
              href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar mi seguro
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-blue-300 transition-all duration-300 hover:rotate-90 active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transition-transform duration-300" />
            ) : (
              <Menu size={24} className="transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-in slide-in-from-top duration-300 px-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative font-medium py-3 px-4 text-white transition-all duration-300 hover:text-blue-300 hover:bg-white/10 rounded-lg group/mobile"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300 scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
                </Link>
              ))}

              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full font-medium py-3 px-4 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  Servicios
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-1 animate-in fade-in slide-in-from-left duration-200">
                    {serviceLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                        className="relative py-2.5 px-4 rounded-lg transition-all duration-300 group/mobile-item"
                        style={{
                          color: link.featured ? "#93c5fd" : "#e5e7eb",
                          fontWeight: link.featured ? "700" : "500",
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <span className="relative z-10 transition-all duration-300 group-hover/mobile-item:translate-x-2 inline-block">
                          {link.label}
                        </span>
                        <span className="absolute inset-0 bg-blue-400/15 rounded-lg scale-x-0 group-hover/mobile-item:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={otherLinks[0].href}
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-white transition-all duration-300 hover:text-blue-300 hover:bg-white/10 rounded-lg group/mobile"
                style={{
                  animationDelay: `${(navLinks.length + 0) * 50}ms`,
                }}
              >
                <span className="relative z-10">{otherLinks[0].label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300 scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
              </Link>

              <Link
                href={otherLinks[1].href}
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-white transition-all duration-300 hover:text-blue-300 hover:bg-white/10 rounded-lg group/mobile"
                style={{
                  animationDelay: `${(navLinks.length + 1) * 50}ms`,
                }}
              >
                <span className="relative z-10">{otherLinks[1].label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300 scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
              </Link>

              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setIsOtherDestinationsOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full font-medium py-3 px-4 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  Otros destinos
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOtherDestinationsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOtherDestinationsOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-1 animate-in fade-in slide-in-from-left duration-200">
                    {otherDestinationsLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsOtherDestinationsOpen(false);
                        }}
                        className="relative py-2.5 px-4 rounded-lg transition-all duration-300 group/mobile-item"
                        style={{
                          color: link.featured ? "#93c5fd" : "#e5e7eb",
                          fontWeight: link.featured ? "700" : "500",
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <span className="relative z-10 transition-all duration-300 group-hover/mobile-item:translate-x-2 inline-block">
                          {link.label}
                        </span>
                        <span className="absolute inset-0 bg-blue-400/15 rounded-lg scale-x-0 group-hover/mobile-item:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={otherLinks[2].href}
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-white transition-all duration-300 hover:text-blue-300 hover:bg-white/10 rounded-lg group/mobile"
                style={{
                  animationDelay: `${(navLinks.length + 2) * 50}ms`,
                }}
              >
                <span className="relative z-10">{otherLinks[2].label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300 scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
              </Link>

              <Button
                asChild
                className="text-white w-full mt-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
                style={{ backgroundColor: "#ED2939" }}
              >
                <a
                  href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Cotizar mi seguro
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
