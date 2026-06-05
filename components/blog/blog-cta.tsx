"use client";

import { Button } from "@/components/ui/button";
import { BlogNewsletterSection } from "@/components/blog/blog-newsletter-section";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/utils";

export function BlogCTASections() {
  const locale = useLocale();
  const tCTA = useTranslations("BlogCTA");
  const tNewsletter = useTranslations("BlogNewsletter");

  return (
    <>
      <BlogNewsletterSection 
        title={tNewsletter("title")}
        description={tNewsletter("description")}
        highlights={[
          tNewsletter("highlights.0"),
          tNewsletter("highlights.1"),
          tNewsletter("highlights.2")
        ]}
      />

      <AnimateOnScroll direction="fade" delay={0}>
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#002654" }}
            >
              {tCTA("title")}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {tCTA("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-semibold tracking-wide hover:opacity-90"
                style={{ backgroundColor: "#ED2939", color: "white" }}
                asChild
              >
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tCTA("whatsapp")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold tracking-wide bg-transparent"
                style={{ borderColor: "#002654", color: "#002654" }}
                asChild
              >
                <Link href={`/${locale}#contacto`} target="_blank" rel="noopener noreferrer">
                  {tCTA("book")}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
