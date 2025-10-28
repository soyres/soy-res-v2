'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styles from './AnimatedSection.module.css'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  id?: string
}

export default function AnimatedSection({ 
  children, 
  delay = 0,
  className = '',
  id
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${className}`}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  )
}