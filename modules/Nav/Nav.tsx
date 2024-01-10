import { FluidContainer } from "@/components/FluidContainer";
import { Typography } from "@/components/Typography";
import Image from "next/image";
export const Nav = ({ children }: any) => {
  return (
    <FluidContainer flex justifyContent="between">
      <Image alt="SLE Logo" src="/sle-logo.png" width={130} height={70}></Image>
      <div className="flex items-center justify-end gap-6">
        <Typography variant="navHeader">Vote</Typography>
        <Typography variant="navHeader">ASI</Typography>
        <Typography variant="navHeader">U-SU</Typography>
      </div>
    </FluidContainer>
  );
};
