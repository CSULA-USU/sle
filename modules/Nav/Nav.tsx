import { FluidContainer, Typography } from "@/components";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

export const Nav = () => {
  return (
    <div className="bg-black border-b-neutral-800 border-b-[1px]">
      <FluidContainer
        flex
        justifyContent="between"
        padding="py-5 px-20 max-md:px-10"
      >
        <Link href="/">
          <img
            alt="SLE Logo"
            src="/logos/own-it-logo.svg"
            style={{
              height: "48px",
              width: "auto",
            }}
          />
        </Link>
        <FaBars />
        <div className="flex items-center w-2/5 max-sm:w-3/5 justify-between">
          <Link href="/asi">
            <Typography variant="navHeader" className="hover:text-yellow-400">
              ASI
            </Typography>
          </Link>
          <Link href="/usu">
            <Typography variant="navHeader" className="hover:text-yellow-400">
              U-SU
            </Typography>
          </Link>
          <Link href="/vote">
            <Typography variant="navHeader" className="hover:text-yellow-400">
              Vote
            </Typography>
          </Link>
        </div>
      </FluidContainer>
    </div>
  );
};
