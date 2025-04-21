"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

interface LoadingAnimationProps {
  onComplete?: () => void
  minDisplayTime?: number
}

export default function LoadingAnimation({ onComplete, minDisplayTime = 2000 }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const startTime = Date.now()
    let animationFrame: number

    // Simulate loading progress
    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const calculatedProgress = Math.min(elapsed / minDisplayTime, 1)
      setProgress(calculatedProgress)

      if (calculatedProgress < 1) {
        animationFrame = requestAnimationFrame(updateProgress)
      } else {
        setIsComplete(true)
        controls.start("exit")
        setTimeout(() => {
          if (onComplete) {
            onComplete()
          }
        }, 600) // Match exit animation duration
      }
    }

    // Start progress animation
    animationFrame = requestAnimationFrame(updateProgress)

    // Track actual page load
    const handleLoad = () => {
      // Ensure minimum display time
      const remainingTime = Math.max(0, minDisplayTime - (Date.now() - startTime))
      setTimeout(() => {
        setProgress(1)
        setIsComplete(true)
        controls.start("exit")
        setTimeout(() => {
          if (onComplete) {
            onComplete()
          }
        }, 600) // Match exit animation duration
      }, remainingTime)
    }

    // Listen for window load event
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("load", handleLoad)
    }
  }, [minDisplayTime, onComplete, controls])

  // Neo-brutalist loading animation with optimized animations
  return (
    <motion.div
      className="fixed inset-0 bg-[#f5f5f5] dark:bg-[#121212] z-50 flex flex-col items-center justify-center will-change-transform"
      initial={{ opacity: 1 }}
      animate={controls}
      variants={{
        exit: { opacity: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ pointerEvents: isComplete ? "none" : "auto" }}
    >
      <div className="relative w-64 h-64 mb-8">
        {/* Animated squares - optimized for performance */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full will-change-transform"
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <div className="absolute top-0 left-0 w-16 h-16 bg-[#FF5252] border-2 border-black"></div>
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 w-full h-full will-change-transform"
          animate={{ rotate: -360 }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.2,
          }}
        >
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#333] border-2 border-black"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 w-full h-full will-change-transform"
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.4,
          }}
        >
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#FF9E80] border-2 border-black"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-full will-change-transform"
          animate={{ rotate: -360 }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            delay: 0.6,
          }}
        >
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FF6E40] border-2 border-black"></div>
        </motion.div>

        {/* Center MK logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-4xl font-black tracking-tighter text-black dark:text-white will-change-transform"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            MK.
          </motion.div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-8 border-2 border-black bg-white dark:bg-black relative overflow-hidden">
        <motion.div
          className="h-full bg-[#FF5252] will-change-transform"
          style={{ width: `${progress * 100}%` }}
          transition={{ ease: "easeInOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white mix-blend-difference">{Math.round(progress * 100)}%</span>
        </div>
      </div>

      <motion.p
        className="mt-4 text-sm font-medium text-black dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Loading awesome stuff...
      </motion.p>
    </motion.div>
  )
}
