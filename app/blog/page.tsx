import type { Metadata } from "next"
import { BlogPageContent } from "@/components/blog/blog-page-content"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog de Migración a Francia | Guías, Visas y Consejos 2025",
  description:
    "Artículos y guías actualizadas sobre visas Francia: Working Holiday, Salarié, Saisonnier, Estudiante. Consejos de expertos para emigrar, trabajar y vivir en Francia.",
  keywords: [
    "blog migración francia",
    "guía visa francia",
    "consejos vivir francia",
    "trabajar en francia",
    "estudiar en francia",
    "emigrar a francia",
    "working holiday francia blog",
    "visa salarié guía",
  ],
  openGraph: {
    title: "Blog de Migración a Francia | Guías y Consejos | Allée France",
    description:
      "Artículos y guías completas sobre visas, migración y vida en Francia. Información actualizada por expertos.",
    url: "https://alleefrance.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://alleefrance.com/blog",
  },
}

const blogPosts = [
  {
    title: "Bancos físicos vs bancos virtuales en Francia: ¿cuál es la mejor opción para inmigrantes?",
    excerpt:
      "Wise, Revolut, N26, Qonto o banco tradicional: descubrí cuál se adapta mejor a tu situación migratoria en Francia.",
    date: "2 Junio 2026",
    readTime: "12 min",
    image: "/bancos-france-inmigrantes.webp",
    category: "Finanzas",
    slug: "bancos-fisicos-vs-virtuales-francia",
  },
  {
    title: "¿Qué es una eSIM y por qué es tan útil hoy en día?",
    excerpt:
      "La guía que todo latinoamericano debería leer antes de aterrizar en Francia. Conectividad activa desde el momento en que aterrizas.",
    date: "2 Junio 2026",
    readTime: "8 min",
    image: "/esim-guide-france.webp",
    category: "Conectividad",
    slug: "esim-guia-latinoamericanos-francia",
  },
  {
    title: "Visa Saisonnier o Salarié: Guía Completa 2026",
    excerpt:
      "Requisitos, contratos, tiempos y consejos clave para conseguir un permiso Saisonnier o Salarié temporal en Francia sin sobresaltos.",
    date: "15 Enero 2026",
    readTime: "9 min",
    image: "/seasonal-worker-in-french-vineyard.webp",
    category: "Visas de Trabajo",
    slug: "visa-saisonnier-salarie",
  },
  {
    title: "Working Holiday Francia: Checklist para Argentinos 2025",
    excerpt:
      "Paso a paso para reunir papeles, aplicar a la visa y organizar tus primeros meses en Francia con el programa Working Holiday.",
    date: "10 Enero 2025",
    readTime: "8 min",
    image: "/french-work-visa-documents.webp",
    category: "Working Holiday",
    slug: "working-holiday-francia",
  },
  {
    title: "Visa de Estudiante Francia 2025: Campus France y Consulado",
    excerpt:
      "Organizá tu calendario desde la búsqueda de programas hasta la llegada a Francia, con checklists y documentos imprescindibles.",
    date: "5 Enero 2025",
    readTime: "10 min",
    image: "/student-studying-in-paris.webp",
    category: "Visas de Estudiante",
    slug: "visa-estudiante-francia",
  },
  {
    title: "Aprender Francés: Recursos y Métodos para Progresar Rápido",
    excerpt:
      "Estrategias combinadas (apps, maestros, inmersión y exámenes) para llegar al nivel B1/B2 que piden las visas en tiempo récord.",
    date: "2 Enero 2025",
    readTime: "7 min",
    image: "/person-learning-french-language.webp",
    category: "Idioma y Cultura",
    slug: "aprender-frances-recursos",
  },
]

const categories = ["Todos", "Finanzas", "Conectividad", "Visas de Trabajo", "Working Holiday", "Visas de Estudiante", "Idioma y Cultura"]


export default function BlogPage() {
  return (
    <>
      <BlogPageContent posts={blogPosts} categories={categories} />
      <Footer />
    </>
  )
}
