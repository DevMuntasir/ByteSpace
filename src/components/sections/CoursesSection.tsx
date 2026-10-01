"use client";

import { useState } from "react";
import {
  COURSE_TABS,
  COURSE_TAGS_ROW2,
  COURSE_TAGS_ROW3,
  COURSES,
} from "../../data";

import { SectionHeading } from "../ui/SectionHeading";
import { CourseCard } from "../ui/CourseCard";

export function CoursesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-brand-bg py-brand-section" id="courses">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <SectionHeading
          centered
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          title="Discover Your Passion, Build Your Skills"
        />

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            {COURSE_TABS.map((tab, i) => (
              <button
                className={[
                  "cursor-pointer rounded-brand-lg px-4 py-3 font-brand-primary font-medium text-brand-base leading-[1.2] transition-colors",
                  activeTab === i
                    ? "bg-brand-secondary text-brand-text"
                    : "bg-brand-gray-50 text-brand-text-secondary hover:bg-brand-gray-100",
                ].join(" ")}
                key={tab}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {COURSE_TAGS_ROW2.map((tag) => (
              <span
                className="rounded-brand-lg bg-brand-gray-50 px-4 py-3 font-brand-primary font-medium text-brand-base text-brand-text-secondary leading-[1.2]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {COURSE_TAGS_ROW3.map((tag) => (
              <span
                className="rounded-brand-lg bg-brand-gray-50 px-4 py-3 font-brand-primary font-medium text-brand-base text-brand-text-secondary leading-[1.2]"
                key={tag}
              >
                {tag}
              </span>
            ))}
            <span className="cursor-pointer font-brand-primary font-medium text-brand-base text-brand-primary leading-[1.2] hover:underline">
              + More
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-10">
          {COURSES.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
