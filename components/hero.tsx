"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsLoaded(true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FF5252] animate-pulse">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter">MOAKSH KAKKAR</h1>
              <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
                Full Stack AI Engineer
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              
              <a
                href="https://linkedin.com/MoakshKakkar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white font-bold rounded-md border-2 border-black dark:border-white dark:shadow-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Moaksh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#333] text-white font-bold rounded-md border-2 border-black dark:border-white dark:shadow-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-[#FF5252]/20 rounded-3xl border-4 border-black dark:border-white"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              }}
            ></div>
            <div
              className="absolute inset-4 bg-[#FF5252]/40 rounded-2xl border-4 border-black dark:border-white"
              style={{
                transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
              }}
            ></div>
            <div
              className="absolute inset-8 bg-[#FF5252] rounded-xl border-4 border-black dark:border-white flex items-center justify-center overflow-hidden"
              style={{
                transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
              }}
            >
              <img
                src="/image.jpeg?height=300&width=300"
                alt="Moaksh Kakkar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#FF5252]/20 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-sm font-medium">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

