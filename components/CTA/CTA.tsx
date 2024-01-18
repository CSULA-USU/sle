import { FluidContainer, NonBreakingSpan, Typography } from "@/components";
import Image from "next/image";

interface CTAProps {
  title: string;
  description: string;
  imgAlt: string;
  imgSrc: string;
  children?: React.ReactNode;
}

export const CTA = ({
  title,
  description,
  imgAlt,
  imgSrc,
  children,
}: CTAProps) => {
  return (
    <div className="flex max-md:flex-col-reverse md:h-[500px] items-center">
      <div className="w-11/12 mr-20 flex flex-col max-md:justify-center max-md:mr-0 max-md:mt-10 max-md:text-center">
        <Typography variant="sectionHeader" color="white">
          <NonBreakingSpan>{title}</NonBreakingSpan>
        </Typography>
        <FluidContainer padding="px-0 py-5">
          <Typography variant="copy" color="white">
            {description}
          </Typography>
        </FluidContainer>
        <div>{children}</div>
      </div>
      <Image
        alt={imgAlt}
        src={imgSrc}
        width={500}
        height={500}
        layout="responsive"
      ></Image>
    </div>
  );
};
