import { FluidContainer, Typography } from "../../components";

interface CardProps {
  title: string;
  date: string;
  location?: string;
  children: React.ReactNode;
}
export const Card = ({ title, date, location, children }: CardProps) => {
  return (
    <div className="bg-black p-6 mr-8 my-4 w-[400px] min-h-[512px] max-md:min-w-full max-md:min-h-0">
      <div className="mb-4 lg:h-1/4 flex flex-col">
        <div className="h-3/4 flex items-center">
          <Typography variant="cardHeader">{title}</Typography>
        </div>
        <Typography variant="copy" color="white" fontWeight="bold">
          Date: {date}
        </Typography>
        <Typography variant="copy" color="white" fontWeight="bold">
          Location: {location}
        </Typography>
      </div>

      <Typography variant="copy" color="white">
        {children}
      </Typography>
    </div>
  );
};
