"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white dark:bg-[#121212] shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-black tracking-tighter text-[#FF5252] hover:scale-105 transition-transform"
          >
            MK.
          </a>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-bold border-2 border-transparent hover:border-[#FF5252] rounded-md transition-all hover:bg-[#FF5252]/10 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 border-2 border-[#FF5252] rounded-md hover:bg-[#FF5252]/10 transition-all"
          >
            <Menu className="h-6 w-6 text-[#FF5252]" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#FF5252] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 border-2 border-white rounded-md hover:bg-white/10 transition-all"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black text-white hover:underline decoration-4 underline-offset-8 transition-all hover:scale-110"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

