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

const categories = [
  { name: 'All', count: 18, active: true },
  { name: 'Technology', count: 8 },
  { name: 'Running', count: 5 },
  { name: 'Personal Growth', count: 5 },
]

const featuredPost = {
  title: 'Building a Circular Navigation System with React and Framer Motion',
  excerpt: 'Deep dive into creating an interactive, accessible circular navigation component that responds to user interactions in creative ways.',
  date: 'October 20, 2024',
  readTime: '8 min read',
  category: 'Technology',
  icon: '💻',
}

const posts = [
  {
    title: 'From Couch to Marathon: A 6-Month Journey',
    excerpt: 'How I went from barely running a mile to completing my first marathon, and the lessons learned along the way.',
    date: 'October 15, 2024',
    readTime: '6 min read',
    category: 'Running',
    icon: '🏃',
  },
  {
    title: 'The Power of TypeScript in Modern Web Development',
    excerpt: 'Why TypeScript has become essential in my development workflow and how it saves time in the long run.',
    date: 'October 8, 2024',
    readTime: '5 min read',
    category: 'Technology',
    icon: '⚡',
  },
  {
    title: 'Morning Routines: How Small Habits Create Big Results',
    excerpt: 'The simple morning routine that transformed my productivity and mental clarity.',
    date: 'September 28, 2024',
    readTime: '4 min read',
    category: 'Personal Growth',
    icon: '☀️',
  },
  {
    title: 'Building Accessible Web Applications',
    excerpt: 'A practical guide to making your web apps usable for everyone, regardless of ability.',
    date: 'September 20, 2024',
    readTime: '7 min read',
    category: 'Technology',
    icon: '♿',
  },
  {
    title: 'Training Through Injury: Lessons in Patience',
    excerpt: 'What a running injury taught me about listening to my body and the importance of rest.',
    date: 'September 12, 2024',
    readTime: '5 min read',
    category: 'Running',
    icon: '🩹',
  },
  {
    title: 'Next.js 14: App Router Deep Dive',
    excerpt: 'Exploring the new App Router in Next.js 14 and how it changes the way we build applications.',
    date: 'August 30, 2024',
    readTime: '9 min read',
    category: 'Technology',
    icon: '🚀',
  },
]

const accentColor = '#00ff88'

export default function Blog() {
  return (
    <PageContainer accentColor={accentColor}>
      <PageHeader 
        title="Blog"
        subtitle="Thoughts on code, running, and personal growth"
        accentColor={accentColor}
      />

      <EclipseCard
        title="Writing & Sharing Knowledge"
        description="Exploring the intersection of technology, running, and personal growth. Sharing lessons learned, insights gained, and stories from the journey of continuous learning and self-improvement."
        stats={[
          { label: 'Total Posts', value: '18' },
          { label: 'Readers', value: '2.4k' },
          { label: 'Categories', value: '3' },
          { label: 'Publishing', value: 'Weekly' }
        ]}
        accentColor={accentColor}
        delay={0.2}
      />

      {/* Categories */}
      <AnimatedSection delay={0.4}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: category.active ? 'rgba(0, 255, 136, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                border: category.active ? '1px solid rgba(0, 255, 136, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                color: category.active ? '#00ff88' : '#888',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                fontWeight: '500',
                cursor: 'pointer',
                boxShadow: category.active ? '0 0 20px rgba(0, 255, 136, 0.2)' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>
      </AnimatedSection>

      {/* Featured Post */}
      <AnimatedSection delay={0.6}>
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <div style={{
            position: 'absolute',
            top: '-1rem',
            left: 'clamp(1rem, 3vw, 2rem)',
            background: '#00ff88',
            color: '#000',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            zIndex: 10
          }}>
            Featured
          </div>
          <article style={{
            background: 'rgba(0, 255, 136, 0.05)',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: '2rem',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth > 768 ? 'row' : 'column',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <div style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.4))',
                flexShrink: 0
              }}>
                {featuredPost.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.875rem)',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{ color: '#00ff88', fontWeight: '600' }}>{featuredPost.category}</span>
                  <span style={{ color: '#888' }}>{featuredPost.date}</span>
                  <span style={{ color: '#666' }}>{featuredPost.readTime}</span>
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                  fontWeight: '700',
                  color: '#fff',
                  margin: '1rem 0',
                  lineHeight: '1.3'
                }}>
                  {featuredPost.title}
                </h2>
                <p style={{
                  color: '#b0b0b0',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem'
                }}>
                  {featuredPost.excerpt}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#00ff88',
                    fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Read More →
                </motion.button>
              </div>
            </div>
          </article>
        </div>
      </AnimatedSection>

      {/* Recent Posts */}
      <AnimatedSection delay={0.8}>
        <SectionTitle accentColor={accentColor}>Recent Posts</SectionTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2rem)',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {posts.map((post, index) => (
            <Card
              key={post.title}
              variant="blog"
              title={post.title}
              subtitle={post.category}
              description={post.excerpt}
              icon={post.icon}
              metadata={{
                Date: post.date,
                'Read Time': post.readTime
              }}
              accentColor={accentColor}
              delay={0.9 + (index * 0.08)}
            />
          ))}
        </div>
      </AnimatedSection>

      {/* Newsletter CTA */}
      <AnimatedSection delay={1.4}>
        <div style={{
          background: 'rgba(0, 255, 136, 0.05)',
          border: '1px solid rgba(0, 255, 136, 0.15)',
          borderRadius: '20px',
          padding: 'clamp(3rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: 'clamp(3rem, 6vw, 4rem)',
            marginBottom: '1.5rem',
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.4))'
          }}>
            ✉️
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            background: 'linear-gradient(180deg, #e0e0e0 0%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Stay Updated
          </h2>
          <p style={{
            color: '#888',
            fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Get notified when I publish new posts about technology, running, and personal growth.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth > 640 ? 'row' : 'column',
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                outline: 'none'
              }}
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#00ff88',
                color: '#000',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
    </PageContainer>
  )
}