import { FluidContainer, NonBreakingSpan, Typography } from "@/components";

interface CTAProps {
  theme?: "black" | "white" | "gold";
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const CTA = ({ theme, title, description, children }: CTAProps) => {
  return (
    <div
      className={`flex flex-col bg-cover text-center p-8 gap-3 ${
        theme === "black"
          ? "bg-black"
          : theme === "gold"
            ? "bg-yellow-400"
            : "bg-white"
      }`}
    >
      <Typography
        variant="pageHeader"
        color={`${theme === "black" ? "white" : "black"}`}
      >
        <NonBreakingSpan>{title}</NonBreakingSpan>
      </Typography>
      <Typography
        variant="copy"
        color={`${theme === "black" ? "white" : "black"}`}
      >
        {description}
      </Typography>
      <div className="flex flex-wrap justify-center gap-4">{children}</div>
    </div>
  );
};
