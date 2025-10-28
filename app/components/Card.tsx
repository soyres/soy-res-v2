'use client'

import { motion } from 'framer-motion'
import styles from './Card.module.css'

interface CardLink {
  label: string
  href: string
}

interface CardProps {
  variant?: 'project' | 'blog' | 'race' | 'skill' | 'value'
  title: string
  subtitle?: string
  description?: string
  icon?: string
  links?: CardLink[]
  badge?: string
  metadata?: Record<string, string>
  accentColor: string
  delay?: number
  onClick?: () => void
}

export default function Card({
  variant = 'project',
  title,
  subtitle,
  description,
  icon,
  links,
  badge,
  metadata,
  accentColor,
  delay = 0,
  onClick
}: CardProps) {
  return (
    <motion.article
      className={`${styles.card} ${styles[variant]}`}
      style={{ '--accent-color': accentColor } as React.CSSProperties}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      {badge && <div className={styles.badge}>{badge}</div>}
      
      {icon && <div className={styles.icon}>{icon}</div>}
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        
        {description && <p className={styles.description}>{description}</p>}
        
        {metadata && (
          <div className={styles.metadata}>
            {Object.entries(metadata).map(([key, value]) => (
              <div key={key} className={styles.metaItem}>
                <span className={styles.metaLabel}>{key}</span>
                <span className={styles.metaValue}>{value}</span>
              </div>
            ))}
          </div>
        )}
        
        {links && links.length > 0 && (
          <div className={styles.links}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}