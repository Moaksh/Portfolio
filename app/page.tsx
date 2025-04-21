"use client";
import Hero from "@/components/hero";
import About from "@/components/about";
import { useState, useEffect } from "react"
import { LazyMotion, domAnimation } from "framer-motion"
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Research from "@/components/research";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";
import CustomCursor from "@/components/custom-cursor";
import Navigation from "@/components/navigation";
import LoadingAnimation from "@/components/loading-animation";
import EnhancedBackground from "@/components/enhanced-background";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Slight delay before showing content for smooth transition
    setTimeout(() => {
      setContentVisible(true)
    }, 600)
  }

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading])
  return (
    <LazyMotion features={domAnimation}>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      <main
        className={`relative overflow-hidden bg-[#f5f5f5] dark:bg-[#121212] transition-all duration-1000 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <CustomCursor />
        <EnhancedBackground />
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
    </LazyMotion>
  );
}
