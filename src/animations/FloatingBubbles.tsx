"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate random bubbles
    const newBubbles: Bubble[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 2,
    }))
    setBubbles(newBubbles)

    // Track mouse movement for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-teal-200/20 to-teal-300/10 backdrop-blur-sm"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + bubble.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        />
      ))}

      {/* Parallax cursor effect */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-teal-400/5 to-teal-500/5 backdrop-blur-sm"
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  )
}
