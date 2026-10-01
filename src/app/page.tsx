import { CoursesSection } from "@/components/sections/CoursesSection";
import { FeaturedCategoriesSection } from "@/components/sections/FeaturedCategoriesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { PathSection } from "@/components/sections/PathSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <FeaturedCategoriesSection  />
      <PathSection />

      </main>
  );
}
