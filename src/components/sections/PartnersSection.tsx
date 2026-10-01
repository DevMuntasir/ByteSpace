import { PARTNERS } from "../../data";

export function PartnersSection() {
  return (
    <section className="flex items-end justify-center overflow-hidden bg-brand-gray-100 py-brand-lg">
      <div className="mx-auto flex max-w-[1248px] flex-wrap items-center justify-center gap-x-8 gap-y-6 px-4 sm:px-6 lg:gap-x-[72px]">
        {PARTNERS.map((partner) => (
          <div
            className="relative max-w-full shrink-0"
            key={partner.name}
            style={{ height: partner.height, width: partner.width }}
          >
            <img
              alt={partner.name}
              className="absolute inset-0 h-full w-full object-contain"
              src={partner.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
