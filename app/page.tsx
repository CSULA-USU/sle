import Image from "next/image";
import {
  Button,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroHeader
        imgAlt="Student Leader Elections Home Page Header Image"
        imgSrc="/sle-vote-header.png"
      ></HeroHeader>
      <FluidContainer>
        <Typography variant="pageHeader" color="white">
          Shape Your University Experience
        </Typography>
        <Divider />
        <div className="flex">
          <div className="mr-20 flex-col">
            <Typography variant="sectionHeader" color="white">
              Choose to lead
            </Typography>
            <Typography variant="copy" color="white">
              Running for office is the perfect chance to help your voice be
              heard. As a part of student government, students can network, gain
              leadership experience, and be the voice for students. If elected,
              you will be able to help the students of Cal State Los Angeles and
              assist with essential changes on campus.
            </Typography>
            <div>
              <Button variant="black" text="ASI Student Government" />
              <Button variant="grey" text="U-SU Board of Directors" />
            </div>
          </div>

          <Image
            alt="Students leading other students"
            src="/choose-to-lead.png"
            width={600}
            height={600}
          ></Image>
        </div>
        <Divider/>
        <div className="flex">
          <div className="mr-20 flex-col items-stretch">
            <Typography variant="sectionHeader" color="white">
              Your vote matters
            </Typography>
            <Typography variant="copy" color="white">
              Choose leaders who understand your needs, resonate with your
              values, and are dedicated to creating a campus that reflects your
              vision.
            </Typography>
            <div>
              <Button variant="black" text="Voting Instructions" />
            </div>
          </div>

          <Image
            alt="Students leading other students"
            src="/your-vote-matters.png"
            width={600}
            height={600}
          ></Image>
        </div>
      </FluidContainer>
    </div>
  );
}
