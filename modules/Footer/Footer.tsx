import { FluidContainer, NonBreakingSpan, Typography } from "@/components";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-black border-t-neutral-800 border-t-[1px]">
      <FluidContainer flex justifyContent="between">
        <div className="flex items-center max-md:bg-yellow-500">
          <Image
            alt="SLE Logo"
            src="/sle-logo.png"
            width={225}
            height={250}
          ></Image>
        </div>
        <>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Election Code of Procedure</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>Elections Committee</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>ASI Bylaws</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>ASI Board of Directors</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>Shared Governance</NonBreakingSpan>
            </Typography>
          </div>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Site Links</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>ASI Student Government</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>U-SU Board of Directors</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>How to Vote</NonBreakingSpan>
            </Typography>
          </div>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Our Sites</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>Associated Students, Inc.</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>University-Student Union</NonBreakingSpan>
            </Typography>
            <Typography variant="footerLink">
              <NonBreakingSpan>Cal State LA</NonBreakingSpan>
            </Typography>
          </div>
        </>
      </FluidContainer>
      <FluidContainer padding="py-3 px-48">
        <hr></hr>
      </FluidContainer>
      <FluidContainer flex justifyContent="between" alignItems="center">
        <div className="flex gap-6">
          <Typography variant="footerCopy">
            5154 State University Dr., Los Angeles, CA 90032
          </Typography>
          <Typography variant="footerCopy">|</Typography>
          <Typography variant="footerCopy">(323) 343 - 2465</Typography>
        </div>

        <div className="flex gap-6 items-center">
          <Image
            alt="Cal State LA Logo"
            src="/csula-logo.png"
            width={40}
            height={25}
            layout="intrinsic"
          ></Image>
          <Image
            alt="ASI Logo"
            src="/asi-logo.png"
            width={70}
            height={25}
            layout="intrinsic"
          ></Image>
          <Image
            alt="Cal State LA U-SU Logo"
            src="/usu-logo.png"
            width={120}
            height={1}
            layout="intrinsic"
          ></Image>
        </div>
      </FluidContainer>
    </div>
  );
};
