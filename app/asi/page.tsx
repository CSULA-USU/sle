import {
  Button,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import Image from "next/image";

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
        <Typography variant="copy">
          Eligibility to hold ASI office or serve on a committee will be
          verified by the University Registrar.
        </Typography>
        <Typography variant="footerHeader">
          General Applicant/Candidate Requirements
        </Typography>
        <ul>
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
      </FluidContainer>
    </div>
  );
}
