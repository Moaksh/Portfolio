"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  scrambleOnScroll?: boolean
}

export default function TextScramble({ text, className = "", speed = 50, scrambleOnScroll = true }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const [isScrambling, setIsScrambling] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: !scrambleOnScroll, amount: 0.5 })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Characters to use for scrambling effect
  const chars = "!<>-_\\/[]{}—=+*^?#________"

  useEffect(() => {
    if (isInView && !isScrambling) {
      scrambleText()
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isInView])

  const scrambleText = () => {
    setIsScrambling(true)
    let iteration = 0
    const maxIterations = text.length * 2

    const updateText = () => {
      if (iteration >= maxIterations) {
        setDisplayText(text)
        setIsScrambling(false)
        return
      }

      const progress = Math.min(iteration / maxIterations, 1)
      const targetLength = Math.floor(text.length * progress)

      let result = ""
      for (let i = 0; i < text.length; i++) {
        if (i < targetLength) {
          result += text[i]
        } else if (i === targetLength) {
          result += chars[Math.floor(Math.random() * chars.length)]
        } else {
          result += ""
        }
      }

      setDisplayText(result)
      iteration++

      timeoutRef.current = setTimeout(updateText, speed)
    }

    updateText()
  }

  return (
    <div ref={ref} className={className}>
      {displayText || text}
    </div>
  )
}
