'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ContactForm.module.css'

interface FormData {
  name: string
  email: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

const projectTypes = [
  { value: 'website', label: '🌐 Website', emoji: '🌐' },
  { value: 'webapp', label: '💻 Web Application', emoji: '💻' },
  { value: 'api', label: '🔌 API Development', emoji: '🔌' },
  { value: 'mobile', label: '📱 Mobile App', emoji: '📱' },
  { value: 'consulting', label: '💡 Consulting', emoji: '💡' },
  { value: 'other', label: '✨ Something Else', emoji: '✨' },
]

const budgetRanges = [
  { value: 'small', label: '$5k - $15k' },
  { value: 'medium', label: '$15k - $30k' },
  { value: 'large', label: '$30k - $50k' },
  { value: 'enterprise', label: '$50k+' },
  { value: 'flexible', label: 'Flexible' },
]

const timelines = [
  { value: 'urgent', label: '🔥 ASAP (1-2 weeks)' },
  { value: 'short', label: '⚡ Short (1-2 months)' },
  { value: 'medium', label: '📅 Medium (2-4 months)' },
  { value: 'long', label: '🎯 Long (4+ months)' },
  { value: 'flexible', label: '🌊 Flexible' },
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [step, setStep] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Use Formspree or similar service
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
        })
        setStep(1)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const canProceed = () => {
    if (step === 1) return formData.name && formData.email
    if (step === 2) return formData.projectType && formData.budget && formData.timeline
    return true
  }

  return (
    <div className={styles.container}>
      {/* Progress indicator */}
      <div className={styles.progress}>
        {[1, 2, 3].map((s) => (
          <motion.div
            key={s}
            className={`${styles.progressStep} ${s <= step ? styles.progressStepActive : ''}`}
            initial={false}
            animate={{
              scale: s === step ? 1.2 : 1,
              backgroundColor: s <= step ? '#00f0ff' : 'rgba(255, 255, 255, 0.1)',
            }}
          >
            {s < step ? '✓' : s}
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.step}
            >
              <h2 className={styles.stepTitle}>👋 Let's get started</h2>
              <p className={styles.stepDescription}>Tell me a bit about yourself</p>

              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.step}
            >
              <h2 className={styles.stepTitle}>🎯 Project Details</h2>
              <p className={styles.stepDescription}>What are you looking to build?</p>

              <div className={styles.field}>
                <label className={styles.label}>Project Type *</label>
                <div className={styles.buttonGroup}>
                  {projectTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      className={`${styles.optionButton} ${
                        formData.projectType === type.value ? styles.optionButtonActive : ''
                      }`}
                      onClick={() => setFormData({ ...formData, projectType: type.value })}
                    >
                      <span className={styles.optionEmoji}>{type.emoji}</span>
                      {type.label.replace(type.emoji + ' ', '')}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Budget Range *</label>
                <div className={styles.buttonGroup}>
                  {budgetRanges.map((range) => (
                    <button
                      key={range.value}
                      type="button"
                      className={`${styles.optionButton} ${
                        formData.budget === range.value ? styles.optionButtonActive : ''
                      }`}
                      onClick={() => setFormData({ ...formData, budget: range.value })}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Timeline *</label>
                <div className={styles.buttonGroup}>
                  {timelines.map((tl) => (
                    <button
                      key={tl.value}
                      type="button"
                      className={`${styles.optionButton} ${
                        formData.timeline === tl.value ? styles.optionButtonActive : ''
                      }`}
                      onClick={() => setFormData({ ...formData, timeline: tl.value })}
                    >
                      {tl.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.step}
            >
              <h2 className={styles.stepTitle}>✍️ Tell me more</h2>
              <p className={styles.stepDescription}>Share the details of your project</p>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Project Description
                </label>
                <textarea
                  id="message"
                  className={styles.textarea}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  rows={6}
                />
              </div>

              <div className={styles.summary}>
                <h3 className={styles.summaryTitle}>📋 Summary</h3>
                <div className={styles.summaryGrid}>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Name:</span>
                    <span className={styles.summaryValue}>{formData.name}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Email:</span>
                    <span className={styles.summaryValue}>{formData.email}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Project:</span>
                    <span className={styles.summaryValue}>
                      {projectTypes.find((t) => t.value === formData.projectType)?.label}
                    </span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Budget:</span>
                    <span className={styles.summaryValue}>
                      {budgetRanges.find((b) => b.value === formData.budget)?.label}
                    </span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Timeline:</span>
                    <span className={styles.summaryValue}>
                      {timelines.find((t) => t.value === formData.timeline)?.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className={styles.actions}>
          {step > 1 && (
            <motion.button
              type="button"
              className={styles.buttonSecondary}
              onClick={prevStep}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back
            </motion.button>
          )}

          {step < 3 ? (
            <motion.button
              type="button"
              className={styles.buttonPrimary}
              onClick={nextStep}
              disabled={!canProceed()}
              whileHover={{ scale: canProceed() ? 1.05 : 1 }}
              whileTap={{ scale: canProceed() ? 0.95 : 1 }}
            >
              Next →
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              className={styles.buttonPrimary}
              disabled={status === 'loading'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message 🚀'}
            </motion.button>
          )}
        </div>

        {/* Status messages */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={styles.statusSuccess}
            >
              ✅ Message sent! I'll get back to you within 24 hours.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={styles.statusError}
            >
              ❌ Oops! Something went wrong. Please try again or email me directly.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}