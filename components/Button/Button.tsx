import { NonBreakingSpan, Typography } from "@/components";

interface ButtonProps {
  borderless?: boolean;
  class?: string;
  href?: string;
  isDisabled?: boolean;
  isExternalLink?: boolean;
  text: string;
  variant: "black" | "grey" | "yellow";
}

export const Button = ({
  href,
  borderless,
  variant,
  text,
  isDisabled,
  isExternalLink,
}: ButtonProps) => {
  return (
    <>
      {href && !isDisabled ? (
        <div className="my-4">
          <NonBreakingSpan>
            <span
              className={`rounded-md border py-3 px-4 hover:opacity-70 ${
                variant === "black"
                  ? "border-white text-white bg-black"
                  : variant === "yellow"
                    ? "bg-yellow-400 border-none"
                    : "bg-gray-300 border-none"
              } ${borderless ? "border-none" : ""} {class}`}
            >
              <a href={href} target={isExternalLink ? "_blank" : "_self"}>
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
                : "bg-gray-300 border-none"
          } ${borderless ? "border-none" : ""} py-2 px-4 {class}`}
          disabled={isDisabled}
          aria-disabled={isDisabled}
        >
          <Typography variant="buttonText">{text}</Typography>
        </button>
      )}
    </>
  );
};
