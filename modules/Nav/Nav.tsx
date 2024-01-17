import { FluidContainer, Typography } from "@/components";
import Image from "next/image";
export const Nav = () => {
  return (
    <div className="bg-black border-b-neutral-800 border-b-[1px]">
      <FluidContainer flex justifyContent="between" padding="py-5 px-20">
        <Image
          alt="SLE Logo"
          src="/sle-logo.png"
          width={120}
          height={50}
        ></Image>
        <div className="flex items-center w-2/5 max-sm:w-3/5 justify-between">
          <Typography variant="navHeader">Vote</Typography>
          <Typography variant="navHeader">ASI</Typography>
          <Typography variant="navHeader">U-SU</Typography>
        </div>
      </FluidContainer>
    </div>
  );
};
