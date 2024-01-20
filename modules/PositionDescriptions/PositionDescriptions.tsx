import { PositionsSection } from "@/modules";

interface PositionDataProps {
  type: string;
  text?: string;
  list?: string[];
}

interface PositionProps {
  positionName: string;
  positionData: Array<PositionDataProps>;
}

interface SectionProps {
  sectionName: string;
  positions: Array<PositionProps>;
}
interface PositionDescriptionsProps {
  data: Array<SectionProps>;
}

export const PositionDescriptions = ({ data }: PositionDescriptionsProps) => {
  return (
    <div className="my-10">
      {data &&
        data.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <PositionsSection
              title={section.sectionName}
              data={section.positions}
            />
          </div>
        ))}
    </div>
  );
};
