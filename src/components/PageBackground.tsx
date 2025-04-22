'use client'

import { motion } from 'framer-motion'

export default function PageBackground() {
  return (
    <>
      {/* Light mode background */}
      <motion.div
        className="fixed inset-0 bg-white transition-opacity duration-300 ease-in-out z-[-2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Dark mode background */}
      <motion.div
        className="fixed inset-0 bg-gray-900 transition-opacity duration-300 ease-in-out z-[-2] dark:opacity-100 opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </>
  )
} 