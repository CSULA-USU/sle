interface FluidContainerProps {
  flex?: boolean;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  flexDirection?: "row" | "row-reverse" | "col" | "col-reverse";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "space-around"
    | "evenly"
    | "stretch";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  textAlign?: "left" | "center" | "right" | "justify" | "start" | "end";
  color?: "black" | "white";
  id?: string;
  padding?: string;
  children?: React.ReactNode;
}

export const FluidContainer = ({
  children,
  flex,
  flexWrap,
  flexDirection,
  id,
  justifyContent,
  alignItems,
  textAlign,
  color,
  padding,
}: FluidContainerProps) => {
  const dynamicProps = [
    "w-full max-w-[1440px] gap-6",
    flex && "flex",
    flexWrap && `flex-${flexWrap}`,
    flexDirection && `flex-${flexDirection}`,
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`,
    textAlign && `text-${textAlign}`,
    color && `bg-${color}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex justify-center" id={id}>
      <div
        className={`${dynamicProps} ${
          padding
            ? `${padding}`
            : "py-9 px-16 max-xl:py-5 max-xl:px-9 max-sm:py-5 max-sm:px-4"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
