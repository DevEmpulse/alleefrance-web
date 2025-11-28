import {
  Instagram,
  MessageCircle,
  ExternalLink,
  Shield,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M37.52 11.51c-1.9-1.1-3.38-2.77-4.05-4.61-.43-1.19-.58-2.39-.58-3.44h-5.38v24.3c0 3.09-2.52 5.6-5.63 5.6-3.11 0-5.63-2.51-5.63-5.6 0-3.09 2.52-5.6 5.63-5.6.43 0 .85.05 1.26.15v-5.66c-.41-.05-.83-.08-1.25-.08-6.13 0-11.1 4.89-11.1 10.92 0 6.03 4.97 10.92 11.1 10.92 6.13 0 11.1-4.89 11.1-10.92V17.6c2.06 1.51 4.57 2.41 7.34 2.41v-5.76c-.78 0-1.97-.46-3.08-1.03Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#002654" }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-12 w-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logofondotransparente.png"
                  alt="Allée France Logo"
                  width={120}
                  height={48}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas en asesoría migratoria y tramitación de visas para
              Francia. Tu sueño francés, nuestro compromiso.
            </p>
            <div className="pt-2">
              <Link
                href="#seguro"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#ED2939" }}
              >
                <Shield className="w-4 h-4" />
                Cotizar mi seguro
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3 list-none">
              <li>
                <Link
                  href="/#servicios"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/#casos-exitosos"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Casos Exitosos
                </Link>
              </li>
              <li>
                <Link
                  href="/#guia-visas"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Guía de Visas
                </Link>
              </li>
              <li>
                <Link
                  href="/#seguro"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Seguro de Viaje
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/pagos"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Pagar Servicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg mb-4">Servicios</h3>
            <ul className="space-y-3 list-none">
              <li>
                <Link
                  href="/servicios/visas-trabajo"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Visas de Trabajo
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/visa-etudiant"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Visa Étudiant
                </Link>
              </li>
              <li>
                <Link
                  href="/working-holiday"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Working Holiday
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-all duration-300 block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg mb-4">Contacto</h3>
            <div className="space-y-4">
              <a
                href="tel:+33601526171"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "rgba(237, 41, 57, 0.2)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "#ED2939" }} />
                </div>
                <span className="text-sm">+33 6 01 52 61 71</span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(237, 41, 57, 0.2)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#ED2939" }} />
                </div>
                <span className="text-sm">Lyon, Francia</span>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com/alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: "#ED2939" }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: "#ED2939" }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: "#ED2939" }}
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Allée France. Todos los derechos
              reservados.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end text-sm">
              <Link
                href="/#contacto"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contacto
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/#faq"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
