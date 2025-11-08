import { Typography, Image } from "@/components";

interface InfoPanelProps {
  title?: string;
  description?: string;
  imgAlt: string;
  imgSrc: string;
  imgClass?: string;
  list?: string[];
  theme?: "light" | "dark";
  imageRight?: boolean;
  children?: React.ReactNode;
}

export const InfoPanel = ({
  title,
  description,
  imgAlt,
  imgSrc,
  list,
  theme,
  imageRight,
  imgClass,
  children,
}: InfoPanelProps) => {
  return (
    <div
      className={`flex mb-10 flex-col-reverse md:flex-row max-md:flex-col-reverse items-center ${
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
              as="h2"
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
        {children || list ? (
          <>
            <div className="flex flex-wrap gap-x-5 max-md:justify-center">
              {children}
            </div>
            <div className="flex flex-wrap gap-x-5 max-md:justify-center">
              <ol className="list-disc list-inside">
                {list?.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Typography fontSize="lg">{item}</Typography>
                  </li>
                ))}
              </ol>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <Image
          alt={imgAlt}
          src={imgSrc}
          width={1000}
          height={700}
          className={`object-contain ${imgClass} mb-10 md:mb-0`}
        />
      </div>
    </div>
  );
};
