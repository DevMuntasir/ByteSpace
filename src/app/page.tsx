import { Footer } from "@/components/layout/Footer";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CTASection } from "@/components/sections/CTASection";
import { FeaturedCategoriesSection } from "@/components/sections/FeaturedCategoriesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { PathSection } from "@/components/sections/PathSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <FeaturedCategoriesSection />
      <PathSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
