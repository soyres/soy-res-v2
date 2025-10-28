'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
        background: '#000',
      }}
    >
      {/* Animated spinner */}
      <motion.div
        style={{
          width: '60px',
          height: '60px',
          border: '3px solid rgba(255, 255, 255, 0.1)',
          borderTop: '3px solid #00f0ff',
          borderRadius: '50%',
          position: 'relative',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Inner glow */}
        <motion.div
          style={{
            position: 'absolute',
            inset: '-3px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3), transparent 70%)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.div
        style={{
          color: '#888',
          fontSize: '0.95rem',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        Loading...
      </motion.div>

      {/* Dots animation */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            style={{
              width: '8px',
              height: '8px',
              background: '#00f0ff',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.6)',
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: index * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}