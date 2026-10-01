"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Course } from "@/types";
import { Footer } from "../layout/Footer";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Tabs } from "../ui/Tabs";
import { CourseBanner } from "./CourseBanner";
import { LESSONS } from "./catalog";

const FEATURES = [
  "Creation of Digital Assets",
  "Design Principles Mastery",
  "Asset Production in Digital Creation",
  "Digital Design and Critique",
  "Exploring the Various Platforms",
  "Tools and Techniques for Asset Creation",
  "Workflow Efficiency",
  "Ongoing Project: Building Your Portfolio",
];
const INCLUDES = [
  "Learning Resources",
  "Quality Course Video",
  "Certificate of Completion",
  "Access on mobile",
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-5 shrink-0 ${className}`}
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" fill="currentColor" r="10" />
      <path
        d="m5.5 10 3 3 6-6"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}
function CoursePreview({ title }: { title: string }) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#e8e8e8,#b4b4b4)]">
      <Image
        alt={`Creator introducing ${title}`}
        className="object-contain object-bottom pt-8"
        fill
        priority
        sizes="(max-width: 1023px) 100vw, 760px"
        src="/assets/model-2.png"
      />
      <button
        aria-label="Play course preview"
        className="absolute inset-0 flex items-center justify-center focus-visible:outline-4 focus-visible:outline-brand-secondary focus-visible:outline-offset-[-4px]"
        onClick={() => setShowMessage(true)}
        type="button"
      >
        <span className="flex size-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-105">
          <svg
            aria-hidden="true"
            className="ml-1 size-8 text-brand-text"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m8 4 13 8-13 8z" />
          </svg>
        </span>
      </button>
      {showMessage && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-brand-dark/90 p-6 text-center text-white">
          <p role="status">
            A preview video hasn’t been added to this course yet.
          </p>
          <Button onClick={() => setShowMessage(false)} type="button">
            Back to course
          </Button>
        </div>
      )}
    </div>
  );
}
function EnrollmentCard({ course }: { course: Course }) {
  const [showAll, setShowAll] = useState(false);
  return (
    <aside
      aria-label="Course enrollment"
      className="rounded-2xl border border-brand-border bg-white p-6 text-brand-text sm:p-8"
    >
      <h2 className="font-semibold text-xl">
        12 Lessons <span className="font-normal">(4 hours)</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {(showAll ? LESSONS : LESSONS.slice(0, 3)).map((lesson, i) => (
          <li className="flex items-start gap-3 text-sm" key={lesson.title}>
            <span className="text-brand-text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">{lesson.title}</span>
            <span className="shrink-0 text-brand-primary">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ol>
      <button
        aria-expanded={showAll}
        className="mt-2 min-h-11 text-brand-text-muted text-sm hover:text-brand-primary"
        onClick={() => setShowAll(!showAll)}
        type="button"
      >
        {showAll ? "Show fewer lessons" : "+9 more videos"}
      </button>
      <p className="mt-4 text-brand-text-secondary text-sm leading-6">
        Ready to Create? Enroll Now and Start Building Your Digital Assets!
      </p>
      <p className="mt-5 text-brand-text-muted text-sm">
        <span className="font-brand-heading font-medium text-4xl text-brand-primary">
          ${course.price}
        </span>
        /lifetime
      </p>
      <Link
        className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-brand-secondary font-medium text-brand-text hover:bg-brand-secondary-hover focus-visible:outline-2 focus-visible:outline-brand-primary"
        href="/signup"
      >
        Enroll Now
      </Link>
      <h3 className="mt-7 font-semibold">This course includes</h3>
      <ul className="mt-5 space-y-4">
        {INCLUDES.map((item) => (
          <li
            className="flex items-center gap-3 text-brand-text-secondary text-sm"
            key={item}
          >
            <svg
              aria-hidden="true"
              className="size-4 shrink-0 text-brand-primary"
              fill="none"
              viewBox="0 0 20 20"
            >
              <rect
                height="14"
                rx="2"
                stroke="currentColor"
                width="12"
                x="4"
                y="3"
              />
              <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-7 border-brand-border-subtle border-t pt-6">
        <div className="flex items-center gap-3">
          <Image
            alt="PurePearl Studio creator"
            className="rounded-full object-cover"
            height={48}
            src="/assets/person.png"
            width={48}
          />
          <div>
            <p className="font-medium">PurePearl Studio</p>
            <p className="text-brand-text-muted text-xs">
              Professional Creator
            </p>
          </div>
        </div>
        <p className="mt-4 text-brand-text-secondary text-sm leading-6">
          Ready to Create? Enroll Now and Start Building Your Digital Assets!
        </p>
        <Link
          className="mt-4 inline-flex min-h-11 items-center rounded-full border border-brand-border px-5 text-sm hover:bg-brand-bg-muted"
          href="/search?q=purepearl"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
function CourseInformation({ course }: { course: Course }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <Tabs.Root defaultValue="about">
      <Tabs.List label="Course information">
        <Tabs.Trigger value="about">About</Tabs.Trigger>
        <Tabs.Trigger value="lessons">Lessons</Tabs.Trigger>
        <Tabs.Trigger value="reviews">Reviews</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Panel value="about">
        <h2 className="font-semibold text-lg">Description</h2>
        <div className="mt-5 space-y-5 text-base text-brand-text-secondary leading-[1.8]">
          <p>
            Embark on an exploratory journey into the world of digital creation
            with our comprehensive course, “{course.title}: A Comprehensive
            Guide.” This foundational learning experience will lead you through
            the essential principles of creating impactful digital assets. From
            laying the groundwork to understanding design to crafting
            professional designs, this guide is meticulously crafted to empower
            you with practical knowledge and the confidence to create your own
            digital assets.
          </p>
          <p>
            In this rich curriculum, you’ll explore asset creation by becoming
            acquainted with the essential tools and techniques for crafting
            compelling digital visuals. Understand the fundamental principles of
            composition, color, and typography as you gain insights into
            designing assets that communicate clearly, serve a purpose, and
            inspire.
          </p>
          <p>
            As you progress through the course, you’ll work on digital briefs
            and projects, delving into the nuances of digital design. You will
            discover how to organize your files, build efficient workflows, and
            create a cohesive portfolio. Whether you’re beginning your journey
            or looking to refine your digital skills, this course brings
            together hands-on exercises and guidance for crafting
            professional-grade digital assets.
          </p>
        </div>
        <h3 className="mt-7 font-semibold text-lg">Sneak Peek</h3>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {["course-5.png", "course-1.png", "course-3.png", "course-2.png"].map(
            (src, i) => (
              <button
                aria-label={`View course example ${i + 1}`}
                className="relative aspect-[4/3] overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-brand-primary"
                key={src}
                onClick={() => setSelectedImage(src)}
                type="button"
              >
                <Image
                  alt={`Digital creation example ${i + 1}`}
                  className="object-cover transition-transform hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 22vw, 175px"
                  src={`/assets/${src}`}
                />
              </button>
            )
          )}
        </div>
        {selectedImage && (
          <div className="relative mt-4 overflow-hidden rounded-xl border border-brand-border p-3">
            <Image
              alt="Expanded course example"
              className="h-auto w-full rounded-lg"
              height={600}
              src={`/assets/${selectedImage}`}
              width={1000}
            />
            <button
              className="absolute top-5 right-5 min-h-11 rounded-full bg-white px-4 shadow"
              onClick={() => setSelectedImage(null)}
              type="button"
            >
              Close
            </button>
          </div>
        )}
        <h3 className="mt-7 font-semibold text-lg">Key Points</h3>
        <ul className="mt-5 space-y-4">
          {FEATURES.map((feature) => (
            <li
              className="flex items-start gap-3 text-brand-text-secondary text-sm leading-5"
              key={feature}
            >
              <Check className="text-brand-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </Tabs.Panel>
      <Tabs.Panel value="lessons">
        <h2 className="font-semibold text-xl">Course curriculum</h2>
        <p className="mt-3 text-brand-text-secondary">12 lessons · 4 hours</p>
        <div className="mt-6 divide-y divide-brand-border-subtle">
          {LESSONS.map((lesson, i) => (
            <details className="py-5" key={lesson.title}>
              <summary className="cursor-pointer font-medium">
                <span className="mr-3 text-brand-text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {lesson.title}
                <span className="ml-3 text-brand-primary text-sm">
                  {lesson.duration}
                </span>
              </summary>
              <p className="mt-4 pl-8 text-brand-text-secondary leading-7">
                {lesson.description}
              </p>
            </details>
          ))}
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="reviews">
        <h2 className="font-semibold text-xl">Student reviews</h2>
        <p className="mt-4 text-brand-text-secondary">
          This course is rated {course.rating} out of 5. Written reviews are not
          available yet.
        </p>
      </Tabs.Panel>
    </Tabs.Root>
  );
}
export function CourseDetail({ course }: { course: Course }) {
  const [shareStatus, setShareStatus] = useState("");
  async function share() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus("Link copied");
    } catch {
      setShareStatus(
        "Copy the link from your address bar to share this course."
      );
    }
  }
  return (
    <main>
      <CourseBanner className="pb-14 lg:pb-[610px]">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h1 className="max-w-[880px] font-brand-heading font-semibold text-3xl leading-[1.3] sm:text-4xl">
              {course.title}: A Comprehensive Guide
            </h1>
            <p className="mt-2 text-lg">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="mt-4 text-sm">
              by{" "}
              <a
                className="underline underline-offset-4"
                href="/search?q=purepearl"
              >
                {course.author}
              </a>
            </p>
          </div>
          <Button
            aria-label="Share this course"
            className="shrink-0 gap-2 max-sm:px-3 max-sm:text-sm"
            onClick={share}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m8 11 8-5M8 13l8 5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="5" cy="12" r="3" stroke="currentColor" />
              <circle cx="19" cy="4" r="3" stroke="currentColor" />
              <circle cx="19" cy="20" r="3" stroke="currentColor" />
            </svg>
            <span className="max-sm:sr-only">Share</span>
          </Button>
        </div>
        <p aria-live="polite" className="mt-2 text-sm empty:hidden">
          {shareStatus}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Badge className="gap-2 bg-white px-5 py-2.5">
            <Image alt="" height={18} src="/assets/c-1.svg" width={18} />
            {course.level}
          </Badge>
          <Badge className="gap-2 bg-white px-5 py-2.5">
            <span className="text-brand-primary">★</span>
            {course.rating} ({course.comments} reviews)
          </Badge>
          <Badge className="gap-2 bg-white px-5 py-2.5">
            <span aria-hidden="true">♧</span>32 Students
          </Badge>
        </div>
      </CourseBanner>
      <div className="relative mx-auto grid max-w-[1248px] gap-8 px-4 pt-8 pb-16 sm:px-6 lg:-mt-[550px] lg:grid-cols-[minmax(0,760px)_minmax(0,400px)] lg:items-start lg:gap-x-16 lg:gap-y-0 lg:pt-0">
        <div className="min-w-0">
          <CoursePreview title={course.title} />
        </div>
        <div className="lg:sticky lg:top-5 lg:row-span-2">
          <EnrollmentCard course={course} />
        </div>
        <div className="min-w-0 lg:col-start-1 lg:mt-28">
          <CourseInformation course={course} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
