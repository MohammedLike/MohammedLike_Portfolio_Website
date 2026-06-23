import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Quant Researcher and Developer Intern',
    company: 'StockWiz Technologies LLP',
    period: 'May 2026 — Present',
    details: [
      'Researched and developed systematic trading strategies using historical market data and quantitative techniques.',
      'Built Python-based backtesting and data analysis pipelines to evaluate strategy performance and risk metrics.',
      'Conducted research on technical indicators, factor models, and options strategies for generating trading signals.',
      'Automated financial data collection, preprocessing, and research workflows using Python and SQL.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Visual Solutions Pvt. Ltd.',
    period: 'May 2025 — Sep 2025',
    details: [
      'Developed an investment analysis model to identify funding and sectoral allocation patterns, improving insights by 15%.',
      'Produced investment trend reports using historical data analysis to support strategic decisions.',
      'Designed data pipelines and dashboards for analyzing financial and business datasets.',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'Dreamteam Technologies',
    period: 'May 2024 — Jul 2024',
    details: [
      'Designed and implemented an NLP-based chatbot, reducing average response time by 30%.',
      'Applied sentiment analysis and ML techniques to improve intent classification accuracy.',
      'Developed data preprocessing and model evaluation pipelines using Python.',
    ],
  },
]

function ExperienceRow({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="exp-row grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12"
    >
      <div className="md:col-span-3">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)]">
          {exp.period}
        </p>
      </div>
      <div className="md:col-span-4">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl">
          {exp.role}
        </h3>
        <p className="mt-1 font-serif text-lg italic text-[var(--color-muted)]">
          {exp.company}
        </p>
      </div>
      <div className="space-y-3 md:col-span-5">
        {exp.details.map((d, i) => (
          <p key={i} className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {d}
          </p>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="px-6 py-24 md:px-10 md:py-32 lg:px-16" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-16"
        >
          <p className="editorial-label mb-6">Experience</p>
          <h2 className="section-pipe-title">
            Professional<span className="pipe">|</span>Journey
          </h2>
        </motion.div>

        {experiences.map((exp, i) => (
          <ExperienceRow key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
