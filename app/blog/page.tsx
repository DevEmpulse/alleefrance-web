import type { Metadata } from "next"
import { BlogPageContent } from "@/components/blog/blog-page-content"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog - Guías y Recursos sobre Migración a Francia | Allée France",
  description:
    "Artículos, guías completas y consejos actualizados sobre visas, migración, trabajo y vida en Francia. Información confiable para tu proceso migratorio.",
  keywords:
    "blog migración francia, guía visa francia, consejos vivir francia, trabajar en francia, estudiar en francia, visa francia blog, migrar a francia",
  openGraph: {
    title: "Blog - Guías sobre Migración a Francia",
    description:
      "Artículos y guías completas sobre visas, migración y vida en Francia. Información actualizada y confiable.",
  },
}

const blogPosts = [
  {
    title: "Visa Saisonier o Salarié: Guía Completa 2024",
    excerpt:
      "Requisitos, contratos, tiempos y consejos clave para conseguir un permiso Saisonier o Salarié temporal en Francia sin sobresaltos.",
    date: "15 Marzo 2024",
    readTime: "9 min",
    image: "/seasonal-worker-in-french-vineyard.jpg",
    category: "Visas de Trabajo",
    slug: "visa-saisonier-salarie",
  },
  {
    title: "Working Holiday Francia: Checklist para Argentinos 2024",
    excerpt:
      "Paso a paso para reunir papeles, aplicar a la visa y organizar tus primeros meses en Francia con el programa Working Holiday.",
    date: "8 Marzo 2024",
    readTime: "8 min",
    image: "/french-work-visa-documents.jpg",
    category: "Working Holiday",
    slug: "working-holiday-francia",
  },
  {
    title: "Visa de Estudiante: Admisión, Campus France y Consulado",
    excerpt:
      "Organizá tu calendario desde la búsqueda de programas hasta la llegada a Francia, con checklists y documentos imprescindibles.",
    date: "1 Marzo 2024",
    readTime: "10 min",
    image: "/student-studying-in-paris.jpg",
    category: "Visas de Estudiante",
    slug: "visa-estudiante-francia",
  },
  {
    title: "Aprender Francés: Recursos y Métodos para Progresar Rápido",
    excerpt:
      "Estrategias combinadas (apps, maestros, inmersión y exámenes) para llegar al nivel B1/B2 que piden las visas en tiempo récord.",
    date: "22 Febrero 2024",
    readTime: "7 min",
    image: "/person-learning-french-language.jpg",
    category: "Idioma y Cultura",
    slug: "aprender-frances-recursos",
  },
]

const categories = ["Todos", "Visas de Trabajo", "Working Holiday", "Visas de Estudiante", "Idioma y Cultura"]

export default function BlogPage() {
  return (
    <>
      <BlogPageContent posts={blogPosts} categories={categories} />
      <Footer />
    </>
  )
}
