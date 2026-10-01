import type { ReactNode } from "react";

interface SectionHeadingProps {
  centered?: boolean;
  description?: string;
  eyebrow?: string;
  eyebrowColor?: string;
  title: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  eyebrowColor = "var(--brand-color-purple, #7f30f7)",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start",
      ].join(" ")}
    >
      {eyebrow && (
        <p
          className="whitespace-nowrap font-brand-primary font-medium text-brand-md leading-7"
          style={{ color: eyebrowColor }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-brand-heading font-semibold text-brand-4xl text-brand-dark leading-[1.2] tracking-[-0.44px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[917px] font-brand-primary text-brand-md text-brand-text-muted leading-[1.6]">
          {description}
        </p>
      )}
    </div>
  );
}
