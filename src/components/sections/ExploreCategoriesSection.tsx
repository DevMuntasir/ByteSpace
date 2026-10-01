import { EXPLORE_CATEGORIES } from "../../data";
import { CategoryCard } from "../ui/CategoryCard";
import { SectionHeading } from "../ui/SectionHeading";

export function ExploreCategoriesSection() {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <SectionHeading
          centered
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          eyebrow=""
          title="Explore Diverse Learning Paths at Bytespace"
        />
        <div className="flex flex-wrap justify-center gap-10">
          {EXPLORE_CATEGORIES.map((cat) => (
            <CategoryCard category={cat} key={cat.id} variant="explore" />
          ))}
        </div>
      </div>
    </section>
  );
}
