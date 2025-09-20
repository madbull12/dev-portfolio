import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="px-8 py-16 container mx-auto space-y-16">
      <HeroSection />
      <AboutSection />

    </main>
  );
}
