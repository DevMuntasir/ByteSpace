import type { Course } from "../../types";
import { SmallAvatarGroup } from "./AvatarGroup";
import { Badge } from "./Badge";

const A = "/assets";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="relative flex w-full min-w-0 flex-col gap-5 overflow-hidden rounded-brand-lg border border-brand-border bg-brand-bg p-[15px] shadow-brand-sm transition-shadow hover:shadow-brand-card">
      {/* Thumbnail */}
      <div className="relative aspect-[341/195] w-full overflow-hidden rounded-[12px]">
        <div className="absolute inset-0 rounded-[12px] bg-[#443131]" />
        <img
          alt={course.title}
          className="absolute inset-0 h-full w-full rounded-[12px] object-cover"
          src={course.thumbnail}
        />
        {/* Meta badges */}
        <div className="absolute inset-x-2 bottom-3 flex flex-wrap gap-1.5">
          <Badge>{course.lessons} Lessons</Badge>
          <Badge>{course.duration}</Badge>
          <Badge>{course.comments} Comments</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4">
        {/* Title & author */}
        <div className="flex flex-col">
          <p
            className="font-brand-heading font-semibold text-brand-dark text-brand-lg leading-[1.2] tracking-[-0.2px]"
            title={course.title}
          >
            {course.title}
          </p>
          <p className="font-brand-primary text-brand-text-secondary text-brand-xs leading-[1.6]">
            by{" "}
            <span className="font-medium text-brand-primary">
              {course.author}
            </span>
          </p>
        </div>

        {/* Level & enrolled */}
        <div className="flex flex-wrap items-center gap-3">
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
        <div className="mt-auto flex items-end gap-0.5">
          <span className="font-brand-heading font-semibold text-brand-lg text-brand-primary leading-[1.2] tracking-[-0.2px]">
            ${course.price}
          </span>
          <span className="font-brand-primary text-brand-text-secondary text-brand-xs leading-[1.6]">
            /lifetime
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="absolute right-[15px] bottom-[15px] flex items-center gap-0.5">
        <span className="font-brand-primary text-brand-md text-brand-text-secondary leading-[1.6]">
          {course.rating}
        </span>
        <img alt="star" className="h-6 w-6" src={`${A}/r-1.svg`} />
      </div>
    </div>
  );
}
