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
  children: React.ReactNode;
}

const variants = {
  pageHeader: "text-6xl max-xl:text-5xl font-sans font-bold text-white",
  sectionHeader: "text-5xl max-xl:text-4xl font-sans leading-loose",
  cardHeader: "text-3xl font-sans font-bold",
  subheader: "text-3xl font-sans font-bold leading-loose",
  navHeader: "text-xl max-sm:text-xl font-sans font-bold text-white",
  footerHeader: "text-lg font-sans font-bold leading-loose",
  buttonText: "text-lg font-sans font-bold",
  copy: "text-base font-sans",
  footerLink: "text-base font-serif text-yellow-400 leading-loose",
  footerCopy: "text-base font-serif text-white",
};

export const Typography = ({
  children,
  variant = "copy",
  color,
  lineHeight,
}: TypographyProps) => {
  return (
    <div className={`${variants[variant]} text-${color} leading-${lineHeight}`}>
      {children}
    </div>
  );
};
