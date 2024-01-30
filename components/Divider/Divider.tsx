interface DividerProps {
  margin?: `none` | "reg" | "lg";
}

export const Divider = ({ margin }: DividerProps) => {
  return (
    <hr
      className={`w-full h-px border-2 border-yellow-400 ${
        margin === "none" ? "mb-0" : margin === "reg" ? "mb-5" : "mb-10"
      }`}
    />
  );
};
