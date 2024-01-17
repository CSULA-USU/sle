import { FluidContainer } from "@/components/FluidContainer";
import { Typography } from "@/components/Typography";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-black">
      <FluidContainer flex justifyContent="between">
        <div className="flex items-center">
          <Image
            alt="SLE Logo"
            src="/sle-logo.png"
            width={225}
            height={250}
          ></Image>
        </div>

        <div>
          <Typography variant="footerHeader" color="white">
            Election Code of Procedure
          </Typography>
          <Typography variant="footerLink">Elections Committee</Typography>
          <Typography variant="footerLink">ASI Bylaws</Typography>
          <Typography variant="footerLink">ASI Board of Directors</Typography>
          <Typography variant="footerLink">Shared Governance</Typography>
        </div>
        <div>
          <Typography variant="footerHeader" color="white">
            Site Links
          </Typography>
          <Typography variant="footerLink">ASI Student Government</Typography>
          <Typography variant="footerLink">U-SU Board o Directors</Typography>
          <Typography variant="footerLink">How to Vote</Typography>
        </div>
        <div>
          <Typography variant="footerHeader" color="white">
            Our Sites
          </Typography>
          <Typography variant="footerLink">
            Associated Students, Inc.
          </Typography>
          <Typography variant="footerLink">University-Student Union</Typography>
          <Typography variant="footerLink">Cal State LA</Typography>
        </div>
      </FluidContainer>
      <FluidContainer>
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
