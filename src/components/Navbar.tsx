'use client'

import { useState, useCallback, useMemo, memo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
]

const NavLink = memo(({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <Link href={href} className="relative group">
    <motion.div
      className="relative px-3 py-1.5"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <span className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
        isActive 
          ? 'text-blue-600 dark:text-blue-400' 
          : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
      }`}>
        {children}
      </span>
      
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={false}
        animate={{ 
          backgroundColor: isActive ? "rgba(219, 234, 254, 0.3)" : "rgba(219, 234, 254, 0)",
          scale: isActive ? 1 : 0.98
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ type: "tween", duration: 0.2 }}
      />
    </motion.div>
  </Link>
))

NavLink.displayName = 'NavLink'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const memoizedNavItems = useMemo(() => navItems.map((item) => (
    <NavLink key={item.name} href={item.href} isActive={pathname === item.href}>
      {item.name}
    </NavLink>
  )), [pathname])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-7xl">
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="mx-auto max-w-screen-xl rounded-2xl shadow-lg shadow-black/5 dark:shadow-white/5 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/20"
        >
          <div className="px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <Link 
                  href="/" 
                  className="relative text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white"
                >
                  Next-Gen AI Solutions
                </Link>
              </motion.div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  {memoizedNavItems}
                </div>
                <div className="flex items-center space-x-4">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "tween", duration: 0.2 }}>
                    <ThemeToggle />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "tween", duration: 0.2 }}>
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white overflow-hidden rounded-lg transition-all duration-200"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-200 group-hover:scale-[1.02]" />
                      <span className="relative">Get Started</span>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden items-center space-x-4">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "tween", duration: 0.2 }}>
                  <ThemeToggle />
                </motion.div>
                <motion.button
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "tween", duration: 0.2 }}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  aria-label="Toggle menu"
                >
                  <div className="relative w-6 h-6">
                    <motion.span 
                      animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: -4 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="absolute w-6 h-0.5 bg-current transform origin-center"
                    />
                    <motion.span 
                      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="absolute w-6 h-0.5 bg-current transform origin-center top-1/2 -translate-y-1/2"
                    />
                    <motion.span 
                      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 4 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="absolute w-6 h-0.5 bg-current transform origin-center"
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="md:hidden border-t border-gray-200/20 dark:border-gray-700/20 rounded-b-2xl overflow-hidden"
              >
                <div className="px-6 pt-2 pb-4 space-y-1">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.02, x: 4 }}
                      transition={{ type: "tween", duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                          pathname === item.href
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="pt-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "tween", duration: 0.2 }}
                  >
                    <Link
                      href="/contact"
                      className="group relative block w-full px-4 py-2 text-base font-medium text-center text-white overflow-hidden rounded-lg transition-all duration-200"
                      onClick={closeMenu}
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-200 group-hover:scale-[1.02]" />
                      <span className="relative">Get Started</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </div>
  )
} 