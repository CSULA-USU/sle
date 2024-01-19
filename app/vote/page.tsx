import {
  Button,
  CTA,
  Divider,
  FluidContainer,
  HeroHeader,
  Typography,
} from "@/components";
import Image from "next/image";
export default function Vote() {
  return (
    <>
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
        <Divider margin="reg" />
        <CTA
          title="Voting Summary"
          description="Tap the position you would like to vote for. It will display the
          candidates for that position. For more information on the
          candidates and their platforms, tap the link shown below."
          imgAlt="GET Mobile Scrensshot Step 2"
          imgSrc="/vote/get-ss-2.png"
          theme="light"
        ></CTA>
        <Divider margin="reg" />
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
        <FluidContainer> </FluidContainer>

        <Typography variant="sectionHeader">Voting on GET Website</Typography>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Login</Typography>
            <Typography variant="copy">Log in to calstatela.edu</Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 1"
            src="/vote/web-1.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Network Credentials</Typography>
            <Typography variant="copy">Click on MyCalStateLA.</Typography>
            <Typography variant="copy">
              Enter your network credentials.
            </Typography>
            <Typography variant="copy">
              (If you were enrolled in DUO authentication, follow the
              instructions to complete the DUO authentication process.)
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 2"
            src="/vote/web-2.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">
              CalState LA Elections Menu
            </Typography>
            <Typography variant="copy">
              Click on the CalState LA Elections menu item.
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 3"
            src="/vote/web-3.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Voting Options</Typography>
            <Typography variant="copy">
              This brings up Voting Options.
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 4"
            src="/vote/web-4.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Summary Page</Typography>
            <Typography variant="copy">
              Click on the CalStateLA Voting Summary page.
            </Typography>
            <Typography variant="copy">
              For more information on the Candidates visit:
              http://www.calstatela.edu/asi/elections
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 5"
            src="/vote/web-5.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Office Vote</Typography>
            <Typography variant="copy">
              Once ready to vote, click on the office you would like to vote
              for.
            </Typography>
            <Typography variant="copy">
              This will take you to the screen below which displays the
              candidates competing for the selected office.
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 6"
            src="/vote/web-6.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Elect Candidate</Typography>
            <Typography variant="copy">
              Next, click on the Elect button for the chosen candidate.
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 7"
            src="/vote/web-7.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Voting Status</Typography>
            <Typography variant="copy">
              Then, click on the Vote button. Voting status will change from Not
              Voted to Voted.
            </Typography>
            <Typography variant="copy">
              Repeat the process for all offices that have candidates up for
              election.
            </Typography>
            <Typography variant="copy">
              Once you have voted, you will not be able to change your
              selection.
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 8"
            src="/vote/web-8.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">
              Choosing a Representative
            </Typography>
            <Typography variant="copy">
              You can choose a representative for your respective college.
            </Typography>
            <Typography variant="copy">
              Example: If you are student of the College of Natural and Social
              Sciences then you will be able to vote for the representative from
              your college.
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 9"
            src="/vote/web-9.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Board of Directors</Typography>
            <Typography variant="copy">
              You can select and vote for up to 8 candidates.
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 10"
            src="/vote/web-10.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">Too Many Votes</Typography>
            <Typography variant="copy">
              If you vote for more than eight candidates you will get the
              following error:
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 11"
            src="/vote/web-11.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>

        <Divider margin="reg" />
        <FluidContainer flex>
          <div>
            <Typography variant="subheader">No Votes</Typography>
            <Typography variant="copy">
              If you select no candidates you will get the following error:
            </Typography>
          </div>
          <Image
            alt="GET Website Screenshot Step 12"
            src="/vote/web-12.png"
            width={1}
            height={1}
            layout="responsive"
          ></Image>
        </FluidContainer>
      </FluidContainer>
    </>
  );
}
