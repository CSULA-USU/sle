import { Typography } from "@/components";

interface StatementCardProps {
  title: string;
  text?: string;
  children?: React.ReactNode;
}

export const StatementCard = ({
  title,
  text,
  children,
}: StatementCardProps) => {
  return (
    <div className="border-neutral-700 border rounded-md flex flex-col p-6 items-center gap-4 w-1/4 max-md:w-full hover:bg-neutral-700">
      {children}
      <div className="flex flex-col h-4/6 text-center gap-2">
        <Typography variant="buttonText" color="white" fontSize="xl">
          {title}
        </Typography>
        <Typography variant="copy" color="white" fontSize="lg">
          {text}
        </Typography>
      </div>
    </div>
  );
};
