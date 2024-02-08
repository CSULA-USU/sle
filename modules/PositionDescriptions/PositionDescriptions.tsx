import { PositionsSection } from "@/modules";

interface PositionDataProps {
  type: string;
  text?: string;
  list?: (string | string[])[];
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
    <div>
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
