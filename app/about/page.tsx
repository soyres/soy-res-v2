'use client'

import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import styles from './About.module.css'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
]

const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Building scalable web applications and leading frontend architecture decisions.'
  },
  {
    role: 'Software Engineer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: 'Developed full-stack features and improved application performance by 40%.'
  },
  {
    role: 'Junior Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: 'Created responsive websites and collaborated with design teams.'
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Purpose-Driven',
    description: 'I build things that make a meaningful impact on people\'s lives.'
  },
  {
    icon: '🚀',
    title: 'Continuous Growth',
    description: 'Always learning, always improving, always pushing boundaries.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Great products are built by great teams working together.'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Challenging the status quo and finding creative solutions.'
  },
]

export default function About() {
  return (
    <div className={styles.container}>
      <PageHeader 
        title="About Me"
        subtitle="Software engineer, runner, and lifelong learner"
        accentColor="#ffff00"
      />

      <div className={styles.content}>
        {/* Eclipse Card */}
        <motion.div 
          className={styles.eclipseCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitleMain}>Software Engineer & Problem Solver</h2>
              <p className={styles.cardDescriptionMain}>
                Passionate about creating beautiful, functional, and accessible web experiences.
                Based in Denver, Colorado, combining technical expertise with creative thinking
                to build products that make a difference.
              </p>
            </div>

            <div className={styles.statsOverview}>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>5+</div>
                <div className={styles.statBoxLabel}>Years Experience</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>50+</div>
                <div className={styles.statBoxLabel}>Projects</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>8</div>
                <div className={styles.statBoxLabel}>Technologies</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>Denver</div>
                <div className={styles.statBoxLabel}>Location</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.section 
          className={styles.intro}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.bioCard}>
            <h2 className={styles.sectionTitle}>Hi, I'm Res 👋</h2>
            <p className={styles.bioText}>
              I'm a software engineer based in Denver, Colorado, passionate about creating 
              beautiful, functional, and accessible web experiences. When I'm not coding, 
              you'll find me training for marathons or writing about the intersection of 
              technology and personal growth.
            </p>
            <p className={styles.bioText}>
              I believe in building products that not only solve problems but also delight 
              users. With 5+ years of experience in full-stack development, I've worked on 
              everything from early-stage startups to large-scale enterprise applications.
            </p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section 
          className={styles.section}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>What I Value</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          className={styles.section}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className={styles.skillCard}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
                <div className={styles.skillTags}>
                  {skillGroup.items.map(item => (
                    <span key={item} className={styles.skillTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          className={styles.section}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <h3 className={styles.jobRole}>{job.role}</h3>
                  <div className={styles.jobMeta}>
                    <span className={styles.jobCompany}>{job.company}</span>
                    <span className={styles.jobPeriod}>{job.period}</span>
                  </div>
                  <p className={styles.jobDescription}>{job.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section 
          className={styles.ctaSection}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h2 className={styles.ctaTitle}>Let's Work Together</h2>
          <p className={styles.ctaText}>
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>
          <motion.a 
            href="mailto:respizarro3@gmail.com"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.section>
      </div>
    </div>
  )
}