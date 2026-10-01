import type { ReactNode } from "react";
import { Navbar } from "../layout/Navbar";

export function CourseBanner({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="bg-brand-primary text-white">
      <div className="relative mx-auto max-w-[1440px] bg-[linear-gradient(#ffffff14_1px,transparent_1px),linear-gradient(90deg,#ffffff14_1px,transparent_1px)] bg-[size:120px_120px] [container-type:inline-size]">
        <Navbar />
        <div
          className={`px-4 pt-36 sm:px-6 lg:px-[120px] lg:pt-40 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
