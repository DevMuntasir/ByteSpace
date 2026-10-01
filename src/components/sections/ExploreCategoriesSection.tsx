import { EXPLORE_CATEGORIES } from "../../data";
import { CategoryCard } from "../ui/CategoryCard";
import { SectionHeading } from "../ui/SectionHeading";

export function ExploreCategoriesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-brand-section">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-10 px-4 sm:px-6">
        <SectionHeading
          centered
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          eyebrow=""
          title="Explore Diverse Learning Paths at Bytespace"
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6">
          {EXPLORE_CATEGORIES.map((cat) => (
            <CategoryCard category={cat} key={cat.id} variant="explore" />
          ))}
        </div>
      </div>
    </section>
  );
}
