'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToNextSection}
        className="relative group"
      >
        {/* Outer pulsing circle */}
        <motion.div
          className="absolute inset-0 rounded-full bg-red-500/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main circle with 3D effect */}
        <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg transform-gpu transition-transform duration-300 group-hover:shadow-red-500/50">
          {/* Arrow icon with 3D bounce animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white"
            animate={{
              y: [0, 4, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="h-6 w-6 transform-gpu transition-transform duration-300 group-hover:scale-110" />
          </motion.div>
        </div>
      </motion.button>
    </motion.div>
  )
} 