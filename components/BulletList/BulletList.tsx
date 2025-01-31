import { Typography } from "@/components";

interface BulletListProps {
  title: string;
  description: string[];
}

export const BulletList = ({ title, description }: BulletListProps) => {
  return (
    <div>
      <Typography variant="footerHeader" color="black">
        {title}
      </Typography>
      <ul className="list-disc list-none pl-0">
        {description.map((e, i) => (
          <li
            key={i}
            className="mb-2 pl-6 relative before:content-['✓'] before:text-yellow-400 before:font-bold before:absolute before:left-0"
          >
            <Typography variant="copy">{e}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
