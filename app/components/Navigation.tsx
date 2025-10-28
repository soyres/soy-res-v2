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
}

const navLinks: NavLink[] = [
  { label: 'Projects', href: '/projects', color: '#00f0ff' },
  { label: 'Running', href: '/running', color: '#ff00ff' },
  { label: 'Blog', href: '/blog', color: '#00ff88' },
  { label: 'About', href: '/about', color: '#ffff00' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Don't show on home page
  if (pathname === '/') return null

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.nav
              className={styles.nav}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className={styles.navContent}>
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                        style={{ '--link-color': link.color } as React.CSSProperties}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className={styles.navDot}></span>
                        <span className={styles.navLabel}>{link.label}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Quick Links */}
              <motion.div
                className={styles.quickLinks}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/" className={styles.homeLink}>
                  ← Home
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}