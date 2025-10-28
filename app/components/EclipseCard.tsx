'use client'

import { motion } from 'framer-motion'
import styles from './EclipseCard.module.css'

interface Stat {
  label: string
  value: string
}

interface EclipseCardProps {
  title: string
  description: string
  stats: Stat[]
  accentColor: string
  symbols?: string
  delay?: number
}

export default function EclipseCard({ 
  title, 
  description, 
  stats, 
  accentColor,
  symbols = '◇ ⬡ ◆ ⬢ ◇ ⬡',
  delay = 0.2
}: EclipseCardProps) {
  return (
    <motion.div 
      className={styles.eclipseCard}
      style={{ '--accent-color': accentColor } as React.CSSProperties}
      data-symbols={symbols}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardDescription}>{description}</p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className={styles.stat}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: delay + 0.1 + (index * 0.05) }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}