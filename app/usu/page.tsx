import {
  BulletList,
  Button,
  CTA,
  Divider,
  FluidContainer,
  HeroHeader,
  InfoPanel,
  Typography,
} from "@/components";
import { Card, PositionDescriptions } from "@/modules";
import type { Metadata } from "next";
import electionEventsData from "@/data/usu/usu-election-events.json";
import usuData from "@/data/usu/usu-positions.json";
import bodCandidatesData from "@/data/usu/usu-candidates.json";
import eligibilityReqs from "@/data/usu/usu-eligibility-requirements.json";
import {
  ElectionEventProps,
  filterElectionEvents,
  sortElectionEvents,
} from "@/data/util/election-events-helper";

// Assuming the structure of your JSON data is similar to this
interface PositionData {
  type: string;
  text?: string;
  list?: string[];
}

interface Position {
  positionName: string;
  positionData: PositionData[];
}

interface Section {
  sectionName: string;
  positions: Position[];
}

interface UsuData {
  data: Section[];
}

const typedUsuData: UsuData = usuData;

export const metadata: Metadata = {
  title: "U-SU Board of Directors",
  description:
    "Running for office is the perfect chance to help your voice be heard. As a part of student government, students can network, gain leadership experience, and be the voice for students. If elected, you will be able to help the students of Cal State LA and assist with essential changes on campus.",
  authors: [
    {
      name: "University-Student Union at Cal State LA",
      url: "https://www.calstatelausu.org/",
    },
  ],
  keywords: [
    "University-Student Union",
    "U-SU",
    "Student Leader Elections",
    "Application",
    "Choose to lead",
    "Election Events",
    "Application Opens",
    "Info Sessions",
    "Application Deadline",
    "BOD",
    "Candidate Campaign Week",
    "Election Results",
    "Position Descriptions",
    "Executive Positions",
    "Board of Directors",
    "Board Member",
    "Basic Eligibility Requirements",
  ],
};

export default function USU() {
  let electionEvents: ElectionEventProps[] =
    filterElectionEvents(electionEventsData);
  sortElectionEvents(electionEvents);

  return (
    <div>
      <HeroHeader
        imgAlt="ASI General Election Header Image"
        imgSrc="/sle-apply.png"
        title="U-SU BOD Election"
      >
        <Button
          variant="yellow"
          text="Application"
          href="https://form.jotform.com/240387162166154"
        />
      </HeroHeader>

      <FluidContainer>
        <Typography variant="sectionHeader">Meet the Candidates</Typography>
        <Divider margin="lg" />
        <PositionDescriptions data={bodCandidatesData?.data} />
        <Typography variant="sectionHeader">Choose to Lead</Typography>
        <Divider margin="lg" />
        <InfoPanel
          description="Running for office is the perfect chance to help your voice be
            heard. As a part of student government, students can network, gain
            leadership experience, and be the voice for students. If elected,
            you will be able to help the students of Cal State LA and
            assist with essential changes on campus."
          imgAlt="Students leading other students"
          imgSrc="/usu-choose-to-lead.png"
          theme="light"
        ></InfoPanel>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Election Events</Typography>
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {electionEvents.length > 0 ? (
            electionEvents.map((electionEvent: ElectionEventProps, idx) => (
              <Card electionEvent={electionEvent} key={idx} />
            ))
          ) : (
            <Typography>
              No events schedule, please check again later
            </Typography>
          )}
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
            href="https://asicalstatela.org/general-election/2025-26-student-leader-election-application"
          />
          <Button
            variant="grey"
            text="U-SU BOD Application"
            href="https://form.jotform.com/240387162166154"
          />
        </CTA>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Position Descriptions</Typography>
        <Divider />
        <PositionDescriptions data={typedUsuData?.data} />
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
            If you have any questions regarding the process or requirements,
            please call the U-SU Administrative Front Desk at (323) 343-2450 or
            email us at info.usu@calstatelaelections.org
          </Typography>
        </div>
      </FluidContainer>
    </div>
  );
}
