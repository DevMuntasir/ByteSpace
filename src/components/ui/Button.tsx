"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "lime" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: Size;
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  ghost: "bg-brand-gray-50 text-brand-gray-900 hover:bg-brand-gray-100",
  lime: "bg-brand-secondary text-brand-text hover:bg-brand-secondary-hover",
  outline:
    "bg-brand-bg border border-brand-border text-brand-text hover:bg-brand-gray-50",
};

const sizeClasses: Record<Size, string> = {
  lg: "px-8 py-4 text-brand-md",
  md: "px-brand-lg py-3 text-brand-md leading-[1.2]",
  sm: "px-brand-md py-2 text-brand-sm",
};

export function Button({
  variant = "lime",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[24px] font-['Satoshi',sans-serif] font-medium transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
