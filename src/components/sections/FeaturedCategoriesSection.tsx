import { FEATURED_CATEGORIES } from "../../data";
import { Button } from "../ui/Button";
import { CategoryCard } from "../ui/CategoryCard";


export function FeaturedCategoriesSection() {
  return (
    <section className="bg-brand-bg py-brand-section">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        {/* Heading row */}
        <div className="flex items-end justify-between">
          <div className="flex w-[958px] flex-col gap-0">
            <p className="whitespace-nowrap font-brand-primary font-medium text-brand-md text-brand-purple leading-7">
              Featured Categories
            </p>
            <h2 className="w-[694px] font-brand-heading font-medium text-brand-4xl text-brand-dark leading-[52px] tracking-[-0.44px]">
              Innovative Paths to Knowledge
            </h2>
          </div>
          <Button
            className="!bg-brand-accent !text-brand-gray-900 !rounded-brand-lg !px-6 !py-2 !text-brand-base !leading-6"
            variant="ghost"
          >
            View More
          </Button>
        </div>

        {/* Cards */}
        <div className="flex gap-10">
          {FEATURED_CATEGORIES.map((cat) => (
            <CategoryCard category={cat} key={cat.id} variant="featured" />
          ))}
        </div>
      </div>
    </section>
  );
}
