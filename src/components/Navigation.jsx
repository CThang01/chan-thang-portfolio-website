import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { darkMode, toggleDarkMode } = useTheme()

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-sm shadow-gray-200/50 dark:shadow-gray-900/50'
        : 'bg-transparent'
    } border-b border-gray-200/60 dark:border-gray-800/60`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="text-sm font-semibold text-gray-900 dark:text-white">
            Chan Thang
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1 text-xs font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-[17px] left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gray-900 dark:bg-white rounded-full" />
                )}
              </Link>
            ))}

            <div className="w-px h-4 bg-gray-200 dark:bg-gray-700 mx-2" />

            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button onClick={toggleDarkMode} className="p-2 text-gray-400" aria-label="Toggle dark mode">
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-0.5 bg-white dark:bg-black">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
