import {
  Button,
  CTA,
  InfoPanel,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import Head from "next/head";

export default function Vote() {
  return (
    <>
      <Head>
        <meta
          name="author"
          content="Associated Students, Inc. of Cal State LA"
        />
        <meta
          name="keywords"
          content="CSULA, Cal State LA, ASI, Associated Students, Inc., Student Leader Elections, University Student Government, How to Vote, Presence Voting, Vote, Elections, Candidates, Instructions, RSO, RSOs, Recognized Student Organizations, U-SU Board of Directors, student org, student organization"
        />
        <meta
          name="description"
          content="Learn how to vote on Presence for Cal State LA's Studnet Leader Elections."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHeader
        title="How to Vote"
        imgAlt="SLE Vote Header 1"
        imgSrc="/headers/header-2025-2.svg"
      >
        <Button variant="yellow" text="Open 4/14 at 11:59 PM" href="#" />
      </HeroHeader>

      <FluidContainer>
        <div id="mobile">
          <Typography variant="sectionHeader" as="h2">
            Voting on Presence
          </Typography>
          <Divider margin="reg" />
          <InfoPanel
            title="Presence Voting"
            description="Voting has never been easier! Click the link above to access the voting form on Presence. You can vote from any device with an internet connection. Please note that you will be prompted to login with Cal State LA credentials."
            imgAlt="Screenshot of the hero header section of the Presence voting form."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/voting-header.png"
            theme="light"
          />
          <InfoPanel
            title="View ASI Candidates"
            description="Click on view to see an image and statement from your candidates to see who deserves your vote. Scroll down to see all the positions available."
            imgAlt="Toggle shows a radio section to view candidates or hide the options. Selecting view shows an image of the candidate and their campaign statements."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/01-Select-View-Radio-Button.jpg"
            theme="light"
          />
          <InfoPanel
            title="Cast Your Vote"
            description="Select the candidate you feel will make the best impact on your campus."
            imgAlt="Radio button of candidate names. Selecting a candidate will show your support for them when you submit your vote."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/00---Select-View.jpg"
            theme="light"
          />
          <InfoPanel
            title="View College Representatives"
            description="Click through the radial buttons to see the candidates for each college and vote for your representatives underneath."
            imgAlt="Radio button of colleges. Selecting a college will show the candidates for that college."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/05---Select-Your-College.jpg"
            theme="light"
          />
          <InfoPanel
            title="Voting for the U-SU Board of Directors"
            description="Select 8 BOD candidates to elect into the U-SU Board of Directors."
            imgAlt="checkbox input of candidates. Select up to 8 candidates for the U-SU Board of Directors."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/11---Cast-Your-Vote.jpg"
            theme="light"
          />
          <InfoPanel
            title="Voting for Recognized Student Organizations"
            description="Click the dropdown to vote for a Recognized Student Organization! Each vote that an org gets equals $3 in funds raised. The top 3 RSOs with the most votes will receive additional funding. You do not have to be a member of the organization you wish to vote for. This question is optional; you may leave it blank if you do not wish to vote for a student org."
            imgAlt="screenshot of dropdown menu with recognized student organization names. Each vote an org gets equals $3 in funds raised. The top 3 RSOs with the most votes will receive additional funding: third place $100, second place $200, and first place $300."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/voting-rso.png"
            theme="light"
          />
          <InfoPanel
            title="Submit your Vote"
            description="When you're finished, return to the top and click the green submit button. All done! Thank you for making the campus a better place!"
            imgAlt="Green submit button at the top right corner of the page is available upon completion of all voting."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/12---voting-submit.png"
            theme="light"
          />
        </div>
      </FluidContainer>
      <FluidContainer>
        <CTA
          theme="gold"
          title="Make your voice heard today!"
          description="Click the link below in order to make an impact here at Cal State LA"
        >
          <Button variant="black" text="Open 4/14 at 11:59 PM" href="#" />
        </CTA>
      </FluidContainer>
    </>
  );
}
