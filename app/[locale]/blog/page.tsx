import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { BlogPageContent } from "@/components/blog/blog-page-content";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "fr" }];
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.blog" });

  return {
    title: t("title"),
    description: t("description"),
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
      title: t("title"),
      description: t("description"),
      url: `https://alleefrance.com/${locale}/blog`,
      type: "website",
    },
    alternates: {
      canonical: `https://alleefrance.com/${locale}/blog`,
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const p = await params;
  setRequestLocale(p.locale);
  
  const t = await getTranslations({ locale: p.locale, namespace: "Blog.index" });
  const blogPosts = t.raw("posts") as any[];
  const categories = t.raw("categories") as string[];

  return (
    <>
      <BlogPageContent posts={blogPosts} categories={categories} />
      <Footer />
    </>
  );
}
