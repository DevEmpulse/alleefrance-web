import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ServicesSection } from "@/components/services-section"
import { BlogSection } from "@/components/blog-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { VisaGuideSection } from "@/components/visa-guide-section"
import { TipsSection } from "@/components/tips-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <BlogSection />
      <SuccessStoriesSection />
      <VisaGuideSection />
      <TipsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
