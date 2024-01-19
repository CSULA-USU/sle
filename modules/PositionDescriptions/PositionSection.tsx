import { PositionsModal, Typography } from "@/components";

interface PositionSectionProps {
  title: string;
}

export const PositionSection = ({ title }: PositionSectionProps) => {
  return (
    <div className="flex flex-col">
      <div className="uppercase">
        <Typography variant="footerHeader">{title}</Typography>
      </div>
      <PositionsModal />
    </div>
  );
};
