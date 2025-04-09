"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState("")

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) {
      return
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Handle hover states for interactive elements
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        (target.hasAttribute("role") && target.getAttribute("role") === "button")
      ) {
        setIsHovering(true)
        setCursorText("Click")
      } else {
        setIsHovering(false)
        setCursorText("")
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", handleLinkHover)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", handleLinkHover)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible, isHovering])

  if (!isVisible) return null

  return (
    <>
      {/* Hide the default cursor */}
      <style jsx global>{`
        @media (min-width: 768px) {
          body {
            cursor: none !important;
          }
          a, button, [role="button"], input, select, textarea {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        <div
          className={`relative flex items-center justify-center w-8 h-8 ${isHovering ? "text-primary-foreground" : "text-white"}`}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.5 6.5h11m-11 11h11M18 4v16M6 4v16M2 8v8M22 8v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {isHovering && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[8px] font-bold text-primary-foreground bg-primary px-1 rounded-sm">
                {cursorText}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className={`fixed top-0 left-0 z-[9999] w-1 h-1 rounded-full pointer-events-none hidden md:block ${isHovering ? "bg-primary" : "bg-primary"}`}
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 3 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 500,
        }}
      />

      {/* Cursor trail effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 z-[9998] w-1 h-1 rounded-full bg-primary/30 pointer-events-none hidden md:block"
          animate={{
            x: position.x,
            y: position.y,
            scale: 1 - i * 0.1,
            opacity: 0.5 - i * 0.1,
          }}
          transition={{
            type: "tween",
            duration: 0.2,
            delay: i * 0.05,
          }}
        />
      ))}
    </>
  )
}
