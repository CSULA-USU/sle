"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FluidContainer, Typography } from "@/components";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { MobileNav } from ".";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMobileNavToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileNav = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setActiveLink(pathname.toString());
  }, [pathname, isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Calculate and set scrollbar width as CSS variable
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`,
      );
      document.documentElement.classList.add("menu-open");
    } else {
      document.documentElement.classList.remove("menu-open");
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-[#262C32] border-b-neutral-700 border-b-[1px] sticky top-0"
      aria-label="Site navigation"
    >
      <FluidContainer
        flex
        justifyContent="between"
        padding="py-5 px-20 max-md:px-10"
        alignItems="center"
      >
        <Link href="/" aria-label="Student Leader Election homepage">
          <img
            alt="Own It campaign logo"
            src="/home/own-it-2025.svg"
            style={{ height: "48px", width: "auto" }}
          />
        </Link>
        {isMobileMenuOpen && (
          <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileNav} />
        )}
        <button
          onClick={handleMobileNavToggle}
          aria-label="Open mobile menu"
          aria-expanded={isMobileMenuOpen}
          className={`sm:hidden hover:opacity-70 ${isMobileMenuOpen ? "hidden" : ""}`}
        >
          <FaBars style={{ color: "white" }} size={40} />
        </button>
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
          <Link
            href="/vote"
            aria-current={activeLink === "/vote" ? "page" : undefined}
          >
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
          <Link
            href="/asi"
            aria-current={activeLink === "/asi" ? "page" : undefined}
          >
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
          <Link
            href="/usu"
            aria-current={activeLink === "/usu" ? "page" : undefined}
          >
            <Typography
              variant="navHeader"
              className={`hover:text-yellow-400 ${
                activeLink === "/usu" ? "border-b-4 border-yellow-400" : ""
              }`}
              color="white"
            >
              U&ndash;SU
            </Typography>
          </Link>
        </div>
      </FluidContainer>
    </nav>
  );
};
