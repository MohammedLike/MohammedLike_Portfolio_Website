import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTilt } from '../hooks/useTilt'

function StatCard({ value, label, sub }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ maxTilt: 10, scale: 1.03 })
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="stat-card">
      <p className="heading-display text-3xl font-bold text-gray-900 md:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{label}</p>
      {sub && <p className="mt-0.5 font-mono text-xs text-gray-400">{sub}</p>}
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative bg-white px-6 py-24 md:px-8 md:py-32" ref={ref}>
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16"
        >
          {/* Label */}
          <div className="md:col-span-3">
            <div className="section-label-bar mb-4" />
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              About
            </p>
          </div>

          {/* Content */}
          <div className="md:col-span-9">
            <h2 className="heading-display text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Quantitative Researcher and Developer building systematic trading systems.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5">
              <p className="text-base leading-relaxed text-gray-600">
                Experienced in designing, backtesting, and deploying systematic trading strategies across equities, futures, and options. Skilled in translating discretionary trading theories (such as Smart Money Concepts) into rule-based algorithmic models, options pricing with Greeks analytics, and high-performance financial data engineering.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Currently working as a Quant Researcher and Developer Intern at StockWiz Technologies LLP, while completing a B.Tech in Computer Science & Engineering (Data Science) at Jodhpur Institute of Engineering and Technology (JIET).
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <StatCard value="5" label="Quant Projects" />
              <StatCard value="3" label="Internships" />
              <StatCard value="B.Tech" label="CS & DS, 2022–26" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
