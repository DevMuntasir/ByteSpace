import type { Course } from "../../types";
import { SmallAvatarGroup } from "./AvatarGroup";
import { Badge } from "./Badge";

const A = "/assets";
const TITLE_CHARACTER_LIMIT = 22;

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const titleCharacters = Array.from(course.title);
  const displayTitle =
    titleCharacters.length > TITLE_CHARACTER_LIMIT
      ? `${titleCharacters.slice(0, TITLE_CHARACTER_LIMIT).join("")}...`
      : course.title;

  return (
    <div className="relative h-[384px] w-[373px] flex-shrink-0 overflow-hidden rounded-brand-lg border border-brand-border bg-brand-bg shadow-brand-sm transition-shadow hover:shadow-brand-card">
      {/* Thumbnail */}
      <div className="absolute top-[15px] left-[15px] h-[195px] w-[341px] overflow-hidden rounded-[12px]">
        <div className="absolute inset-0 rounded-[12px] bg-[#443131]" />
        <img
          alt={course.title}
          className="absolute inset-0 h-full w-full rounded-[12px] object-cover"
          src={course.thumbnail}
        />
        {/* Meta badges */}
        <div className="absolute bottom-[18px] left-3 flex gap-3">
          <Badge>{course.lessons} Lessons</Badge>
          <Badge>{course.duration}</Badge>
          <Badge>{course.comments} Comments</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="absolute top-[231px] left-[15px] flex flex-col gap-4">
        {/* Title & author */}
        <div className="flex flex-col">
          <p
            className="font-brand-heading font-semibold text-brand-dark text-brand-lg leading-[1.2] tracking-[-0.2px]"
            title={course.title}
          >
            {displayTitle}
          </p>
          <p className="font-brand-primary text-brand-text-secondary text-brand-xs leading-[1.6]">
            by{" "}
            <span className="font-medium text-brand-primary">
              {course.author}
            </span>
          </p>
        </div>

        {/* Level & enrolled */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-brand-lg bg-brand-gray-50 px-3 py-1.5">
            <img alt="" className="h-5 w-5" src={`${A}/c-1.svg`} />
            <span className="font-brand-primary font-medium text-brand-text-secondary text-brand-xs leading-[1.2]">
              {course.level}
            </span>
          </div>
          <SmallAvatarGroup
            avatars={course.enrolledAvatars}
            overflowCount={course.enrolledCount}
          />
        </div>

        {/* Price */}
        <div className="flex items-end gap-0.5">
          <span className="font-brand-heading font-semibold text-brand-lg text-brand-primary leading-[1.2] tracking-[-0.2px]">
            ${course.price}
          </span>
          <span className="font-brand-primary text-brand-text-secondary text-brand-xs leading-[1.6]">
            /lifetime
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="absolute top-[231px] right-[15px] flex items-center gap-0.5">
        <span className="font-brand-primary text-brand-md text-brand-text-secondary leading-[1.6]">
          {course.rating}
        </span>
        <img alt="star" className="h-6 w-6" src={`${A}/r-1.svg`} />
      </div>
    </div>
  );
}
