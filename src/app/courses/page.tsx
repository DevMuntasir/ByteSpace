import type { Metadata } from "next";
import { CourseCatalog } from "@/components/courses/CourseCatalog";
export const metadata: Metadata = { title: "Explore Courses | ByteSpace" };
export default function CoursesPage() {
  return <CourseCatalog />;
}
