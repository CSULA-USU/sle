import {
  Button,
  CTA,
  InfoPanel,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import { Card, PositionDescriptions } from "@/modules";
import Head from "next/head";
import electionEvents from "./election-events.json";
import asiData from "@/data/asi-positions.json";

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

interface AsiData {
  data: Section[];
}

const typedAsiData: AsiData = asiData;

export default function ASI() {
  return (
    <div>
      <Head>
        <meta
          name="author"
          content="Associated Students, Inc. of Cal State LA"
        />
        <meta
          name="keywords"
          content="CSULA, Cal State LA, ASI, Associated Students, Inc., Student Leader Elections, University Student Government, Application, Choose to lead, Election Events, Application Opens, Info Sessions, Application Deadline, ASI Mandatory Candidate Briefing, Candidate Campaign Week, Election Results, Position Descriptions, Executive Positions, ASI President, ASI Secretary Treasurer, ASI Vice President for Administration, ASI Vice PResident for Academic Governance, ASI Vice President for External Affairs & Advancement, ASI Vice President for Finance, College Representative & Reps at Large, College Representatives, Diversity and Inclusion & Civic Engagement Officers, ASI Commissioners, Election and Outreach Comissioner and Officials, Environment Affaris Commissioner, ASI Spriit Commissioner, Military Connected Representative, Senators, Academic Senators, Basic Eligibility Requirements"
        />
        <meta
          name="description"
          content="Running for office is the perfect chance to help your voice be heard. As a part of student government, students can network, gain leadership experience, and be the voice for students. If elected, you will be able to help the students of Cal State Los Angeles and assist with essential changes on campus."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHeader
        imgAlt="ASI General Election Header Image"
        imgSrc="/sle-apply.png"
        title="ASI General Election"
      >
        <Button
          variant="black"
          text="Application"
          href="https://asicalstatela.org/electionapp"
        />
      </HeroHeader>
      <FluidContainer>
        <Typography variant="sectionHeader">Choose to Lead</Typography>
        <Typography variant="sectionHeader">Choose to Lead</Typography>
        <Divider margin="none" />
        <InfoPanel
          description="Running for office is the perfect chance to help your voice be
            heard. As a part of student government, students can network, gain
            leadership experience, and be the voice for students. If elected,
            you will be able to help the students of Cal State Los Angeles and
            assist with essential changes on campus."
          imgAlt="Students leading other students"
          imgSrc="/choose-to-lead.png"
          theme="light"
        ></InfoPanel>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Election Events</Typography>
        <Divider margin="none" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {electionEvents.map((e, i) => (
            <Card key={i} title={e.title} date={e.date} location={e.location}>
              {e.description}
            </Card>
          ))}
        </div>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Position Descriptions</Typography>
        <Divider margin="none" />
        <PositionDescriptions data={typedAsiData?.data} />
      </FluidContainer>
      <CTA
        title="Elevate your Journey!"
        description="Ready to elevate your college journey? Leap and apply now to uncover the amazing things your FULL potential can bring to you and your peers!"
        theme="gold"
      >
        <Button
          variant="black"
          borderless
          text="ASI Application"
          href="https://asicalstatela.org/electionapp"
        />
        <Button
          variant="grey"
          text="U-SU BOD Application"
          href="https://form.jotform.com/usugraffix/u-su-board-of-directors-application"
        />
      </CTA>
      <FluidContainer>
        <Typography variant="sectionHeader">
          Basic Eligibility Requirements
        </Typography>
        <Divider margin="none" />
        <div className="m-10" />
        <Typography variant="copy">
          Eligibility to hold ASI office or serve on a committee will be
          verified by the University Registrar.
        </Typography>
        <div className="m-10" />
        <Typography variant="footerHeader" color="black">
          General Applicant/Candidate Requirements
        </Typography>
        <ul className="list-disc ml-10">
          <li>
            <Typography variant="copy">
              Be considered in good standing with the University -must not be on
              academic, disciplinary or administrative probation
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Been enrolled at Cal State LA for one (1) semester prior to
              application
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Have a minimum 2.5 cumulative GPA during the last 12 months
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Be available for scheduled meetings
            </Typography>
          </li>
        </ul>
        <Typography variant="footerHeader" color="black">
          Undergraduate Applicant Requirements
        </Typography>
        <ul className="list-disc ml-10">
          <li>
            <Typography variant="copy">
              Earned at least six (6) semester units of academic credit per
              semester at Cal State LA during the past 12 months, prior to
              application (not including remedial courses)
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Enrolled in at least six (6) units per semester while in office.
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Maintain a 2.5 GPA each semester while in office.
            </Typography>
          </li>
        </ul>
        <Typography variant="footerHeader" color="black">
          Graduate Applicant Requirements
        </Typography>
        <ul className="list-disc ml-10">
          <li>
            <Typography variant="copy">
              Earned a total of twelve (12) units during your last year as an
              undergraduate -if the applicant’s BA/BS was received from Cal
              State LA within the past 3 years
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Earned at least three (3) units per semester units of continuous
              attendance
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Enrolled in at least three (3) semester units during the term the
              appointment/election occurs
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Maintain a 3.0 GPA each semester while in office
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Earned less than 50-semester units
            </Typography>
          </li>
        </ul>
        <div className="m-10" />
        <Typography variant="copy">
          If you have any questions regarding the process or requirements please
          call the ASI Administrative Office, U-SU 203 at 323-343-4778 or email
          us.
        </Typography>
        <div className="m-10" />
      </FluidContainer>
    </div>
  );
}
