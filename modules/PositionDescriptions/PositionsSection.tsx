import { PositionModal, Typography } from "@/components";

interface PositionDataProps {
  type: string;
  text?: string;
  list?: (string | string[])[];
}

interface PositionProps {
  positionName: string;
  positionData: Array<PositionDataProps>;
}

interface PositionsSectionProps {
  data: Array<PositionProps>;
  title: string;
}

export const PositionsSection = ({ title, data }: PositionsSectionProps) => {
  return (
    <div className="flex flex-col my-4">
      <div className="uppercase">
        <Typography variant="footerHeader">{title}</Typography>
      </div>
      {data.map((position, positionIndex) => {
        return (
          <div key={positionIndex}>
            <PositionModal
              title={position.positionName}
              data={position.positionData}
            />
          </div>
        );
      })}
    </div>
  );
};
