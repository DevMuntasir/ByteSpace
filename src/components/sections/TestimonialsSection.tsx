import { TESTIMONIALS } from "../../data";
import { TestimonialCard } from "../ui/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-12 sm:py-[74px]">
      {/* Background decorative ellipses */}
      <div className="pointer-events-none absolute top-[-241px] right-[-200px] h-[1137px] w-[1137px] opacity-40">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(0,59,226,0.16)_0%,transparent_70%)]" />
      </div>
      <div className="pointer-events-none absolute top-[149px] left-[-442px] h-[1137px] w-[1137px] opacity-30">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(116,94,246,0.16)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1248px] flex-col gap-10 px-4 sm:px-6 lg:gap-[72px]">
        {/* Heading row */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-10">
          <h2 className="min-w-0 font-['Poppins',sans-serif] font-semibold text-[28px] text-black leading-[1.2] tracking-[-0.44px] sm:text-4xl lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="min-w-0 font-['Satoshi',sans-serif] text-[#4f4f4f] text-[18px] leading-[1.6]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
