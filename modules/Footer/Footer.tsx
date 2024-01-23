import { FluidContainer, NonBreakingSpan, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black border-t-neutral-800 border-t-[1px]">
      <FluidContainer flex flexWrap="wrap" justifyContent="between">
        <div className="flex max-lg:min-w-full max-lg:justify-center items-center">
          <Image
            alt="SLE Logo"
            src="/sle-logo.png"
            width={180}
            height={250}
          ></Image>
        </div>
        <>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Election Code of Procedure</NonBreakingSpan>
            </Typography>
            <div>
              <a href="https://asicalstatela.org/administrative-governing-policies">
                <Typography variant="footerLink">
                  <NonBreakingSpan>
                    Administrative Governing Policies
                  </NonBreakingSpan>
                </Typography>
              </a>
            </div>
          </div>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Site Links</NonBreakingSpan>
            </Typography>
            <div>
              <Link href="/asi">
                <Typography variant="footerLink">
                  <NonBreakingSpan>ASI Student Government</NonBreakingSpan>
                </Typography>
              </Link>
            </div>
            <div>
              <Link href="/usu">
                <Typography variant="footerLink">
                  <NonBreakingSpan>U-SU Board of Directors</NonBreakingSpan>
                </Typography>
              </Link>
            </div>
            <div>
              <Link href="/vote">
                <Typography variant="footerLink">
                  <NonBreakingSpan>How to Vote</NonBreakingSpan>
                </Typography>
              </Link>
            </div>
          </div>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Our Sites</NonBreakingSpan>
            </Typography>
            <div>
              <Link href="https://asicalstatela.org/">
                <Typography variant="footerLink">
                  <NonBreakingSpan>Associated Students, Inc.</NonBreakingSpan>
                </Typography>
              </Link>
            </div>
            <div>
              <Link href="https://www.calstatelausu.org/">
                <Typography variant="footerLink">
                  <NonBreakingSpan>University-Student Union</NonBreakingSpan>
                </Typography>
              </Link>
            </div>
            <div>
              <Link href="https://www.calstatela.edu/">
                <Typography variant="footerLink">
                  <NonBreakingSpan>Cal State LA</NonBreakingSpan>
                </Typography>
              </Link>
            </div>
          </div>
        </>
      </FluidContainer>
      <FluidContainer padding="px-40 py-1">
        <hr></hr>
      </FluidContainer>
      <FluidContainer
        flex
        flexWrap="wrap"
        justifyContent="between"
        alignItems="center"
      >
        <div className="flex justify-between gap-6 max-lg:min-w-full">
          <div>
            <Typography variant="footerCopy">
              5154 State University Dr., Los Angeles, CA 90032
            </Typography>
          </div>
          <div>
            <Typography variant="footerCopy">|</Typography>
          </div>
          <div>
            <Typography variant="footerCopy">
              <NonBreakingSpan>(323) 343 - 2465</NonBreakingSpan>
            </Typography>
          </div>
        </div>

        <div className="flex gap-6 items-center max-lg:min-w-full max-lg:justify-center">
          <Image
            alt="Cal State LA Logo"
            src="/csula-logo.png"
            width={30}
            height={25}
          ></Image>
          <Image
            alt="ASI Logo"
            src="/asi-logo.png"
            width={50}
            height={25}
          ></Image>
          <Image
            alt="Cal State LA U-SU Logo"
            src="/usu-logo.png"
            width={100}
            height={1}
          ></Image>
        </div>
      </FluidContainer>
    </div>
  );
};
