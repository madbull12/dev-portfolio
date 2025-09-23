import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import { HomeBentoGrid } from "@/components/home/home-bento-grid";

export default function Home() {
  return (
    <main className="px-8 py-16 container mx-auto space-y-16">
      <HeroSection />
      <AboutSection />
      <HomeBentoGrid />
    </main>
  );
}
