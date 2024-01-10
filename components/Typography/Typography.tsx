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
  pageHeader: "text-6xl font-Montserrat font-bold",
  sectionHeader: "text-5xl font-Montserrat",
  cardHeader: "text-3xl font-Montserrat font-bold",
  subheader: "text-3xl font-Montserrat font-bold text-white",
  navHeader: "text-2xl font-Montserrat font-bold",
  footerHeader: "text-lg font-Montserrat font-bold py-1 px-1",
  copy: "text-base font-Montserrat",
  footerLink: "text-base font-Bitter text-yellow-400 py-1 px-1",
};

export const Typography = ({ children, variant = "copy" }: TypographyProps) => {
  return <div className={`${variants[variant]}`}>{children}</div>;
};
