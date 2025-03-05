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
                <Typography variant="pageHeader" color="white">
                  {title}
                </Typography>
                <div className="flex justify-between gap-4 max-sm:gap-0">
                  {children}
                </div>
              </FluidContainer>
              <img
                alt={imgAlt}
                src={`${imgSrc}`}
                className="object-contain h-[350px] max-sm:h-[200px]"
              />
            </>
          ) : (
            <>
              <img alt={imgAlt || ""} src={imgSrc} className="object-contain" />
            </>
          )}
        </div>
      </FluidContainer>
    </div>
  );
};
