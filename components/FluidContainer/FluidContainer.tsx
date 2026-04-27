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
  textAlign?: "left" | "center" | "right" | "justify" | "start" | "end";
  backgroundColor?: "black" | "white" | "gray-200" | "yellow-500" | "gray-400";
  rounded?: boolean;
  height?: string;
  width?: string;
  overflow?: "hidden" | "visible" | "auto";
  id?: string;
  padding?: string;
  margin?: string; // New Prop
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
  backgroundColor,
  rounded,
  height,
  width,
  overflow,
  padding,
  margin,
}: FluidContainerProps) => {
  const dynamicProps = [
    !width && "w-full",
    "max-w-[1440px] gap-6",
    flex && "flex",
    flexWrap && `flex-${flexWrap}`,
    flexDirection && `flex-${flexDirection}`,
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`,
    textAlign && `text-${textAlign}`,
    backgroundColor && `bg-${backgroundColor}`,
    rounded && "rounded-full",
    height && `h-${height}`,
    overflow && `overflow-${overflow}`,
    margin && margin,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`flex ${width ? "" : "justify-center"}`} id={id}>
      <div
        className={`${dynamicProps} ${
          padding
            ? `${padding}`
            : "py-9 px-16 max-xl:py-5 max-xl:px-9 max-sm:py-5 max-sm:px-4"
        }`}
        style={width ? { width } : {}}
      >
        {children}
      </div>
    </div>
  );
};
