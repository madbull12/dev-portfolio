"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../ui/button";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowUp, Github, GithubIcon } from "lucide-react";
import { Logo } from "@/components/svg/logo";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { IconBrandGithub } from "@tabler/icons-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
// const links = [
//   {
//     title: "All",
//     href: "/",
//   },
//   {
//     title: "Experience",
//     href: "/experience",
//   },
//   {
//     title: "Projects",
//     href: "/projects",
//   },
//   {
//     title: "About",
//     href: "/about",
//     isComingSoon: true,
//   },

// ]

const pathNameDisableHeaderScroll = [""];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const pathname = usePathname();

  const isDisableHeaderScroll = pathNameDisableHeaderScroll.includes(pathname);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (isDisableHeaderScroll) {
      setIsScrolled(false);
      return;
    }

    if (currentScrollY === 0) {
      setIsScrolled(false);
    } else if (currentScrollY > 0) {
      setIsScrolled(true);
    }

    lastScrollY.current = currentScrollY;
  }, [isDisableHeaderScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isDisableHeaderScroll]);

  return (
    <>
      <header
        className={cn(
          "top-8 sm:top-10 z-50 ",
          !isDisableHeaderScroll && "sticky"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl  justify-between gap-10 items-center transition-all duration-300 px-4 z-50 ",
            isScrolled
              ? "bg-white/80 backdrop-blur-3xl md:p-6 dark:bg-zinc-900/80  shadow -translate-y-8 md:rounded-3xl"
              : "bg-transparent w-full "
          )}
        >
          <div className="flex items-center gap-2">
            <Logo className="size-14 " />
          </div>
          {/* <div className="flex-1 items-center gap-3 justify-center hidden sm:flex">
            {links.map((link) => (
              <HeaderLink
                key={link.title}
                title={link.title}
                href={link.href}
              />
            ))}
          </div> */}
          <div className="flex items-center gap-2">
            <RainbowButton
              size={"icon"}
              variant="outline"
              className="cursor-target"
            >
              <IconBrandGithub className="size-4" />
            </RainbowButton>
            <RainbowButton
              size={"icon"}
              variant={"outline"}
              className="cursor-target"
              asChild
            >
              <AnimatedThemeToggler />
            </RainbowButton>
            <InteractiveHoverButton >
              Contact Me
            </InteractiveHoverButton>
            {/* <ModeToggle /> */}
          </div>
        </div>
      </header>

      {isDisableHeaderScroll && <ScrollToTopButton />}
    </>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-10 !bg-zinc-900/80 backdrop-blur-md rounded-xl p-2 hover:scale-110 duration-300 fixed bottom-4 right-8 md:right-20 z-[9999]"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ArrowUp className="text-white" />
    </Button>
  );
};

const HeaderLink = ({ title, href }: { title: string; href: string }) => {
  const pathname = usePathname() || "/";
  const isActive = href === pathname;
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full transition-colors",
        isActive
          ? "dark:bg-white dark:text-black bg-zinc-900 text-white"
          : "dark:hover:bg-zinc-800 hover:bg-zinc-100"
      )}
    >
      <Link href={href}>{title}</Link>
    </div>
  );
};
