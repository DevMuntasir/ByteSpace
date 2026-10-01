import Image from "next/image";
import { Navbar } from "../layout/Navbar";
import { AvatarGroup } from "../ui/AvatarGroup";
import { ProgressBar } from "../ui/ProgressBar";

const A = "/assets";

const HAPPY_STUDENT_AVATARS = [
  `${A}/student-avatar-drinking-coffee.png`,
  `${A}/student-avatar-bearded-with-glasses.png`,
  `${A}/student-avatar-wearing-apron.png`,
  `${A}/student-avatar-cyclist.png`,
  `${A}/student-avatar-wearing-hat.png`,
  `${A}/student-avatar-with-blue-glasses.png`,
  `${A}/student-avatar-hiker.png`,
];

const ORNAMENTS = [
  {
    className:
      "top-[15.3472cqw] left-[-8.1944cqw] w-[26.7361cqw] [&_img]:[filter:url('#hero-lime-tint')] max-md:top-[-9cqw] max-md:left-[-13cqw] max-md:w-[33cqw]",
    name: "spiral-left",
    src: "hero-spiral-left.webp",
  },
  {
    className:
      "top-[47.2917cqw] left-[1.0417cqw] w-[23.75cqw] [&_img]:[filter:url('#hero-white-tint')] max-md:top-[53cqw] max-md:left-[-10cqw] max-md:w-[30cqw]",
    name: "ring",
    src: "hero-ring.webp",
  },
  {
    className:
      "top-[46.6667cqw] left-[78.1944cqw] w-[22.9167cqw] [&_img]:[filter:url('#hero-white-tint')] max-md:top-[53cqw] max-md:left-[84cqw] max-md:w-[28cqw]",
    name: "spiral-right",
    src: "hero-spiral-right.webp",
  },
  {
    className:
      "top-[15.3472cqw] left-[85.2778cqw] w-[25.6944cqw] [&_img]:[filter:url('#hero-lime-tint')] max-md:top-[-10cqw] max-md:left-[87cqw] max-md:w-[31cqw]",
    name: "cylinder",
    src: "hero-cylinder.webp",
  },
  {
    className:
      "top-[33.125cqw] left-[12.9167cqw] w-[12.1528cqw] scale-x-[-1] [&_img]:[filter:url('#hero-white-tint')] max-md:top-[6cqw] max-md:left-[13cqw] max-md:w-[15cqw]",
    name: "spiral-small",
    src: "hero-spiral-left.webp",
  },
  {
    className:
      "top-[32.2222cqw] left-[76.8056cqw] w-[13.0556cqw] [&_img]:[filter:url('#hero-white-tint')] max-md:top-[8cqw] max-md:left-[79cqw] max-md:w-[17cqw]",
    name: "pyramid",
    src: "hero-pyramid.webp",
  },
] as const;

const CARD_CLASS =
  "absolute z-2 rounded-[1.1111cqw] bg-white p-[1.1111cqw] text-[1.1111cqw] text-[#242528] leading-[1.2] [&>p]:font-medium max-md:rounded-xl max-md:p-2.5 max-md:text-[clamp(10px,2.4cqw,14px)]";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-hidden bg-[#123de3] text-white"
    >
      <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <defs>
          <filter colorInterpolationFilters="sRGB" id="hero-lime-tint">
            <feColorMatrix
              type="matrix"
              values="0.22 0 0 0 0.74 0 0.06 0 0 0.94 0 0 0.30 0 0.04 0 0 0 1 0"
            />
          </filter>
          <filter colorInterpolationFilters="sRGB" id="hero-white-tint">
            <feColorMatrix
              type="matrix"
              values="0.18 0 0 0 0.82 0 0.18 0 0 0.82 0 0 0.18 0 0.82 0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1440px] [container-type:inline-size]">
        <div className="relative isolate h-[71.1111cqw] bg-[linear-gradient(#ffffff1f_1px,transparent_1px),linear-gradient(90deg,#ffffff1f_1px,transparent_1px)] bg-[size:8.3333cqw_8.3333cqw] max-md:h-auto max-md:bg-[size:64px_64px]">
          <Navbar />

          <div className="relative z-3 flex flex-col items-center pt-[11.7361cqw] text-center max-md:px-5 max-md:pt-[132px]">
            <h1
              className="font-brand-heading font-semibold text-[5cqw] leading-[1.2] tracking-[-0.05cqw] max-md:max-w-[580px] max-md:text-[clamp(30px,6.25cqw,46px)] max-md:tracking-[-0.5px]"
              id="hero-heading"
            >
              Get Access to Hundreds
              <br className="max-md:hidden" /> Courses Available
            </h1>
            <p className="mt-[2.2222cqw] text-[#e5e6e8] text-[1.25cqw] leading-[1.6] max-md:mt-5 max-md:max-w-[480px] max-md:text-sm">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>

            <search className="max-md:w-full max-md:max-w-[480px]">
              <form
                action="/"
                className="mt-[4.1667cqw] flex w-[40.4167cqw] items-center gap-[1.1111cqw] text-[1.25cqw] max-md:mt-7 max-md:w-full max-md:gap-2.5 max-md:text-sm"
              >
                <div className="flex h-[3.6111cqw] min-w-0 flex-1 items-center gap-[0.5556cqw] rounded-full bg-white px-[1.6667cqw] text-[#82868e] focus-within:outline-2 focus-within:outline-[#cbfc01] focus-within:outline-offset-3 max-md:h-12 max-md:gap-2 max-md:px-3.5">
                  <svg
                    aria-hidden="true"
                    className="h-[1.6667cqw] w-[1.6667cqw] shrink-0 max-md:h-[18px] max-md:w-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m16 16 4 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <input
                    aria-label="Search courses, topics, or creators"
                    className="min-w-0 flex-1 text-[#242528] outline-none placeholder:text-[#82868e]"
                    name="q"
                    placeholder="Course, topic, creator"
                    type="search"
                  />
                </div>
                <button
                  className="min-h-[3.3333cqw] cursor-pointer rounded-full bg-[#d4ff35] px-[1.6667cqw] py-[0.6944cqw] text-[#242528] hover:bg-[#cbfc01] max-md:min-h-12 max-md:px-[18px] max-md:py-3"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </search>
          </div>

          <div className="pointer-events-none absolute inset-0 max-md:relative max-md:mt-6 max-md:h-[86cqw]">
            <div
              aria-hidden="true"
              className="absolute top-[40.4167cqw] left-1/2 aspect-square w-[79.7917cqw] -translate-x-1/2 rounded-full bg-[#cfff32] max-md:top-[12cqw] max-md:w-[116cqw]"
            />

            {ORNAMENTS.map(({ className, name, src }) => (
              <div
                aria-hidden="true"
                className={`absolute aspect-square [&_img]:object-contain ${className}`}
                key={name}
              >
                <Image
                  alt=""
                  fill
                  loading="eager"
                  sizes="(max-width: 767px) 33vw, (max-width: 1440px) 27vw, 385px"
                  src={`${A}/${src}`}
                  unoptimized
                />
              </div>
            ))}

            <div className="absolute top-[35.5556cqw] left-1/2 h-[37.5694cqw] w-[40.1389cqw] -translate-x-1/2 max-md:top-[6cqw] max-md:h-[80cqw] max-md:w-[85cqw] [&_img]:object-contain [&_img]:drop-shadow-[2.6cqw_3.6cqw_2.5cqw_#00000026]">
              <Image
                alt="Smiling student wearing headphones and holding a laptop"
                fill
                priority
                sizes="(max-width: 767px) 85vw, (max-width: 1440px) 40vw, 578px"
                src={`${A}/hero-student.png`}
              />
            </div>

            <div
              className={`${CARD_CLASS} top-[45.2083cqw] left-[58.4722cqw] flex w-[16.1111cqw] flex-col gap-[0.5556cqw] text-[0.9722cqw] max-md:top-[29cqw] max-md:right-[4cqw] max-md:left-auto max-md:w-[29cqw] max-md:max-w-[180px] max-md:gap-1.5 max-md:text-[clamp(9px,2cqw,12px)]`}
            >
              <p>Learning Progress</p>
              <strong className="font-brand-heading font-semibold text-[3.3333cqw] tracking-[-0.0333cqw] max-md:text-[clamp(26px,6cqw,40px)]">
                55%
              </strong>
              <ProgressBar
                className="h-[0.5556cqw] max-md:h-[5px] [&>div]:h-[0.5556cqw] max-md:[&>div]:h-[5px]"
                fillColor="#cbfc01"
                value={55}
              />
            </div>

            <div
              className={`${CARD_CLASS} top-[44.375cqw] left-[28.0556cqw] max-md:top-[25cqw] max-md:left-[4cqw]`}
            >
              <p>UI/UX Design</p>
              <div className="mt-[0.2778cqw] flex gap-[0.5556cqw] text-[#82868e] text-[0.8333cqw] leading-[1.6] max-md:mt-[3px] max-md:gap-1 max-md:text-[clamp(7px,1.7cqw,10px)]">
                <span>200 Courses</span>
                <span aria-hidden="true">•</span>
                <span>1000+ Students</span>
              </div>
            </div>

            <div
              className={`${CARD_CLASS} top-[58.125cqw] left-[22.7778cqw] w-[17.9167cqw] max-md:top-[63cqw] max-md:left-[8cqw] max-md:w-[166px]`}
            >
              <p>Happy Students</p>
              <div className="flex items-center text-[0.8333cqw] leading-[1.6] max-md:text-[9px]">
                <span>
                  4.5 <span className="text-[#82868e]">(240)</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-[#cbfc01] text-[1.1111cqw] max-md:text-xs"
                >
                  ★
                </span>
              </div>
              <div className="mt-[0.5556cqw] h-[2.9861cqw] max-md:mt-1.5 max-md:h-[27px] [&>div]:w-max [&>div]:origin-top-left [&>div]:scale-[calc(100cqw/1440px)] max-md:[&>div]:scale-[0.62]">
                <AvatarGroup
                  avatars={HAPPY_STUDENT_AVATARS}
                  overflowCount="2K+"
                  overlapOffset={16}
                  size={43}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
