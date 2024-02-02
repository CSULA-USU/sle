import {
  Button,
  Divider,
  InfoPanel,
  FluidContainer,
  HeroHeader,
  StatementCard,
  Typography,
} from "@/components";
import {
  FaChartLine,
  FaFire,
  FaRegLightbulb,
  FaRegStar,
} from "react-icons/fa6";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Head>
          <meta
            name="author"
            content="Associated Students, Inc. of Cal State LA"
          />
          <meta
            name="keywords"
            content="CSULA, Cal State LA, ASI, Associated Students, Inc., Student Leader Elections, University Student Government, Vote, Recruitment, Shape Your University Experience, Choose to lead, Your vote matters"
          />
          <meta
            name="description"
            content="Welcome to the most exciting opportunity on campus! Your college adventure is already awesome, but we believe you’re ready to take it to the next level with us at Associated Students, Inc., the University-Student Union and Academic Senate! This is your chance to gain invaluable skills and experience while making a positive impact that resonates across campus. Apply and learn how to vote for the student leader elections now!"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FluidContainer>
          <HeroHeader
            imgAlt="Student Leader Elections Home Page Header Image"
            imgSrc="/headers/header-2.jpeg"
          />
          <FluidContainer textAlign="center">
            <div>
              <Typography variant="footerHeader" color="white">
                Ready to elevate your college journey?
              </Typography>
            </div>
            <Typography variant="footerHeader" color="white">
              Leap and apply now to uncover the amazing things your FULL
              potential can bring to you and your peers!
            </Typography>
          </FluidContainer>
          <Divider />
          <InfoPanel
            title="Choose to Lead"
            description="Welcome to the most exciting opportunity on campus! Your college
            adventure is already awesome, but we believe you’re ready to take it
            to the next level with us at Associated Students, Inc., the
            University-Student Union and Academic Senate! This is your chance to
            gain invaluable skills and experience while making a positive impact
            that resonates across campus. You already have what it takes... Own
            it!"
            imgAlt="own it choose to lead with eddie the eagle"
            imgSrc="/choose-to-lead.png"
          >
            <Button
              variant="yellow"
              text="ASI Student Government"
              href="https://asicalstatela.org/general-election/2024-25-student-leader-election-application-now-open"
            />
            <Button
              variant="grey"
              text="U-SU Board of Directors"
              href="https://form.jotform.com/usugraffix/u-su-board-of-directors-application"
            />
          </InfoPanel>
          <Divider />
          <InfoPanel
            title="Your Vote Matters"
            description="Choose leaders who understand your needs, resonate with your
                values, and are dedicated to creating a campus that reflects
                your vision."
            imgAlt="Students voting"
            imgSrc="/your-vote-matters.png"
          >
            <Button variant="black" text="Voting Instructions" href="/vote" />
          </InfoPanel>
          <div className="gap-8 flex max-md:flex-col my-10">
            <StatementCard
              title="Proven Excellence"
              text="You’re in college and made it this far—undeniable proof. Your academic progress showcases your capabilities."
            >
              <FaRegStar color="white" size={40} />
            </StatementCard>
            <StatementCard
              title="Proven Potential"
              text="Your journey speaks volumes about your abilities."
            >
              <FaChartLine color="white" size={40} />
            </StatementCard>
            <StatementCard
              title="Step into the Spotlight"
              text="Embrace the next stage of your life. You are a LEADER."
            >
              <FaRegLightbulb color="white" size={40} />
            </StatementCard>
            <StatementCard
              title="Ignite Change"
              text="Be the force behind positive change within our campus community."
            >
              <FaFire color="white" size={40} />
            </StatementCard>
          </div>
        </FluidContainer>
      </div>
    </>
  );
}
