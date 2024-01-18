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
  children: React.ReactNode;
}

const variants = {
  pageHeader: "text-6xl font-sans font-bold text-white",
  sectionHeader: "text-5xl font-sans py-4",
  cardHeader: "text-3xl font-sans font-bold text-white",
  subheader: "text-3xl font-sans font-bold pb-4",
  navHeader: "text-xl font-sans font-bold text-white",
  footerHeader: "text-lg font-sans font-bold py-1 px-1",
  buttonText: "text-lg font-sans font-bold py-1 px-1",
  copy: "text-base font-sans",
  footerLink: "text-base font-serif text-yellow-400 py-1 px-1",
  footerCopy: "text-base font-serif text-white",
};

export const Typography = ({
  children,
  variant = "copy",
  color,
}: TypographyProps) => {
  return <div className={`${variants[variant]} text-${color}`}>{children}</div>;
};
