import {
  BulletList,
  Button,
  InfoPanel,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import { PositionDescriptions } from "@/modules";
import type { Metadata } from "next";
import electionEventsData from "@/data/asi/asi-election-events.json";
import asiCandidatesData from "@/data/asi/asi-candidates.json";
import asiData from "@/data/asi/asi-positions.json";
import eligibilityReqs from "@/data/asi/asi-eligibility-requirements.json";
import {
  ElectionEventProps,
  filterElectionEvents,
  sortElectionEvents,
} from "@/data/util/election-events-helper";

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
  let electionEvents: ElectionEventProps[] =
    filterElectionEvents(electionEventsData);
  sortElectionEvents(electionEvents);

  return (
    <div>
      <HeroHeader
        imgAlt=""
        imgSrc="/headers/header-2025-2.svg"
        title="ASI General Election"
      >
        {/* <Button
          variant="yellow"
          text="Application"
          href="https://asicalstatela.org/general-election/2025-26-student-leader-election-application"
          isExternalLink
        /> */}
        <Button
          variant="yellow"
          text="Candidate Info"
          href="#meet-candidates"
        />
        <Button
          variant="yellow"
          text="Eligibility"
          href="#eligibility-section"
        />
      </HeroHeader>
      <FluidContainer>
        <Typography variant="sectionHeader" as="h2">
          Associated Students, Inc. &mdash; Student Government
        </Typography>
        <Divider margin="lg" />
        <InfoPanel
          description="ASI student leaders are empowered to advocate on behalf of students while participating in the University shared governance process. ASI student leaders work to improve the culture and education at Cal State LA and across the CSU."
          imgAlt="Students leading other students"
          imgSrc="/headers/own-it-pages.jpg"
          theme="light"
        />
      </FluidContainer>
      <FluidContainer id="meet-candidates">
        <Typography variant="sectionHeader" as="h2">
          Meet the Candidates
        </Typography>
        <Divider margin="lg" />
        <PositionDescriptions data={asiCandidatesData?.data} />
      </FluidContainer>
      {/* <FluidContainer>
        <Typography variant="sectionHeader" as="h2">Election Events</Typography>
        <Divider margin="reg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {electionEvents.length > 0 ? (
            electionEvents.map((electionEvent: ElectionEventProps, idx) => (
              <Card electionEvent={electionEvent} key={idx} />
            ))
          ) : (
            <Typography>
              No events scheduled, please check again later.
            </Typography>
          )}
        </div>
      </FluidContainer> */}
      {/* // CTA section commented out for voting phase */}
      {/* <FluidContainer padding="px-16 max-xl:px-9 max-sm:px-4">
        <CTA
          title="Elevate your Journey!"
          description="Ready to elevate your college journey? Apply now to uncover the amazing things your FULL potential can bring to you and your peers!"
          theme="gold"
        >
          <Button
            variant="black"
            borderless
            text="Application"
            href="https://asicalstatela.org/general-election/2025-26-student-leader-election-application"
            isExternalLink
          />
        </CTA>
      </FluidContainer> */}
      {/* <FluidContainer id="position-descriptions">
        <Typography variant="sectionHeader" as="h2">
          Position Descriptions
        </Typography>
        <Divider />
        <PositionDescriptions data={typedAsiData?.data} />
      </FluidContainer> */}
      <FluidContainer id="eligibility-section">
        <Typography variant="sectionHeader" as="h2">
          Basic Eligibility Requirements
        </Typography>
        <Divider margin="lg" />
        <div className="my-6">
          <Typography variant="copy" fontSize="xl">
            Eligibility to hold ASI office or serve on a committee will be
            verified by the University Registrar.
          </Typography>
        </div>
        {eligibilityReqs.map((e, i) => (
          <BulletList key={i} title={e.title} description={e.description} />
        ))}
        <div className="my-6">
          <Typography variant="copy" fontSize="xl">
            If you have any questions regarding the process or requirements
            please call the ASI Administrative Office, U-SU 203 at 323-343-4778
            or email us.
          </Typography>
        </div>
      </FluidContainer>
    </div>
  );
}
