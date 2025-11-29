"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const projectContents = [
  {
    subtitle: "A full-stack Twitter-style social platform built from scratch.",
    description:
      "This Twitter clone was a massive learning experience for me. I implemented core social features—posting, liking, following, timelines—and handled everything from UI to API architecture. It’s the project that taught me the most about building real apps at scale.",
    techStacks: [
      "Next.js",
      "Typescript",
      "tRPC",
      "Tailwind CSS",
      "Prisma",
      "Postgresql",
    ],
    projectUrl: "https://t3-twitter-clone-nine.vercel.app/auth/signin",
  },
  {
    subtitle: "My first portfolio built with love",
    techStacks: [
      "Astro.js",
      "Typescript",
      "React.js",
      "Tailwind CSS",
      "Framer motion",
    ],

    description:
      "This website was built with Astro.js. I thought about learning Astro.js so I tried building this project using this framework. You can checkout all my older personal projects on this website.",
    projectUrl: "https://andrian-portfolio-five.vercel.app",
  },
];

export function ProjectsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

interface ProjectContentProps {
  content: {
    subtitle: string;
    description: string;
    techStacks: string[];
    projectUrl: string;
  };
}

const ProjectContent = ({ content }: ProjectContentProps) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl max-w-3xl space-y-2">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl  mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {content.subtitle}
        </span>
        <br />
        {content.description}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        {content.techStacks.map((item) => (
          <div className="px-4 py-2 bg-white dark:bg-black shadow-sm rounded-lg" key={item}>
            {item}
          </div>
        ))}
      </div>
      <Link
        href={content.projectUrl}
        target="_blank"
        aria-label="Open project in new tab"
      >
        <InteractiveHoverButton>View Project</InteractiveHoverButton>
      </Link>
    </div>
  );
};



const data = [
  {
    category: "Social Media",
    title: "T3 Twitter Clone",
    src: "/assets/twitter-mockup.png",
    content: <ProjectContent content={projectContents[0]} />,
  },
  {
    category: "Portfolio",
    title: "My First Portfolio",
    src: "/assets/portfolio-mac.png",
    content: <ProjectContent content={projectContents[1]} />,
  },
];
