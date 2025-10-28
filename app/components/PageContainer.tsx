'use client'

import { ReactNode } from 'react'
import Navigation from './Navigation'
import styles from './PageContainer.module.css'

interface PageContainerProps {
  children: ReactNode
  accentColor: string
}

export default function PageContainer({ children, accentColor }: PageContainerProps) {
  return (
    <div 
      className={styles.container}
      style={{ '--accent-color': accentColor } as React.CSSProperties}
    >
      <Navigation />
      {children}
    </div>
  )
}