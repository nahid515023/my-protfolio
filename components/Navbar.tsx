'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaMoon, FaSun } from 'react-icons/fa'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('/')
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => item.href.startsWith('#'))
        .map(item => item.href.substring(1))

      const sectionElements = sections.map(section => ({
        id: section,
        element: document.getElementById(section),
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(`#${currentSection.id}`)
      } else if (window.scrollY < 100) {
        setActiveSection('/')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === '/') {
      return activeSection === '/'
    }
    return path === activeSection
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
              onClick={() => handleNavClick('/')}
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out ${
                  isActive(item.href)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                )}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-amber-500 hover:text-amber-400 transition-colors" />
              ) : (
                <FaMoon className="w-5 h-5 text-blue-600 hover:text-blue-500 transition-colors" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-amber-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-blue-600" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              <div className="flex items-center">
                {item.label}
                {isActive(item.href) && (
                  <span className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
