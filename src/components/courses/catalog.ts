import { COURSES } from "@/data";
import type { Course } from "@/types";

export function courseSlug(course: Course) {
  return course.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
export const COURSE_CATEGORIES: Record<string, string> = {
  "1": "UI/UX Design",
  "2": "Drawing & Painting",
  "3": "Animation",
  "4": "Creative Marketing",
  "5": "Marketing",
  "6": "Social Media",
};
// The static reference repeats the six supplied courses across its catalog.
export const CATALOG = Array.from({ length: 90 }, (_, index) => ({
  course: COURSES[index % COURSES.length],
  key: `catalog-${index + 1}`,
}));
export const LESSONS = [
  {
    description:
      "Discover what digital assets are, where they are used, and what you will create in this course.",
    duration: "7 min",
    title: "Introduction to Digital Assets",
  },
  {
    description:
      "Explore composition, visual hierarchy, typography, and color for consistent digital products.",
    duration: "25 min",
    title: "Design Principles for Digital Assets",
  },
  {
    description:
      "Get familiar with the tools and workflow for building your first reusable digital asset.",
    duration: "16 min",
    title: "Asset Creation: Tools and Techniques",
  },
  {
    description:
      "Gather inspiration and develop a clear direction for your collection.",
    duration: "18 min",
    title: "Finding Your Creative Direction",
  },
  {
    description: "Turn a concept into a polished, reusable design.",
    duration: "32 min",
    title: "Building Your First Asset",
  },
  {
    description: "Organize assets into a flexible component system.",
    duration: "24 min",
    title: "Working with Components",
  },
  {
    description: "Create a cohesive visual language for your work.",
    duration: "21 min",
    title: "Color and Typography",
  },
  {
    description: "Structure and name your files so they are easy to use.",
    duration: "19 min",
    title: "Preparing Your Files",
  },
  {
    description: "Choose suitable formats and export settings.",
    duration: "20 min",
    title: "Exporting Digital Assets",
  },
  {
    description: "Build a presentation that explains the value of your assets.",
    duration: "22 min",
    title: "Presenting Your Work",
  },
  {
    description: "Prepare your collection for release.",
    duration: "20 min",
    title: "Publishing Your Collection",
  },
  {
    description:
      "Put your skills into practice and review your finished collection.",
    duration: "16 min",
    title: "Your Final Project",
  },
];
