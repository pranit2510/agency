'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

const FloatingElement = ({ delay = 0, duration = 4, className = "" }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{
      y: [-20, 20, -20],
    }}
    transition={{
      repeat: Infinity,
      duration,
      delay,
      ease: "easeInOut",
    }}
    className={className}
  />
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
        
        {/* Floating elements */}
        <FloatingElement
          delay={0}
          className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl backdrop-blur-sm"
        />
        <FloatingElement
          delay={1}
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl backdrop-blur-sm"
        />
        <FloatingElement
          delay={2}
          className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl backdrop-blur-sm"
        />
      </div>

      <motion.div 
        style={{ y }}
        className="relative max-w-screen-xl mx-auto px-6 py-20 md:py-32"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white animate-text pb-2">
              Transform Your Business
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Empower your business with cutting-edge AI solutions that drive innovation, efficiency, and growth. 
            Our expert team delivers customized implementations that give you the competitive edge.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/contact"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white overflow-hidden rounded-lg transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:scale-[1.05]" />
              <span className="relative">Get Started Free</span>
            </Link>
            <Link
              href="/services"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 dark:text-gray-200 overflow-hidden rounded-lg transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 transition-all duration-300 group-hover:scale-[1.05]" />
              <span className="relative">Explore Services</span>
            </Link>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "40%", label: "Cost Reduction", desc: "Average savings for our clients" },
            { value: "3x", label: "Efficiency Boost", desc: "Increased operational efficiency" },
            { value: "100+", label: "Happy Clients", desc: "Successful implementations" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl" />
              
              {/* Gradient border */}
              <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Content */}
              <div className="relative text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
} 