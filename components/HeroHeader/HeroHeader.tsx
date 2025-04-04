import Image from "next/image";
import { FluidContainer, Typography } from "@/components";

interface HeroHeaderProps {
  imgAlt: string;
  imgSrc: string;
  imgSrcMobile?: string; // Optional mobile image
  title?: string;
  children?: React.ReactNode;
}

export const HeroHeader = ({
  imgAlt,
  imgSrc,
  imgSrcMobile,
  title,
  children,
}: HeroHeaderProps) => {
  return (
    <div className="bg-[#262C32] overflow-hidden">
      <FluidContainer alignItems="end">
        <div className="flex justify-between max-md:flex-col-reverse max-md:text-center w-full">
          {title ? (
            <>
              <FluidContainer
                flex
                flexDirection="col"
                justifyContent="center"
                padding="max-md:py-4"
              >
                <Typography variant="pageHeader" color="white" as="h1">
                  {title}
                </Typography>
                <div className="flex justify-center gap-4">{children}</div>
              </FluidContainer>
              <picture>
                {/* Mobile image */}
                <source srcSet={imgSrcMobile} media="(max-width: 768px)" />
                {/* Desktop image */}
                <source srcSet={imgSrc} media="(min-width: 769px)" />
                {/* Fallback image */}
                <Image
                  alt={imgAlt}
                  src={imgSrc}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain h-[350px] max-sm:h-[200px]"
                  width={500}
                  height={300}
                  layout="intrinsic"
                  priority
                />
              </picture>
            </>
          ) : (
            // If no title is provided, just shows the image
            <>
              <picture>
                <source srcSet={imgSrcMobile} media="(max-width: 768px)" />
                <source srcSet={imgSrc} media="(min-width: 769px)" />
                <Image
                  alt={imgAlt || ""}
                  src={imgSrc}
                  className="object-contain"
                  layout="responsive"
                  width={0}
                  height={0}
                  priority
                />
              </picture>
            </>
          )}
        </div>
      </FluidContainer>
    </div>
  );
};
