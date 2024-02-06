import { Typography } from "../../components";

interface CardProps {
  date?: string;
  location?: string;
  time?: string;
  title: string;
  children: React.ReactNode;
}
export const Card = ({ title, time, date, location, children }: CardProps) => {
  return (
    <div className="bg-black p-6 my-4 min-h-[584px] max-md:min-w-full max-md:min-h-0">
      <div className="mb-4 lg:3/8 flex flex-col">
        <div className="h-5/8 flex items-center">
          <Typography variant="cardHeader">{title}</Typography>
        </div>
        {date && (
          <Typography variant="copy" color="white" fontWeight="bold">
            {date}
          </Typography>
        )}
        {time && (
          <Typography variant="copy" color="white" fontWeight="bold">
            {time}
          </Typography>
        )}
        {location && (
          <Typography variant="copy" color="white" fontWeight="bold">
            {location}
          </Typography>
        )}
      </div>
      <Typography variant="copy" color="white">
        {children}
      </Typography>
    </div>
  );
};
