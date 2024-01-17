import { FluidContainer, Typography } from "@/components";
import Image from "next/image";
export const Nav = () => {
  return (
    <FluidContainer flex justifyContent="between">
      <Image alt="SLE Logo" src="/sle-logo.png" width={130} height={70}></Image>
      <div className="flex flex-row items-center">
        <Typography variant="navHeader">Vote</Typography>
        <Typography variant="navHeader">ASI</Typography>
        <Typography variant="navHeader">U-SU</Typography>
        <Typography variant="navHeader">valheimrules</Typography>
      </div>
    </FluidContainer>
  );
};
