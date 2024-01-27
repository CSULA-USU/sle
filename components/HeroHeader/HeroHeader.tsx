import { FluidContainer, Typography } from "@/components";
import Image from "next/image";

interface HeroHeaderProps {
  imgAlt: string;
  imgSrc: string;
  title?: string;
  children?: React.ReactNode;
}

export const HeroHeader = ({
  imgAlt,
  imgSrc,
  title,
  children,
}: HeroHeaderProps) => {
  return (
    <div className="bg-black">
      <FluidContainer alignItems="end">
        <div className="flex max-md:flex-col-reverse max-md:text-center">
          {title ? (
            <>
              <FluidContainer flex flexDirection="col" justifyContent="center">
                <Typography variant="pageHeader" color="white">
                  {title}
                </Typography>
                <div className="flex gap-6 max-md:justify-center">
                  {children}
                </div>
              </FluidContainer>
              <Image
                alt={imgAlt}
                src={imgSrc}
                width={600}
                height={500}
                layout="responsive"
                className="object-contain"
              ></Image>
            </>
          ) : (
            <>
              <Image
                alt={imgAlt || ""}
                src={imgSrc}
                width={1}
                height={1}
                layout="responsive"
              ></Image>
            </>
          )}
        </div>
      </FluidContainer>
    </div>
  );
};
