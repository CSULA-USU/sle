import { Typography } from "@/components";
import { CandidateInfo } from "./CandidateInfo";

interface CandidateDescriptionsProps {
  data: Array<CandidateSectionProps>;
}

interface CandidateSectionProps {
  sectionName: string;
  positions: Array<CandidateProps>;
}

interface CandidateProps {
  positionName: string;
  positionData: Array<CandidateDataProps>;
}

interface CandidateDataProps {
  type: string;
  text?: string;
  list?: (string | string[])[];
}

export const CandidateGrid = ({ data }: CandidateDescriptionsProps) => {
  return (
    <div>
      {data &&
        data.map((section, sectionIndex) => (
          <section key={sectionIndex} className="flex flex-col my-4">
            <div className="uppercase">
              <Typography variant="footerHeader" as="h3">
                {section.sectionName}
              </Typography>
            </div>
            <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {section.positions.map((position, positionIndex) => (
                <CandidateInfo
                  key={positionIndex}
                  name={position.positionName}
                  data={position.positionData}
                />
              ))}
            </div>
          </section>
        ))}
    </div>
  );
};
