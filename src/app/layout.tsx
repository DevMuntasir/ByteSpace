import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
