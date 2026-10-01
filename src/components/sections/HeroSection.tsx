import { Navbar } from "../layout/Navbar";
import { AvatarGroup } from "../ui/AvatarGroup";
import { Button } from "../ui/Button";
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

export function HeroSection() {
  return (
    <section className="relative h-[1024px] overflow-hidden bg-[#003be2]">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <img
          alt=""
          className="h-full w-full object-cover"
          src={`${A}/f422c.svg`}
        />
      </div>

      {/* Decorative ellipse glow */}
      <div className="absolute top-[582px] left-1/2 h-[1149px] w-[1149px] -translate-x-1/2">
        <img alt="" className="h-full w-full" src={`${A}/ab9fa.svg`} />
      </div>

      {/* 3D ornaments */}
      <div className="pointer-events-none absolute top-[221px] right-[calc(50%-693px)] h-[386px] w-[385px]">
        <img
          alt=""
          className="h-full w-full object-cover"
          src={`${A}/eb4eb.png`}
        />
      </div>
      <div className="pointer-events-none absolute top-[672px] right-[calc(50%-724px)] h-[342px] w-[342px]">
        <img
          alt=""
          className="h-full w-full object-cover"
          src={`${A}/e89fa.png`}
        />
      </div>
      <div className="pointer-events-none absolute top-[672px] left-[calc(50%+572px)] h-[330px] w-[330px]">
        <img
          alt=""
          className="h-full w-full object-cover"
          src={`${A}/80418.png`}
        />
      </div>
      <div className="pointer-events-none absolute top-[221px] left-[calc(50%+696px)] h-[370px] w-[370px]">
        <img
          alt=""
          className="h-full w-full object-cover"
          src={`${A}/30652.png`}
        />
      </div>
      <div className="pointer-events-none absolute top-[477px] left-[calc(50%-449px)] h-[175px] w-[175px]">
        <img
          alt=""
          className="h-full w-full object-cover"
          src={`${A}/eb4eb.png`}
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
      <div className="pointer-events-none absolute top-[464px] left-[calc(50%+480px)] h-[188px] w-[188px]">
        <img
          alt=""
          className="h-full w-full object-cover"
          src={`${A}/5713a.png`}
        />
      </div>

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-[60px] pt-[169px]">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="w-[935px] font-['Poppins',sans-serif] font-semibold text-[72px] text-white leading-[1.2] tracking-[-0.72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="whitespace-nowrap font-['Satoshi',sans-serif] text-[#e5e6e8] text-[18px] leading-[1.6]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-4">
          <div className="flex h-[52px] w-[461px] items-center gap-2 rounded-[24px] bg-white px-6 py-3">
            <img
              alt="search"
              className="h-6 w-6 flex-shrink-0"
              src={`${A}/c14a7.svg`}
            />
            <span className="whitespace-nowrap font-['Satoshi',sans-serif] text-[#82868e] text-[18px] leading-[1.6]">
              Course, topic, creator
            </span>
          </div>
          <Button size="md" variant="lime">
            Search
          </Button>
        </div>
      </div>

      {/* Hero image — person */}
      <div
        className="pointer-events-none absolute top-[512px] left-1/2 h-[541px] w-[578px] -translate-x-1/2"
        style={{
          boxShadow:
            "51.038px 72.912px 72px rgba(0,0,0,0.13),37.122px 53.032px 56px rgba(0,0,0,0.11),25.838px 36.912px 36px rgba(0,0,0,0.10)",
        }}
      >
        <img
          alt="Student"
          className="absolute inset-0 h-full w-full object-cover"
          src={`${A}/e3a78.png`}
        />
      </div>

      {/* Learning Progress card */}
      <div className="absolute top-[651px] left-[842px] flex flex-col gap-2 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
        <p className="font-['Satoshi',sans-serif] font-medium text-[#242528] text-[14px] leading-[1.2]">
          Learning Progress
        </p>
        <p className="font-['Poppins',sans-serif] font-semibold text-[#242528] text-[48px] leading-[1.2] tracking-[-0.48px]">
          55%
        </p>
        <div className="w-[200px]">
          <ProgressBar value={55} />
        </div>
      </div>

      {/* UI/UX card */}
      <div className="absolute top-[639px] left-[404px] rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
        <p className="font-['Satoshi',sans-serif] font-medium text-[#242528] text-[16px] leading-[1.2]">
          UI/UX Design
        </p>
        <div className="mt-1 flex gap-2">
          <span className="font-['Satoshi',sans-serif] text-[#82868e] text-[12px] leading-[1.6]">
            200 Courses
          </span>
          <span className="text-[#82868e] text-[10px] leading-[1.5]">•</span>
          <span className="font-['Satoshi',sans-serif] text-[#82868e] text-[12px] leading-[1.6]">
            1000+ Students
          </span>
        </div>
      </div>

      {/* Happy Students card */}
      <div className="absolute top-[837px] left-[328px] flex w-[258px] flex-col gap-2 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
        <div className="flex flex-col">
          <p className="w-[115px] font-['Satoshi',sans-serif] font-medium text-[#242528] text-[16px] leading-[1.2]">
            Happy Students
          </p>
          <div className="flex items-center gap-0.5">
            <span className="font-['Satoshi',sans-serif] text-[#242528] text-[12px] leading-[1.6]">
              4.5{" "}
            </span>
            <span className="font-['Satoshi',sans-serif] text-[#82868e] text-[12px] leading-[1.6]">
              (240)
            </span>
            <img alt="star" className="ml-0.5 h-4 w-4" src={`${A}/8860e.svg`} />
          </div>
        </div>
        <AvatarGroup
          avatars={HAPPY_STUDENT_AVATARS}
          overflowCount="2K+"
          overlapOffset={16}
          size={43}
        />
      </div>
    </section>
  );
}
