"use client";

import { Moon, SunDim } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModeAnimation } from "react-theme-switch-animation";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation()
  console.log("is dark mode: ", isDarkMode)

  return (
    <button ref={ref} onClick={toggleSwitchTheme} className={cn(className)}>
      {isDarkMode ? <SunDim /> : <Moon />}
    </button>
  );
};
