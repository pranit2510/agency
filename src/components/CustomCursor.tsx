'use client'

import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useCallback } from 'react'

const CustomCursor = () => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Using springs for smoother movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  const updateMousePosition = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
  }, [cursorX, cursorY])

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [updateMousePosition])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-3 h-3 rounded-full bg-blue-500 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Outer glow */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-blue-400/30 pointer-events-none z-[9998] mix-blend-difference blur-[1px]"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}

export default CustomCursor 