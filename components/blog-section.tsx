"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Usamos React Icons para consistencia exacta
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      title: "Visa Saisonnier o Salarié: Guía Completa 2025",
      excerpt:
        "Checklist de requisitos, cronograma y tips para conseguir un contrato temporal sin rechazos en el consulado.",
      date: "15 Ene 2025",
      readTime: "9 min",
      image: "/seasonal-worker-in-french-vineyard.webp",
      alt: "Trabajador estacional en viñedo francés - Guía visa Saisonnier y Salarié Francia",
      slug: "visa-saisonier-salarie",
    },
    {
      title: "Working Holiday Francia: Checklist para Argentinos 2025",
      excerpt:
        "Documentos, presupuesto y plan de llegada para aprovechar los cupos Working Holiday sin contratiempos.",
      date: "10 Ene 2025",
      readTime: "8 min",
      image: "/french-work-visa-documents.webp",
      alt: "Documentos para visa Working Holiday Francia - Checklist completo para argentinos",
      slug: "working-holiday-francia",
    },
    {
      title: "Visa de Estudiante: Admisión, Campus France y Consulado",
      excerpt:
        "Roadmap para armar tu dossier, financiarte y activar tu visa VLS-TS Étudiant al llegar a Francia.",
      date: "5 Ene 2025",
      readTime: "10 min",
      image: "/student-studying-in-paris.webp",
      alt: "Estudiante latinoamericano estudiando en París Francia - Guía visa estudiante",
      slug: "visa-estudiante-francia",
    },
    {
      title: "Aprender Francés: Recursos y Métodos para Progresar Rápido",
      excerpt:
        "Plan de 9 meses combinando apps, clases e inmersión para lograr el nivel B1/B2 que exigen las visas.",
      date: "2 Ene 2025",
      readTime: "7 min",
      image: "/person-learning-french-language.webp",
      alt: "Persona aprendiendo francés - Recursos y métodos para nivel B1 B2 visa Francia",
      slug: "aprender-frances-recursos",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
                Recursos recientes
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ color: "#002654" }}
              >
                BLOG
              </h2>
            </div>

            {/* Botones de Navegación (Escritorio) - Idénticos a SuccessStories */}
            <div className="hidden md:flex gap-3">
              <button
                type="button"
                aria-label="Ver artículo anterior"
                onClick={() => handleScroll("left")}
                className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-[#002654] hover:text-white hover:border-[#002654] transition-all shadow-sm"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button
                type="button"
                aria-label="Ver artículo siguiente"
                onClick={() => handleScroll("right")}
                className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-[#002654] hover:text-white hover:border-[#002654] transition-all shadow-sm"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </AnimateOnScroll>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] snap-center group"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full border border-gray-100 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {post.date} · {post.readTime}
                  </p>
                  <h3
                    className="text-lg font-bold mb-3 line-clamp-2"
                    style={{ color: "#002654" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span
                    className="text-sm font-semibold flex items-center gap-2 mt-auto"
                    style={{ color: "#ED2939" }}
                  >
                    Leer más
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <AnimateOnScroll direction="fade" delay={0.3}>
          <div className="flex flex-col items-center justify-center mt-12 gap-6">
            {/* Navegación Móvil (Idéntica a SuccessStories) */}
            <div className="flex md:hidden gap-4">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Ver anterior"
                className="p-3 rounded-full border border-gray-300 bg-white shadow-sm active:scale-95 transition-transform"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Ver siguiente"
                className="p-3 rounded-full border border-gray-300 bg-white shadow-sm active:scale-95 transition-transform"
              >
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide text-base px-8 py-6 rounded-lg border-2 bg-transparent hover:bg-slate-50"
              style={{ borderColor: "#002654", color: "#002654" }}
              asChild
            >
              <Link href="/blog">VER TODOS LOS ARTÍCULOS</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
