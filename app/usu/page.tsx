import {
  Button,
  CTA,
  Divider,
  FluidContainer,
  HeroHeader,
  InfoPanel,
  Typography,
} from "@/components";
import { Card, PositionDescriptions } from "@/modules";
import Head from "next/head";
import electionEvents from "@/data/usu-election-events.json";
import usuData from "@/data/usu-positions.json";

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

export default function USU() {
  return (
    <div>
      <Head>
        <meta
          name="author"
          content="Associated Students, Inc. of Cal State LA"
        />
        <meta
          name="keywords"
          content="CSULA, Cal State LA, ASI, Associated Students, Inc., Student Leader Elections, University Student Government, Application, Choose to lead, Election Events, Application Opens, Info Sessions, Application Deadline, ASI Mandatory Candidate Briefing, Candidate Campaign Week, Election Results, Position Descriptions, U-SU Board of Directors, Basic Eligibility Requirements"
        />
        <meta
          name="description"
          content="Running for office is the perfect chance to help your voice be heard. As a part of student government, students can network, gain leadership experience, and be the voice for students. If elected, you will be able to help the students of Cal State Los Angeles and assist with essential changes on campus."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHeader
        imgAlt="ASI General Election Header Image"
        imgSrc="https://i.imgur.com/lLqBJNR.jpg"
        title="U-SU BOD Election"
      >
        <Button
          variant="yellow"
          text="Application"
          href="https://form.jotform.com/usugraffix/u-su-board-of-directors-application"
        />
      </HeroHeader>
      <FluidContainer>
        <Typography variant="sectionHeader">Choose to Lead</Typography>
        <Divider margin="lg" />
        <InfoPanel
          description="Running for office is the perfect chance to help your voice be
            heard. As a part of student government, students can network, gain
            leadership experience, and be the voice for students. If elected,
            you will be able to help the students of Cal State Los Angeles and
            assist with essential changes on campus."
          imgAlt="Students leading other students"
          imgSrc="/usu-choose-to-lead.png"
          theme="light"
        ></InfoPanel>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Election Events</Typography>
        <Divider margin="reg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {electionEvents.map((e, i) => (
            <Card key={i} title={e.title} date={e.date} location={e.location}>
              {e.description}
            </Card>
          ))}
        </div>
      </FluidContainer>
      <FluidContainer padding="px-16 max-xl:px-9 max-sm:px-4">
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
      </FluidContainer>

      <FluidContainer>
        <Typography variant="sectionHeader">Position Descriptions</Typography>
        <Divider margin="reg" />
        <PositionDescriptions data={typedUsuData?.data} />
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">
          Basic Eligibility Requirements
        </Typography>
        <Divider margin="lg" />
        <Typography variant="copy">
          Eligibility to hold ASI office or serve on a committee will be
          verified by the University Registrar.
        </Typography>
        <div className="m-7" />
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
              Have been enrolled at Cal State LA and completed two quarters
              prior to applying.
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Have earned no fewer than 9 quarter units of academic credit
              during that year prior to consideration.
            </Typography>
          </li>
          <li>
            <Typography variant="copy">
              Have earned a 2.0 or better grade point average during the 12
              months immediately preceding the quarter in which the appointment
              occurs.
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
        <div className="m-7" />
      </FluidContainer>
    </div>
  );
}
