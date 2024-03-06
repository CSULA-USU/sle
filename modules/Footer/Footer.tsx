import { FluidContainer, NonBreakingSpan, Typography } from "@/components";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black border-t-neutral-800 border-t-[1px]">
      <FluidContainer flex flexWrap="wrap" justifyContent="between">
        <div className="flex w-full justify-center items-center lg:w-1/4">
          <img
            alt="SLE Logo"
            src="/logos/sle-logo.png"
            style={{ height: "150px", width: "auto" }}
          />
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
      <FluidContainer>
        <hr />
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
          <div className="max-sm:hidden">
            <Typography variant="footerCopy">|</Typography>
          </div>
          <div>
            <Typography variant="footerCopy">
              <NonBreakingSpan>(323) 343 - 2465</NonBreakingSpan>
            </Typography>
          </div>
        </div>

        <div className="flex gap-6 items-center max-lg:min-w-full max-lg:justify-center">
          <img
            alt="Cal State LA Logo"
            src="/footer/calstatela-badge.svg"
            style={{
              width: "auto",
              height: "36px",
            }}
          />
          <img
            alt="ASI Logo"
            src="/footer/asi-logo.png"
            style={{
              width: "auto",
              height: "36px",
            }}
          />
          <img
            alt="Cal State LA U-SU Logo"
            src="/footer/usu-wordmark-white.png"
            style={{
              width: "auto",
              height: "36px",
            }}
          />
        </div>
      </FluidContainer>
    </div>
  );
};
