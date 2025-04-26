'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true')
    } else {
      // If no saved preference, check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true)
        localStorage.setItem('darkMode', 'true')
      }
    }
  }, [])

  const toggleDarkMode = (value: boolean) => {
    setDarkMode(value)
    localStorage.setItem('darkMode', value.toString())
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      {children}
    </div>
  )
} 