import React, { ReactNode } from "react";

interface FluidContainerProps {
  flex?: boolean;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flexDirection?: "row" | "row-reverse" | "col" | "col-reverse";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  color?: 'black' | 'white';
  children: React.ReactNode;
}

export const FluidContainer = ({
  children,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  color
}: FluidContainerProps) => {
  const dynamicProps = [
    "w-full",
    "max-w-[1440px]",
    "py-9",
    "px-16",
    "max-xl:py-5",
    "max-xl:px-9",
    "max-sm:py-5",
    "max-sm:px-4",
    "gap-6",
    flex && "flex",
    flexDirection && `flex-${flexDirection}`,
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`,
    color && `bg-${color}`
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className= "w-full flex justify-center items-center">
      <div className={dynamicProps}>{children}</div>
    </div>
  );
};
