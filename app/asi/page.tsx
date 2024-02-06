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
import Head from "next/head";
import electionEvents from "@/data/asi/asi-election-events.json";
import asiData from "@/data/asi/asi-positions.json";
import eligibilityReqs from "@/data/asi/asi-eligibility-requirements.json";

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
          content="Running for office is the perfect chance to help your voice be heard. As a part of student government, students can network, gain leadership experience, and be the voice for students. If elected, you will be able to help the students of Cal State LA and assist with essential changes on campus."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroHeader
        imgAlt="ASI General Election Header Image"
        imgSrc="/sle-apply.png"
        title="ASI General Election"
      >
        <Button
          variant="yellow"
          text="Application"
          href="https://asicalstatela.org/election"
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
          imgSrc="/choose-to-lead.png"
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
