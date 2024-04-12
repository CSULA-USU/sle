import {
  Button,
  InfoPanel,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
          content="CSULA, Cal State LA, ASI, Associated Students, Inc., Student Leader Elections, University Student Government, How to Vote, GET Mobile, GET Website"
        />
        <meta
          name="description"
          content="Learn how to vote on GET Mobile and the GET Website for Cal State LA's Studnet Leader Elections."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroHeader
        title="How to Vote"
        imgAlt="SLE Vote Header 1"
        imgSrc="/vote/sle-vote-hero.svg"
      >
        <Button variant="black" text="GET Mobile" href="#mobile" />
        <Button variant="grey" text="GET Website" href="#website" />
      </HeroHeader>

      <FluidContainer>
        <div className="pt-4 pb-6 flex justify-between md:p-12 md:justify-evenly">
          <Link
            href="
            https://apps.apple.com/us/app/cal-state-la-getmobile/id1043352893?mt=8"
          >
            <Image
              alt="Download from the App Store Badge"
              src="/vote/download-on-the-app-store.png"
              width={160}
              height={48}
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.dub.app.csula&pli=1">
            <Image
              alt="Download from the Play Store Badge"
              src="/vote/get-it-on-google-play.png"
              width={160}
              height={48}
            />
          </Link>
        </div>
        <div id="mobile">
          <Typography variant="sectionHeader">Voting on GET Mobile</Typography>
          <Divider margin="reg" />
          <InfoPanel
            title="Voting on GET Mobile"
            description=" In the GET main menu, tap Cal State LA voting. If you were
              enrolled in DUO authentication, follow the instructions to
              complete DUO authentication process."
            imgAlt="GET Mobile Screenshot Step 1"
            imgSrc="/vote/get-mobile-1.jpeg"
            theme="light"
          />
          <InfoPanel
            title="Get Mobile Spotlight"
            description="Alternatively, click on Cal State LA Voting in Spotlight view."
            imgAlt="GET Mobile Screenshot Step 2"
            imgSrc="/vote/get-mobile-2.jpeg"
            theme="light"
          />
          {/* <InfoPanel
            title="Voting Summary"
            description="Tap the position you would like to vote for. It will display the
          candidates for that position. For more information on the
          candidates and their platforms, tap the link shown below."
            imgAlt="GET Mobile Scrensshot Step 2"
            imgSrc="/vote/get-ss-2.png"
            theme="light"
          />
          <InfoPanel
            title="Electing a Candidate"
            description="Once you have selected your candidate, the status will change from
          Not Voted to Voted. Repeat this process for all offices that have
          candidates up for election. Once you have voted, you will not be
          able to change your selection. You will also be able to choose a
          representative for your college. For example, if you are student
          of the College of Natural and Social Sciences, you will be able to
          vote for the representative from your respective college."
            imgAlt="GET Mobile Scrensshot Step 3"
            imgSrc="/vote/get-ss-3.png"
            theme="light"
          /> */}
          <InfoPanel
            title="Login"
            description="Log in to calstatela.edu."
            imgAlt="GET Website Screenshot Step 1"
            imgSrc="/vote/web-1.png"
            theme="light"
          />
          <InfoPanel
            title="Network Credentials"
            description="Click on MyCalStateLA. Enter your network credentials. (If you were enrolled in DUO authentication, follow the
            instructions to complete the DUO authentication process.)"
            imgAlt="GET Website Screenshot Step 2"
            imgSrc="/vote/web-2.png"
            theme="light"
          />
          <InfoPanel
            title="Cal State LA Elections Menu"
            description="Click on the Cal State LA Elections menu item."
            imgAlt="GET Website Screenshot Step 3"
            imgSrc="/vote/web-3.png"
            theme="light"
          />
          <InfoPanel
            title="Voting Options"
            description="This brings up Voting Options."
            imgAlt="GET Website Screenshot Step 4"
            imgSrc="/vote/web-4.png"
            theme="light"
          />
          <InfoPanel
            title="Summary Page"
            description="Click on Cal State LA Voting."
            imgAlt="GET Website Screenshot Step 5"
            imgSrc="/vote/web-5.png"
            theme="light"
          />
          <InfoPanel
            title="Office Vote"
            description="Once ready to vote, click on the office you would like to vote
          for. This will take you to the screen which displays the
          candidates competing for the selected office."
            imgAlt="GET Website Screenshot Step 6"
            imgSrc="/vote/web-6.png"
            theme="light"
          />
          <InfoPanel
            title="Elect Candidate"
            description="Next, click on the Elect button for the chosen candidate."
            imgAlt="GET Website Screenshot Step 7"
            imgSrc="/vote/web-7.png"
            theme="light"
          />
          <InfoPanel
            title="Voting Status"
            description="Then, click on the Vote button. Voting status will change from Not
          Voted to Voted. Repeat the process for all offices that have candidates up for
          election. Once you have voted, you will not be able to change your
          selection."
            imgAlt="GET Website Screenshot Step 8"
            imgSrc="/vote/web-8.png"
            theme="light"
          />
          <InfoPanel
            title="Choosing a Representative"
            description="You can choose a representative for your respective college. Example: If you are a student of the College of Natural and Social
          Sciences then you will be able to vote for the representative from
          your college."
            imgAlt="GET Website Screenshot Step 9"
            imgSrc="/vote/web-9.png"
            theme="light"
          />
          <InfoPanel
            title="Board of Directors"
            description="You can select and vote for up to 8 candidates."
            imgAlt="GET Website Screenshot Step 10"
            imgSrc="/vote/web-10.png"
            theme="light"
          />
          <InfoPanel
            title="Too Many Votes"
            description="If you vote for more than eight candidates, you will get the following error."
            imgAlt="GET Website Screenshot Step 11"
            imgSrc="/vote/web-11.png"
            theme="light"
          />
          <InfoPanel
            title="No Votes"
            description="If you select no candidates you will get the following error."
            imgAlt="GET Website Screenshot Step 12"
            imgSrc="/vote/web-12.png"
            theme="light"
          />
        </div>

        {/* <div id="website">
          <Typography variant="sectionHeader">Voting on GET Website</Typography>
          <Divider margin="reg" />
          <InfoPanel
            title="Login"
            description="Log in to calstatela.edu."
            imgAlt="GET Website Screenshot Step 1"
            imgSrc="/vote/web-1.png"
            theme="light"
          />
          <InfoPanel
            title="Network Credentials"
            description="Click on MyCalStateLA. Enter your network credentials. (If you were enrolled in DUO authentication, follow the
            instructions to complete the DUO authentication process.)"
            imgAlt="GET Website Screenshot Step 2"
            imgSrc="/vote/web-2.png"
            theme="light"
          />
          <InfoPanel
            title="Cal State LA Elections Menu"
            description="Click on the Cal State LA Elections menu item."
            imgAlt="GET Website Screenshot Step 3"
            imgSrc="/vote/web-3.png"
            theme="light"
          />
          <InfoPanel
            title="Voting Options"
            description="This brings up Voting Options."
            imgAlt="GET Website Screenshot Step 4"
            imgSrc="/vote/web-4.png"
            theme="light"
          />
          <InfoPanel
            title="Summary Page"
            description="Click on Cal State LA Voting."
            imgAlt="GET Website Screenshot Step 5"
            imgSrc="/vote/web-5.png"
            theme="light"
          />
          <InfoPanel
            title="Office Vote"
            description="Once ready to vote, click on the office you would like to vote
          for. This will take you to the screen which displays the
          candidates competing for the selected office."
            imgAlt="GET Website Screenshot Step 6"
            imgSrc="/vote/web-6.png"
            theme="light"
          />
          <InfoPanel
            title="Elect Candidate"
            description="Next, click on the Elect button for the chosen candidate."
            imgAlt="GET Website Screenshot Step 7"
            imgSrc="/vote/web-7.png"
            theme="light"
          />
          <InfoPanel
            title="Voting Status"
            description="Then, click on the Vote button. Voting status will change from Not
          Voted to Voted. Repeat the process for all offices that have candidates up for
          election. Once you have voted, you will not be able to change your
          selection."
            imgAlt="GET Website Screenshot Step 8"
            imgSrc="/vote/web-8.png"
            theme="light"
          />
          <InfoPanel
            title="Choosing a Representative"
            description="You can choose a representative for your respective college. Example: If you are a student of the College of Natural and Social
          Sciences then you will be able to vote for the representative from
          your college."
            imgAlt="GET Website Screenshot Step 9"
            imgSrc="/vote/web-9.png"
            theme="light"
          />
          <InfoPanel
            title="Board of Directors"
            description="You can select and vote for up to 8 candidates."
            imgAlt="GET Website Screenshot Step 10"
            imgSrc="/vote/web-10.png"
            theme="light"
          />
          <InfoPanel
            title="Too Many Votes"
            description="If you vote for more than eight candidates, you will get the following error."
            imgAlt="GET Website Screenshot Step 11"
            imgSrc="/vote/web-11.png"
            theme="light"
          />
          <InfoPanel
            title="No Votes"
            description="If you select no candidates you will get the following error."
            imgAlt="GET Website Screenshot Step 12"
            imgSrc="/vote/web-12.png"
            theme="light"
          />
        </div> */}
      </FluidContainer>
    </>
  );
}
