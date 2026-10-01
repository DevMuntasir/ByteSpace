import { FEATURED_CATEGORIES } from "../../data";
import { Button } from "../ui/Button";
import { CategoryCard } from "../ui/CategoryCard";


export function FeaturedCategoriesSection() {
  return (
    <section className="bg-brand-bg py-brand-section">
      <div className="mx-auto flex max-w-[1200px]  flex-col gap-10">
        {/* Heading row */}
        <div className="flex items-end justify-between">
          <div className="flex w-full flex-col gap-0 items-center">
       
            <h2 className=" font-brand-heading  text-center font-medium text-brand-4xl text-brand-dark leading-[52px] tracking-[-0.44px]">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className=" font-brand-primary max-w-[960px] text-center font-medium text-brand-md text-brand-gray-400 leading-7">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
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
        <div className="flex gap-10 mt-[40px]">
          {FEATURED_CATEGORIES.map((cat) => (
            <CategoryCard category={cat} key={cat.id} variant="explore" />
          ))}
        </div>
      </div>
    </section>
  );
}
