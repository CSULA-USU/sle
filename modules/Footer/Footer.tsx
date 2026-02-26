import {
  FluidContainer,
  NonBreakingSpan,
  Typography,
  StyledLink,
} from "@/components";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="border-t-neutral-700 border-t-[1px] bg-[rgba(6,7,9)]">
      <FluidContainer flex flexWrap="wrap" justifyContent="between">
        <div className="flex w-full justify-center items-center lg:w-1/4">
          <img
            alt=""
            src="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/logos/instructions/sle-logo.webp"
            style={{ height: "150px", width: "auto", flexShrink: 0 }}
          />
        </div>
        <>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Election Code of Procedure</NonBreakingSpan>
            </Typography>
            <div>
              <StyledLink
                variant="footer"
                isInverseUnderlineStyling
                isExternalLink
                href="https://asicalstatela.org/administrative-governing-policies"
              >
                <Typography variant="footerLink">
                  <NonBreakingSpan>
                    Administrative Governing Policies
                  </NonBreakingSpan>
                </Typography>
              </StyledLink>
            </div>
          </div>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Site Links</NonBreakingSpan>
            </Typography>
            <div>
              <StyledLink
                href="/asi"
                variant="footer"
                isInverseUnderlineStyling
              >
                <Typography variant="footerLink">
                  <NonBreakingSpan>ASI Student Government</NonBreakingSpan>
                </Typography>
              </StyledLink>
            </div>
            <div>
              <StyledLink
                href="/usu"
                variant="footer"
                isInverseUnderlineStyling
              >
                <Typography variant="footerLink">
                  <NonBreakingSpan>
                    U&ndash;SU Board of Directors
                  </NonBreakingSpan>
                </Typography>
              </StyledLink>
            </div>
            {/* <div>
              <StyledLink href="/vote" variant="footer" isInverseUnderlineStyling>
                <Typography variant="footerLink">
                  <NonBreakingSpan>How to Vote</NonBreakingSpan>
                </Typography>
              </StyledLink>
            </div> */}
          </div>
          <div>
            <Typography variant="footerHeader" color="white">
              <NonBreakingSpan>Our Sites</NonBreakingSpan>
            </Typography>
            <div>
              <StyledLink
                href="https://asicalstatela.org/"
                variant="footer"
                isExternalLink
                isInverseUnderlineStyling
              >
                <Typography variant="footerLink">
                  <NonBreakingSpan>Associated Students, Inc.</NonBreakingSpan>
                </Typography>
              </StyledLink>
            </div>
            <div>
              <StyledLink
                href="https://www.calstatelausu.org/"
                isExternalLink
                isInverseUnderlineStyling
                variant="footer"
              >
                <Typography variant="footerLink">
                  <NonBreakingSpan>University-Student Union</NonBreakingSpan>
                </Typography>
              </StyledLink>
            </div>
            <div>
              <StyledLink
                href="https://www.calstatela.edu/"
                isInverseUnderlineStyling
                isExternalLink
                variant="footer"
              >
                <Typography variant="footerLink">
                  <NonBreakingSpan>Cal State LA</NonBreakingSpan>
                </Typography>
              </StyledLink>
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
        <div className="flex justify-between gap-6 max-lg:min-w-full max-lg:flex-col">
          <div>
            <Typography variant="footerCopy">
              5154 State University Dr., Los Angeles, CA 90032
            </Typography>
          </div>
          <div>
            <Typography variant="footerCopy">
              <NonBreakingSpan>(323) 343-2465</NonBreakingSpan>
            </Typography>
          </div>
          <div>
            <Typography variant="footerCopy">
              <NonBreakingSpan>
                info.usu@calstatelaelections.org
              </NonBreakingSpan>
            </Typography>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center max-lg:min-w-full max-lg:justify-center">
          <img
            alt=""
            src="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/logos/instructions/updated-calstatela.webp"
            style={{
              width: "auto",
              height: "28px",
            }}
          />
          <img
            alt=""
            src="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/logos/instructions/asi-logo.webp"
            style={{
              width: "auto",
              height: "32px",
            }}
          />
          <img
            alt=""
            src="https://svskmbmsunldqkjomhhm.supabase.co/storage/v1/object/public/logos/instructions/usu-wordmark-white.webp"
            style={{
              width: "auto",
              height: "40px",
            }}
          />
        </div>
      </FluidContainer>
    </div>
  );
};
