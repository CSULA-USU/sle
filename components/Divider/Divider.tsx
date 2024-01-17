interface DividerProps {
  margin?: `none` | "reg" | "lg";
}

export const Divider = ({ margin }: DividerProps) => {
  return (
    <hr
      className={`w-full h-px border-2 border-yellow-400 ${
        margin === "none" ? "my-0" : margin === "reg" ? "my-5" : "my-10"
      }`}
    ></hr>
  );
};
