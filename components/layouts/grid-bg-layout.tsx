"use client";

import { ReactNode } from "react";
import DotGrid from "@/components/DotGrid";
import { useTheme } from "next-themes";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

const GridBgLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-full relative">
      {/* <DotGrid
        dotSize={5}
        gap={15}
        baseColor={isDarkMode ? "#271e37" : "#f0f0f0"}
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      /> */}
      <BackgroundRippleEffect />
      {children}
    </main>
  );
};

export default GridBgLayout;
