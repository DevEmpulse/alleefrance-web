import { Shield, MapPin, Phone, ChevronRight } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiTiktok } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#002654" }}
    >
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Logo and Description - Full width on mobile, first column on desktop */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5 sm:space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-AF.png"
                  alt="Allée France Logo"
                  width={140}
                  height={56}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md lg:max-w-none">
              Especialistas en asesoría migratoria y tramitación de visas para
              Francia. Tu sueño francés, nuestro compromiso.
            </p>
            <div className="pt-2">
              <Link
                href="#seguro"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ backgroundColor: "#ED2939" }}
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Cotizar mi seguro</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="font-bold text-white text-base sm:text-lg mb-4 sm:mb-5">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 list-none">
              {[
                { href: "/#servicios", label: "Servicios" },
                { href: "/#casos-exitosos", label: "Casos Exitosos" },
                { href: "/#guia-visas", label: "Guía de Visas" },
                { href: "/#seguro", label: "Seguro de Viaje" },
                { href: "/#faq", label: "Preguntas Frecuentes" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="font-bold text-white text-base sm:text-lg mb-4 sm:mb-5">
              Servicios
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 list-none">
              {[
                { href: "/servicios/visas-trabajo", label: "Visas de Trabajo" },
                { href: "/servicios/visa-etudiant", label: "Visa Étudiant" },
                { href: "/working-holiday", label: "Working Holiday" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="font-bold text-white text-base sm:text-lg mb-4 sm:mb-5">
              Contacto
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+33601526171"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg shrink-0"
                  style={{ backgroundColor: "rgba(237, 41, 57, 0.2)" }}
                >
                  <Phone
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: "#ED2939" }}
                  />
                </div>
                <span className="text-sm sm:text-base font-medium">
                  +33 6 01 52 61 71
                </span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(237, 41, 57, 0.2)" }}
                >
                  <MapPin
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: "#ED2939" }}
                  />
                </div>
                <span className="text-sm sm:text-base pt-2">Lyon, Francia</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3 sm:gap-4 pt-2">
                <a
                  href="https://instagram.com/alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: "#ED2939" }}
                  aria-label="Síguenos en Instagram"
                >
                  <SiInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: "#25D366" }}
                  aria-label="Contáctanos por WhatsApp"
                >
                  <SiWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: "#ED2939" }}
                  aria-label="Síguenos en TikTok"
                >
                  <SiTiktok className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              © {new Date().getFullYear()} Allée France. Todos los derechos
              reservados.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-end text-xs sm:text-sm order-1 sm:order-2">
              <Link
                href="/politica-de-privacidad"
                className="text-gray-400 hover:text-white transition-colors duration-300 px-2 py-1 rounded"
              >
                Política de privacidad
              </Link>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link
                href="/terminos-y-condiciones"
                className="text-gray-400 hover:text-white transition-colors duration-300 px-2 py-1 rounded"
              >
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
