import {
  Button,
  Divider,
  CTA,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroHeader
        imgAlt="Student Leader Elections Home Page Header Image"
        imgSrc="/home/sle-apply-header.svg"
      ></HeroHeader>
      <FluidContainer padding="0px">
        <Typography variant="pageHeader" color="white">
          Shape Your University Experience
        </Typography>
        <Divider />
        <div className="pb-4">
          <CTA
            title="Choose to lead"
            description="Running for office is the perfect chance to help your voice be
                heard. As a part of student government, students can network,
                gain leadership experience, and be the voice for students. If
                elected, you will be able to help the students of Cal State Los
                Angeles and assist with essential changes on campus."
            imgAlt="Students leading other students"
            imgSrc="/choose-to-lead.png"
          >
            <Button variant="black" text="ASI Student Government" />
            <Button variant="grey" text="U-SU Board of Directors" />
          </CTA>
          <Divider />
          <CTA
            title="Your vote matters"
            description="Choose leaders who understand your needs, resonate with your
                values, and are dedicated to creating a campus that reflects
                your vision."
            imgAlt="Students voting"
            imgSrc="/your-vote-matters.png"
          >
            <Button variant="black" text="Voting Instructions" />
          </CTA>
        </div>
      </FluidContainer>
    </div>
  );
}
