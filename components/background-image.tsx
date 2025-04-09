"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface BackgroundImageProps {
  className?: string
  children?: React.ReactNode
  overlayOpacity?: number
  blurAmount?: string
  imageUrl?: string
}

export default function BackgroundImage({
  className = "",
  children,
  overlayOpacity = 0.1,
  blurAmount = "100px",
  imageUrl = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop",
}: BackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadImage = () => {
      const img = new Image()
      img.src = imageUrl
      img.crossOrigin = "anonymous"
      img.onload = () => setIsLoaded(true)
      img.onerror = () => {
        console.error("Failed to load background image:", imageUrl)
        // Still set as loaded but with a fallback
        setIsLoaded(true)
      }
    }

    if (imageUrl) {
      loadImage()
    } else {
      // If no image URL is provided, still mark as loaded
      setIsLoaded(true)
    }
  }, [imageUrl])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? overlayOpacity : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: isLoaded
            ? `url('${imageUrl}')`
            : "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))",
        }}
        aria-hidden="true"
      />

      {/* Premium overlay effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 mix-blend-overlay"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, filter: `blur(${blurAmount})` }}
        animate={{ opacity: isLoaded ? 0.8 : 0, filter: `blur(${blurAmount})` }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(193, 255, 0, 0.05) 0%, transparent 50%)`,
        }}
      />

      {children}
    </div>
  )
}
