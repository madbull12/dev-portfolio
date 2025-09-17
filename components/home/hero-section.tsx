"use client";

import React from "react";
import HeroText from "@/components/home/hero-text";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/shadcn-io/terminal";
import { ShineBorder } from "@/components/ui/shine-border";

const HeroSection = () => {
  return (
    <section className="flex">
      <HeroText />
      <Terminal className="flex-1">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <AnimatedSpan delay={0}>$ hello-world</AnimatedSpan>
        <TypingAnimation delay={1000} duration={100}>
          Hi, I'm Andrian 👋
        </TypingAnimation>
        <AnimatedSpan delay={2500}>$ cat skills.txt</AnimatedSpan>
        <TypingAnimation delay={3500} duration={80}>
          Typescript • React • Next.js • Tailwind
        </TypingAnimation>
        <AnimatedSpan delay={5500}>$ cat hobbies.txt</AnimatedSpan>
        <TypingAnimation delay={6500} duration={80}>
          🚴 Motorbikes • 🎮 Gaming • 🎵 Music
        </TypingAnimation>
        <AnimatedSpan delay={5500}>$ open portfolio</AnimatedSpan>
        <TypingAnimation delay={6500} duration={80}>
          🚀 Launching projects...
        </TypingAnimation>
        <AnimatedSpan delay={8500}>Anyways, here's a cat for u</AnimatedSpan>
        <TypingAnimation delay={9500} duration={100}>
          {`
   /\\_/\\  
  ( o.o ) 
   > ^ <
  `}
        </TypingAnimation>
      </Terminal>
    </section>
  );
};

export default HeroSection;
