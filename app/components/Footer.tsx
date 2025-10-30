'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/siteConfig'
import styles from './Footer.module.css'

const socialLinks = [
  { 
    name: 'GitHub', 
    href: siteConfig.social.github,
    icon: '💻',
    color: '#00f0ff'
  },
  { 
    name: 'LinkedIn', 
    href: siteConfig.social.linkedin,
    icon: '💼',
    color: '#0077b5'
  },
  { 
    name: 'Email', 
    href: `mailto:${siteConfig.email}`,  // FIXED: No more double .com
    icon: '📧',
    color: '#00ff88'
  },
]

const quickLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Running', href: '/running' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

const techStack = ['React', 'Next.js', 'TypeScript', 'Framer Motion']

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        {/* Main Content */}
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.brandLink}>
              <h3 className={styles.brandName}>{siteConfig.name}</h3>
            </Link>
            <p className={styles.brandTagline}>
              Building things, running miles, writing words.
            </p>
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  style={{ '--social-color': social.color } as React.CSSProperties}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <span className={styles.socialName}>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Explore</h4>
            <nav className={styles.quickLinks} aria-label="Footer navigation">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                >
                  <Link href={link.href} className={styles.quickLink}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Tech Stack */}
          <div className={styles.techSection}>
            <h4 className={styles.sectionTitle}>Built With</h4>
            <div className={styles.techStack}>
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className={styles.techBadge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <p className={styles.copyright}>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <span className={styles.heart}>♥</span> in {siteConfig.location.city}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}