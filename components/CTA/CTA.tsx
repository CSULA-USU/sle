import { FluidContainer, NonBreakingSpan, Typography } from "@/components";
import Image from "next/image";
// import { useBreakpoint } from "hooks";
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
  //   const isMobile = useBreakpoint();
  return (
    <div className="flex h-[500px] items-center">
      <div className="w-11/12 mr-20 flex-col">
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
        width={1}
        height={1}
        layout="responsive"
      ></Image>
    </div>
  );
};
