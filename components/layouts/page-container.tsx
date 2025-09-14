import { ReactNode } from "react";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="absolute top-0 w-full h-full">{children}</div>;
};

export default PageContainer;
