import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTilt } from '../hooks/useTilt'

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
      'Collaborated on developing scalable, data-driven solutions for quantitative research and strategy development.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Visual Solutions Pvt. Ltd.',
    period: 'May 2025 — Sep 2025',
    details: [
      'Developed an investment analysis model to identify funding and sectoral allocation patterns, improving analytical insights by 15%.',
      'Produced investment trend reports using historical data analysis to support data-driven strategic decisions.',
      'Designed data pipelines and dashboards for analyzing financial and business datasets.',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'Dreamteam Technologies',
    period: 'May 2024 — Jul 2024',
    details: [
      'Designed and implemented an NLP-based chatbot, reducing average response time by 30%.',
      'Applied sentiment analysis and machine learning techniques to improve intent classification and response accuracy.',
      'Developed data preprocessing and model evaluation pipelines using Python.',
    ],
  },
]

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { ref: tiltRef, onMouseMove, onMouseLeave } = useTilt({ maxTilt: 4, scale: 1.005 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        ref={tiltRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="grid grid-cols-1 gap-6 border-t border-gray-200 py-10 md:grid-cols-12 md:gap-16 md:py-14"
      >
        <div className="flex gap-4 md:col-span-4">
          <div className="exp-dot mt-2 hidden md:block" />
          <div>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue-600">
          {exp.period}
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          {exp.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-500">{exp.company}</p>
          </div>
        </div>

      <div className="space-y-4 md:col-span-8">
        {exp.details.map((detail, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <p className="text-[15px] leading-relaxed text-gray-600">
              {detail}
            </p>
          </div>
        ))}
      </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative bg-gray-50 px-6 py-24 md:px-8 md:py-32" ref={ref}>
      <div className="relative mx-auto max-w-[1200px] md:pl-6">
        <div className="exp-timeline-line hidden md:block" aria-hidden />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="section-label-bar mb-4" />
          <h2 className="heading-display text-3xl font-bold text-gray-900 md:text-4xl">Experience</h2>
          <p className="mt-2 text-base text-gray-500">
            Professional work and internship experience
          </p>
        </motion.div>

        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
