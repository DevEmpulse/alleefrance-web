import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WorkingHolidaySection } from "@/components/working-holiday-section"
import { BlogSection } from "@/components/blog-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { InsuranceSection } from "@/components/insurance-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

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
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
