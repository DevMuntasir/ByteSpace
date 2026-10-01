import type { Metadata } from "next";
import { CourseCatalog } from "@/components/courses/CourseCatalog";
export const metadata: Metadata = { title: "Search Courses | ByteSpace" };
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return <CourseCatalog initialQuery={q ?? ""} />;
}
