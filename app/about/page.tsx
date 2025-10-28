'use client'

import { motion } from 'framer-motion'
import { 
  PageContainer, 
  PageHeader, 
  EclipseCard,
  Card,
  AnimatedSection,
  SectionTitle 
} from '../components'

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

const accentColor = '#ffff00'

export default function About() {
  return (
    <PageContainer accentColor={accentColor}>
      <PageHeader 
        title="About Me"
        subtitle="Software engineer, runner, and lifelong learner"
        accentColor={accentColor}
      />

      <EclipseCard
        title="Software Engineer & Problem Solver"
        description="Passionate about creating beautiful, functional, and accessible web experiences. Based in Denver, Colorado, combining technical expertise with creative thinking to build products that make a difference."
        stats={[
          { label: 'Years Experience', value: '5+' },
          { label: 'Projects', value: '50+' },
          { label: 'Technologies', value: '8' },
          { label: 'Location', value: 'Denver' }
        ]}
        accentColor={accentColor}
        delay={0.2}
      />

      {/* Bio Section */}
      <AnimatedSection delay={0.4}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: 'clamp(2rem, 5vw, 3rem)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Hi, I'm Res 👋
          </h2>
          <p style={{
            color: '#ccc',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            lineHeight: '1.8',
            marginBottom: '1.5rem'
          }}>
            I'm a software engineer based in Denver, Colorado, passionate about creating 
            beautiful, functional, and accessible web experiences. When I'm not coding, 
            you'll find me training for marathons or writing about the intersection of 
            technology and personal growth.
          </p>
          <p style={{
            color: '#ccc',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            lineHeight: '1.8',
            margin: 0
          }}>
            I believe in building products that not only solve problems but also delight 
            users. With 5+ years of experience in full-stack development, I've worked on 
            everything from early-stage startups to large-scale enterprise applications.
          </p>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection delay={0.5}>
        <SectionTitle accentColor={accentColor}>What I Value</SectionTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {values.map((value, index) => (
            <Card
              key={value.title}
              variant="value"
              title={value.title}
              description={value.description}
              icon={value.icon}
              accentColor={accentColor}
              delay={0.6 + (index * 0.1)}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.8}>
        <SectionTitle accentColor={accentColor}>Skills & Technologies</SectionTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '1.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{
                color: accentColor,
                fontSize: '1.1rem',
                fontWeight: '700',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {skillGroup.category}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {skillGroup.items.map(item => (
                  <span key={item} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.5rem 0.75rem',
                    color: '#ccc',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Experience Timeline */}
      <AnimatedSection delay={1.1}>
        <SectionTitle accentColor={accentColor}>Experience</SectionTitle>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                marginBottom: index < experience.length - 1 ? '1.5rem' : '0',
                position: 'relative',
                paddingLeft: 'clamp(1.5rem, 5vw, 3rem)'
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '2rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: accentColor,
                boxShadow: `0 0 15px ${accentColor}`
              }} />
              
              <h3 style={{
                color: 'white',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                {job.role}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '0.75rem',
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
              }}>
                <span style={{ color: accentColor, fontWeight: '600' }}>{job.company}</span>
                <span style={{ color: '#888' }}>{job.period}</span>
              </div>
              <p style={{
                color: '#ccc',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                lineHeight: '1.6',
                margin: 0
              }}>
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={1.5}>
        <div style={{
          background: `linear-gradient(135deg, rgba(255, 255, 0, 0.1), rgba(255, 255, 0, 0.05))`,
          border: `1px solid rgba(255, 255, 0, 0.2)`,
          borderRadius: '20px',
          padding: 'clamp(2rem, 5vw, 3rem)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Let's Work Together
          </h2>
          <p style={{
            color: '#ccc',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to connect!
          </p>
          <motion.a 
            href="mailto:respizarro3@gmail.com"
            style={{
              display: 'inline-block',
              background: accentColor,
              color: '#000',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              boxShadow: `0 0 30px ${accentColor}40`,
              transition: 'all 0.3s ease'
            }}
            whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${accentColor}60` }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </AnimatedSection>
    </PageContainer>
  )
}