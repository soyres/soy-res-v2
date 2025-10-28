'use client'

import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import styles from './Running.module.css'

const stats = [
  { label: 'Total Miles', value: '2,847', icon: '🏃' },
  { label: 'Marathons', value: '5', icon: '🏅' },
  { label: 'Best 5K', value: '18:42', icon: '⚡' },
  { label: 'This Month', value: '128mi', icon: '📊' },
]

const races = [
  {
    name: 'Denver Marathon',
    date: 'October 2024',
    distance: 'Marathon',
    time: '3:24:15',
    place: '42nd Overall',
    highlight: true,
  },
  {
    name: 'Boulder Half Marathon',
    date: 'May 2024',
    distance: 'Half Marathon',
    time: '1:35:22',
    place: '28th Overall',
  },
  {
    name: 'City Park 5K',
    date: 'March 2024',
    distance: '5K',
    time: '18:42',
    place: '12th Overall',
  },
  {
    name: 'Rocky Mountain Trail Run',
    date: 'August 2023',
    distance: '10K',
    time: '42:18',
    place: '35th Overall',
  },
]

const weeklyLog = [
  { day: 'Monday', miles: 8, type: 'Easy Run', pace: '8:30/mi' },
  { day: 'Tuesday', miles: 12, type: 'Tempo Run', pace: '7:15/mi' },
  { day: 'Wednesday', miles: 6, type: 'Recovery', pace: '9:00/mi' },
  { day: 'Thursday', miles: 10, type: 'Intervals', pace: '6:45/mi' },
  { day: 'Friday', miles: 0, type: 'Rest', pace: '-' },
  { day: 'Saturday', miles: 18, type: 'Long Run', pace: '8:00/mi' },
  { day: 'Sunday', miles: 5, type: 'Easy Run', pace: '8:45/mi' },
]

const goals = [
  {
    title: 'Sub-3:15 Marathon',
    progress: 75,
    target: 'Spring 2025',
    icon: '🎯',
  },
  {
    title: 'Boston Qualifier',
    progress: 85,
    target: 'Fall 2025',
    icon: '🏆',
  },
  {
    title: '1000 Miles in 2025',
    progress: 42,
    target: 'December 2025',
    icon: '📈',
  },
]

export default function Running() {
  const totalWeekMiles = weeklyLog.reduce((sum, day) => sum + day.miles, 0)

  return (
    <div className={styles.container}>
      <PageHeader 
        title="Running"
        subtitle="Marathon training, personal records, and endurance journey"
        accentColor="#ff00ff"
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
              <h2 className={styles.cardTitleMain}>Endurance Athlete & Runner</h2>
              <p className={styles.cardDescriptionMain}>
                Training for marathons and pushing physical boundaries. Every mile is a lesson in
                discipline, resilience, and the power of consistency. From early morning runs to
                race day victories, the journey continues.
              </p>
            </div>

            <div className={styles.statsOverview}>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>2,847</div>
                <div className={styles.statBoxLabel}>Total Miles</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>5</div>
                <div className={styles.statBoxLabel}>Marathons</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>3:24:15</div>
                <div className={styles.statBoxLabel}>PR Time</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statBoxValue}>128mi</div>
                <div className={styles.statBoxLabel}>This Month</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.section 
          className={styles.statsSection}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Goals */}
        <motion.section 
          className={styles.section}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>2025 Goals</h2>
          <div className={styles.goalsGrid}>
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                className={styles.goalCard}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <div className={styles.goalHeader}>
                  <span className={styles.goalIcon}>{goal.icon}</span>
                  <div>
                    <h3 className={styles.goalTitle}>{goal.title}</h3>
                    <p className={styles.goalTarget}>Target: {goal.target}</p>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <motion.div 
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: 'easeOut' }}
                  />
                </div>
                <div className={styles.progressText}>{goal.progress}% Complete</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Race Results */}
        <motion.section 
          className={styles.section}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Recent Races</h2>
          <div className={styles.racesGrid}>
            {races.map((race, index) => (
              <motion.div
                key={race.name}
                className={`${styles.raceCard} ${race.highlight ? styles.raceHighlight : ''}`}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {race.highlight && <div className={styles.highlightBadge}>PR!</div>}
                <h3 className={styles.raceName}>{race.name}</h3>
                <div className={styles.raceDate}>{race.date}</div>
                <div className={styles.raceStats}>
                  <div className={styles.raceStat}>
                    <span className={styles.raceStatLabel}>Distance</span>
                    <span className={styles.raceStatValue}>{race.distance}</span>
                  </div>
                  <div className={styles.raceStat}>
                    <span className={styles.raceStatLabel}>Time</span>
                    <span className={styles.raceStatValue}>{race.time}</span>
                  </div>
                  <div className={styles.raceStat}>
                    <span className={styles.raceStatLabel}>Place</span>
                    <span className={styles.raceStatValue}>{race.place}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Weekly Training Log */}
        <motion.section 
          className={styles.section}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className={styles.logHeader}>
            <h2 className={styles.sectionTitle}>This Week's Training</h2>
            <div className={styles.weekTotal}>
              <span className={styles.weekTotalLabel}>Total:</span>
              <span className={styles.weekTotalValue}>{totalWeekMiles} miles</span>
            </div>
          </div>
          <div className={styles.weeklyTable}>
            {weeklyLog.map((day, index) => (
              <motion.div
                key={day.day}
                className={styles.dayRow}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
              >
                <div className={styles.dayName}>{day.day}</div>
                <div className={styles.dayType}>{day.type}</div>
                <div className={styles.dayMiles}>{day.miles > 0 ? `${day.miles} mi` : '-'}</div>
                <div className={styles.dayPace}>{day.pace}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section 
          className={styles.philosophySection}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Running Philosophy</h2>
          <div className={styles.philosophyCard}>
            <p className={styles.philosophyText}>
              "Running is more than just physical training—it's a practice in discipline, 
              resilience, and self-discovery. Every mile is an opportunity to push boundaries, 
              quiet the mind, and connect with something deeper."
            </p>
            <p className={styles.philosophyText}>
              Whether it's a recovery run through the park or grinding through intervals, 
              I approach each session with intention and gratitude. The journey from couch 
              to marathon taught me that consistency trumps intensity, and that the real 
              competition is always with yesterday's version of yourself.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}