'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  subtitle: string
  accentColor: string
}

export default function PageHeader({ title, subtitle, accentColor }: PageHeaderProps) {
  return (
    <>
      <Link 
        href="/" 
        className={styles.backButton}
        style={{ '--accent-color': accentColor } as React.CSSProperties}
      >
        ← Back Home
      </Link>
      
      <motion.header 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ '--accent-color': accentColor } as React.CSSProperties}
      >
        <h1 className={styles.title}>
          {title}
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </motion.header>
    </>
  )
}