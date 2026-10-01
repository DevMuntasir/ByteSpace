import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetail } from "@/components/courses/CourseDetail";
import { courseSlug } from "@/components/courses/catalog";
import { COURSES } from "@/data";
export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: courseSlug(course) }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((item) => courseSlug(item) === slug);
  return { title: `${course?.title ?? "Course not found"} | ByteSpace` };
}
export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES.find((item) => courseSlug(item) === slug);
  if (!course) {
    notFound();
  }
  return <CourseDetail course={course} />;
}
