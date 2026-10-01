import type { Category } from "../../types";

type Variant = "featured" | "explore";

interface CategoryCardProps {
  category: Category;
  variant?: Variant;
}

export function CategoryCard({
  category,
  variant = "featured",
}: CategoryCardProps) {
  if (variant === "explore") {
    return (
      <div className="relative flex h-[167px] w-[167px] flex-shrink-0 items-center justify-center rounded-brand-lg border border-brand-border transition-transform hover:-translate-y-1 hover:border-brand-primary">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center rounded-[40px] bg-brand-secondary p-3">
            <img alt={category.name} className="h-9 w-9" src={category.icon} />
          </div>
          <p className="whitespace-nowrap font-brand-primary font-medium text-brand-lg text-brand-text leading-[1.2]">
            {category.name}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-[167px] w-[167px] flex-shrink-0 items-center justify-center rounded-brand-lg bg-brand-gray-50 transition-transform hover:-translate-y-1">
      <div className="flex flex-col items-center gap-1">
        <div className="relative h-[72px] w-[72px]">
          <img
            alt={category.name}
            className="absolute inset-0 h-full w-full"
            src={category.icon}
          />
        </div>
        <p className="whitespace-nowrap text-center font-brand-primary text-brand-md text-brand-text leading-7">
          {category.name}
        </p>
      </div>
    </div>
  );
}
