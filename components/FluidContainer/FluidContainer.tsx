import React, { ReactNode } from "react";

interface FluidContainerProps {
  flex?: boolean;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  alignItems?:
    | "start"
    | "end"
    | "center"
    | "baseline"
    | "stretch";
  children: React.ReactNode;
}

export const FluidContainer = ({
  children,
  flex,
  justifyContent,
  alignItems
}: FluidContainerProps) => {
  const dynamicProps = [
    "w-full",
    "max-w-[1440px]",
    "py-5",
    "px-20",
    "gap-6",
    flex && 'flex',
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={dynamicProps}>{children}</div>;
};
