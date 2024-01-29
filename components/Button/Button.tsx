import { NonBreakingSpan, Typography } from "@/components";

interface ButtonProps {
  variant: "black" | "grey";
  text: string;
  href?: string;
}

export const Button = ({ href, variant, text }: ButtonProps) => {
  return (
    <>
      {href ? (
        <div className="my-4">
          <NonBreakingSpan>
            <span
              className={`rounded border py-3 px-4 ${
                variant === "black"
                  ? "border-white text-white"
                  : "border-black bg-gray-300"
              }`}
            >
              <a href={href}>
                <Typography variant="buttonText">{text}</Typography>
              </a>
            </span>
          </NonBreakingSpan>
        </div>
      ) : (
        <button
          className={`rounded border ${
            variant === "black"
              ? "border-white text-white"
              : "border-black bg-gray-300"
          } py-2 px-4`}
        >
          <Typography variant="buttonText">{text}</Typography>
        </button>
      )}
    </>
  );
};
