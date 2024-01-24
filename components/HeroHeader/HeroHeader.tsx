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
        <div className="flex justify-between max-md:flex-col-reverse max-md:text-center">
          {title ? (
            <>
              <FluidContainer flex flexDirection="col" justifyContent="center">
                <Typography variant="pageHeader">{title}</Typography>
                <div className="flex justify-between">{children}</div>
              </FluidContainer>
              <img
                alt={imgAlt}
                src={`${imgSrc}`}
                style={{
                  height: "320px",
                  width: "auto",
                }}
                className="object-contain"
              />
            </>
          ) : (
            <>
              <img
                alt={imgAlt || ""}
                src={imgSrc}
                style={{ height: "auto", width: "100%" }}
              />
            </>
          )}
        </div>
      </FluidContainer>
    </div>
  );
};
