import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { COURSES } from "@/data";

const STUDENTS = [
  "student-avatar-drinking-coffee.png",
  "student-avatar-bearded-with-glasses.png",
  "student-avatar-wearing-apron.png",
  "student-avatar-cyclist.png",
  "student-avatar-wearing-hat.png",
  "student-avatar-with-blue-glasses.png",
  "student-avatar-hiker.png",
];

export function SignupIllustration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-[39.1cqw] max-sm:hidden"
    >
      <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <defs>
          <filter colorInterpolationFilters="sRGB" id="signup-lime">
            <feColorMatrix
              type="matrix"
              values="0.22 0 0 0 0.74 0 0.06 0 0 0.94 0 0 0.30 0 0.04 0 0 0 1 0"
            />
          </filter>
          <filter colorInterpolationFilters="sRGB" id="signup-white">
            <feColorMatrix
              type="matrix"
              values="0.18 0 0 0 0.82 0 0.18 0 0 0.82 0 0 0.18 0 0.82 0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
      <div className="absolute top-[6.25cqw] left-0 origin-top-left scale-[calc(100cqw/1440px)] [&>div]:border-0 [&>div]:shadow-none [&_div.relative.z-10]:bg-brand-dark [&_div.relative.z-10_span]:text-brand-text-white">
        <CourseCard course={COURSES[1]} />
      </div>
      <div className="absolute top-0 left-[7.8cqw] origin-top-left scale-[calc(100cqw/1440px)] [&>div]:border-0 [&>div]:shadow-none [&_div.relative.z-10]:bg-brand-dark [&_div.relative.z-10_span]:text-brand-text-white">
        <CourseCard course={COURSES[2]} />
      </div>
      <Image
        alt=""
        className="absolute top-[1.1cqw] left-[2.3cqw] h-[9.8cqw] w-[9.8cqw] object-contain [filter:url('#signup-lime')]"
        height={180}
        priority
        src="/assets/hero-ring.webp"
        unoptimized
        width={180}
      />
      <Image
        alt=""
        className="absolute top-[28.6cqw] left-[-1.4cqw] h-[11.7cqw] w-[11.7cqw] object-contain [filter:url('#signup-lime')]"
        height={180}
        src="/assets/hero-pyramid.webp"
        unoptimized
        width={180}
      />
      <div className="absolute top-[30.4cqw] left-[15.85cqw] w-[18.05cqw] rounded-[1.1cqw] bg-brand-secondary-hover px-[1.1cqw] py-[1cqw] text-brand-text">
        <p className="font-medium text-[1.11cqw] leading-[1.4]">
          Happy Students
        </p>
        <p className="text-[0.77cqw] leading-[1.6]">
          4.5 <span className="text-brand-text-secondary">(240)</span>
          <span className="text-brand-bg">★</span>
        </p>
        <div className="mt-[0.35cqw] flex items-center -space-x-[0.95cqw]">
          {STUDENTS.map((avatar) => (
            <Image
              alt=""
              className="relative h-[3.05cqw] w-[3.05cqw] rounded-brand-full object-cover"
              height={44}
              key={avatar}
              src={`/assets/${avatar}`}
              width={44}
            />
          ))}
          <span className="relative flex h-[3.05cqw] w-[3.05cqw] shrink-0 items-center justify-center rounded-brand-full bg-brand-text font-medium text-[0.75cqw] text-brand-text-white">
            2K+
          </span>
        </div>
      </div>
      <Image
        alt=""
        className="absolute top-[23.4cqw] left-[26.2cqw] h-[10.3cqw] w-[10.3cqw] object-contain [filter:url('#signup-white')]"
        height={180}
        src="/assets/hero-spiral-right.webp"
        unoptimized
        width={180}
      />
    </div>
  );
}
