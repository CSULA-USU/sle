import { Divider, HeroHeader, FluidContainer, Typography } from "@/components";
import Image from "next/image";
export const Nav = () => {
  return (
    <div className="bg-black w-full">
      <FluidContainer
        flex
        alignItems="center"
        justifyContent="between"
        color="black"
      >
        <Image
          alt="SLE Logo"
          src="/sle-logo.png"
          width={130}
          height={70}
        ></Image>
        <div className="flex">
          <Typography variant="navHeader">Vote</Typography>
          <Typography variant="navHeader">ASI</Typography>
          <Typography variant="navHeader">U-SU</Typography>
        </div>
      </FluidContainer>
    </div>
  );
};
