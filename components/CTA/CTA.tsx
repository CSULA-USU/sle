import { FluidContainer, NonBreakingSpan, Typography } from "@/components";
import Image from "next/image";

interface CTAProps {
  title: string;
  description: string;
  imgAlt: string;
  imgSrc: string;
  theme?: "light" | "dark";
  children?: React.ReactNode;
}

export const CTA = ({
  title,
  description,
  imgAlt,
  imgSrc,
  theme,
  children,
}: CTAProps) => {
  return (
    <div className="flex max-md:flex-col-reverse items-center">
      <div className="w-11/12 mr-20 flex flex-col max-md:justify-center max-md:mr-0 max-md:mt-10 max-md:text-center">
        <Typography
          variant={`${theme === "dark" ? "sectionHeader" : "subheader"}`}
          color={`${theme === "light" ? "black" : "white"}`}
        >
          <NonBreakingSpan>{title}</NonBreakingSpan>
        </Typography>
        <FluidContainer padding="px-0 py-5 max-md:p-0">
          <Typography
            variant="copy"
            color={`${theme === "light" ? "black" : "white"}`}
          >
            {description}
          </Typography>
        </FluidContainer>
        <div>{children}</div>
      </div>
      <Image
        alt={imgAlt}
        src={imgSrc}
        width={400}
        height={400}
        layout="responsive"
      ></Image>
    </div>
  );
};
