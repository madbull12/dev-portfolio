import Image from "next/image";
import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Code2, Layers, User, Zap } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WritingText } from "@/components/ui/shadcn-io/writing-text";
import { CardSpotlight } from "@/components/ui/card-spotlight";
const exampleSkills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Zustand",
  "Framer Motion",
  "GraphQL",
  "Node.js",
  "Testing (Jest)",
  "Accessibility",
];

const features = [
  {
    icon: <Code2 className="text-purple-500" />,
    title: "Clean Code",
    description: "Crafting maintainable, elegant solutions",
  },
  {
    icon: <Layers className="text-blue-500" />,
    title: "Component Architecture",
    description: "Building scalable, reusable systems",
  },
  {
    icon: <Zap className="text-yellow-500" />,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
];
const SkillTag = ({ text }: { text: string }) => {
  return (
    <div
      className={`
    bg-gray-100 dark:bg-neutral-900 font-semibold px-4 py-1 text-sm rounded-lg 
    inline-flex items-center gap-2 
    transform transition-all duration-200 ease-in-out
    hover:-translate-y-2 hover:shadow-md hover:scale-110 
  `}
    >
      {text}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="p-4 relative rounded-sm bg-background/50 border border-border">
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex lg:flex-row items-center  flex-col gap-4 lg:items-start">
        <img
          src="/assets/coding.jpg"
          alt="profile art"

          className="rounded-3xl lg:w-[500px] h-[400px] w-full object-cover "
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
            className="font-semibold"
            text="Passionate about learning and problem-solving, I embrace challenges as opportunities to improve and grow."
            inView={true}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 2,
              delay: 0.3,
            }}
          />
          <div className="space-y-4">
            <p className="font-bold text-xl tracking-wide my-4">Expertise</p>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              {exampleSkills.map((item, idx) => (
                <SkillTag text={item} key={idx} />
              ))}
            </div>
          </div>
          <div className="flex gap-4 md:flex-row flex-col">
            {features.map((item, idx) => (
              <CardSpotlight key={idx} className="dark:bg-background/50 ">
                <div className="flex flex-col items-center  relative">
                  <div className="flex justify-center mb-4 text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-100 text-center mb-2 ">
                    {item.title}
                  </h3>
                  <p className="text-sm text-center text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
