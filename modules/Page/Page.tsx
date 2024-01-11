import { Nav } from "../Nav";
import { Footer } from "../Footer";

interface PageProps {
  backgroundColor?: "white" | "black";
  children: React.ReactNode;
}
export const Page = ({ children, backgroundColor }: PageProps) => {
  const dynamicProps = [
    "min-h-full",
    "flex",
    "flex-col",
    "justify-center",
    "my-0",
    "mx-auto",
    backgroundColor && `bg-${backgroundColor}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={dynamicProps}>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
