"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Asegurar que el scroll no se bloquee cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      // No bloquear el scroll en mobile, solo prevenir el scroll del body si es necesario
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navLinks = [
    { href: "/#nosotros", label: "Nosotros" },
  ]

  const serviceLinks = [
    { href: "/servicios/visas-trabajo", label: "Visas de Trabajo" },
    { href: "/servicios/visa-etudiant", label: "Visa Étudiant" },
    { href: "/servicios", label: "Ver Todos los Servicios", featured: true },
  ]

  const otherLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/#guia-visas", label: "Guía de Visas" },
    { href: "/working-holiday", label: "Working Holiday" },
    { href: "/#contacto", label: "Contacto" },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md border-b border-white/20 transition-all duration-300 ${
        isScrolled ? "bg-[#1e3a8a]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:pr-10">
        <div className="flex items-center justify-between min-h-14 md:min-h-16 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 md:gap-3 group shrink-0 mr-2 md:mr-12 transition-all duration-300 hover:scale-105">
            <div className="relative h-8 w-auto md:h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logofondotransparente.png"
                alt="Allée France Logo"
                width={100}
                height={40}
                className="h-full w-auto object-contain transition-all duration-300"
                priority
                style={{ 
                  mixBlendMode: 'normal',
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))'
                }}
              />
            </div>
            <span className="text-white text-xs md:text-base font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 group-hover:text-blue-300 hidden sm:inline" style={{ 
              fontFamily: 'var(--font-montserrat), sans-serif', 
              letterSpacing: '0.1em',
              textShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.6)'
            }}>
              ALLÉE FRANCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="relative flex items-center gap-1 font-medium text-white transition-all duration-300 hover:text-blue-300 group/services"
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''} group-hover/services:translate-y-0.5`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover/services:w-full"></span>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 backdrop-blur-md shadow-xl border border-white/20 py-2 rounded-lg animate-in fade-in slide-in-from-top-2 duration-200" style={{ backgroundColor: "rgba(30, 58, 138, 0.95)" }}>
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative block px-4 py-2.5 transition-all duration-300 font-medium overflow-hidden group/item"
                      style={{
                        color: link.featured ? "#f97316" : "#ffffff",
                        fontWeight: link.featured ? "700" : "500",
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      <span className="relative z-10 transition-all duration-300 group-hover/item:translate-x-2 inline-block">
                        {link.label}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent -translate-x-full group-hover/item:translate-x-0 transition-transform duration-300"></span>
                      {!link.featured && (
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-center"></span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative cursor-pointer font-medium text-white transition-all duration-300 hover:text-blue-300 group/link"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover/link:w-full"></span>
              </Link>
            ))}

            <Button 
              asChild 
              className="text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95" 
              style={{ backgroundColor: "#ED2939" }}
            >
              <a href="https://www.aseguratuviaje.com/afiliados/alleefrancelyon" target="_blank" rel="noopener noreferrer">
                Cotizar mi seguro
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-blue-300 transition-all duration-300 hover:rotate-90 active:scale-95"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="transition-transform duration-300" /> : <Menu size={24} className="transition-transform duration-300" />}
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
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full font-medium py-3 px-4 text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  Servicios
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-1 animate-in fade-in slide-in-from-left duration-200">
                    {serviceLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="relative py-2.5 px-4 rounded-lg transition-all duration-300 group/mobile-item"
                        style={{
                          color: link.featured ? "#f97316" : "#e5e7eb",
                          fontWeight: link.featured ? "700" : "500",
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <span className="relative z-10 transition-all duration-300 group-hover/mobile-item:translate-x-2 inline-block">
                          {link.label}
                        </span>
                        <span className="absolute inset-0 bg-orange-500/10 rounded-lg scale-x-0 group-hover/mobile-item:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {otherLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative font-medium py-3 px-4 text-white transition-all duration-300 hover:text-blue-300 hover:bg-white/10 rounded-lg group/mobile"
                  style={{ animationDelay: `${(navLinks.length + index) * 50}ms` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300 scale-y-0 group-hover/mobile:scale-y-100 transition-transform duration-300 rounded-l-lg origin-center"></span>
                </Link>
              ))}

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
  )
}
