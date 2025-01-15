import {
  BulletList,
  Button,
  CTA,
  InfoPanel,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import { Card, PositionDescriptions } from "@/modules";
import type { Metadata } from "next";
import electionEventsData from "@/data/asi/asi-election-events.json";
import asiCandidatesData from "@/data/asi/asi-candidates.json";
import asiData from "@/data/asi/asi-positions.json";
import eligibilityReqs from "@/data/asi/asi-eligibility-requirements.json";

interface PositionData {
  type: string;
  text?: string;
  list?: (string | string[])[];
}

interface Position {
  positionName: string;
  positionData: PositionData[];
}

interface Section {
  sectionName: string;
  positions: Position[];
}

interface AsiData {
  data: Section[];
}

interface ElectionEventProps {
  title: string;
  startDate?: string; // "2025-01-30"
  endDate?: string; // "2025-01-30"
  startTime?: string; // "23:59"
  endTime?: string; // "23:59"
  location: string;
  description: string;
}

const typedAsiData: AsiData = asiData;

export const metadata: Metadata = {
  title: "ASI Student Government",
  description:
    "Running for office is the perfect chance to help your voice be heard. As a part of student government, students can network, gain leadership experience, and be the voice for students. If elected, you will be able to help the students of Cal State LA and assist with essential changes on campus.",
  authors: [
    {
      name: "University-Student Union at Cal State LA",
      url: "https://www.calstatelausu.org/",
    },
    {
      name: "Associated Students, Inc. of Cal State LA",
      url: "https://asicalstatela.org/",
    },
  ],
  keywords: [
    "CSULA",
    "Cal State LA",
    "ASI, Associated Students, Inc.",
    "Student Leader Elections",
    "Application",
    "Choose to lead",
    "Election Events",
    "Application Opens",
    "Info Sessions",
    "Application Deadline",
    "ASI Mandatory Candidate Briefing",
    "Candidate Campaign Week",
    "Election Results",
    "Position Descriptions",
    "Executive Positions",
    "ASI President",
    "ASI Secretary Treasurer",
    "ASI Vice President for Administration",
    "ASI Vice president for Academic Governance",
    "ASI Vice President for External Affairs and Advancement",
    "ASI Vice President for Finance, College Representative and Reps at Large",
    "College Representatives, Diversity and Inclusion and Civic Engagement Officers",
    "ASI Commissioners",
    "Election and Outreach Comissioner and Officials",
    "Environment Affairs Commissioner",
    "ASI Spirit Commissioner",
    "Military Connected Representative",
    "Senators",
    "Academic Senators",
    "Basic Eligibility Requirements",
  ],
};

export default function ASI() {
  const filterElectionEvents = (electionEvents: ElectionEventProps[]) => {
    return electionEvents.filter((electionEvent) => {
      const today = new Date().toISOString().split("T")[0];
      return electionEvent.startDate && electionEvent.startDate > today;
    });
  };

  const sortElectionEvents = (electionEvents: ElectionEventProps[]) => {
    electionEvents.sort(
      (a, b) =>
        new Date(a.startDate || "9999-00-00").getTime() -
        new Date(b.startDate || "9999-00-00").getTime(),
    );
  };

  let electionEvents: ElectionEventProps[] =
    filterElectionEvents(electionEventsData);
  sortElectionEvents(electionEvents);

  return (
    <div>
      <HeroHeader
        imgAlt="ASI General Election Header Image"
        imgSrc="/sle-apply.png"
        title="ASI General Election"
      >
        <Button
          variant="yellow"
          text="Application"
          href="https://asicalstatela.org/machform/view.php?id=85847"
        />
      </HeroHeader>
      <FluidContainer>
        <Typography variant="sectionHeader">Meet the Candidates</Typography>
        <Divider margin="lg" />
        <PositionDescriptions data={asiCandidatesData?.data} />
        <Typography variant="sectionHeader">Choose to Lead</Typography>
        <Divider margin="lg" />
        <InfoPanel
          description="Running for office is the perfect chance to help your voice be
            heard. As a part of student government, students can network, gain
            leadership experience, and be the voice for students. If elected,
            you will be able to help the students of Cal State LA and
            assist with essential changes on campus."
          imgAlt="Students leading other students"
          imgSrc="/choose-to-lead.png"
          theme="light"
        ></InfoPanel>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Election Events</Typography>
        <Divider margin="reg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {electionEvents.map((e, i) => (
            <Card
              key={i}
              title={e.title}
              date={e.startDate}
              location={e.location}
              time={e.startTime}
            >
              {e.description}
            </Card>
          ))}
        </div>
      </FluidContainer>
      <FluidContainer padding="px-16 max-xl:px-9 max-sm:px-4">
        <CTA
          title="Elevate your Journey!"
          description="Ready to elevate your college journey? Apply now to uncover the amazing things your FULL potential can bring to you and your peers!"
          theme="gold"
        >
          <Button
            variant="black"
            borderless
            text="ASI Application"
            href="https://asicalstatela.org/machform/view.php?id=85847"
          />
          <Button
            variant="grey"
            text="U-SU BOD Application"
            href="https://form.jotform.com/usugraffix/u-su-board-of-directors-application"
          />
        </CTA>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Position Descriptions</Typography>
        <Divider />
        <PositionDescriptions data={typedAsiData?.data} />
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">
          Basic Eligibility Requirements
        </Typography>
        <Divider margin="lg" />
        <div className="my-6">
          <Typography variant="copy">
            Eligibility to hold ASI office or serve on a committee will be
            verified by the University Registrar.
          </Typography>
        </div>
        {eligibilityReqs.map((e, i) => (
          <BulletList key={i} title={e.title} description={e.description} />
        ))}
        <div className="my-6">
          <Typography variant="copy">
            If you have any questions regarding the process or requirements
            please call the ASI Administrative Office, U-SU 203 at 323-343-4778
            or email us.
          </Typography>
        </div>
      </FluidContainer>
    </div>
  );
}
