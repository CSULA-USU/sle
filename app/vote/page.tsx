import {
  Button,
  CTA,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";

export default function Vote() {
  return (
    <>
      <HeroHeader
        title="How to Vote"
        imgAlt="SLE Vote Header 1"
        imgSrc="/vote/sle-vote-hero.svg"
      >
        <Button variant="black" text="GET Mobile" href="#mobile" />
        <Button variant="grey" text="GET Website" href="#website" />
      </HeroHeader>
      <FluidContainer>
        <div id="mobile">
          <Typography variant="sectionHeader">Voting on GET Mobile</Typography>
          <Divider margin="reg" />
          <CTA
            title="Voting on GET Mobile"
            description=" In the GET main menu, tap Cal State LA voting. If you were
              enrolled in DUO authentication, follow the instructions to
              complete DUO authentication process."
            imgAlt="GET Mobile Scrensshot Step 1"
            imgSrc="/vote/get-ss-1.png"
            theme="light"
          ></CTA>
          <CTA
            title="Voting Summary"
            description="Tap the position you would like to vote for. It will display the
          candidates for that position. For more information on the
          candidates and their platforms, tap the link shown below."
            imgAlt="GET Mobile Scrensshot Step 2"
            imgSrc="/vote/get-ss-2.png"
            theme="light"
          ></CTA>
          <CTA
            title="Electing a Candidate"
            description="Once you have selected your candidate, the status will change from
          Not Voted to Voted. Repeat this process for all offices that have
          candidates up for election. Once you have voted, you will not be
          able to change your selection. You will also be able to choose a
          representative for your college. For example, If you are student
          of the College of Natural and Social Sciences, you will be able to
          vote for the representative from your respective college."
            imgAlt="GET Mobile Scrensshot Step 3"
            imgSrc="/vote/get-ss-3.png"
            theme="light"
          ></CTA>
        </div>
        <div id="website">
          <Typography variant="sectionHeader">Voting on GET Website</Typography>
          <Divider margin="reg" />
          <CTA
            title="Login"
            description="Log in to calstatela.edu."
            imgAlt="GET Website Screenshot Step 1"
            imgSrc="/vote/web-1.png"
            theme="light"
          ></CTA>
          <CTA
            title="Network Credentials"
            description="Click on MyCalStateLA. Enter your network credentials. (If you were enrolled in DUO authentication, follow the
            instructions to complete the DUO authentication process.)"
            imgAlt="GET Website Screenshot Step 2"
            imgSrc="/vote/web-2.png"
            theme="light"
          ></CTA>
          <CTA
            title="CalState LA Elections Menu"
            description="Click on the CalState LA Elections menu item."
            imgAlt="GET Website Screenshot Step 3"
            imgSrc="/vote/web-3.png"
            theme="light"
          ></CTA>
          <CTA
            title="Voting Options"
            description="This brings up Voting Options."
            imgAlt="GET Website Screenshot Step 4"
            imgSrc="/vote/web-4.png"
            theme="light"
          ></CTA>
          <CTA
            title="Summary Page"
            description="Click on the CalStateLA Voting Summary page."
            imgAlt="GET Website Screenshot Step 5"
            imgSrc="/vote/web-5.png"
            theme="light"
          ></CTA>
          <CTA
            title="Office Vote"
            description="Once ready to vote, click on the office you would like to vote
          for. This will take you to the screen which displays the
          candidates competing for the selected office."
            imgAlt="GET Website Screenshot Step 6"
            imgSrc="/vote/web-6.png"
            theme="light"
          ></CTA>
          <CTA
            title="Elect Candidate"
            description="Next, click on the Elect button for the chosen candidate."
            imgAlt="GET Website Screenshot Step 7"
            imgSrc="/vote/web-7.png"
            theme="light"
          ></CTA>
          <CTA
            title="Voting Status"
            description="Then, click on the Vote button. Voting status will change from Not
          Voted to Voted. Repeat the process for all offices that have candidates up for
          election. Once you have voted, you will not be able to change your
          selection."
            imgAlt="GET Website Screenshot Step 8"
            imgSrc="/vote/web-8.png"
            theme="light"
          ></CTA>
          <CTA
            title="Choosing a Representative"
            description="You can choose a representative for your respective college. Example: If you are student of the College of Natural and Social
          Sciences then you will be able to vote for the representative from
          your college."
            imgAlt="GET Website Screenshot Step 9"
            imgSrc="/vote/web-9.png"
            theme="light"
          ></CTA>
          <CTA
            title="Board of Directors"
            description="You can select and vote for up to 8 candidates."
            imgAlt="GET Website Screenshot Step 10"
            imgSrc="/vote/web-10.png"
            theme="light"
          ></CTA>
          <CTA
            title="Too Many Votes"
            description="If you vote for more than eight candidates you will get the following error."
            imgAlt="GET Website Screenshot Step 11"
            imgSrc="/vote/web-11.png"
            theme="light"
          ></CTA>
          <CTA
            title="No Votes"
            description="If you select no candidates you will get the following error."
            imgAlt="GET Website Screenshot Step 12"
            imgSrc="/vote/web-12.png"
            theme="light"
          ></CTA>
        </div>
      </FluidContainer>
    </>
  );
}
