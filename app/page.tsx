import {
  Button,
  CTA,
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
      <HeroHeader
        imgAlt="Student Leader Elections Home Page Header Image"
        imgSrc="/sle-header.png"
      ></HeroHeader>
      <FluidContainer>
        <Typography variant="pageHeader" color="white">
          Shape Your University Experience
        </Typography>

        <Divider color="gold" />
        <div className="text-center">
          <Typography variant="footerHeader" color="white">
            Ready to elevate your college journey?
          </Typography>
        </div>
        <div className="text-center">
          <Typography variant="footerHeader" color="white">
            Leap and apply now to uncover the amazing things your FULL potential
            can bring to you and your peers!
          </Typography>
        </div>
        <InfoPanel
          imgAlt="Own it. Choose to lead"
          imgSrc="/Ownit.jpg"
          description="Welcome to the most exciting opportunity on campus! Your college
          adventure is already awesome, but we believe you’re ready to take it
          to the next level with us at Associated Students, Inc., the
          University-Student Union and Academic Senate! This is your chance to
          gain invaluable skills and experience while making a positive impact
          that resonates across campus. You already have what it takes... Own
          it!"
          imageRight
        ></InfoPanel>
        <div className="gap-8 flex max-md:flex-col">
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
      <CTA
        title="Elevate your Journey!"
        text="Ready to elevate your college journey? Leap and apply now to uncover the amazing things your FULL potential can bring to you and your peers!"
        theme="gold"
      >
        <Button variant="black" borderless text="ASI Application" />
        <Button variant="grey" text="U-SU BOD Application" />
      </CTA>
      <FluidContainer>
        <InfoPanel
          title="Choose to lead"
          description="Running for office is the perfect chance to help your voice be
                heard. As a part of student government, students can network,
                gain leadership experience, and be the voice for students. If
                elected, you will be able to help the students of Cal State Los
                Angeles and assist with essential changes on campus."
          imgAlt="Students leading other students"
          imgSrc="/choose-to-lead.png"
        >
          <Button variant="black" text="ASI Student Government" href="/asi" />
          <Button variant="grey" text="U-SU Board of Directors" href="/usu" />
        </InfoPanel>
        <Divider color="gold" />
        <InfoPanel
          title="Your vote matters"
          description="Choose leaders who understand your needs, resonate with your
                values, and are dedicated to creating a campus that reflects
                your vision."
          imgAlt="Students voting"
          imgSrc="/your-vote-matters.png"
        >
          <Button variant="black" text="Voting Instructions" href="/vote" />
        </InfoPanel>
      </FluidContainer>
    </div>
  );
}
