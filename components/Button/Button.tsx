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
  const baseStyles = `inline-block rounded-md py-3 px-4 hover:opacity-70 ${
    variant === "black"
      ? "text-white bg-black"
      : variant === "yellow"
        ? "bg-yellow-400 border-none"
        : "bg-gray-300 border-none"
  } ${borderless ? "border-none" : ""}`;

  return (
    <>
      {href && !isDisabled ? (
        <div className="my-4">
          <NonBreakingSpan>
            <a
              href={href}
              target={isExternalLink ? "_blank" : "_self"}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
              className={baseStyles}
            >
              <Typography variant="buttonText">{text}</Typography>
            </a>
          </NonBreakingSpan>
        </div>
      ) : (
        <button className={baseStyles} disabled={isDisabled}>
          <Typography variant="buttonText">{text}</Typography>
        </button>
      )}
    </>
  );
};
