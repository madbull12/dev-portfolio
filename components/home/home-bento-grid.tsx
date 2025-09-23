"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Boxes } from "lucide-react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
} from "@tabler/icons-react";
import LogoLoop from "@/components/ui/logo-loop";
import { useTheme } from "next-themes";
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
          className={`${
            i === 3 || i === 6 ? "md:col-span-2" : ""
          } bg-background`}
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
        fadeOutColor={theme === 'dark' ? "#000" : "#fff"}
        ariaLabel="Technology partners"
      />
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
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
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
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
