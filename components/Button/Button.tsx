import { NonBreakingSpan, Typography } from "@/components";

interface ButtonProps {
  variant: "black" | "grey" | "yellow";
  text: string;
  borderless?: boolean;
  href?: string;
}

export const Button = ({ href, borderless, variant, text }: ButtonProps) => {
  return (
    <>
      {href ? (
        <div className="my-4">
          <NonBreakingSpan>
            <span
              className={`rounded-md border py-3 px-4 hover:opacity-70 ${
                variant === "black"
                  ? "border-white text-white bg-black"
                  : variant === "yellow"
                    ? "bg-yellow-400 border-none"
                    : "border-black bg-gray-300"
              } ${borderless ? "border-none" : ""}`}
            >
              <a href={href}>
                <Typography variant="buttonText">{text}</Typography>
              </a>
            </span>
          </NonBreakingSpan>
        </div>
      ) : (
        <button
          className={`rounded-md border hover:opacity-70 ${
            variant === "black"
              ? "border-white text-white bg-black"
              : variant === "yellow"
                ? "bg-yellow-400 border-none"
                : "border-black bg-gray-300"
          } ${borderless ? "border-none" : ""} py-2 px-4`}
        >
          <Typography variant="buttonText">{text}</Typography>
        </button>
      )}
    </>
  );
};
