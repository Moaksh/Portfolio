import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Research from "@/components/research";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";
import CustomCursor from "@/components/custom-cursor";
import Navigation from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#f5f5f5] dark:bg-[#121212]">
      <CustomCursor />
      <Navigation />
      <div className="container mx-auto px-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}
