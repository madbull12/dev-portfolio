"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconFileCv,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Boxes, Music } from "lucide-react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
} from "@tabler/icons-react";
import LogoLoop from "@/components/ui/logo-loop";
import { MagicCard } from "../ui/magic-card";
import { ScaleLoader } from "react-spinners";
const techLogos = [
  {
    node: <IconBrandReact className="size-14  text-sky-500" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <IconBrandNextjs className="size-14  text-black dark:text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <IconBrandTypescript className="size-14  text-blue-600" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <IconBrandTailwind className="size-14  text-cyan-400" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];
export function HomeBentoGrid() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={`${i === 3 || i === 5 ? "md:col-span-2" : ""} ${
            i === 2 ? "md:row-span-2" : ""
          } bg-gray-100  backdrop-blur-2xl dark:bg-background/50`}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl "></div>
);

const TechStack = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-1 justify-center w-full h-full min-h-[6rem] items-center rounded-xl ">
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor={theme === "dark" ? "#000" : "#fff"}
        ariaLabel="Technology partners"
      />
    </div>
  );
};

const MyResume = () => {
  return (
    <MagicCard className=" h-full flex items-center justify-center">
      <p className="font-bold text-xl text-center">Resume</p>
      <p className="text-neutral-500 font-bold text-sm">
        (Click here to download)
      </p>
    </MagicCard>
  );
};

export const SpotifyPlaylist = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setIsLoading(true);
  }, [currentTheme]);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (!mounted) {
    return (
      <div className="w-full h-[352px] rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && <ScaleLoader className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color={theme==="dark" ? "white" : "black"} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1], // Custom easing for smoother animation
          }}
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src={`https://open.spotify.com/embed/playlist/${
              process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID
            }?utm_source=generator&theme=${
              currentTheme === "dark" ? "0" : "1"
            }`}
            width="100%"
            height="460px"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            onLoad={handleIframeLoad}
          ></iframe>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const items = [
  {
    title: "Tech Stack",
    description:
      "List of technologies I currently use to build modern applications",
    header: <TechStack />,
    icon: <Boxes className="size-4 text-neutral-500" />,
  },
  {
    title: "My Resume",
    description:
      "A quick summary of my experience, projects, and skills — available for download.",
    header: <MyResume />,
    icon: <IconFileCv className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Music & Mood",
    description: "Music I usually listen to while I'm coding and working out",
    header: <SpotifyPlaylist />,
    icon: <Music className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
];
