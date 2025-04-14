import { FluidContainer, NonBreakingSpan, Typography } from "@/components";

interface CTAProps {
  theme?: "black" | "white" | "gold";
  title: string;
  description: string;
  children?: React.ReactNode;
  CTAClass?: string;
}

export const CTA = ({
  CTAClass,
  theme,
  title,
  description,
  children,
}: CTAProps) => {
  return (
    <div
      className={`flex flex-col bg-cover text-center p-8 gap-3 ${
        theme === "black"
          ? "bg-black"
          : theme === "gold"
            ? "bg-yellow-400"
            : "bg-white"
      } ${CTAClass ? CTAClass : ""}`}
    >
      <Typography
        variant="pageHeader"
        color={`${theme === "black" ? "white" : "black"}`}
      >
        {title}
      </Typography>
      <Typography
        variant="copy"
        color={`${theme === "black" ? "white" : "black"}`}
      >
        {description}
      </Typography>
      <div className="flex flex-wrap justify-center gap-4 max-sm:gap-1">
        {children}
      </div>
    </div>
  );
};
