'use client'

import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import styles from './projects.module.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    tech: 'Next.js, TypeScript, Stripe',
    description: 'Full-stack marketplace with payment processing and real-time inventory management',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo.example.com'
  },
  {
    title: 'AI Chat Application',
    tech: 'React, Python, OpenAI API',
    description: 'Real-time AI-powered chat with context awareness and conversation history',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Data Visualization Dashboard',
    tech: 'D3.js, React, Node.js',
    description: 'Interactive analytics platform with real-time updates and custom chart types',
    github: 'https://github.com/yourusername/project3',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Task Management System',
    tech: 'Vue.js, Firebase, Tailwind',
    description: 'Collaborative project management tool with real-time updates',
    github: 'https://github.com/yourusername/project4',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Weather Forecast App',
    tech: 'React Native, Express, OpenWeather API',
    description: 'Cross-platform mobile app with location-based weather data',
    github: 'https://github.com/yourusername/project5',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Portfolio Generator',
    tech: 'Next.js, Markdown, GitHub API',
    description: 'Automated portfolio site builder from GitHub repositories',
    github: 'https://github.com/yourusername/project6',
    demo: 'https://demo.example.com'
  }
]

export default function ProjectsPage() {
  const accentColor = '#00f0ff'

  return (
    <div className={styles.container} style={{ '--accent-color': accentColor } as React.CSSProperties}>
      <PageHeader 
        title="Projects"
        subtitle="Coding Portfolio"
        accentColor={accentColor}
      />

      <motion.div 
        className={styles.eclipseCard}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Full-Stack Development</h2>
            <p className={styles.cardDescription}>
              Building scalable web applications with modern frameworks and best practices. 
              Specializing in React, Next.js, TypeScript, and Node.js with a focus on 
              performance and user experience.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>24</div>
              <div className={styles.statLabel}>Completed</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>8</div>
              <div className={styles.statLabel}>Languages</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>15k+</div>
              <div className={styles.statLabel}>Lines of Code</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>Open Source</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.section 
        className={styles.projectsGrid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className={styles.sectionTitle}>Featured Projects</h3>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article 
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
            >
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <p className={styles.projectTech}>{project.tech}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.projectLinks}>
                <a href={project.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
                <a href={project.demo} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  )
}