"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Link from "next/link";

type ProjectContentProps = {
  content: {
    subtitle: string;
    description: string;
    features?: string[];
    techStacks: string[];
    projectUrl: string;
    githubUrl?: string;
  };
};


const projectContents = [
  {
  subtitle: "A full-stack Twitter-style social platform built from scratch.",
  description:
    "Designed and built end to end over three months: data model, type-safe API, and UI. Includes tweets with images, videos, GIFs and polls, replies, retweets, bookmarks, lists, notifications, hashtags, and search.",
  features: [
    "Tweets with images, videos, GIFs, emoji and polls",
    "Replies, retweets, likes, pinned tweets and bookmarks",
    "Lists with member management, plus follow/unfollow and a following feed",
    "Notifications, hashtags, explore page and search",
    "Profile tabs for tweets, replies, media and likes",
    "Auth with NextAuth, theme switching, fully responsive",
  ],
  techStacks: [
    "Next.js",
    "Typescript",
    "tRPC",
    "Tailwind CSS",
    "Prisma",
    "Postgresql",
    "NextAuth",
  ],
  projectUrl: "https://t3-twitter-clone-nine.vercel.app/",
  githubUrl: "https://github.com/madbull12/t3-twitter-clone",
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
    githubUrl: "https://github.com/madbull12/andrian-portfolio",

  },
];

export function ProjectsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full  relative">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ProjectContent = ({ content }: ProjectContentProps) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl max-w-3xl space-y-6">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {content.subtitle}
        </span>
        <br />
        {content.description}
      </p>

      {content.features && content.features.length > 0 && (
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Key features
          </h4>
          <ul className="space-y-2 text-sm md:text-base text-neutral-600 dark:text-neutral-300">
            {content.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span aria-hidden className="mt-0.5 text-neutral-400">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        {content.techStacks.map((item) => (
          <div
            className="px-4 py-2 bg-white dark:bg-black shadow-sm rounded-lg"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <Link
          href={content.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open live demo in new tab"
        >
          <InteractiveHoverButton>Live Demo</InteractiveHoverButton>
        </Link>

        {content.githubUrl && (
          <Link
            href={content.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
          >
            <InteractiveHoverButton>GitHub</InteractiveHoverButton>
          </Link>
        )}
      </div>
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
    title: "Portfolio V1",
    src: "/assets/portfolio-mac.png",
    content: <ProjectContent content={projectContents[1]} />,
  },
];
