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
      <ul className="list-disc ml-10">
        {description.map((e, i) => (
          <li key={i}>
            <Typography variant="copy">{e}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
