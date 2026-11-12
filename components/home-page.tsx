import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { WorkingHolidaySection } from "@/components/working-holiday-section";
import { useTranslations } from "next-intl";
import { ALL_FAQS } from "@/data/faqs";

// Language-neutral placeholder: the loading state carries no text.
function SectionLoading() {
  return <section aria-hidden="true" className="py-16" />;
}

const InsuranceSection = dynamic(
  () =>
    import("@/components/insurance-section").then(
      (mod) => mod.InsuranceSection
    ),
  {
    loading: () => <SectionLoading />,
  }
);

const BlogSection = dynamic(
  () => import("@/components/blog-section").then((mod) => mod.BlogSection),
  {
    loading: () => <SectionLoading />,
  }
);

const SuccessStoriesSection = dynamic(
  () =>
    import("@/components/success-stories-section").then(
      (mod) => mod.SuccessStoriesSection
    ),
  {
    loading: () => <SectionLoading />,
  }
);

const FAQSection = dynamic(
  () => import("@/components/faq-section").then((mod) => mod.FAQSection),
  {
    loading: () => <SectionLoading />,
  }
);

const ContactSection = dynamic(
  () =>
    import("@/components/contact-section").then(
      (mod) => mod.ContactSection
    ),
  {
    loading: () => <SectionLoading />,
  }
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  {
    loading: () => <SectionLoading />,
  }
);

export function HomePage() {
  const tFaq = useTranslations("FAQHome");

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
      <FAQSection title={tFaq("title")} data={ALL_FAQS} />
      <ContactSection />
      <Footer />
    </main>
  );
}
