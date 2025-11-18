import {
  BulletList,
  Button,
  // CTA,
  Divider,
  FluidContainer,
  HeroHeader,
  InfoPanel,
  Typography,
} from "@/components";
import {
  // Card,
  PositionDescriptions,
} from "@/modules";
import type { Metadata } from "next";
import electionEventsData from "@/data/usu/usu-election-events.json";
import usuData from "@/data/usu/usu-positions.json";
import usuResponsibilitesData from "@/data/usu/usu-responsibilities.json";
import usuBenefitsData from "@/data/usu/usu-benefits.json";
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
const usuResponsibilities = usuResponsibilitesData;
const usuBenefits = usuBenefitsData;

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
        imgAlt=""
        imgSrc="/headers/header-2025-2.svg"
        title="U-SU BOD Election"
        imgSrcMobile="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/hero//mobile-header-2025.svg"
      >
        {/* <Button
          variant="yellow"
          text="Application"
          href="https://form.jotform.com/210416532268047"
          isExternalLink
        /> */}
        <Button
          variant="yellow"
          text="Position Descriptions"
          href="#position-descriptions"
          class="mr-4"
        />
        <Button variant="grey" text="Eligibility" href="#eligibility-section" />
      </HeroHeader>
      <FluidContainer>
        <Typography variant="sectionHeader" as="h2">
          University&ndash;Student Union &mdash; Board of Directors
        </Typography>
        <Divider margin="lg" />
        <InfoPanel
          description="Are you ready to lead, connect, and make a meaningful difference? Join the U-SU Board of Directors and become part of a community dedicated to collaboration, inclusion, and growth. Develop valuable professional skills, expand your network, and vote on policies that shape and enhance the U-SU experience. Your voice matters! This is your chance to create a lasting impact."
          imgAlt="Students leading other students"
          imgSrc="/headers/own-it-pages.jpg"
          theme="light"
        />
      </FluidContainer>
      {/* Election Events Section */}
      {/* <FluidContainer>
        <Typography variant="sectionHeader">Election Events</Typography>
        <Divider />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {electionEvents.length > 0 ? (
            electionEvents.map((electionEvent: ElectionEventProps, idx) => (
              <Card electionEvent={electionEvent} key={idx} />
            ))
          ) : (
            <Typography>
              No events scheduled, please check again later
            </Typography>
          )}
        </div>
      </FluidContainer> */}

      {/* Meet the Candidates Section comment out during marketing phase*/}
      {/* <FluidContainer id="candidates-section">
        <Typography variant="sectionHeader">Meet the Candidates</Typography>
        <Divider margin="lg" />
        <PositionDescriptions data={bodCandidatesData?.data} />
      </FluidContainer> */}

      {/* Position Descriptions Section commented out during voting phase  */}
      <FluidContainer id="position-descriptions">
        <Typography variant="sectionHeader" as="h2">
          Position Descriptions
        </Typography>
        <Divider />
        <PositionDescriptions data={typedUsuData?.data} />
      </FluidContainer>

      {/* Responsibilities and Requirements Section */}
      <FluidContainer>
        <Typography variant="sectionHeader" as="h2">
          Responsibilities and Requirements
        </Typography>
        <Divider />
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
          {usuResponsibilities?.list && (
            <BulletList
              title="Some responsibilities include:"
              description={usuResponsibilities.list}
            />
          )}
          <img
            src="/usu/completed-tasks.svg"
            className="max-h-48 w-auto my-2"
            alt=""
          />
        </div>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader" as="h2">
          Benefits of Serving
        </Typography>
        <Divider />
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
          {usuBenefits?.list && (
            <BulletList
              title="Some benefits include:"
              description={usuBenefits.list}
            />
          )}
          <img
            src="/usu/career-progress.svg"
            className="max-h-48 w-auto my-2"
            alt=""
          />
        </div>
      </FluidContainer>
      {/* <FluidContainer padding="py-8 px-16 max-xl:px-9 max-sm:px-4">
        <CTA
          title="Elevate your Journey!"
          description="Ready to elevate your college journey? Apply now to uncover the amazing things your FULL potential can bring to you and your peers!"
          theme="gold"
        >
          <Button
            variant="black"
            text="Application"
            href="https://form.jotform.com/210416532268047"
            isExternalLink
            borderless
          />
        </CTA>
      </FluidContainer> */}

      <FluidContainer id="eligibility-section">
        <Typography variant="sectionHeader" as="h2">
          Eligibility
        </Typography>
        <Divider margin="lg" />
        <div className="my-6">
          <Typography variant="copy" fontSize="xl">
            Eligibility to serve on the Board of Directors will be verified by
            the Office of the Dean of Students.
          </Typography>
        </div>
        {eligibilityReqs.map((e, i) => (
          <BulletList key={i} title={e.title} description={e.description} />
        ))}
        <div className="my-6">
          <Typography variant="copy" fontSize="xl">
            If you have any questions regarding the process or requirements,
            please call the U&ndash;SU Administrative Front Desk at (323)
            343&ndash;2450 or email us at info.usu@calstatelaelections.org
          </Typography>
        </div>
      </FluidContainer>
    </div>
  );
}
