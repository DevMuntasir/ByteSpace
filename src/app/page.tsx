import { FeaturedCategoriesSection } from "@/components/sections/FeaturedCategoriesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <PartnersSection />
      <FeaturedCategoriesSection />
      </main>
  );
}
