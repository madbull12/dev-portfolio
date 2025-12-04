import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ImageZoom } from "@/components/ui/image-zoom";

const kreasiTechImages = [
  "/assets/kreasitech-1.jpg",
  "/assets/kreasitech-2.jpg",
  "/assets/kreasitech-3.jpg",
  "/assets/kreasitech-4.jpg",
];

const slivaTechImages = ["/assets/sliva-1.jpg", "/assets/sliva-2.jpg"];

export function WorkTimeline() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className="font-bold text-lg">
            Web & Mobile Front End Developer | Ekspedingin
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Building a marketplace app for Ekspedingin.
          </p>
          <ul>
            <p className="font-semibold">Skills used in this project</p>
            <li>✅ Next.js</li>
            <li>✅ Typescript</li>
            <li>✅ Framer motion</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Socket.io</li>
            <li>✅ React Native Expo</li>
            <li>Many more</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="font-bold text-lg">Front End Developer | Kreasitech</p>

          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Worked as a front end developer. Below are my responsibilities
          </p>
          <ul className="mb-8">
            <li>
              ✅ Contributed to the development of an Enterprise Risk Management
              System (ERMS) for Bank Syariah Indonesia.
            </li>
            <li>
              ✅ Built with Next.js and TypeScript to ensure scalability and
              type safety.
            </li>
            <li>
              ✅ Collaborated with a team of frontend and backend developers to
              deliver high-quality features on schedule.
            </li>
            <li>
              ✅ Implemented React Context for state management and developed
              reusable components for maintainability.
            </li>
            <li>
              ✅ Styled interfaces using Mantine UI, ensuring consistency and
              modern design. System (ERMS) for Bank Syariah Indonesia.
            </li>
            <li>
              ✅ Conducted daily meetings with project managers to align
              priorities, track progress, and resolve blockers.
            </li>
            <li>
              ✅ Focused on writing clean, maintainable code and following best
              practices.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4 ">
            {kreasiTechImages.map((item) => (
              <ImageZoom key={item}>
                <img
                  src={item}
                  alt="kreasitech 1st image"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </ImageZoom>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="font-bold text-lg">
            Front End Developer Intern | Slivatech
          </p>
          <ul className="mb-8">
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Developed and maintained the SlivaDoc website using React.js
              and TypeScript.
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Implemented Context API for state management and created
              reusable, styled components with Styled Components.
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Collaborated with other developers to deliver new features and
              ensure smooth integration.
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Conducted weekly meetings with the CEO to align on priorities,
              gather feedback, and present progress.
            </li>
            <li className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Focused on writing clean, maintainable code while following
              industry best practices.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {slivaTechImages.map((item) => (
              <ImageZoom key={item}>
                <img
                  src={item}
                  alt="sliva image"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </ImageZoom>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <p className="font-bold text-lg">Freelance Software Developer</p>
          <p>
            As a freelance developer, I have had the opportunity to work with a
            diverse range of clients and build custom web applications that meet
            their specific needs. My focus is on delivering high-quality
            products that not only meet the technical requirements but also
            exceed the expectations of my clients.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
