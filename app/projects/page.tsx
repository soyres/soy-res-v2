
'use client'

import { 
  PageContainer, 
  PageHeader, 
  EclipseCard, 
  Card,
  AnimatedSection,
  SectionTitle 
} from '../components'

const projects = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'Next.js, TypeScript, Stripe',
    description: 'Full-stack marketplace with payment processing and real-time inventory management',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo.example.com'
  },
  {
    title: 'AI Chat Application',
    subtitle: 'React, Python, OpenAI API',
    description: 'Real-time AI-powered chat with context awareness and conversation history',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Data Visualization Dashboard',
    subtitle: 'D3.js, React, Node.js',
    description: 'Interactive analytics platform with real-time updates and custom chart types',
    github: 'https://github.com/yourusername/project3',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Task Management System',
    subtitle: 'Vue.js, Firebase, Tailwind',
    description: 'Collaborative project management tool with real-time updates',
    github: 'https://github.com/yourusername/project4',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Weather Forecast App',
    subtitle: 'React Native, Express, OpenWeather API',
    description: 'Cross-platform mobile app with location-based weather data',
    github: 'https://github.com/yourusername/project5',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Portfolio Generator',
    subtitle: 'Next.js, Markdown, GitHub API',
    description: 'Automated portfolio site builder from GitHub repositories',
    github: 'https://github.com/yourusername/project6',
    demo: 'https://demo.example.com'
  }
]

const accentColor = '#00f0ff'

export default function ProjectsPage() {
  return (
    <PageContainer accentColor={accentColor}>
      <PageHeader 
        title="Projects"
        subtitle="Coding Portfolio"
        accentColor={accentColor}
      />

      <EclipseCard
        title="Full-Stack Development"
        description="Building scalable web applications with modern frameworks and best practices. Specializing in React, Next.js, TypeScript, and Node.js with a focus on performance and user experience."
        stats={[
          { label: 'Completed', value: '24' },
          { label: 'Languages', value: '8' },
          { label: 'Lines of Code', value: '15k+' },
          { label: 'Open Source', value: '100%' }
        ]}
        accentColor={accentColor}
        delay={0.2}
      />

      <AnimatedSection delay={0.4}>
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px'
        }}>
          {projects.map((project, index) => (
            <Card
              key={index}
              variant="project"
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              links={[
                { label: 'GitHub', href: project.github },
                { label: 'Live Demo', href: project.demo }
              ]}
              accentColor={accentColor}
              delay={0.5 + (index * 0.1)}
            />
          ))}
        </div>
      </AnimatedSection>
    </PageContainer>
  )
}