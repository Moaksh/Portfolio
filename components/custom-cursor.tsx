"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Show cursor when component mounts
    setHidden(false)

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("clickable")||
        target.tagName === "INPUT" ||
        target.closest("input") ||
        target.tagName === "TEXTAREA" ||
        target.closest("textarea")
      ) {
        setLinkHovered(true)
      } else {
        setLinkHovered(false)
      }
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    // Add all event listeners
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)

    return () => {
      // Clean up all event listeners
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [])

  // Don't render on mobile devices
  if (
    typeof window !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ) {
    return null
  }

  return (
    <div
      className={`fixed top-0 left-0 z-50 pointer-events-none ${hidden ? "opacity-0" : "opacity-100"}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "opacity 0.3s ease",
        marginLeft: "-8px",
        marginTop: "-8px",
      }}
    >
      <div
        className={`relative flex items-center justify-center ${
          clicked ? "scale-75" : "scale-100"
        } ${linkHovered ? "scale-150" : "scale-100"}`}
        style={{ transition: "transform 0.15s ease-out" }}
      >
        <div
          className={`absolute rounded-full ${
            linkHovered ? "w-8 h-8 bg-[#FF5252] opacity-50" : "w-6 h-6 bg-[#FF5252] opacity-30"
          }`}
          style={{ transition: "all 0.15s ease-out" }}
        ></div>
        <div
          className={`rounded-full ${linkHovered ? "w-2 h-2 bg-white" : "w-3 h-3 bg-[#FF5252]"}`}
          style={{ transition: "all 0.15s ease-out" }}
        ></div>
      </div>
    </div>
  )
}

