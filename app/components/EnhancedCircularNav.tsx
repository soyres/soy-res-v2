'use client'

import { useState, useEffect, useRef, MouseEvent, KeyboardEvent } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './EnhancedCircularNav.module.css'

interface QuarterInfo {
  id: number
  kbNavPosition: number
  title: string
  subtitle: string
  description: string
  stats: { label: string; value: string }[]
  color: string
  href: string
}

const quarters: QuarterInfo[] = [
  { 
    id: 1,
    kbNavPosition: 2,
    title: 'Projects',
    subtitle: 'Coding Portfolio',
    description: 'Full-stack applications and open source contributions',
    stats: [
      { label: 'Completed', value: '24' },
      { label: 'Languages', value: '8' },
    ],
    color: '#00f0ff',
    href: '/projects'
  },
  { 
    id: 2, 
    kbNavPosition: 3,
    title: 'Running',
    subtitle: 'Marathon Training',
    description: 'Personal records and training insights',
    stats: [
      { label: 'This Month', value: '128mi' },
      { label: 'Best Time', value: '3:24:15' },
    ],
    color: '#ff00ff',
    href: '/running'
  },
  { 
    id: 3,
    kbNavPosition: 4,
    title: 'Blog',
    subtitle: 'Tech & Life',
    description: 'Writing about code, running, and personal growth',
    stats: [
      { label: 'Posts', value: '18' },
      { label: 'Readers', value: '2.4k' },
    ],
    color: '#00ff88',
    href: '/blog'
  },
  { 
    id: 4,
    kbNavPosition: 1,
    title: 'About',
    subtitle: 'My Story',
    description: 'Software engineer, runner, and lifelong learner',
    stats: [
      { label: 'Experience', value: '5yr' },
      { label: 'Location', value: 'Denver' },
    ],
    color: '#ffff00',
    href: '/about'
  }
]

const socialLinks = [
  { name: 'GitHub', icon: '💻', href: 'https://github.com/yourusername', label: 'Visit my GitHub profile' },
  { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/yourusername', label: 'Connect on LinkedIn' },
  { name: 'Email', icon: '📧', href: 'mailto:respizarro3@gmail.com.com', label: 'Send me an email' },
]

export default function EnhancedCircular() {
  const [activeQuarter, setActiveQuarter] = useState<number | null>(null)
  const [titleText, setTitleText] = useState('')
  const [taglineText, setTaglineText] = useState('')
  const [showContent, setShowContent] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)
  const isButtonHover = useRef(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    if (mediaQuery.matches) {
      setTitleText('SOY RES')
      setTaglineText('The lenses through which I see life, are expansive.')
      setShowContent(true)
    } else {
      const titleFull = 'SOY RES'
      const taglineFull = 'The lenses through which I see life, are expansive.'
      let titleIndex = 0
      let taglineIndex = 0

      const titleInterval = setInterval(() => {
        if (titleIndex < titleFull.length) {
          setTitleText(titleFull.slice(0, titleIndex + 1))
          titleIndex++
        } else {
          clearInterval(titleInterval)
          const taglineInterval = setInterval(() => {
            if (taglineIndex < taglineFull.length) {
              setTaglineText(taglineFull.slice(0, taglineIndex + 1))
              taglineIndex++
            } else {
              clearInterval(taglineInterval)
              setShowContent(true)
            }
          }, 30)
        }
      }, 80)

      return () => {
        clearInterval(titleInterval)
        mediaQuery.removeEventListener('change', handleChange)
      }
    }

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || isButtonHover.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const relativeX = x - centerX
    const relativeY = y - centerY

    let angle = Math.atan2(-relativeY, relativeX) * (180 / Math.PI)
    angle = (90 - angle + 360) % 360

    if (angle >= 0 && angle < 90) {
      setActiveQuarter(1)
    } else if (angle >= 90 && angle < 180) {
      setActiveQuarter(2)
    } else if (angle >= 180 && angle < 270) {
      setActiveQuarter(3)
    } else {
      setActiveQuarter(4)
    }
  }

  const handleMouseLeave = () => {
    if (!isButtonHover.current) {
      setActiveQuarter(null)
    }
  }

  const handleClick = () => {
    if (activeQuarter) {
      const quarter = quarters.find(q => q.id === activeQuarter)
      if (quarter) {
        window.location.href = quarter.href
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, quarterId: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const quarter = quarters.find(q => q.id === quarterId)
      if (quarter) {
        window.location.href = quarter.href
      }
    }
  }

  const activeQuarterInfo = quarters.find(q => q.id === activeQuarter)
  const lowerNavPosition = quarters.sort((a, b) => a.kbNavPosition - b.kbNavPosition)

  return (
    <>
      <div className={styles.container} id="main-content" role="main">
        <header className={styles.header}>
          <h1 className={styles.title}>
            {titleText}
            {!prefersReducedMotion && titleText.length < 7 && <span className={styles.cursor}>_</span>}
          </h1>
          <motion.p 
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: taglineText ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            {taglineText}
            {!prefersReducedMotion && taglineText && taglineText.length < 54 && <span className={styles.cursor}>_</span>}
          </motion.p>
        </header>

        <motion.div 
          className={styles.main}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
          animate={{ opacity: showContent ? 1 : 0, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          <nav className={styles.imageSection} aria-label="Main navigation">
            <div
              className={styles.imageContainer}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
              ref={imageRef}
              role="img"
              aria-label="Interactive navigation circle. Hover over different sections or use buttons below to explore."
              tabIndex={0}
              data-active-color={activeQuarter ? "true" : undefined}
              style={activeQuarter ? { '--active-color': activeQuarterInfo?.color } as React.CSSProperties : undefined}
            >
              <Image
                src="/soy_res.png"
                alt="Portrait of Res Pizarro"
                width={500}
                height={500}
                className={styles.image}
                priority
                quality={90}
              />
              
              <div className={styles.hoverOverlay} aria-hidden="true">
                <div className={`${styles.quarter} ${styles.q1} ${activeQuarter === 1 ? styles.active : ''}`} />
                <div className={`${styles.quarter} ${styles.q2} ${activeQuarter === 2 ? styles.active : ''}`} />
                <div className={`${styles.quarter} ${styles.q3} ${activeQuarter === 3 ? styles.active : ''}`} />
                <div className={`${styles.quarter} ${styles.q4} ${activeQuarter === 4 ? styles.active : ''}`} />
              </div>

              {/* Center text reveal */}
              <div 
                className={`${styles.centerText} ${activeQuarter ? styles.active : ''}`}
                style={activeQuarter ? { '--text-color': activeQuarterInfo?.color } as React.CSSProperties : undefined}
              >
                {activeQuarterInfo?.title}
              </div>
            </div>
            {/* Curved hint text - positioned outside */}
            <svg 
              className={styles.curvedText}
              viewBox="0 0 600 600" 
              width="600" 
              height="600"
              style={{
                opacity: activeQuarter ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
            >
              <defs>
                <path 
                  id="circlePath" 
                  d="M 300, 300 m -260, 0 a 260,260 0 1,1 520,0 a 260,260 0 1,1 -520,0"
                />
              </defs>
              <text className={styles.curvedTextPath}>
                <textPath href="#circlePath" startOffset="43%">
                  HOVER OVER THE IMAGE
                </textPath>
              </text>
            </svg>

            
          </nav>

          <div className={styles.keyboardNav} role="navigation" aria-label="Section quick access">
            {lowerNavPosition.map((quarter) => {
              return (
              <button
                key={quarter.kbNavPosition}
                className={`${styles.navButton} ${activeQuarter === quarter.id ? styles.navButtonActive : ''}`}
                style={{ '--quarter-color': quarter.color } as React.CSSProperties}
                onClick={() => window.location.href = quarter.href}
                onMouseEnter={() => {
                  isButtonHover.current = true
                  setActiveQuarter(quarter.id)
                }}
                onMouseLeave={() => {
                  isButtonHover.current = false
                  setActiveQuarter(null)
                }}
                onFocus={() => {
                  isButtonHover.current = true
                  setActiveQuarter(quarter.id)
                }}
                onBlur={() => {
                  isButtonHover.current = false
                  setActiveQuarter(null)
                }}
                onKeyDown={(e) => handleKeyDown(e, quarter.id)}
                aria-label={`${quarter.title}: ${quarter.description}`}
              >
                <span className="sr-only">{quarter.title}</span>
              </button>
              )

})}
          </div>

          <motion.p 
            className={styles.hint}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeQuarter ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            aria-live="polite"
          >
            Hover over the image or use buttons to explore
          </motion.p>
        </motion.div>
      </div>
    </>
  )
}