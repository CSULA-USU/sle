import { Typography } from "@/components";

interface CTAProps {
  theme?: "black" | "white" | "gold";
  title: string;
  text: string;
  children?: React.ReactNode;
}

export const CTA = ({ theme, title, text, children }: CTAProps) => {
  return (
    <div
      className={`flex flex-col bg-cover border-2 border-neutral-900 text-center p-8 gap-3 ${
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
        {title}
      </Typography>
      <Typography
        variant="copy"
        color={`${theme === "black" ? "white" : "black"}`}
      >
        {text}
      </Typography>
      <div className="flex gap-6 justify-center mt-4">{children}</div>
    </div>
  );
};
