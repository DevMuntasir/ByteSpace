import { STATS } from "../../data";
import { AvatarGroup } from "../ui/AvatarGroup";
import { ProgressBar } from "../ui/ProgressBar";

const A = "/assets";

const HAPPY_STUDENT_AVATARS = [
  "/assets/person.png",
  "/assets/person-2.png",
  "/assets/person-3.png",
  "/assets/person-4.png",
  "/assets/person-4.png",
  "/assets/person-5.png",
  "/assets/person-6.png",
];

export function PathSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-[120px]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-466px] left-[-508px] h-[2391px] w-[2456px]">
          <img alt="" className="h-full w-full" src={`${A}/shape-1.svg`} />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-[72px]">
        {/* Row 1: Text left, Card right */}
        <div className="flex items-center gap-[63px]">
          {/* Text */}
          <div className="flex w-[574px] flex-col gap-10">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[#242528] text-[44px] leading-[1.2] tracking-[-0.44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="w-[477px] font-['Satoshi',sans-serif] text-[#4b4c53] text-[18px] leading-[1.6]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            {/* Stats */}
            <div className="flex items-end gap-14">
              {STATS.map((stat) => (
                <div className="flex flex-col" key={stat.label}>
                  <p className="font-['Poppins',sans-serif] font-medium text-[#003be2] text-[36px] leading-[44px] tracking-[-0.36px]">
                    {stat.value}
                  </p>
                  <p className="font-['Satoshi',sans-serif] text-[#4b4c53] text-[18px] leading-[1.6]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image + cards */}
          <div className="relative h-[552px] w-[621px] flex-shrink-0">
            {/* Main person image */}
            <div
              className="absolute inset-0 top-[12px] h-[540px] w-[577px]"
             
            >
              <img
                alt="Student"
                className="h-full w-full object-cover"
                src={`${A}/model.png`}
              />
            </div>
            {/* Learning Progress card */}
            <div className="absolute top-[213px] right-0 z-10 flex flex-col gap-2 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
              <p className="font-['Satoshi',sans-serif] font-medium text-[#242528] text-[14px] leading-6">
                Learning Progress
              </p>
              <p className="font-['Poppins',sans-serif] font-semibold text-[#242528] text-[48px] leading-[1.2] tracking-[-0.48px]">
                55%
              </p>
              <div className="w-[200px]">
                <ProgressBar value={55} />
              </div>
            </div>
            {/* 3D ornament */}
            <div className="pointer-events-none absolute top-[12%] right-[-10%] z-10 h-[215px] w-[215px]">
              <img
                alt=""
                className="h-full w-full object-cover"
                src={`${A}/spiral.svg`}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Image left, Text right */}
        <div className="flex items-center gap-[79px]">
          {/* Left: person image + overlaid cards */}
          <div className="relative h-[596px] w-[541px] flex-shrink-0">
            {/* Total Revenue card (blue) */}
            <div className="absolute top-[44px] left-0 z-10 flex flex-col gap-2 rounded-[16px] bg-[#003be2] p-4 backdrop-blur-[10px]">
              <div className="flex flex-col text-[#f5f5f6]">
                <p className="font-['Satoshi',sans-serif] font-medium text-[16px] leading-[1.2]">
                  Total Revenue
                </p>
                <p className="font-['Satoshi',sans-serif] text-[10px] leading-[1.2]">
                  July 1-28
                </p>
              </div>
              <div className="flex w-[200px] items-center justify-between">
                <p className="font-['Poppins',sans-serif] font-semibold text-[#f5f5f6] text-[24px] leading-[32px] tracking-[-0.24px]">
                  $120.29
                </p>
                <span className="rounded-[24px] bg-[#cbfc01] px-2 py-0.5 font-['Satoshi',sans-serif] font-medium text-[#242528] text-[10px] leading-[20px]">
                  +12$
                </span>
              </div>
              <ProgressBar fillColor="#d4fb20" trackColor="white" value={55} />
            </div>
            {/* Year to Date card (blue) */}
            <div className="absolute top-[194px] left-0 z-10 flex w-[134px] flex-col gap-2 rounded-[16px] bg-[#003be2] p-4 backdrop-blur-[10px]">
              <div className="flex flex-col text-[#f5f5f6]">
                <p className="font-['Satoshi',sans-serif] font-medium text-[16px] leading-[1.2]">
                  Year to Date
                </p>
                <p className="font-['Satoshi',sans-serif] text-[10px] leading-[1.2]">
                  2023
                </p>
              </div>
              <p className="font-['Poppins',sans-serif] font-semibold text-[#f5f5f6] text-[24px] leading-[32px] tracking-[-0.24px]">
                $1,200.38
              </p>
              <span className="self-start rounded-[24px] bg-[#cbfc01] px-2 py-0.5 font-['Satoshi',sans-serif] font-medium text-[#242528] text-[10px] leading-[20px]">
                +12$
              </span>
            </div>
            {/* Woman image */}
            <div
              className="absolute top-0 left-1/2 h-[596px] w-[435px] -translate-x-1/2 overflow-hidden"
              
            >
              <img
                alt="Creator"
                className="h-full w-full object-cover"
                src={`${A}/model-2.png`}
              />
            </div>
            {/* Happy Students card */}
            <div className="absolute right-[-25px] bottom-[44px] z-10 flex w-[258px] flex-col gap-2 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
              <div className="flex flex-col">
                <p className="font-['Satoshi',sans-serif] font-medium text-[#242528] text-[16px] leading-6">
                  Happy Students
                </p>
                <div className="flex items-center gap-0.5">
                  <span className="font-['Satoshi',sans-serif] font-bold text-[#242528] text-[12px] leading-[1.5]">
                    4.5{" "}
                  </span>
                  <span className="font-['Satoshi',sans-serif] text-[#82868e] text-[10px] leading-[1.5]">
                    (240)
                  </span>
                  <img
                    alt="star"
                    className="ml-0.5 h-4 w-4"
                    src={`${A}/shape-2.svg`}
                  />
                </div>
              </div>
              <AvatarGroup
                avatars={HAPPY_STUDENT_AVATARS}
                overflowCount="2K+"
                overlapOffset={16}
                size={43}
              />
            </div>
            {/* 3D ornament */}
            <div className="pointer-events-none absolute top-[19%] right-[-20%] z-10 h-[215px] w-[215px]">
              <img
                alt=""
                className="h-full w-full object-cover"
                src={`${A}/spiral.svg`}
              />
            </div>
          </div>

          {/* Right text */}
          <div className="flex w-[580px] flex-col gap-10">
            <h2 className="w-[391px] font-['Poppins',sans-serif] font-semibold text-[#242528] text-[44px] leading-[1.2] tracking-[-0.44px]">
              Create & Manage Courses Easily.
            </h2>
            <p className="w-[574px] font-['Satoshi',sans-serif] text-[#4b4c53] text-[18px] leading-[1.6]">
              <span className="font-bold text-[#242528]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((feat) => (
                <div className="flex items-center gap-2" key={feat}>
                  <img
                    alt="check"
                    className="h-6 w-6 flex-shrink-0"
                    src={`${A}/358a8.svg`}
                  />
                  <p className="whitespace-nowrap font-['Satoshi',sans-serif] font-medium text-[#242528] text-[18px] leading-[1.2]">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
