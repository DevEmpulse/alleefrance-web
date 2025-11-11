"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { BlogNewsletterSection } from "@/components/blog/blog-newsletter-section"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"

type BlogPost = {
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
  slug: string
}

type BlogPageContentProps = {
  posts: BlogPost[]
  categories: string[]
}

export function BlogPageContent({ posts, categories }: BlogPageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredPosts = selectedCategory === "Todos" ? posts : posts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Blog y Recursos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Guías completas, artículos y consejos actualizados sobre migración, visas y vida en Francia. Información
            confiable para tu proceso migratorio.
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <AnimateOnScroll direction="fade" delay={0}>
        <section className="py-8 px-6 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={isActive ? "default" : "outline"}
                  className="rounded-full font-semibold cursor-pointer"
                  style={
                    isActive
                      ? { backgroundColor: "#ED2939", color: "white" }
                      : { borderColor: "#002654", color: "#002654" }
                  }
                >
                  {category}
                </Button>
              )
            })}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <AnimateOnScroll key={index} direction="up" delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200 rounded-xl"
                >
                <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: "#002654" }}
                    >
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold mb-3 group-hover:text-french-red transition-colors line-clamp-2"
                      style={{ color: "#002654" }}
                    >
                      {post.title}
                    </h3>

                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <span className="flex items-center gap-2 font-semibold text-sm" style={{ color: "#ED2939" }}>
                      Leer más
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll direction="fade" delay={0.3}>
            <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide text-base px-8 py-6 rounded-lg bg-transparent cursor-pointer"
              style={{ borderColor: "#002654", color: "#002654" }}
            >
              Cargar Más Artículos
            </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <BlogNewsletterSection />

      {/* CTA Section */}
      <AnimateOnScroll direction="fade" delay={0}>
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#002654" }}>
            ¿Necesitás Asesoría Personalizada?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Nuestro equipo está listo para ayudarte con tu proceso de migración a Francia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold tracking-wide hover:opacity-90"
              style={{ backgroundColor: "#ED2939", color: "white" }}
              asChild
            >
              <a href="https://wa.me/33601526171" target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-transparent"
              style={{ borderColor: "#002654", color: "#002654" }}
              asChild
            >
              <a href="https://alleefrancelyon.taplink.ws" target="_blank" rel="noopener noreferrer">
                Agendar Asesoría
              </a>
            </Button>
          </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}
