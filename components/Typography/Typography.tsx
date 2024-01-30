import React from "react";

interface TypographyProps {
  variant?:
    | "pageHeader"
    | "sectionHeader"
    | "cardHeader"
    | "subheader"
    | "navHeader"
    | "footerHeader"
    | "buttonText"
    | "copy"
    | "footerLink"
    | "footerCopy";
  className?: string;
  color?: "black" | "white";
  lineHeight?: "none" | "normal" | "loose";
  fontWeight?: "thin" | "normal" | "bold";
  children: React.ReactNode;
}

const variants = {
  pageHeader: "text-5xl max-xl:text-4xl font-sans font-bold",
  sectionHeader: "text-4xl max-md:text-3xl font-sans leading-loose",
  cardHeader: "text-2xl font-sans font-bold text-white",
  subheader: "text-3xl max-sm:text-2xl font-sans font-bold leading-loose",
  navHeader: "text-md lg:text-xl font-sans font-bold text-white",
  footerHeader: "text-lg font-sans font-bold leading-loose",
  buttonText: "text-lg font-sans font-bold",
  copy: "text-base font-sans",
  footerLink: "text-base font-serif text-yellow-400 leading-loose",
  footerCopy: "text-base font-serif text-white",
};

export const Typography = ({
  children,
  variant = "copy",
  className,
  color,
  lineHeight,
  fontWeight,
}: TypographyProps) => {
  return (
    <span
      className={`${variants[variant]} text-${color} leading-${lineHeight} font-${fontWeight} ${className}`}
    >
      {children}
    </span>
  );
};
