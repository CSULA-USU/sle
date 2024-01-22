import {
  Button,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import { Card, PositionDescriptions } from "@/modules";
import Image from "next/image";
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
      <HeroHeader
        imgAlt="ASI General Election Header Image"
        imgSrc="/sle-apply.png"
        title="U-SU BOD Election"
      >
        <Button
          variant="black"
          text="Application"
          href="https://form.jotform.com/usugraffix/u-su-board-of-directors-application"
        />
      </HeroHeader>
      <FluidContainer>
        <Typography variant="sectionHeader">Choose to lead</Typography>
        <Divider margin="none" />
      </FluidContainer>
      <FluidContainer flex alignItems="center">
        <div className="mr-20 flex-col">
          <Typography variant="copy">
            Running for office is the perfect chance to help your voice be
            heard. As a part of student government, students can network, gain
            leadership experience, and be the voice for students. If elected,
            you will be able to help the students of Cal State Los Angeles and
            assist with essential changes on campus.
          </Typography>
        </div>

        <Image
          alt="Students leading other students"
          src="/choose-to-lead.png"
          width={600}
          height={600}
        ></Image>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Election Events</Typography>
        <Divider margin="none" />
        <Card title="Application Opens" date="Monday, January 1">
          Are you interested in running for a position? Not sure where to start?
          We encourage any interested student to pursue candidacy for elected
          student positions on the ASI Board of Directors and Cal State LA
          Academic Senate by filling the Candidate Elections Packet by the
          required deadline.
        </Card>
      </FluidContainer>
      <FluidContainer>
        <Typography variant="sectionHeader">Position Descriptions</Typography>
        <Divider margin="none" />
        <PositionDescriptions data={typedUsuData?.data} />
      </FluidContainer>
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
        <div className="m-10" />
      </FluidContainer>
    </div>
  );
}
