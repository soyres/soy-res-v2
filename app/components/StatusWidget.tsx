'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './StatusWidget.module.css'

export default function StatusWidget() {
  const [currentTime, setCurrentTime] = useState('')
  const [isAvailable, setIsAvailable] = useState(true)

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const denver = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(new Date())
      setCurrentTime(denver)

      // Check availability based on Denver time (9 AM - 6 PM)
      const denverHour = new Date().toLocaleString('en-US', {
        timeZone: 'America/Denver',
        hour: 'numeric',
        hour12: false,
      })
      const hour = parseInt(denverHour)
      setIsAvailable(hour >= 9 && hour < 18)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className={styles.widget}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className={styles.status}>
        <motion.div
          className={styles.indicator}
          animate={{
            backgroundColor: isAvailable ? '#00ff88' : '#ff9500',
            boxShadow: isAvailable
              ? '0 0 20px rgba(0, 255, 136, 0.6)'
              : '0 0 20px rgba(255, 149, 0, 0.6)',
          }}
          transition={{
            duration: 0.3,
          }}
        />
        <span className={styles.statusText}>
          {isAvailable ? 'Available for projects' : 'Away - Responds within 24h'}
        </span>
      </div>

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span className={styles.icon}>📍</span>
          <span className={styles.text}>Denver, CO</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.icon}>🕐</span>
          <span className={styles.text}>{currentTime || 'Loading...'}</span>
        </div>

        {/* Optional: Add Spotify now playing */}
        {/* <div className={styles.infoItem}>
          <span className={styles.icon}>🎧</span>
          <span className={styles.text}>Lofi Hip Hop</span>
        </div> */}
      </div>

      <motion.a
        href="mailto:respizarro3@gmail.com"
        className={styles.cta}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={styles.ctaIcon}>✉️</span>
        <span className={styles.ctaText}>Get in Touch</span>
      </motion.a>
    </motion.div>
  )
}