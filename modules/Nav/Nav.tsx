import { FluidContainer, NonBreakingSpan, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";
export const Nav = () => {
  return (
    <div className="bg-black border-b-neutral-800 border-b-[1px]">
      <FluidContainer
        flex
        justifyContent="between"
        padding="py-5 px-20 max-md:px-10"
      >
        <Link href="/">
          <Image
            alt="SLE Logo"
            src="/sle-logo.png"
            width={120}
            height={50}
          ></Image>
        </Link>

        <div className="flex items-center w-2/5 max-sm:w-3/5 justify-between">
          <Link href="/vote">
            <Typography variant="navHeader" className="hover:text-yellow-400">
              Vote
            </Typography>
          </Link>
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
        </div>
      </FluidContainer>
    </div>
  );
};
