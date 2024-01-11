import { FluidContainer } from "../FluidContainer";
import { Typography } from "../Typography";

interface ButtonProps {
  variant: "black" | "grey";
  text: string;
}

export const Button = ({ variant, text }: ButtonProps) => {
  return (
    <button
      className={`rounded border ${
        variant === "black" ? "border-white text-white" : "border-black bg-gray-300"
      } py-2 px-4 m-4`}
    >
      <Typography variant='buttonText'>{text}</Typography>
    </button>
  );
};
