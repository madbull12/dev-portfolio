import React, { memo } from "react";

const HeroText = () => {

  return (
    <section className="w-1/2 relative">
      <div className="text-xs bg-zinc-100 dark:bg-zinc-800/50 w-max rounded-full border flex items-center gap-2 px-3 py-1.5">
        <div className="size-2 rounded-full bg-violet-700 font-medium animate-pulse" />
        Turning ideas into code 💻

      </div>
      <div className="flex flex-row gap-4 items-center my-4 lg:my-0 lg:block">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight my-4 md:my-8 dark:text-zinc-300 text-zinc-700">
            Hello<span className="lg:hidden">,</span>
          </h1>

          <Title />
        </div>
      {/* <div className="px-3 py-2 hidden sm:block absolute top-8 left-16 sm:left-32 bg-purple-500/20 rounded-[6px] w-max font-medium dark:text-purple-300 text-purple-500 border border-purple-500/20 animate-wiggle duration-1000">
        UI Magic
      </div>

      <div className="px-3 py-2 hidden sm:block absolute top-24 right-4 sm:right-10 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-wiggle duration-1000">
        Clean Code
      </div> */}
    </section>
  );
};
export const Title = memo(() => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight sm:my-6 dark:text-zinc-300 text-zinc-700">
      I&apos;m 
    </h1>
  );
});

Title.displayName = "Title";
export default HeroText;
