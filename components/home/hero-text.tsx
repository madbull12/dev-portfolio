import React, { memo } from "react";
import { Cover } from "@/components/ui/cover";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const HeroText = () => {
  return (
    <section className="flex-1 relative">
      <div className="text-xs bg-zinc-100 dark:bg-zinc-800/50 w-max rounded-full border flex items-center gap-2 px-3 py-1.5">
        <div className="size-2 rounded-full bg-violet-700 font-medium animate-pulse" />
        Turning ideas into code 💻
      </div>
      <div className="flex flex-row  items-center my-4 lg:my-0 lg:block">
        <h1 className="text-4xl text-start font-black md:text-4xl lg:text-6xl   relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Hello<span className="lg:hidden">,</span> <br />
        </h1>
        <h1 className="text-4xl font-black md:text-4xl lg:text-6xl  text-start  relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          I'm <Cover>Andrian Huang</Cover>
        </h1>
      </div>
      {/* <div className="px-3 py-2 hidden sm:block absolute top-8 left-16 sm:left-32 bg-purple-500/20 rounded-[6px] w-max font-medium dark:text-purple-300 text-purple-500 border border-purple-500/20 animate-wiggle duration-1000">
        UI Magic
      </div>

      <div className="px-3 py-2 hidden sm:block absolute top-24 right-4 sm:right-10 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-wiggle duration-1000">
        Clean Code
      </div> */}
      <ContainerTextFlip
        animationDuration={1000}
        interval={5000}
        className="text-xl md:text-3xl mt-4"
        words={["Front-end Developer", "Full-stack Developer", "Next.js Developer", "Mobile Developer", "Typescript Enthusiast"]}
      />
    </section>
  );
};

export default HeroText;
