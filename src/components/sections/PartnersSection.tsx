import { PARTNERS } from "../../data";

export function PartnersSection() {
  return (
    <section className="flex h-[202px] items-end justify-center overflow-hidden bg-brand-gray-100 pb-[40px]">
      <div className="flex items-end gap-[72px]">
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
