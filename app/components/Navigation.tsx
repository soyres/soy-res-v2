'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navigation.module.css'

interface NavLink {
  label: string
  href: string
  color: string
  icon: string
}

const navLinks: NavLink[] = [
  { label: 'Projects', href: '/projects', color: '#00f0ff', icon: '💻' },
  { label: 'Running', href: '/running', color: '#ff00ff', icon: '🏃' },
  { label: 'Blog', href: '/blog', color: '#00ff88', icon: '✍️' },
  { label: 'About', href: '/about', color: '#ffff00', icon: '👤' },
]

export default function ImprovedNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Don't show on home page
  if (pathname === '/') return null

  return (
    <>
      {/* Minimal Floating Toggle */}
      <motion.button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          className={styles.icon}
        >
          <motion.path
            d="M4 6h16"
            animate={isOpen ? { d: "M18 6L6 18" } : { d: "M4 6h16" }}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            d="M4 12h16"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            d="M4 18h16"
            animate={isOpen ? { d: "M6 6L18 18" } : { d: "M4 18h16" }}
            transition={{ duration: 0.2 }}
          />
        </svg>
      </motion.button>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Elegant Menu Card */}
            <motion.nav
              className={styles.nav}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              role="navigation"
              aria-label="Main navigation"
            >
              {/* Close button */}
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Links */}
              <div className={styles.navContent}>
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                        style={{ '--link-color': link.color } as React.CSSProperties}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className={styles.navIcon}>{link.icon}</span>
                        <span className={styles.navLabel}>{link.label}</span>
                        {isActive && (
                          <motion.div 
                            className={styles.activeIndicator}
                            layoutId="activeIndicator"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Home Link */}
              <motion.div
                className={styles.homeSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Link href="/" className={styles.homeLink} onClick={() => setIsOpen(false)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <path d="M9 22V12h6v10" />
                  </svg>
                  <span>Back to Home</span>
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}