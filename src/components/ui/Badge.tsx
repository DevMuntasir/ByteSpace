import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center whitespace-nowrap rounded-brand-lg bg-[rgba(246,246,246,0.6)] px-3 py-1.5 font-brand-primary font-medium text-brand-text-secondary text-brand-xs leading-[1.2] backdrop-blur-[4px]",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
