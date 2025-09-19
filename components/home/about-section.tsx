import Image from "next/image";
import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import { Logo } from "@/components/svg/logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import ShinyText from "@/components/ui/shiny-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WritingText } from "@/components/ui/shadcn-io/writing-text";

const AboutSection = () => {
  return (
    <section className="p-4 relative rounded-sm bg-background/10 backdrop-blur-md border border-border">
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex gap-4 items-start">
        <Image
          src="/assets/gaming-lofi.jpg"
          alt="profile art"
          width={400}
          height={500}
          className="rounded-3xl object-contain"
        />
        <div className="space-y-4">
          <div className="flex items-center gap-x-4">
            <Avatar className="border rounded-full size-10">
              <AvatarImage
                src="/assets/profile-picture.jpg"
                alt="profile-pic"
              />
              <AvatarFallback className="text-primary bg-primary/10">
                <User className="size-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-xl font-black">Andrian Huang</p>
              <p className="text-muted-foreground tracking-wide text-base">
                @Ekspedingin |{" "}
                <span className="italic">Front End Developer</span>{" "}
              </p>
            </div>
          </div>
          <TextGenerateEffect
            className="text-4xl"
            words={"Building modern, responsive, and scalable web apps."}
          />
          <WritingText
            text="Building amazing interfaces has never been this smooth"
            inView={true}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 2,
              delay: 0.3,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
