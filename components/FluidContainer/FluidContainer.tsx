import React, { ReactNode } from "react";

// const FluidOuter = `@apply w-full`;
// const FluidInner;

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
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  children: React.ReactNode;
}

export const FluidContainer = ({
  children,
  flex,
  justifyContent,
  alignItems,
}: FluidContainerProps) => {
  const dynamicProps = [
    "w-full",
    "max-w-[1440px]",
    "py-9",
    "px-20",
    "lg:py-5",
    "lg:px-9",
    "md:py-5",
    "md:px-4",
    "gap-6",
    flex && "flex",
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className= "w-full flex justify-center items-center">
      <div className={dynamicProps}>{children}</div>
    </div>
  );
};
