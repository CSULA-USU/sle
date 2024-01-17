import { FluidContainer } from "../FluidContainer";
import { Typography } from "../Typography";
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
      <FluidContainer flex alignItems="end">
        {title ? (
          <>
            <FluidContainer
              flexDirection="col"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="pageHeader">{title}</Typography>
              <div className="whitespace-nowrap">{children}</div>
            </FluidContainer>
            <Image
              alt={imgAlt || ""}
              src={imgSrc}
              width={700}
              height={700}
              layout="responsive"
              objectFit="contain"
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
              objectFit="contain"
            ></Image>
          </>
        )}
      </FluidContainer>
    </div>
  );
};
