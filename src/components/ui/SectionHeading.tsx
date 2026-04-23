"use client";

interface SectionHeadingProps {
  light: string;
  bold: string;
  className?: string;
  color?: "white" | "denim";
}

export default function SectionHeading({
  light,
  bold,
  className = "",
  color = "denim",
}: SectionHeadingProps) {
  const colorClass = color === "white" ? "text-white" : "text-denim";

  return (
    <h2 className={`text-4xl sm:text-5xl font-light ${colorClass} leading-tight ${className}`}>
      {light} <span className="font-semibold">{bold}</span>
    </h2>
  );
}
