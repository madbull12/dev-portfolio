import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className="py-32 px-8 max-w-6xl mx-auto space-y-16">{children}</main>;
};

export default PageWrapper;
