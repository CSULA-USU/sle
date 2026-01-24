import { Typography } from "@/components";

interface BulletListProps {
  title: string;
  description: (string | string[])[];
}

export const BulletList = ({ title, description }: BulletListProps) => {
  return (
    <div>
      <Typography variant="footerHeader" fontSize="xl">
        {title}
      </Typography>
      <ul className="list-none pl-0">
        {description.map((e, i) => (
          <li
            key={i}
            className={`mb-2 relative ${
              Array.isArray(e)
                ? "pl-6"
                : "pl-6 before:content-['✓'] before:text-yellow-400 before:font-bold before:absolute before:left-0"
            }`}
          >
            {Array.isArray(e) ? (
              <ul className="list-none pl-0 mt-1">
                {e.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="mb-1 pl-6 relative before:content-['•']  before:font-bold before:absolute before:left-0 before:text-sm"
                  >
                    <Typography variant="copy" fontSize="lg">
                      {subItem}
                    </Typography>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography variant="copy" fontSize="lg">
                {e}
              </Typography>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
