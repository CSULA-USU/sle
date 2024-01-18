import { FluidContainer, Typography } from "../../components";

interface CardProps {
  title: string;
  date: string;
  location?: string;
  children: React.ReactNode;
}
export const Card = ({ title, date, location, children }: CardProps) => {
  return (
    <div className="bg-black p-6 m-4 max-w-[400px] min-h-[512px]">
      <Typography variant="cardHeader">{title}</Typography>
      <Typography variant="navHeader">{date}</Typography>
      <Typography variant="navHeader">{location}</Typography>
      <Typography variant="copy" color="white">
        {children}
      </Typography>
    </div>
  );
};
