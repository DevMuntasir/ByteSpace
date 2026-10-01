import { FEATURED_CATEGORIES } from "../../data";
import { CategoryCard } from "../ui/CategoryCard";

export function FeaturedCategoriesSection() {
  return (
    <section className="bg-brand-bg py-brand-section">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        {/* Heading row */}
        <div className="flex items-end justify-between">
          <div className="flex w-full flex-col items-center gap-0">
            <h2 className="text-center font-brand-heading font-medium text-brand-4xl text-brand-dark leading-[52px] tracking-[-0.44px]">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="max-w-[960px] text-center font-brand-primary font-medium text-brand-gray-400 text-brand-md leading-7">
              At Bytespace, we believe in empowering individuals through
              knowledge. Our diverse range of courses spans various fields,
              ensuring there's something for everyone. Unleash your potential
              and explore our carefully curated categories.
            </p>
          </div>
          {/* <Button
            className="!bg-brand-accent !text-brand-gray-900 !rounded-brand-lg !px-6 !py-2 !text-brand-base !leading-6"
            variant="ghost"
          >
            View More
          </Button> */}
        </div>

        {/* Cards */}
        <div className="mt-[40px] flex gap-10">
          {FEATURED_CATEGORIES.map((cat) => (
            <CategoryCard category={cat} key={cat.id} variant="explore" />
          ))}
        </div>
      </div>
    </section>
  );
}
