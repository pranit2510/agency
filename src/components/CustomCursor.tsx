'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      setIsPointer(
        window.getComputedStyle(hoveredElement || document.body).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-3 h-3 rounded-full bg-blue-500 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.1,
        }}
        style={{
          transform: `translate(-50%, -50%)`,
        }}
      />
      
      {/* Outer glow */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-blue-400/30 pointer-events-none z-[9998] mix-blend-difference blur-[1px]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isPointer ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 45,
          mass: 0.2,
        }}
        style={{
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CustomCursor; 