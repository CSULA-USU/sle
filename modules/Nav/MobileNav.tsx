"use client";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { Typography } from "@/components";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setActiveLink(pathname.toString());
  }, [pathname, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll and compensate for scrollbar
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Focus close button when menu opens
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle Escape key
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Handle Tab key for focus trap
      if (e.key !== "Tab") return;

      const focusableElements = menuRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      onClick={(e) => {
        // Close menu if clicking directly on the overlay (not on child elements)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className={`bg-black h-full w-full bg-opacity-90 fixed p-6 inset-0 transform transition-transform duration-300 ${
        isOpen ? "visible translate-x-0" : "invisible  translate-x-full"
      }`}
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close mobile menu"
        className="hover:opacity-70"
      >
        <FaXmark size={35} color="white" />
      </button>
      <div className="flex flex-col items-end gap-y-4">
        <Link
          href="/"
          onClick={onClose}
          aria-current={activeLink === "/" ? "page" : undefined}
        >
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
        <Link
          href="/vote"
          onClick={onClose}
          aria-current={activeLink === "/vote" ? "page" : undefined}
        >
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
        <Link
          href="/asi"
          onClick={onClose}
          aria-current={activeLink === "/asi" ? "page" : undefined}
        >
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
        <Link
          href="/usu"
          onClick={onClose}
          aria-current={activeLink === "/usu" ? "page" : undefined}
        >
          <Typography
            variant="subheader"
            color="white"
            className={`hover:text-yellow-400 ${
              activeLink === "/usu" ? "border-b-4 border-yellow-400" : ""
            }`}
          >
            U&ndash;SU
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
  );
};
