"use client"

import * as React from "react"
import { useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  
  // Set theme to system preference on initial load
  useEffect(() => {
    setTheme("system")
  }, [])
  
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="border-2 border-transparent hover:border-[#FF5252] hover:bg-[#FF5252]/10 relative overflow-hidden bg-white dark:bg-[#121212] md:bg-transparent md:dark:bg-transparent"
    >
      <Sun 
        className="h-[1.2rem] w-[1.2rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out text-[#FF5252]"
        style={{
          opacity: resolvedTheme === "dark" ? 0 : 1,
          transform: `translate(-50%, -50%) ${resolvedTheme === "dark" ? "rotate(-90deg) scale(0)" : "rotate(0) scale(1)"}`
        }}
      />
      <Moon 
        className="h-[1.2rem] w-[1.2rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out text-[#FF5252]"
        style={{
          opacity: resolvedTheme === "dark" ? 1 : 0,
          transform: `translate(-50%, -50%) ${resolvedTheme === "dark" ? "rotate(0) scale(1)" : "rotate(90deg) scale(0)"}`
        }}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}