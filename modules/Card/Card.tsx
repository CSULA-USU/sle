import { FluidContainer, Typography } from "../../components";

interface CardProps {
  title: string;
  date: string;
  location?: string;
  children: React.ReactNode;
}
export const Card = ({ title, date, location, children }: CardProps) => {
  return (
    <div className="bg-black">
      <Typography variant="cardHeader">{title}</Typography>
    </div>
  );
};
