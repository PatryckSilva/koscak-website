import { ReactNode } from "react";
import Header from "./header";

const MainTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`min-h-screen w-screen flex flex-col items-center`}>
      <Header />
      {children}
    </div>
  );
};

export default MainTemplate;
