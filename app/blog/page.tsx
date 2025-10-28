'use client'

import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import styles from './Blog.module.css'

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
  image: '💻',
  featured: true,
}

const posts = [
  {
    title: 'From Couch to Marathon: A 6-Month Journey',
    excerpt: 'How I went from barely running a mile to completing my first marathon, and the lessons learned along the way.',
    date: 'October 15, 2024',
    readTime: '6 min read',
    category: 'Running',
    image: '🏃',
  },
  {
    title: 'The Power of TypeScript in Modern Web Development',
    excerpt: 'Why TypeScript has become essential in my development workflow and how it saves time in the long run.',
    date: 'October 8, 2024',
    readTime: '5 min read',
    category: 'Technology',
    image: '⚡',
  },
  {
    title: 'Morning Routines: How Small Habits Create Big Results',
    excerpt: 'The simple morning routine that transformed my productivity and mental clarity.',
    date: 'September 28, 2024',
    readTime: '4 min read',
    category: 'Personal Growth',
    image: '☀️',
  },
  {
    title: 'Building Accessible Web Applications',
    excerpt: 'A practical guide to making your web apps usable for everyone, regardless of ability.',
    date: 'September 20, 2024',
    readTime: '7 min read',
    category: 'Technology',
    image: '♿',
  },
  {
    title: 'Training Through Injury: Lessons in Patience',
    excerpt: 'What a running injury taught me about listening to my body and the importance of rest.',
    date: 'September 12, 2024',
    readTime: '5 min read',
    category: 'Running',
    image: '🩹',
  },
  {
    title: 'Next.js 14: App Router Deep Dive',
    excerpt: 'Exploring the new App Router in Next.js 14 and how it changes the way we build applications.',
    date: 'August 30, 2024',
    readTime: '9 min read',
    category: 'Technology',
    image: '🚀',
  },
  {
    title: 'The Compound Effect of Consistency',
    excerpt: 'Why showing up every day matters more than occasional bursts of motivation.',
    date: 'August 22, 2024',
    readTime: '4 min read',
    category: 'Personal Growth',
    image: '📈',
  },
  {
    title: 'Race Day Nutrition: What Works for Me',
    excerpt: 'My go-to nutrition strategy for race day, developed through trial and error.',
    date: 'August 10, 2024',
    readTime: '6 min read',
    category: 'Running',
    image: '🍌',
  },
  {
    title: 'State Management in React: A 2024 Perspective',
    excerpt: 'Comparing different state management solutions and when to use each one.',
    date: 'July 28, 2024',
    readTime: '8 min read',
    category: 'Technology',
    image: '⚛️',
  },
]

export default function Blog() {
  return (
    <div className={styles.container}>
      <PageHeader 
        title="Blog"
        subtitle="Thoughts on code, running, and personal growth"
        accentColor="#00ff88"
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
              <h2 className={styles.cardTitleMain}>Writing & Sharing Knowledge</h2>
              <p className={styles.cardDescriptionMain}>
                Exploring the intersection of technology, running, and personal growth. Sharing
                lessons learned, insights gained, and stories from the journey of continuous
                learning and self-improvement.
              </p>
            </div>

            <div className={styles.statsOverview}>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>18</div>
                <div className={styles.statBoxLabel}>Total Posts</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>2.4k</div>
                <div className={styles.statBoxLabel}>Readers</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>3</div>
                <div className={styles.statBoxLabel}>Categories</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>Weekly</div>
                <div className={styles.statBoxLabel}>Publishing</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          className={styles.categoriesSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.categories}>
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                className={`${styles.categoryButton} ${category.active ? styles.categoryActive : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.section 
          className={styles.featuredSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className={styles.featuredBadge}>Featured</div>
          <article className={styles.featuredPost}>
            <div className={styles.featuredIcon}>{featuredPost.image}</div>
            <div className={styles.featuredContent}>
              <div className={styles.postMeta}>
                <span className={styles.postCategory}>{featuredPost.category}</span>
                <span className={styles.postDate}>{featuredPost.date}</span>
                <span className={styles.postReadTime}>{featuredPost.readTime}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <motion.button 
                className={styles.readMoreButton}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Read More →
              </motion.button>
            </div>
          </article>
        </motion.section>

        {/* Recent Posts */}
        <motion.section 
          className={styles.postsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Recent Posts</h2>
          <div className={styles.postsGrid}>
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                className={styles.postCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className={styles.postIcon}>{post.image}</div>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postFooter}>
                  <span className={styles.postReadTime}>{post.readTime}</span>
                  <motion.span 
                    className={styles.postArrow}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Newsletter CTA */}
        <motion.section 
          className={styles.newsletterSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterIcon}>✉️</div>
            <h2 className={styles.newsletterTitle}>Stay Updated</h2>
            <p className={styles.newsletterText}>
              Get notified when I publish new posts about technology, running, and personal growth.
            </p>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
              <motion.button 
                className={styles.newsletterButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}