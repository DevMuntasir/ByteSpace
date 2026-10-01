interface ProgressBarProps {
  className?: string;
  fillColor?: string;
  trackColor?: string;
  value: number;
}

export function ProgressBar({
  value,
  trackColor = "var(--brand-gray-50, #f6f6f6)",
  fillColor = "var(--brand-color-secondary, #d4fb20)",
  className = "",
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  return (
    <div
      className={["relative h-2 w-full rounded-brand-lg", className].join(" ")}
      style={{ backgroundColor: trackColor }}
    >
      <div
        className="absolute top-0 left-0 h-2 rounded-brand-lg transition-all duration-300"
        style={{ backgroundColor: fillColor, width: `${clampedValue}%` }}
      />
    </div>
  );
}
