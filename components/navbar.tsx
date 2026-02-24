"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { HiShieldCheck } from "react-icons/hi2";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [{ href: "/#nosotros", label: "Nosotros" }];

  const otherLinks = [
    { href: "/servicios/visas-trabajo", label: "Visa Salarié/Saisonier" },
    { href: "/#working-holiday-section", label: "Working Holiday" },
    { href: "/servicios/visa-etudiant", label: "Visa estudiantes" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-white border-b border-gray-200 shadow-sm"
          : "bg-transparent border-b border-white/10"
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
                src="/logo-AF.webp"
                alt="Allée France - Asesoría Migratoria Francia para Latinoamericanos"
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
              className={`hidden md:inline-flex items-center text-base md:text-xl font-black uppercase whitespace-nowrap transition-all duration-300 tracking-[0.08em] ${
                isScrolled || isOpen
                  ? "text-[#1E3A8A] group-hover:text-[#2563EB]"
                  : "text-white group-hover:text-blue-300"
              }`}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                textShadow:
                  !isScrolled && !isOpen
                    ? "0 0 8px rgba(0, 0, 0, 0.4)"
                    : "none",
              }}
            >
              <span className="tracking-[0.12em]">ALLÉE</span>
              <span className="ml-1 tracking-[0.08em]">FRANCE</span>
            </span>
          </Link>

          {/* Mobile Site Name */}
          <div className="md:hidden flex-1 flex justify-center">
            <span
              className={`inline-flex items-center text-sm font-black uppercase tracking-[0.08em] ${
                isScrolled || isOpen ? "text-[#1E3A8A]" : "text-white"
              }`}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                textShadow:
                  !isScrolled && !isOpen
                    ? "0 0 6px rgba(0, 0, 0, 0.45)"
                    : "none",
              }}
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
                  className={`relative cursor-pointer font-medium transition-all duration-300 group/link ${
                    isScrolled
                      ? "text-gray-800 hover:text-[#2563EB]"
                      : "text-white hover:text-blue-300"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${
                      isScrolled ? "bg-[#2563EB]" : "bg-blue-300"
                    }`}
                  ></span>
                </Link>
              ))}

              <Link
                href="/servicios"
                className={`relative cursor-pointer font-medium transition-all duration-300 group/link ${
                  isScrolled
                    ? "text-gray-800 hover:text-[#2563EB]"
                    : "text-white hover:text-blue-300"
                }`}
              >
                Servicios
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${
                    isScrolled ? "bg-[#2563EB]" : "bg-blue-300"
                  }`}
                ></span>
              </Link>

              <Link
                href={otherLinks[0].href}
                className={`relative cursor-pointer font-medium transition-all duration-300 group/link ${
                  isScrolled
                    ? "text-gray-800 hover:text-[#2563EB]"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {otherLinks[0].label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${
                    isScrolled ? "bg-[#2563EB]" : "bg-blue-300"
                  }`}
                ></span>
              </Link>

              <Link
                href={otherLinks[1].href}
                className={`relative cursor-pointer font-medium transition-all duration-300 group/link ${
                  isScrolled
                    ? "text-gray-800 hover:text-[#2563EB]"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {otherLinks[1].label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${
                    isScrolled ? "bg-[#2563EB]" : "bg-blue-300"
                  }`}
                ></span>
              </Link>

              <Link
                href={otherLinks[2].href}
                className={`relative cursor-pointer font-medium transition-all duration-300 group/link ${
                  isScrolled
                    ? "text-gray-800 hover:text-[#2563EB]"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {otherLinks[2].label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${
                    isScrolled ? "bg-[#2563EB]" : "bg-blue-300"
                  }`}
                ></span>
              </Link>

              <Link
                href={otherLinks[3].href}
                className={`relative cursor-pointer font-medium transition-all duration-300 group/link ${
                  isScrolled
                    ? "text-gray-800 hover:text-[#2563EB]"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {otherLinks[3].label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover/link:w-full ${
                    isScrolled ? "bg-[#2563EB]" : "bg-blue-300"
                  }`}
                ></span>
              </Link>
            </div>
          </div>

          <Button
            asChild
            className="hidden md:inline-flex font-bold text-white ml-6 lg:ml-10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95 group"
            style={{ backgroundColor: "#DC1F2E" }}
          >
            <a
              href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <HiShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              Cotizar mi seguro
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-all duration-300 hover:rotate-90 active:scale-95 ${
              isScrolled || isOpen
                ? "text-[#1E3A8A] hover:text-[#2563EB]"
                : "text-white hover:text-blue-300"
            }`}
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
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-300 px-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative font-medium py-3 px-4 text-gray-800 transition-all duration-300 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg group/mobile"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB] scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
                </Link>
              ))}

              <Link
                href="/servicios"
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-gray-800 transition-all duration-300 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg group/mobile"
                style={{
                  animationDelay: `${navLinks.length * 50}ms`,
                }}
              >
                <span className="relative z-10">Servicios</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB] scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
              </Link>

              <Link
                href={otherLinks[0].href}
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-gray-800 transition-all duration-300 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg group/mobile"
                style={{
                  animationDelay: `${(navLinks.length + 0) * 50}ms`,
                }}
              >
                <span className="relative z-10">{otherLinks[0].label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB] scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
              </Link>

              <Link
                href={otherLinks[1].href}
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-gray-800 transition-all duration-300 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg group/mobile"
                style={{
                  animationDelay: `${(navLinks.length + 1) * 50}ms`,
                }}
              >
                <span className="relative z-10">{otherLinks[1].label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB] scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
              </Link>

              <Link
                href={otherLinks[2].href}
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-gray-800 transition-all duration-300 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg group/mobile"
                style={{
                  animationDelay: `${(navLinks.length + 2) * 50}ms`,
                }}
              >
                <span className="relative z-10">{otherLinks[2].label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB] scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
              </Link>

              <Link
                href={otherLinks[3].href}
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-gray-800 transition-all duration-300 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg group/mobile"
                style={{
                  animationDelay: `${(navLinks.length + 3) * 50}ms`,
                }}
              >
                <span className="relative z-10">{otherLinks[3].label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB] scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
              </Link>

              <Button
                asChild
                className="text-white font-bold w-full mt-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/50 active:scale-95 group"
                style={{ backgroundColor: "#DC1F2E" }}
              >
                <a
                  href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <HiShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
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
