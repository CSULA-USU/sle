import { FluidContainer, NonBreakingSpan, Typography } from "@/components";
import Image from "next/image";

interface CTAProps {
  title?: string;
  description: string;
  imgAlt: string;
  imgSrc: string;
  theme?: "light" | "dark";
  imageRight?: boolean;
  children?: React.ReactNode;
}

export const CTA = ({
  title,
  description,
  imgAlt,
  imgSrc,
  theme,
  imageRight,
  children,
}: CTAProps) => {
  return (
    <div
      className={`flex my-4 max-md:flex-col items-center ${
        imageRight === true ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`w-11/12 flex flex-col max-md:justify-center max-md:mx-0 max-md:mb-6 max-md:text-center ${
          imageRight ? "ml-20" : " mr-20"
        }`}
      >
        <Typography
          variant={`${theme === "dark" ? "sectionHeader" : "subheader"}`}
          color={`${theme === "light" ? "black" : "white"}`}
        >
          <>{title}</>
        </Typography>
        <FluidContainer padding="px-0 py-5 max-md:p-0">
          <Typography
            variant="copy"
            color={`${theme === "light" ? "black" : "white"}`}
          >
            {description}
          </Typography>
        </FluidContainer>
        <div className="flex flex-wrap gap-x-5 max-md:justify-center">
          {children}
        </div>
      </div>
      <div>
        <Image
          alt={imgAlt}
          src={imgSrc}
          width={1000}
          height={700}
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
};
