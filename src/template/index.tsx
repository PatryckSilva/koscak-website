import { ReactNode } from "react";
import Header from "./header";

const MainTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center overflow-x-hidden`}
    >
      <Header />
      {children}
    </div>
  );
};

export default MainTemplate;
