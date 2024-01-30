interface DividerProps {
  margin?: `none` | "reg" | "lg";
  color?: "gold" | "yellow";
}

export const Divider = ({ margin, color }: DividerProps) => {
  return (
    <hr
      className={`w-full h-px border-2 border-accent
      } ${margin === "none" ? "my-0" : margin === "reg" ? "my-5" : "my-10"}`}
    />
  );
};
