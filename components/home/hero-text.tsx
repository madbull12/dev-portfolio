import React from "react";
import TextType from "@/components/ui/text-type";

const HeroText = () => {
  return (
    <section>
      <div className="text-xs bg-zinc-100 dark:bg-zinc-800/50 w-max rounded-full border flex items-center gap-2 px-3 py-1.5">
        <div className="size-2 rounded-full bg-violet-700 font-medium animate-pulse" />
        <TextType
          className="font-semibold"
          text={[
            "Crafting digital experiences ✨",
            "Front-end Developer & UI Enthusiast",
            "Pixel perfect meets performant code",
            "Let’s build something awesome!"
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </section>
  );
};

export default HeroText;
