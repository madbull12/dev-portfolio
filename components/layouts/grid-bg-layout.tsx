"use client";

import { ReactNode } from "react";
import DotGrid from "@/components/DotGrid";
import { useModeAnimation } from "react-theme-switch-animation";

const GridBgLayout = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useModeAnimation();  
  console.log('isDarkmode: ', isDarkMode)
  return (
    <main className="h-full w-full relative">
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor={isDarkMode ? "#271e37" : "#f0f0f0"}
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      {children}
    </main>
  );
};

export default GridBgLayout;
