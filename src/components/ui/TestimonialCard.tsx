import type { Testimonial } from "../../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex w-[375px] flex-shrink-0 flex-col gap-6 rounded-[24px] bg-white p-6">
      <img
        alt={testimonial.name}
        className="h-20 w-20 rounded-full object-cover"
        height={80}
        src={testimonial.avatar}
        width={80}
      />
      <div className="flex flex-col whitespace-nowrap">
        <p className="font-['Poppins',sans-serif] font-semibold text-[20px] text-black leading-[1.2] tracking-[-0.2px]">
          {testimonial.name}
        </p>
        <p className="font-['Satoshi',sans-serif] text-[#003be2] text-[18px] leading-[1.6]">
          {testimonial.role}
        </p>
      </div>
      <p className="w-[326px] font-['Satoshi',sans-serif] text-[#4f4f4f] text-[18px] leading-[1.6]">
        {testimonial.quote}
      </p>
    </div>
  );
}
