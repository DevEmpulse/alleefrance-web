import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { BlogPageContent } from "@/components/blog/blog-page-content";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


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
};

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  
  const t = await getTranslations("Blog.index");
  const blogPosts = t.raw("posts") as any[];
  const categories = t.raw("categories") as string[];

  return (
    <>
      <BlogPageContent posts={blogPosts} categories={categories} />
      <Footer />
    </>
  );
}
