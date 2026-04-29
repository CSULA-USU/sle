import Image from "next/image";
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
  CandidateGrid,
  PositionDescriptions,
} from "@/modules";
import type { Metadata } from "next";
import electionEventsData from "@/data/usu/usu-election-events.json";
// import usuData from "@/data/usu/usu-positions.json";
import usuResponsibilitesData from "@/data/usu/usu-responsibilities.json";
import usuCommitteesData from "@/data/usu/usu-committees.json";
import usuBenefitsData from "@/data/usu/usu-benefits.json";
import bodCandidatesData from "@/data/usu/usu-candidates.json";
import usuData from "@/data/usu/usu-results.json";
// import eligibilityReqs from "@/data/usu/usu-eligibility-requirements.json";
import {
  ElectionEventProps,
  filterElectionEvents,
  sortElectionEvents,
} from "@/data/util/election-events-helper";
import { ElectionResults } from "@/modules/ElectionResults/ElectionResults";

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

// const typedUsuData: UsuData = usuData;
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
        imgSrc="logos/sle-logo.png"
        title="U-SU BOD Election"
        imgSrcMobile="logos/sle-logo.png"
      >
        {/* Buttons only needed during recruitment phase */}
        {/* <Button
          variant="yellow"
          text="Application"
          href="https://form.jotform.com/210416532268047"
          isExternalLink
        /> */}
        {/* <Button
          variant="yellow"
          text="Application"
          href="https://form.jotform.com/210416532268047"
          class="mr-4"
          isExternalLink
        /> */}

        {/* Buttons for vote phase only */}
        {/* <Button
          variant="yellow"
          text="Vote Here"
          href="https://calstatela.presence.io/form/2026-student-leader-elections-voting"
          class="mr-4"
        />
        <Button
          variant="grey"
          text="Candidates"
          href="#candidates-section"
          class="mr-4"
        /> */}

        {/* Button only for results phase */}
        <Button
          variant="yellow"
          text="Winners"
          href="#candidates-section"
          class="mr-4"
        />
        {/* <Button
          variant="grey"
          text="Vote Totals"
          href="#votes-section"
          class="mr-4"
        /> */}

        {/* <Button variant="grey" text="Eligibility" href="#eligibility-section" /> */}
      </HeroHeader>
      <FluidContainer>
        <Typography variant="sectionHeader" as="h2">
          University&ndash;Student Union &mdash; Board of Directors
        </Typography>
        <Divider margin="lg" />
        <InfoPanel
          title="With open doors and minds, we provide space and opportunities enabling Golden Eagles to soar"
          description="The Board of Directors is the oversight board for the U-SU comprised of student leaders who interact with campus faculty and staff to help provide direction for the U-SU and advocacy for students at Cal State LA. There are 8 positions in total: 6 student directors, 1 vice-chair, and 1 chair."
          imgAlt="Students leading other students"
          imgSrc="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/pages/governance/bod/2026/BOD-Roster.webp"
          theme="light"
        />

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

        {/* OLD Meet the Candidates Section comment out during marketing phase*/}
        {/*<FluidContainer id="candidates-section">
        <Typography variant="sectionHeader">Meet the Candidates</Typography>
        <Divider margin="lg" />
        <PositionDescriptions data={bodCandidatesData?.data} />
      </FluidContainer>*/}

        {/* Meet the Candidates Section */}
        <FluidContainer id="candidates-section" padding="0">
          {/* Show this title only in vote phase */}
          {/*<Typography variant="sectionHeader">Meet the Candidates</Typography>*/}

          {/* Show this title only in results phase */}
          <Typography variant="sectionHeader">Meet the Winners</Typography>

          <Divider margin="lg" />
          <Typography variant="informational">
            Click on a candidate to learn more about their platform and why they
            deserve your vote.
          </Typography>
          <CandidateGrid data={bodCandidatesData?.data} />
        </FluidContainer>

        {/* Position Descriptions Section commented out during voting phase  */}
        {/* <FluidContainer id="position-descriptions">
        <Typography variant="sectionHeader" as="h2">
          Position Descriptions
        </Typography>
        <Divider />
        <PositionDescriptions data={typedUsuData?.data} />
      </FluidContainer> */}

        {/* Responsibilities and Requirements Section. Hide for voting phase? */}
        {/* <FluidContainer>
        <Typography variant="sectionHeader" as="h2">
          Responsibilities and Requirements
        </Typography>
        <Divider />
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col">
            {usuResponsibilities?.list && (
              <BulletList
                title="Some responsibilities include:"
                description={usuResponsibilities.list}
              />
            )}
            {usuCommitteesData?.list && (
              <BulletList
                title="The BOD has the following standing committees:"
                description={usuCommitteesData.list}
              />
            )}
          </div>
          <Image
            src="/usu/completed-tasks.svg"
            className="max-h-48 w-auto my-2"
            width={100}
            height={100}
            alt=""
          />
        </div>
      </FluidContainer> */}
        {/* Section for recruitment phase */}
        {/* <FluidContainer>
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
          <Image
            src="/usu/career-progress.svg"
            className="max-h-48 w-auto my-2"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </FluidContainer> */}
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

        {/* For recruitment phase */}
        {/* <FluidContainer id="eligibility-section">
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
      </FluidContainer> */}

        {/* Results Section */}
        {/* U-SU Vote total shown only in results phase */}
        {/* <FluidContainer id="votes-section" padding="0">
          <ElectionResults
            sectionTitle="U–SU Board Chair"
            description="The results for the 2026 Board Chair position."
            candidates={usuData.boardChair}
            totalVotes={1173}
          />

          <ElectionResults
            sectionTitle="U–SU Board Vice Chair"
            description="The results for the 2026 Vice Chair position."
            candidates={usuData.viceChair}
            totalVotes={1170}
          />

          <ElectionResults
            sectionTitle="U–SU Board of Directors"
            description="The top 6 candidates elected to the Board."
            candidates={usuData.boardOfDirectors}
            totalVotes={1159}
          />
        </FluidContainer> */}
      </FluidContainer>
    </div>
  );
}
