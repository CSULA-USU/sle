import { FluidContainer, Typography } from "@/components";

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
                <Typography variant="pageHeader" color="white">
                  {title}
                </Typography>
                <div className="flex justify-between gap-4 max-md:justify-center">
                  {children}
                </div>
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
                style={{
                  height: "auto",
                  width: "100%",
                }}
              />
            </>
          )}
        </div>
      </FluidContainer>
    </div>
  );
};
