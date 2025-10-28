'use client'

import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  children: string
  accentColor?: string
}

export default function SectionTitle({ children, accentColor }: SectionTitleProps) {
  return (
    <h2 
      className={styles.title}
      style={accentColor ? { '--title-color': accentColor } as React.CSSProperties : undefined}
    >
      {children}
    </h2>
  )
}