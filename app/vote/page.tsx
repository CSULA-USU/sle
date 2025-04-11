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
          content="Learn how to vote on Presence for Cal State LA's Student Leader Elections."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHeader
        title="How to Vote"
        imgAlt="SLE Vote Header 1"
        imgSrc="/headers/header-2025-2.svg"
      >
        <Button variant="yellow" text="Open 4/14 at 8:00 AM" href="#" />
      </HeroHeader>
      <FluidContainer>
        <div>
          <Typography variant="sectionHeader" as="h2">
            Student Leader Elections: Voting Instructions
          </Typography>
          <Divider margin="reg" />
          <InfoPanel
            title="April 14 to 18"
            description="Click the link above to access the voting form on Presence. You can vote from any device with an internet connection. Please note that you will be prompted to login with Cal State LA credentials."
            imgAlt="Screenshot of the hero header section of the Presence voting form."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/voting-header.png"
            theme="light"
          >
            <Typography variant="informational" color="black">
              Voting opens at 8:00 AM on Monday, April 14th
            </Typography>
            <Typography variant="informational" color="black">
              Voting closes at 11:59 PM on Friday, April 18th
            </Typography>
          </InfoPanel>
          <Typography variant="sectionHeader" as="h2">
            Associated Students Inc. (ASI)
          </Typography>
          <Divider margin="reg" />
          <InfoPanel
            title="View ASI Candidates"
            imgAlt="Toggle shows a radio section to view candidates or hide the options. Selecting view shows an image of the candidate and their campaign statements."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/01-Select-View-Radio-Button.jpg"
            theme="light"
          >
            <Typography variant="informational" color="black">
              Click &quot;View&quot; next to each position to learn more about
              the candidates. Read their statements and goals
            </Typography>
            <Typography variant="informational" color="black">
              Select the candidate who best aligns with you
            </Typography>
            <Typography variant="informational" color="black">
              You can only choose one candidate per executive role
            </Typography>
          </InfoPanel>
          <InfoPanel
            title="Cast Your Vote"
            description="Select the candidate you feel will make the most positive impact on your campus."
            imgAlt="Radio button of candidate names. Selecting a candidate will show your support for them when you submit your vote."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/00---Select-View.jpg"
            theme="light"
          />
          <Typography variant="sectionHeader" as="h2">
            Voting Instructions College Representatives
          </Typography>
          <Divider margin="reg" />
          <InfoPanel
            title="View College Representatives"
            imgAlt="Radio button of colleges. Selecting a college will show the candidates for that college."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/05---Select-Your-College.jpg"
            theme="light"
          >
            <Typography variant="informational" color="black">
              Use the dropdown menu to choose your college
            </Typography>
            <Typography variant="informational" color="black">
              Click &quot;View&quot; to see candidates for your college
            </Typography>
            <Typography variant="informational" color="black">
              Select your college rep from the dropdown list
            </Typography>
            <Typography variant="informational" color="black">
              Repeat for all other open positions
            </Typography>
            <Typography variant="informational" color="black">
              Note: Only one candidate can be selected per open position
            </Typography>
          </InfoPanel>
          <Typography variant="sectionHeader" as="h2">
            University-Student Union (U-SU) Board of Directors
          </Typography>
          <Divider margin="reg" />
          <InfoPanel
            title="Voting for the U-SU Board of Directors"
            imgAlt="checkbox input of candidates. Select up to 8 candidates for the U-SU Board of Directors."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/11---Cast-Your-Vote.jpg"
            theme="light"
          >
            <Typography variant="informational" color="black">
              Click &quot;View&quot; next to any candidate&apos;s name to learn
              more about them
            </Typography>
            <Typography variant="informational" color="black">
              You may select up to 8 candidates in this section
            </Typography>
          </InfoPanel>
          <Typography variant="sectionHeader" as="h2">
            Voting Instructions Recognized Student Organization (RSO) Voting
          </Typography>
          <Divider margin="reg" />
          <InfoPanel
            title="Your Vote = Real Support"
            imgAlt="Screenshot of the RSO voting section. Select one RSO at a time from the dropdown menu."
            imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/vote/instructions/voting-rso.png"
            theme="light"
            list={[
              "You don't need to be a member to vote-just show love for a group that's doing great work on campus",
              "Want to make the biggest impact? Encourage your friends to vote too.",
              "Make your voice count. Fund your community.",
            ]}
          >
            <Typography variant="informational" color="black">
              $3 per vote goes to the org you select! Plus, the top vote-getters
              can win bonuses totaling $600.
            </Typography>
            <Typography variant="informational" color="black">
              Select one Recognized Student Organization from the dropdown.
            </Typography>
          </InfoPanel>
          <Typography variant="sectionHeader" as="h2">
            Turn in Your Ballot!
          </Typography>
          <Divider margin="reg" />
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
          <Button variant="black" text="Open 4/14 at 8:00 AM" href="#" />
        </CTA>
      </FluidContainer>
    </>
  );
}
