"use client";

import { TbCircleArrowUpFilled } from "react-icons/tb";

const scrollToTop = () => {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Others

  const topElement =
    (document.getElementById("nav-logo") as HTMLElement | null) ||
    document.body;

  if (topElement instanceof HTMLElement) {
    const hadTabIndex = topElement.hasAttribute("tabindex");
    if (!hadTabIndex) topElement.setAttribute("tabindex", "-1");
    topElement.focus();
    if (!hadTabIndex) topElement.removeAttribute("tabindex");
  }
};

export const BackToTop = () => {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="
        fixed bottom-[46px] right-[46px] z-[99]
        h-[39px] w-[39px]
        rounded-[35px]
        border-none
        bg-white
        transition-colors duration-300
        hover:bg-black
        flex items-center justify-center
      "
    >
      <TbCircleArrowUpFilled
        title="Back to Top"
        className="
          h-[50px] w-[50px]
          text-gray-500
          transition-transform duration-300
          hover:scale-110
          hover:text-yellow-400
        "
        aria-hidden="true"
      />
    </button>
  );
};
