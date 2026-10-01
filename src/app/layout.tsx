import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "./smooth-scroll";

export const metadata: Metadata = {
  description:
    "Get Access to Hundreds of Courses Available. Discover your passion, build your skills with ByteSpace.",
  title: "ByteSpace - Online Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#242528] antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
