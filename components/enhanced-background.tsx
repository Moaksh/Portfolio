"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"

export default function EnhancedBackground() {
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)

  // Get scroll progress with smoother values
  const { scrollYProgress } = useScroll()

  // Apply spring physics for even smoother animation
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Check if we're on mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      checkMobile()
      window.addEventListener("resize", checkMobile)

      // Track mouse movement
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX / window.innerWidth)
        mouseY.set(e.clientY / window.innerHeight)
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("resize", checkMobile)
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [mouseX, mouseY])

  // Dynamic color transitions based on scroll
  const primaryHue = useTransform(smoothScroll, [0, 0.5, 1], [0, 10, 0])
  const primaryColor = useMotionTemplate`hsla(${primaryHue}, 85%, 60%, 1)`
  const secondaryHue = useTransform(smoothScroll, [0, 0.5, 1], [30, 40, 30])
  const secondaryColor = useMotionTemplate`hsla(${secondaryHue}, 85%, 60%, 1)`

  // Grid transformations
  const gridScale = useTransform(smoothScroll, [0, 0.5, 1], [1, 1.2, 1])
  const gridRotate = useTransform(smoothScroll, [0, 0.5, 1], [0, 5, 0])
  const gridOpacity = useTransform(smoothScroll, [0, 0.2, 0.8, 1], [0.1, 0.2, 0.2, 0.1])

  // Floating elements transformations
  const floatingY1 = useTransform(smoothScroll, [0, 1], ["0%", "100%"])
  const floatingY2 = useTransform(smoothScroll, [0, 1], ["100%", "0%"])
  const floatingY3 = useTransform(smoothScroll, [0, 1], ["50%", "150%"])
  const floatingY4 = useTransform(smoothScroll, [0, 1], ["150%", "50%"])

  const floatingRotate1 = useTransform(smoothScroll, [0, 1], [0, 180])
  const floatingRotate2 = useTransform(smoothScroll, [0, 1], [180, 0])
  const floatingRotate3 = useTransform(smoothScroll, [0, 1], [45, 225])
  const floatingRotate4 = useTransform(smoothScroll, [0, 1], [225, 45])

  // Wave effect
  const wavePathY = useTransform(smoothScroll, [0, 0.5, 1], [0, 50, 0])

  // Mouse-reactive elements
  const mouseReactiveX = useTransform(mouseX, [0, 1], [-50, 50])
  const mouseReactiveY = useTransform(mouseY, [0, 1], [-50, 50])

  // Generate shapes for the background
  const generateShapes = () => {
    if (isMobile) {
      // Fewer shapes for mobile
      return Array.from({ length: 5 }).map((_, i) => (
        <Shape key={i} index={i} scrollProgress={smoothScroll} isMobile={isMobile} />
      ))
    }

    return Array.from({ length: 12 }).map((_, i) => (
      <Shape key={i} index={i} scrollProgress={smoothScroll} isMobile={isMobile} />
    ))
  }

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Color gradient background */}
      <motion.div
        className="absolute inset-0 opacity-10 will-change-transform"
        style={{
          background: useMotionTemplate`linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
        }}
      />

      {/* Grid background */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          scale: gridScale,
          rotate: gridRotate,
          opacity: gridOpacity,
          backgroundImage: "radial-gradient(circle, rgba(255,82,82,0.2) 1px, transparent 1px)",
          backgroundSize: isMobile ? "40px 40px" : "30px 30px",
        }}
      />

      {/* Wave effect */}
      <svg
        className="absolute bottom-0 left-0 w-full h-64 opacity-10"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <motion.path
          d="M0,160 C320,300,420,300,720,160 C1020,20,1120,20,1440,160 V320 H0 Z"
          fill={primaryColor}
          style={{ y: wavePathY }}
          className="will-change-transform"
        />
      </svg>

      {/* Floating elements */}
      <motion.div
        className="absolute left-[10%] w-40 h-40 rounded-full border-4 border-dashed opacity-20 will-change-transform"
        style={{
          borderColor: primaryColor,
          top: floatingY1,
          rotate: floatingRotate1,
          x: mouseReactiveX,
        }}
      />

      <motion.div
        className="absolute right-[15%] w-64 h-64 rounded-full border-2 opacity-10 will-change-transform"
        style={{
          borderColor: secondaryColor,
          top: floatingY2,
          rotate: floatingRotate2,
          x: useTransform(mouseX, [0, 1], [50, -50]),
        }}
      />

      <motion.div
        className="absolute left-[20%] w-32 h-32 border-4 opacity-15 will-change-transform"
        style={{
          borderColor: primaryColor,
          top: floatingY3,
          rotate: floatingRotate3,
          y: useTransform(mouseY, [0, 1], [30, -30]),
        }}
      />

      <motion.div
        className="absolute right-[25%] w-48 h-48 border-8 border-dotted opacity-10 will-change-transform"
        style={{
          borderColor: secondaryColor,
          top: floatingY4,
          rotate: floatingRotate4,
          y: useTransform(mouseY, [0, 1], [-30, 30]),
        }}
      />

      {/* Dynamic shapes */}
      {generateShapes()}

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-[#FF5252] origin-left will-change-transform"
        style={{ scaleX: smoothScroll, width: "100%" }}
      />
    </div>
  )
}

interface ShapeProps {
  index: number
  scrollProgress: any
  isMobile: boolean
}

function Shape({ index, scrollProgress, isMobile }: ShapeProps) {
  // Determine shape properties based on index
  const isEven = index % 2 === 0
  const size = isMobile ? 20 + (index % 3) * 10 : 30 + (index % 5) * 15

  // Use percentage values for positioning to ensure responsiveness
  const initialX = `${10 + (index % 9) * 10}%`
  const initialY = `${5 + (index % 7) * 15}%`

  // Limit movement to prevent clipping
  const maxMovement = isMobile ? 50 : 100

  // Different movement patterns based on index with limited range
  const xMovement = useTransform(scrollProgress, [0, 1], isEven ? [0, maxMovement] : [0, -maxMovement])

  const yMovement = useTransform(
    scrollProgress,
    [0, 1],
    index % 3 === 0 ? [0, maxMovement] : index % 3 === 1 ? [0, -maxMovement] : [0, 0],
  )

  const rotation = useTransform(scrollProgress, [0, 1], [0, isEven ? 180 : -180])
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [1, isEven ? 1.5 : 0.5, 1])
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [0.1, 0.2, 0.2, 0.1])

  // Determine shape type based on index
  const shapeType = index % 4

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        left: initialX,
        top: initialY,
        x: xMovement,
        y: yMovement,
        rotate: rotation,
        scale,
        opacity,
        // Add max dimensions to prevent overflow
        maxWidth: "100px",
        maxHeight: "100px",
      }}
    >
      {shapeType === 0 && (
        <div className="rounded-full border-2 border-[#FF5252]" style={{ width: size, height: size }} />
      )}
      {shapeType === 1 && <div className="border-2 border-[#FF5252]" style={{ width: size, height: size }} />}
      {shapeType === 2 && <div className="rounded-full bg-[#FF5252]" style={{ width: size / 2, height: size / 2 }} />}
      {shapeType === 3 && <div className="bg-[#FF5252]" style={{ width: size / 2, height: size / 2 }} />}
    </motion.div>
  )
}
