import Image from "next/image";
import { Button } from "../ui/Button";

const ORNAMENTS = [
  {
    className:
      "top-[-10.9028cqw] left-[-8.3333cqw] w-[26.7361cqw] [&_img]:[filter:url('#cta-lime-tint')]",
    name: "spiral-left",
    src: "hero-spiral-left.webp",
  },
  {
    className:
      "top-[0.5556cqw] left-[12.7778cqw] w-[12.1528cqw] -scale-x-100 [&_img]:[filter:url('#cta-white-tint')]",
    name: "spiral-small",
    src: "hero-spiral-left.webp",
  },
  {
    className:
      "top-[0.1389cqw] left-[75.3472cqw] w-[13.0556cqw] [&_img]:[filter:url('#cta-lime-tint')]",
    name: "pyramid",
    src: "hero-pyramid.webp",
  },
  {
    className:
      "top-[0.5556cqw] left-[85.4167cqw] w-[25.6944cqw] [&_img]:[filter:url('#cta-white-tint')]",
    name: "cylinder",
    src: "hero-cylinder.webp",
  },
  {
    className:
      "top-[15.2778cqw] left-[-5.5556cqw] w-[13.0556cqw] -rotate-20 [&_img]:[filter:url('#cta-white-tint')] max-lg:top-auto max-lg:bottom-[9cqw]",
    name: "cylinder-left",
    src: "hero-cylinder.webp",
  },
  {
    className:
      "bottom-[-10.8333cqw] left-[1.3889cqw] w-[23.75cqw] [&_img]:[filter:url('#cta-lime-tint')]",
    name: "ring",
    src: "hero-ring.webp",
  },
  {
    className:
      "right-[-0.3472cqw] bottom-[-9.5139cqw] w-[22.9167cqw] [&_img]:[filter:url('#cta-lime-tint')]",
    name: "spiral-right",
    src: "hero-spiral-right.webp",
  },
] as const;

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="overflow-hidden bg-brand-primary"
    >
      <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <defs>
          <filter colorInterpolationFilters="sRGB" id="cta-lime-tint">
            <feColorMatrix
              type="matrix"
              values="0.22 0 0 0 0.74 0 0.06 0 0 0.94 0 0 0.30 0 0.04 0 0 0 1 0"
            />
          </filter>
          <filter colorInterpolationFilters="sRGB" id="cta-white-tint">
            <feColorMatrix
              type="matrix"
              values="0.18 0 0 0 0.82 0 0.18 0 0 0.82 0 0 0.18 0 0.82 0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1440px] [container-type:inline-size]">
        <div className="relative isolate h-[33.8889cqw] max-lg:h-auto">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden bg-[length:100%_auto] bg-[url('/assets/cta-shape.svg')] bg-repeat-y"
          >
            {ORNAMENTS.map(({ className, name, src }) => (
              <div className={`absolute aspect-square ${className}`} key={name}>
                <Image
                  alt=""
                  className="object-contain"
                  fill
                  sizes="(max-width: 1440px) 27vw, 385px"
                  src={`/assets/${src}`}
                  unoptimized
                />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-[2.7778cqw] text-center max-lg:gap-6 max-lg:px-6 max-lg:py-20">
            <h2
              className="w-[49.3056cqw] font-brand-heading font-semibold text-[3.0556cqw] text-brand-text-light leading-[1.2] tracking-[-0.0306cqw] max-lg:w-full max-lg:max-w-[420px] max-lg:text-[28px] max-lg:tracking-[-0.28px]"
              id="cta-heading"
            >
              Unlock Your Potential as a Creator with ByteSpace
            </h2>
            <p className="w-[66.9444cqw] font-brand-primary text-[clamp(16px,1.25cqw,18px)] text-brand-text-light leading-[1.6] max-lg:w-full max-lg:max-w-[460px] max-lg:text-base">
              Experience the collaboration of numerous creators and an expanding
              selection of courses. Register now and become a part of a
              community comprising over 10,000 local and international creators.
              Utilize our Course Editor, and showcase your expertise by
              publishing your finest course on the ByteSpace Course Library.
            </p>
            <Button
              className="min-h-11 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 max-lg:min-h-11 max-lg:px-6 max-lg:py-3 max-lg:text-base lg:px-[1.6667cqw] lg:py-[0.8333cqw] lg:text-[clamp(16px,1.25cqw,18px)] [&]:rounded-full [&]:bg-[#cbfc01]"
              size="md"
              type="button"
              variant="lime"
            >
              Join as Creator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
