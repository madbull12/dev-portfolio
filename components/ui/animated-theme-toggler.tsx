"use client";

import { Moon, SunDim } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModeAnimation } from "react-theme-switch-animation";
import { useTheme } from "next-themes";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();
  const { theme, setTheme } = useTheme();
  // const isDarkMode = theme === "dark"
  return (
    <button
      ref={ref}
      onClick={() => {
        toggleSwitchTheme();

        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className={cn(className)}
    >
      {isDarkMode ? <SunDim /> : <Moon />}
    </button>
  );
};
