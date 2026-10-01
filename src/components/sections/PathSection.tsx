import Image from "next/image";
import { STATS } from "../../data";
import { ProgressBar } from "../ui/ProgressBar";

const HAPPY_STUDENT_AVATARS = [
  "person.png",
  "person-2.png",
  "person-3.png",
  "person-4.png",
  "person-5.png",
  "person-6.png",
  "person-7.png",
];

const CREATOR_BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function StudentAvatars({ compact = false }: { compact?: boolean }) {
  return (
    <div aria-hidden="true" className="flex items-center -space-x-brand-md">
      {HAPPY_STUDENT_AVATARS.slice(0, compact ? 3 : 7).map((avatar) => (
        <Image
          alt=""
          className={`${compact ? "size-8" : "size-11"} rounded-brand-full border-2 border-brand-bg object-cover`}
          height={44}
          key={avatar}
          src={`/assets/${avatar}`}
          width={44}
        />
      ))}
      <span
        className={`${compact ? "size-8" : "size-11"} relative flex items-center justify-center rounded-brand-full border-2 border-brand-bg bg-brand-secondary font-bold text-brand-xs`}
      >
        {compact ? "26+" : "2K+"}
      </span>
    </div>
  );
}

function CoursePreview() {
  return (
    <div
      className="absolute top-0 left-0 w-[373px] overflow-hidden rounded-brand-lg border border-brand-border-subtle bg-brand-card p-brand-md"
      data-parallax="22"
    >
      <div className="relative h-[195px] overflow-hidden rounded-brand-md">
        <Image
          alt="Designer learning Figma at a desk"
          className="object-cover"
          fill
          sizes="341px"
          src="/assets/course-5.png"
        />
        <div className="absolute bottom-brand-md left-brand-md flex gap-brand-sm text-brand-text-secondary text-brand-xs">
          <span className="rounded-brand-pill bg-brand-bg/80 px-brand-sm py-1">
            17 Lessons
          </span>
          <span className="rounded-brand-pill bg-brand-bg/80 px-brand-sm py-1">
            2 hours 16 mins
          </span>
        </div>
      </div>
      <p className="mt-brand-lg font-brand-heading font-semibold text-brand-dark text-brand-lg leading-tight">
        Learn Figma from Basic
      </p>
      <p className="mt-1 text-brand-text-secondary text-brand-xs">
        by <span className="text-brand-primary">purepearl studio</span>
      </p>
      <div className="my-brand-md flex items-center gap-brand-md">
        <span className="flex items-center gap-brand-xs rounded-brand-pill bg-brand-bg-muted px-brand-sm py-brand-xs text-brand-text-secondary text-brand-xs">
          <Image alt="" height={20} src="/assets/c-1.svg" width={20} />
          Beginner
        </span>
        <StudentAvatars compact />
      </div>
      <p className="text-brand-text-secondary text-brand-xs">
        <span className="font-brand-heading font-semibold text-brand-lg text-brand-primary">
          $25
        </span>
        /lifetime
      </p>
    </div>
  );
}

function LearningVisual() {
  return (
    <div
      className="relative mx-auto aspect-[577/552] w-full max-w-[577px] [container-type:inline-size]"
      data-motion-scene="visual"
    >
      <div className="absolute top-0 left-0 h-[552px] w-[577px] origin-top-left scale-[calc(100cqw/577px)]">
        <CoursePreview />
        <div className="absolute top-brand-4xl left-0 z-10 h-[492px] w-[577px] drop-shadow-[var(--brand-shadow-portrait)]">
          <div className="h-full overflow-hidden">
            <Image
              alt="Student wearing headphones and learning on a laptop"
              className="h-auto w-full"
              height={483}
              sizes="577px"
              src="/assets/model.png"
              width={516}
            />
          </div>
        </div>
        <div
          className="absolute top-[213px] right-0 z-20 flex w-[232px] flex-col gap-brand-sm rounded-brand-md bg-brand-card/95 p-brand-md"
          data-parallax="-44"
        >
          <p className="font-medium text-brand-sm leading-6">
            Learning Progress
          </p>
          <p className="font-brand-heading font-semibold text-brand-5xl leading-[1.2] tracking-tight">
            55%
          </p>
          <ProgressBar value={55} />
        </div>
        <Image
          alt=""
          className="pointer-events-none absolute top-brand-4xl right-[-40px] z-30"
          data-parallax="-56"
          height={215}
          src="/assets/spiral.svg"
          width={215}
        />
      </div>
    </div>
  );
}

function CreatorVisual() {
  return (
    <div
      className="relative mx-auto aspect-[541/552] w-full max-w-[541px] [container-type:inline-size]"
      data-motion-scene="visual"
    >
      <div className="absolute top-0 left-0 h-[552px] w-[541px] origin-top-left scale-[calc(100cqw/541px)]">
        <div
          className="absolute top-0 left-0 w-[232px] rounded-brand-md bg-brand-primary p-brand-md text-brand-text-light"
          data-parallax="28"
        >
          <p className="font-medium text-brand-sm leading-tight">
            Total Revenue
          </p>
          <p className="text-brand-xs leading-tight">July 1-28</p>
          <p className="my-brand-sm font-brand-heading font-semibold text-brand-xl leading-8 tracking-tight">
            $120.29
          </p>
          <ProgressBar trackColor="var(--brand-color-bg-white)" value={55} />
        </div>
        <div
          className="absolute top-[150px] left-0 flex w-[134px] flex-col gap-brand-sm rounded-brand-md bg-brand-primary p-brand-md text-brand-text-light"
          data-parallax="16"
        >
          <div>
            <p className="font-medium text-brand-sm leading-tight">
              Year to Date
            </p>
            <p className="text-brand-xs leading-tight">2023</p>
          </div>
          <p className="font-brand-heading font-semibold text-brand-xl leading-8 tracking-tight">
            $1,200.38
          </p>
          <span className="self-start rounded-brand-pill bg-brand-secondary px-brand-sm py-1 font-medium text-brand-text text-brand-xs">
            +12%
          </span>
        </div>
        <div className="absolute top-[-30px] left-[-85px] z-10 h-[582px] w-[650px] drop-shadow-[var(--brand-shadow-portrait)]">
          <div className="h-full overflow-hidden">
            <Image
              alt="Course creator wearing headphones and holding a tablet"
              className="h-auto w-full"
              height={500}
              sizes="650px"
              src="/assets/model-2.png"
              width={500}
            />
          </div>
        </div>
        <div
          className="absolute right-0 bottom-brand-4xl z-20 flex w-[258px] flex-col gap-brand-sm rounded-brand-md bg-brand-card/95 p-brand-md"
          data-parallax="-40"
        >
          <div>
            <p className="font-medium text-brand-base leading-6">
              Happy Students
            </p>
            <p className="flex items-center gap-1 text-brand-xs">
              <span className="font-bold">4.5</span>
              <span className="text-brand-text-muted">(240)</span>
              <Image
                alt="stars"
                height={16}
                src="/assets/shape-2.svg"
                width={16}
              />
            </p>
          </div>
          <StudentAvatars />
        </div>
        <Image
          alt=""
          className="pointer-events-none absolute top-brand-5xl right-brand-xl z-20 -rotate-45"
          data-parallax="-56"
          height={215}
          src="/assets/spiral.svg"
          width={215}
        />
      </div>
    </div>
  );
}

export function PathSection() {
  return (
    <section
      aria-labelledby="path-heading"
      className="relative overflow-hidden bg-brand-bg-subtle font-brand-primary text-brand-text"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_28%_7%,var(--brand-color-secondary)_0%,transparent_25%),radial-gradient(ellipse_at_0%_88%,var(--brand-color-secondary)_0%,transparent_23%),radial-gradient(ellipse_at_0%_52%,var(--brand-color-primary)_0%,transparent_31%),radial-gradient(ellipse_at_100%_93%,var(--brand-color-primary)_0%,transparent_32%),radial-gradient(ellipse_at_100%_8%,var(--brand-color-primary)_0%,transparent_25%)] opacity-20"
      />
      <div className="relative mx-auto max-w-[1248px]">
        <div className="relative flex flex-col gap-16 px-4 py-12 sm:px-6 sm:py-16 lg:gap-24 lg:py-24">
          <div className="relative grid items-center gap-brand-2xl lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-brand-2xl" data-reveal>
              <h2
                className="font-brand-heading font-semibold text-brand-2xl leading-[1.2] tracking-[-0.01em] lg:text-brand-4xl"
                id="path-heading"
              >
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="max-w-[477px] text-brand-md text-brand-text-secondary leading-[1.6]">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <dl className="flex flex-wrap gap-6 sm:gap-brand-3xl">
                {STATS.map((stat) => (
                  <div className="flex flex-col-reverse" key={stat.label}>
                    <dt className="text-brand-md text-brand-text-secondary leading-[1.6]">
                      {stat.label}
                    </dt>
                    <dd className="font-brand-heading font-medium text-[28px] text-brand-primary leading-[1.2] tracking-[-0.01em] sm:text-brand-3xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <LearningVisual />
          </div>
          <div className="relative grid items-center gap-brand-2xl lg:grid-cols-2 lg:gap-12">
            <div className="max-lg:order-2">
              <CreatorVisual />
            </div>
            <div className="flex flex-col gap-brand-2xl" data-reveal>
              <h2 className="max-w-[480px] font-brand-heading font-semibold text-brand-2xl leading-[1.2] tracking-[-0.01em] lg:text-brand-4xl">
                Create &amp; Manage
                <br />
                Courses Easily.
              </h2>
              <p className="text-brand-md text-brand-text-secondary leading-[1.6]">
                <span className="font-bold text-brand-text">ByteSpace</span>{" "}
                supports individuals or entities in the creation, publication,
                and administration of educational courses.
              </p>
              <ul className="flex flex-col gap-brand-md">
                {CREATOR_BENEFITS.map((benefit) => (
                  <li className="flex items-center gap-brand-sm" key={benefit}>
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-brand-full bg-brand-primary text-brand-text-white">
                      <svg
                        aria-hidden="true"
                        className="size-3.5"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m3 8 3 3 7-7"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </span>
                    <span className="font-medium text-brand-md leading-[1.2]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
