"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FluidContainer, Typography } from "@/components";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { MobileNav } from ".";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileNav = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setActiveLink(pathname.toString());
  }, [pathname, isMobileMenuOpen]);

  return (
    <div className="bg-[#262C32] border-b-neutral-700 border-b-[1px] sticky top-0">
      <FluidContainer
        flex
        justifyContent="between"
        padding="py-5 px-20 max-md:px-10"
        alignItems="center"
      >
        <Link href="/">
          <img
            alt="Homepage"
            src="/home/own-it-2025.svg"
            style={{
              height: "48px",
              width: "auto",
            }}
          />
        </Link>
        <FaBars
          style={{ color: "white" }}
          size={40}
          className="sm:hidden hover:opacity-70"
          onClick={handleMobileNavToggle}
        />
        <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileNav} />
        <div className="sm:flex items-center w-2/5 max-sm:w-3/5 justify-between hidden">
          {/* <Link href="/">
            <Typography
              variant="navHeader"
              className={`hover:text-yellow-400 ${
                activeLink === "/" ? "border-b-4 border-yellow-400" : ""
              }`}
              color="white"
            >
              Home
            </Typography>
          </Link> */}
          <Link href="/vote">
            <Typography
              variant="navHeader"
              className={`hover:text-yellow-400 ${
                activeLink === "/vote" ? "border-b-4 border-yellow-400" : ""
              }`}
              color="white"
            >
              Vote
            </Typography>
          </Link>
          <Link href="/asi">
            <Typography
              variant="navHeader"
              className={`hover:text-yellow-400 ${
                activeLink === "/asi" ? "border-b-4 border-yellow-400" : ""
              }`}
              color="white"
            >
              ASI
            </Typography>
          </Link>
          <Link href="/usu">
            <Typography
              variant="navHeader"
              className={`hover:text-yellow-400 ${
                activeLink === "/usu" ? "border-b-4 border-yellow-400" : ""
              }`}
              color="white"
            >
              U-SU
            </Typography>
          </Link>
        </div>
      </FluidContainer>
    </div>
  );
};
