import React from "react";

interface TypographyProps {
  variant?:
    | "pageHeader"
    | "sectionHeader"
    | "cardHeader"
    | "subheader"
    | "navHeader"
    | "footerHeader"
    | "copy"
    | "footerLink";
  className?: string;
  children: React.ReactNode;
}

const variants = {
  pageHeader: "text-6xl font-sans font-bold",
  sectionHeader: "text-5xl font-sans",
  cardHeader: "text-3xl font-sans font-bold",
  subheader: "text-3xl font-sans font-bold text-white",
  navHeader: "text-2xl font-sans font-bold pl-40",
  footerHeader: "text-lg font-sans font-bold py-1 px-1",
  copy: "text-base font-bitter",
  footerLink: "text-base font-serif text-yellow-400 py-1 px-1",
};

export const Typography = ({ children, variant = "copy" }: TypographyProps) => {
  return <div className={`${variants[variant]}`}>{children}</div>;
};
