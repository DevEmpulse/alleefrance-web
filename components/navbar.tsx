"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { HiShieldCheck } from "react-icons/hi2";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const localizedHomeHref = `/${locale}`;

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

  const navLinks = [{ href: `${localizedHomeHref}#nosotros`, label: t("about") }];

  const otherLinks = [
    { href: `/${locale}/servicios/visas-trabajo/`, label: t("workVisa") },
    { href: `/${locale}#working-holiday-section`, label: t("workingHoliday") },
    { href: `/${locale}/servicios/visa-etudiant/`, label: t("studentVisa") },
    { href: `/${locale}#contacto`, label: t("contact") },
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
        <div className="flex items-center justify-between min-h-14 lg:min-h-16 py-2">
          {/* Logo */}
          <div className="flex lg:flex-1 justify-start">
            <Link href={localizedHomeHref} className="inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
              <div className="relative h-10 lg:h-12 w-auto flex items-center">
                <Image
                  src="/logo-AF.webp"
                  alt="Allée France"
                  width={70}
                  height={70}
                  className="h-full w-auto object-contain drop-shadow-md"
                  priority
                />
              </div>
              <span
                className={`hidden lg:block text-base lg:text-lg font-black uppercase tracking-[0.1em] transition-colors duration-300 mt-0.5 ${
                  isScrolled || isOpen 
                    ? "text-[#002654] group-hover:text-[#2563EB]" 
                    : "text-white group-hover:text-blue-300"
                }`}
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                ALLÉE FRANCE
              </span>
            </Link>
          </div>

          {/* Mobile Site Name */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2 pointer-events-none flex justify-center">
            <span
              className={`text-base font-black uppercase tracking-[0.1em] transition-colors duration-300 mt-0.5 ${
                isScrolled || isOpen ? "text-[#002654]" : "text-white"
              }`}
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              ALLÉE FRANCE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center">
            <div className="flex items-center gap-4">
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
                href={`${localizedHomeHref}/servicios/`}
                className={`relative cursor-pointer font-medium transition-all duration-300 group/link ${
                  isScrolled
                    ? "text-gray-800 hover:text-[#2563EB]"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {t("services")}
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

          <div className="hidden lg:flex lg:flex-1 items-center justify-end gap-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <Button
              asChild
              className="font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95 group"
              style={{ backgroundColor: "#DC1F2E" }}
            >
              <a
                href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <HiShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                {t("quoteInsurance")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-all duration-300 hover:rotate-90 active:scale-95 ${
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
          <div className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-300 px-4">
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
                href={`${localizedHomeHref}/servicios/`}
                onClick={() => setIsOpen(false)}
                className="relative font-medium py-3 px-4 text-gray-800 transition-all duration-300 hover:text-[#2563EB] hover:bg-blue-50 rounded-lg group/mobile"
                style={{
                  animationDelay: `${navLinks.length * 50}ms`,
                }}
              >
                <span className="relative z-10">{t("services")}</span>
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

              <div className="py-3 px-4">
                <div className="inline-block bg-blue-500/10 rounded-lg p-2">
                  <LanguageSwitcher isMobile={true} />
                </div>
              </div>

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
                  {t("quoteInsurance")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
