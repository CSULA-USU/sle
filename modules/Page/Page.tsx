import { Nav } from "../Nav";
import { Footer } from "../Footer";
export const Page = ({ children }: any) => {
  return (
    <div className="min-h-full flex flex-col justify-center my-0 mx-auto">
      <Nav/>
      <div>
      {children}
      </div>
      <Footer />
    </div>
  );
};
