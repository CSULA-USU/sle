import { FluidContainer } from "../FluidContainer";
import { Typography } from "../Typography";
import { Button } from "../Button";
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
            <FluidContainer flexDirection="col">
              <Typography variant="pageHeader">{title}</Typography>
              <div>{children}</div>
            </FluidContainer>
            <Image
              alt={imgAlt || ""}
              src={imgSrc}
              width={100}
              height={100}
              layout="responsive"
            ></Image>
          </>
        ) : (
          <>
            <Image
              alt={imgAlt || ""}
              src={imgSrc}
              layout="responsive"
              objectFit="fill"
            ></Image>
          </>
        )}
      </FluidContainer>
    </div>
  );
};
