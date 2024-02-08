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
import Head from "next/head";
import electionEvents from "@/data/usu/usu-election-events.json";
import usuData from "@/data/usu/usu-positions.json";
import eligibilityReqs from "@/data/usu/usu-eligibility-requirements.json";

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
        imgSrc="/sle-apply.png"
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
          description="Ready to elevate your college journey? Apply now to uncover the amazing things your FULL potential can bring to you and your peers!"
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
            please call the U-SU Administrative Front Desk at (323) 343-2450.
          </Typography>
        </div>
      </FluidContainer>
    </div>
  );
}
