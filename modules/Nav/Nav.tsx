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

  useEffect(() => {
    setActiveLink(pathname.toString());
  }, [pathname]);

  return (
    <>
      <MobileNav />
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
          <FaBars
            style={{ color: "white" }}
            size={40}
            className="sm:hidden hover:opacity-70"
            onClick={() => {
              alert("clicked");
            }}
          />

          <div className="sm:flex items-center w-2/5 max-sm:w-3/5 justify-between hidden">
            <Link href="/asi">
              <Typography
                variant="navHeader"
                className={`hover:text-yellow-400 ${
                  activeLink === "/asi" ? "border-b-4 border-yellow-400" : ""
                }`}
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
              >
                U-SU
              </Typography>
            </Link>
            <Link href="/vote">
              <Typography
                variant="navHeader"
                className={`hover:text-yellow-400 ${
                  activeLink === "/vote" ? "border-b-4 border-yellow-400" : ""
                }`}
              >
                Vote
              </Typography>
            </Link>
          </div>
        </FluidContainer>
      </div>
    </>
  );
};
