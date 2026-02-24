import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WorkingHolidaySection } from "@/components/working-holiday-section"
import { ALL_FAQS } from "@/data/faqs"

function SectionLoading({ message }: { message: string }) {
  return (
    <section
      aria-hidden="true"
      className="py-16 text-center text-sm text-gray-500"
    >
      {message}
    </section>
  )
}

const InsuranceSection = dynamic(
  () =>
    import("@/components/insurance-section").then(
      (mod) => mod.InsuranceSection
    ),
  {
    loading: () => (
      <SectionLoading message="Preparando coberturas recomendadas..." />
    ),
  }
)

const BlogSection = dynamic(
  () => import("@/components/blog-section").then((mod) => mod.BlogSection),
  {
    loading: () => (
      <SectionLoading message="Actualizando artículos del blog..." />
    ),
  }
)

const SuccessStoriesSection = dynamic(
  () =>
    import("@/components/success-stories-section").then(
      (mod) => mod.SuccessStoriesSection
    ),
  {
    loading: () => (
      <SectionLoading message="Cargando historias de éxito..." />
    ),
  }
)

const FAQSection = dynamic(
  () => import("@/components/faq-section").then((mod) => mod.FAQSection),
  {
    loading: () => (
      <SectionLoading message="Cargando preguntas frecuentes..." />
    ),
  }
)

const ContactSection = dynamic(
  () =>
    import("@/components/contact-section").then(
      (mod) => mod.ContactSection
    ),
  {
    loading: () => (
      <SectionLoading message="Preparando formulario de contacto..." />
    ),
  }
)

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  {
    loading: () => (
      <SectionLoading message="Cargando información de contacto..." />
    ),
  }
)

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkingHolidaySection />
      <InsuranceSection />
      <BlogSection />
      <SuccessStoriesSection />
      <FAQSection
        title="Preguntas Frecuentes (FAQ)"
        data={ALL_FAQS}
      />
      <ContactSection />
      <Footer />
    </main>
  )
}
