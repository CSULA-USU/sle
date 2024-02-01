"use client";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { Typography } from "@/components";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MobileNavProps {
  className?: string;
}

export const MobileNav = ({ className }: MobileNavProps) => {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname.toString());
  }, [pathname]);

  return (
    <div
      className={`bg-neutral-300 h-1/3 w-full bg-opacity-80 absolute p-6 inset-y-0 right-0 rounded-lg ${className}`}
    >
      <FaXmark size={35} className="mb-2" />
      <div className="flex flex-col items-end h-2/3 justify-between">
        <Link href="/asi">
          <Typography
            variant="subheader"
            color="black"
            className={`hover:text-yellow-400 ${
              activeLink === "/asi" ? "border-b-4 border-yellow-400" : ""
            }`}
          >
            ASI
          </Typography>
        </Link>
        <Link href="/usu">
          <Typography
            variant="subheader"
            color="black"
            className={`hover:text-yellow-400 ${
              activeLink === "/usu" ? "border-b-4 border-yellow-400" : ""
            }`}
          >
            U-SU
          </Typography>
        </Link>
        <Link href="/vote">
          <Typography
            variant="subheader"
            color="black"
            className={`hover:text-yellow-400 ${
              activeLink === "/vote" ? "border-b-4 border-yellow-400" : ""
            }`}
          >
            Vote
          </Typography>
        </Link>
      </div>
    </div>
  );
};
