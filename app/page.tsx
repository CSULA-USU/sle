import { FaFire, FaHandshake } from "react-icons/fa6";
import { RiCommunityFill } from "react-icons/ri";
import type { Metadata } from "next";
import {
  Button,
  Divider,
  InfoPanel,
  FluidContainer,
  HeroHeader,
  StatementCard,
  Typography,
} from "@/components";
import { Card } from "@/modules";
import {
  ElectionEventProps,
  filterElectionEvents,
  sortElectionEvents,
} from "@/data/util/election-events-helper";
import electionEventsData from "@/data/asi/asi-election-events.json";

export const metadata: Metadata = {
  creator:
    "University-Student Union and Associated Students, Inc. of Cal State LA",
  keywords: [
    "CSULA",
    "Cal State LA",
    "ASI",
    "Associated Students, Inc.",
    "Student Leader Elections",
    "University Student Government",
    "Vote",
    "Recruitment",
    "Shape Your University Experience",
    "Choose to lead",
    "Your vote matters",
  ],
  description:
    "Welcome to the most exciting opportunity on campus! Your college adventure is already awesome, but we believe you’re ready to take it to the next level with us at Associated Students, Inc., the University-Student Union and Academic Senate! This is your chance to gain invaluable skills and experience while making a positive impact that resonates across campus. Apply and learn how to vote for the student leader elections now!",
};
export default function Home() {
  let electionEvents: ElectionEventProps[] =
    filterElectionEvents(electionEventsData);
  sortElectionEvents(electionEvents);

  return (
    <div className="bg-[#262C32]">
      <h1>
        <HeroHeader
          imgAlt="Cal State LA Student Leader Elections Header that says Vote, dated April 14 to 18"
          imgSrc="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/hero//vote-2025.png"
        />
      </h1>
      <FluidContainer>
        <FluidContainer textAlign="center">
          <div>
            <Typography variant="footerHeader" color="white" as="h2">
              Ready to elevate your college journey?
            </Typography>
          </div>
          <Typography variant="footerHeader" color="white" as="h2">
            Apply now to uncover the amazing things your FULL potential can
            bring to you and your peers!
          </Typography>
        </FluidContainer>
        <div className="gap-8 flex max-md:flex-col my-10 justify-evenly">
          <StatementCard
            title="Together We Can"
            text="Being a student leader in ASI, the U-SU, or Senate means you are part of a dedicated team that works as partners, bringing students, faculty, and staff together to improve Cal State LA."
          >
            <FaHandshake color="white" size={40} />
          </StatementCard>
          <StatementCard
            title="Cultivate Community"
            text="Embrace the next stage of your life and be involved on campus!  Impact your community by advocating for student needs and serving as the voice of the student body."
          >
            <RiCommunityFill color="white" size={40} />
          </StatementCard>
          <StatementCard
            title="Ignite Change"
            text="Be the force behind positive change within our campus community."
          >
            <FaFire color="white" size={40} />
          </StatementCard>
        </div>
        <div>
          <Typography variant="sectionHeader" color="white">
            Your Vote Matters
          </Typography>
          <Divider />
          <InfoPanel
            // title="Your Vote Matters"
            description="Choose leaders who understand your needs, resonate with your
                values, and are dedicated to creating a campus that reflects
                your vision."
            imgAlt="Students voting"
            imgSrc="/headers/own-it-pages.jpg"
          >
            <Button
              variant="yellow"
              text="ASI Positions"
              href="/asi"
              // isExternalLink
            />
            <Button variant="grey" text="U-SU Voting Info" href="/usu" />
          </InfoPanel>
        </div>
        <div>
          <Typography variant="sectionHeader" color="white">
            Own It
          </Typography>
          <Divider />
          <InfoPanel
            description="Welcome to the most exciting opportunity on campus! Your college
            adventure is already awesome, but we believe you’re ready to take it
            to the next level with us at Associated Students, Inc., the
            University-Student Union, and Academic Senate! This is your chance to
            gain invaluable skills and experience while making a positive impact
            that resonates across campus. You already have what it takes... Own
            it!"
            imgAlt="own it with eddie the eagle"
            imgSrc="/home/usu-own-it-crowd.jpg"
          >
            <Button
              variant="yellow"
              text="ASI Student Government"
              href="https://asicalstatela.org/general-election"
              isExternalLink
            />
            <Button variant="grey" text="U-SU Board of Directors" href="/usu" />
          </InfoPanel>
        </div>
        <div>
          <Typography variant="sectionHeader" color="white">
            Election Events
          </Typography>
          <Divider />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {electionEvents.length > 0 ? (
              electionEvents.map((electionEvent: ElectionEventProps, idx) => (
                <Card electionEvent={electionEvent} key={idx} transparent />
              ))
            ) : (
              <Typography>
                No events scheduled, please check again later
              </Typography>
            )}
          </div>
        </div>
      </FluidContainer>
    </div>
  );
}
