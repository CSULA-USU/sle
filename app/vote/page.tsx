import { FluidContainer } from "@/components/FluidContainer";
import { Page } from "@/modules/Page";
import { HeroHeader } from "@/components/HeroHeader";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/Button";
import Image from "next/image";
export default function Vote() {
  return (
    <Page backgroundColor="white">
      <HeroHeader
        title="How to Vote"
        imgAlt="SLE Vote Header 1"
        imgSrc="/vote/sle-eddie-header.png"
      >
          <Button variant="black" text="GET Mobile"></Button>
          <Button variant="grey" text="GET Website"></Button>
      </HeroHeader>
      <FluidContainer>
        <Typography variant="sectionHeader">Voting on GET Mobile</Typography>
        <hr className="w-full h-px border-2 border-yellow-400"></hr>
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Voting on GET Mobile</Typography>
            <Typography variant="copy">
              In the GET main menu, tap Cal State LA voting. If you were
              enrolled in DUO authentication, follow the instructions to
              complete DUO authentication process.
            </Typography>
          </div>

          <Image
            alt="GET Screenshot 1"
            src="/vote/get-ss-1.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>
        <hr className="w-full h-px border-2 border-yellow-400"></hr>
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Voting Summary</Typography>
            <Typography variant="copy">
              Tap the position you would like to vote for, it will display the
              candidates for that position. For more information on the
              candidates and their platforms, tap the link show below
            </Typography>
          </div>

          <Image
            alt="GET Screenshot 2"
            src="/vote/get-ss-2.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>
        <hr className="w-full h-px border-2 border-yellow-400"></hr>
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Electing a Candidate</Typography>
            <Typography variant="copy">
              Once you have selected your candidate, the status will change from
              Not Voted to Voted. Repeat this process for all offices that have
              candidates up for election. Once you have voted, you will not be
              able to change your selection. You will also be able to choose a
              representative for your college. For example, If you are student
              of the College of Natural and Social Sciences, you will be able to
              vote for the representative from your respective college.
            </Typography>
          </div>

          <Image
            alt="GET Screenshot 3"
            src="/vote/get-ss-3.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>
        <FluidContainer> </FluidContainer>
        <Typography variant="sectionHeader">Voting on GET Website</Typography>
        <hr className="w-full h-px border-2 border-yellow-400"></hr>
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Voting on GET Mobile</Typography>
            <Typography variant="copy">
              In the GET main menu, tap Cal State LA voting. If you were
              enrolled in DUO authentication, follow the instructions to
              complete DUO authentication process.
            </Typography>
          </div>

          <Image
            alt="GET Screenshot 1"
            src="/vote/get-ss-1.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>
        <hr className="w-full h-px border-2 border-yellow-400"></hr>
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Voting Summary</Typography>
            <Typography variant="copy">
              Tap the position you would like to vote for, it will display the
              candidates for that position. For more information on the
              candidates and their platforms, tap the link show below
            </Typography>
          </div>

          <Image
            alt="GET Screenshot 2"
            src="/vote/get-ss-2.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>
        <hr className="w-full h-px border-2 border-yellow-400"></hr>
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Electing a Candidate</Typography>
            <Typography variant="copy">
              Once you have selected your candidate, the status will change from
              Not Voted to Voted. Repeat this process for all offices that have
              candidates up for election. Once you have voted, you will not be
              able to change your selection. You will also be able to choose a
              representative for your college. For example, If you are student
              of the College of Natural and Social Sciences, you will be able to
              vote for the representative from your respective college.
            </Typography>
          </div>

          <Image
            alt="GET Screenshot 3"
            src="/vote/get-ss-3.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>
      </FluidContainer>
    </Page>
  );
}
