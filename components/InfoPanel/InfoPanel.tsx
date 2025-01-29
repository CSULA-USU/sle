import { Typography } from "@/components";

interface InfoPanelProps {
  title?: string;
  description: string;
  imgAlt: string;
  imgSrc: string;
  imgClass?: string;
  theme?: "light" | "dark";
  imageRight?: boolean;
  children?: React.ReactNode;
}

export const InfoPanel = ({
  title,
  description,
  imgAlt,
  imgSrc,
  theme,
  imageRight,
  imgClass,
  children,
}: InfoPanelProps) => {
  return (
    <div
      className={`flex mb-10 max-md:flex-col items-center ${
        imageRight === true ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`w-11/12 flex flex-col max-md:mx-0 max-md:mb-6 max-md:text-center gap-4 ${
          imageRight ? "ml-20" : " mr-20"
        }`}
      >
        {title ? (
          <>
            <Typography
              variant={`${theme === "dark" ? "sectionHeader" : "subheader"}`}
              color={`${theme === "light" ? "black" : "white"}`}
            >
              {title}
            </Typography>
          </>
        ) : (
          <></>
        )}
        <div className="text-left">
          <Typography
            variant="informational"
            color={`${theme === "light" ? "black" : "white"}`}
          >
            {description}
          </Typography>
        </div>
        {children ? (
          <>
            <div className="flex flex-wrap gap-x-5 max-md:justify-center">
              {children}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <img
          alt={imgAlt}
          src={imgSrc}
          width={1000}
          height={700}
          className={`object-contain ${imgClass}`}
        />
      </div>
    </div>
  );
};
