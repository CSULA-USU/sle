import React from "react";

interface TypographyProps {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
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
    | "footerCopy"
    | "informational";
  className?: string;
  color?: "black" | "white";
  lineHeight?: "none" | "normal" | "loose";
  fontWeight?: "thin" | "normal" | "bold";
  children: React.ReactNode;
}

const variants = {
  pageHeader: "text-5xl max-xl:text-4xl font-sans font-bold",
  sectionHeader: "text-4xl max-md:text-3xl font-sans leading-loose",
  cardHeader: "text-2xl max-sm:text-xl font-sans font-bold",
  subheader: "text-3xl max-sm:text-2xl font-sans font-bold leading-loose",
  navHeader: "text-md lg:text-xl font-sans font-bold",
  footerHeader: "text-lg font-sans font-bold leading-loose",
  buttonText: "text-lg font-sans font-bold",
  copy: "text-base font-sans",
  footerLink: "text-base font-serif text-yellow-400 leading-loose",
  footerCopy: "text-base font-serif text-white",
  informational: "text-xl font-sans leading-loose",
};

export const Typography = ({
  as: TypographyElement = "span",
  children,
  variant = "copy",
  className,
  color,
  lineHeight,
  fontWeight,
}: TypographyProps) => {
  return (
    <TypographyElement
      className={`${variants[variant]} text-${color} leading-${lineHeight} font-${fontWeight} ${className}`}
    >
      {children}
    </TypographyElement>
  );
};
