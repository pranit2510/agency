'use client'

import { useEffect, useState } from 'react'
import { useTheme as useNextTheme } from 'next-themes'

export function useTheme() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useNextTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme: resolvedTheme,
    toggleTheme,
    isDark: resolvedTheme === 'dark',
    mounted
  }
} 