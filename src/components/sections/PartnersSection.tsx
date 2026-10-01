import { PARTNERS } from "../../data";

export function PartnersSection() {
  return (
    <section className="flex items-end justify-center overflow-hidden bg-brand-gray-100 py-brand-lg">
      <div className="flex items-end gap-50 lg:gap-[72px]">
        {PARTNERS.map((partner) => (
          <div
            className="relative flex-shrink-0"
            key={partner.name}
            style={{ height: partner.height, width: partner.width }}
          >
            <img
              alt={partner.name}
              className="absolute inset-0 h-full w-full"
              src={partner.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
