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
    <section className="flex flex-col-reverse gap-4 items-center lg:flex-row">
      <HeroText />
      <Terminal className="flex-1 relative overflow-hidden max-w-full">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

        <AnimatedSpan delay={0}>$ hello-world</AnimatedSpan>
        <TypingAnimation delay={800} duration={90}>
          Hi, I’m Andrian 👋 — Frontend developer & problem solver.
        </TypingAnimation>

        <AnimatedSpan delay={2500}>$ cat skills.txt</AnimatedSpan>
        <TypingAnimation delay={3500} duration={70}>
          TypeScript • React • Next.js • Tailwind • Prisma • PostgreSQL
        </TypingAnimation>

        <AnimatedSpan delay={5500}>$ cat interests.txt</AnimatedSpan>
        <TypingAnimation delay={6500} duration={70}>
          Building clean UIs • Learning new tech • Video games • Fitness
        </TypingAnimation>

        <AnimatedSpan delay={8500}>$ open portfolio</AnimatedSpan>
        <TypingAnimation delay={9500} duration={70}>
          🚀 Deploying ideas into reality...
        </TypingAnimation>

        <AnimatedSpan delay={11500}>$ echo "Welcome aboard!"</AnimatedSpan>
        <TypingAnimation delay={12500} duration={90}>
          Thanks for stopping by — feel free to explore.
        </TypingAnimation>
      </Terminal>
    </section>
  );
};

export default HeroSection;
