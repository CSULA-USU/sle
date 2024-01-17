import { FluidContainer, Typography } from "@/components";
import Image from "next/image";
export const Nav = () => {
  return (
    <div className="bg-black h-24">
      <div className="flex justify-between h-full">
        <Typography variant='navHeader'>Vote</Typography>
        <Typography variant='navHeader'>ASI</Typography>
        <Typography variant='navHeader'>U-SU</Typography>
      </div>
    </div>
  );
};

{/* <div className="bg-black">
      <div className="flex justify-between">
        <Image
          alt="SLE Logo"
          src="/sle-logo.png"
          width={130}
          height={70}
        ></Image>
        <div className="flex flex-row items-center">
          <Typography variant="navHeader">Vote</Typography>
          <Typography variant="navHeader">ASI</Typography>
          <Typography variant="navHeader">U-SU</Typography>
        </div>
      </div>
    </div> */}
