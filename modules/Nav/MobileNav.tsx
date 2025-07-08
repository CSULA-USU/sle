"use client";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { Typography } from "@/components";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname.toString());
  }, [pathname, isOpen]);

  return (
    <nav aria-label="Mobile site navigation">
      <div
        className={`bg-black h-full w-full bg-opacity-90 fixed p-6 inset-0 transform transition-transform duration-300 ${
          isOpen ? "visible translate-x-0" : "invisible  translate-x-full"
        }`}
      >
        <FaXmark
          size={35}
          color="white"
          className="hover:opacity-70"
          onClick={onClose}
        />
        <div className="flex flex-col items-end gap-y-4">
          <Link href="/" aria-label="Mobile menu home link" onClick={onClose}>
            <Typography
              variant="subheader"
              color="white"
              className={`hover:text-yellow-400 ${
                activeLink === "/" ? "border-b-4 border-yellow-400" : ""
              }`}
            >
              Home
            </Typography>
          </Link>
          <Link href="/vote" onClick={onClose}>
            <Typography
              variant="subheader"
              color="white"
              className={`hover:text-yellow-400 ${
                activeLink === "/vote" ? "border-b-4 border-yellow-400" : ""
              }`}
            >
              Vote
            </Typography>
          </Link>
          <Link href="/asi" onClick={onClose}>
            <Typography
              variant="subheader"
              color="white"
              className={`hover:text-yellow-400 ${
                activeLink === "/asi" ? "border-b-4 border-yellow-400" : ""
              }`}
            >
              ASI
            </Typography>
          </Link>
          <Link href="/usu" onClick={onClose}>
            <Typography
              variant="subheader"
              color="white"
              className={`hover:text-yellow-400 ${
                activeLink === "/usu" ? "border-b-4 border-yellow-400" : ""
              }`}
            >
              U-SU
            </Typography>
          </Link>
          {/* <Link href="/vote" onClick={onClose}>
          <Typography
            variant="subheader"
            color="white"
            className={`hover:text-yellow-400 ${
              activeLink === "/vote" ? "border-b-4 border-yellow-400" : ""
            }`}
          >
            Vote
          </Typography>
        </Link> */}
        </div>
      </div>
    </nav>
  );
};
