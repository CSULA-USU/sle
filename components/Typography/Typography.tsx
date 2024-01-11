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
    | "footerLink";
  className?: string;
  color?: "black" | "white";
  children: React.ReactNode;
}

const variants = {
  pageHeader: "text-6xl font-Montserrat font-bold text-white",
  sectionHeader: "text-5xl font-Montserrat py-4",
  cardHeader: "text-3xl font-Montserrat font-bold",
  subheader: "text-3xl font-Montserrat font-bold pb-4",
  navHeader: "text-2xl font-Montserrat font-bold text-white",
  footerHeader: "text-lg font-Montserrat font-bold py-1 px-1 text-white",
  buttonText: "text-lg font-Montserrat font-bold py-1 px-1",
  copy: "text-base font-Montserrat",
  footerLink: "text-base font-Bitter text-yellow-400 py-1 px-1",
};

export const Typography = ({ children, variant = "copy", color }: TypographyProps) => {
  return <div className={`${variants[variant]} text-${color}`}>{children}</div>;
};
