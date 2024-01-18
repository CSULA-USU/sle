import {
  Button,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import { Card } from "@/modules";
import Image from "next/image";
import electionEvents from "./election-events.json";

export default function ASI() {
  return (
    <div>
      <HeroHeader
        imgAlt="ASI General Election Header Image"
        imgSrc="/sle-apply.png"
        title="ASI General Election"
      >
        <Button variant="black" text="Application" />
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
        <div className="flex flex-wrap">
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
