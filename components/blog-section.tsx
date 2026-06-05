"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useTranslations, useLocale } from "next-intl";

export function BlogSection() {
  const t = useTranslations("BlogHome");
  const locale = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);

  const tBlog = useTranslations("Blog.index");
  const blogPosts = tBlog.raw("posts") as any[];

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
                {t("eyebrow")}
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ color: "#002654" }}
              >
                {t("title")}
              </h2>
            </div>

            {/* Botones de Navegación (Escritorio) */}
            <div className="hidden md:flex gap-3">
              <button
                type="button"
                aria-label={t("previousArticle")}
                onClick={() => handleScroll("left")}
                className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-[#002654] hover:text-white hover:border-[#002654] transition-all shadow-sm"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button
                type="button"
                aria-label={t("nextArticle")}
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
              href={
                post.slug === "visa-saisonnier-salarie"
                  ? `/${locale}/servicios/visas-trabajo/`
                  : `/${locale}/blog/${post.slug}`
              }
              className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] snap-center group"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full border border-gray-100 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 30vw"
                    loading="lazy"
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
                    // CAMBIO AQUÍ: Se reemplazó #ED2939 por #DC1F2E para cumplir contraste AA (4.5:1)
                    style={{ color: "#DC1F2E" }}
                  >
                    {t("readMore")}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <AnimateOnScroll direction="fade" delay={0.3}>
          <div className="flex flex-col items-center justify-center mt-12 gap-6">
            {/* Navegación Móvil */}
            <div className="flex md:hidden gap-4">
              <button
                onClick={() => handleScroll("left")}
                aria-label={t("previous")}
                className="p-3 rounded-full border border-gray-300 bg-white shadow-sm active:scale-95 transition-transform"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label={t("next")}
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
              <Link href={`/${locale}/blog`}>{t("viewAll")}</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
