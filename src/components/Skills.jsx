import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Quantitative Research & Trading',
    icon: 'α',
    skills: [
      'Systematic Trading & Backtesting (VectorBT, TA-Lib)',
      'Alpha Research & Signal Generation',
      'Smart Money Concepts (SMC) & Order Flow',
      'Market Microstructure & Volatility Analysis',
      'Portfolio Construction & Performance Analytics',
      'Transaction Cost Modeling & Risk Management',
    ],
  },
  {
    title: 'Quantitative Methods & ML',
    icon: '∑',
    skills: [
      'Time Series Analysis & Statistical Modeling',
      'Stochastic Processes & Monte Carlo Simulations',
      'Machine Learning & Deep Learning (Scikit-Learn, PyTorch)',
      'NLP & Retrieval-Augmented Generation (RAG) for Finance',
      'Options Pricing Frameworks & Options Greeks',
      'Regression & Optimization Techniques',
    ],
  },
  {
    title: 'Programming & Data Engineering',
    icon: '</>',
    skills: [
      'Python (NumPy, Pandas, Polars, SciPy, Statsmodels)',
      'SQL & Databases (PostgreSQL, QuestDB, MongoDB)',
      'Data Engineering Pipelines (ETL, PyArrow)',
      'Streaming & Orchestration (Kafka, Apache Airflow)',
      'Low-Level Foundations (C++ Basic)',
      'Data Warehousing & Big Data (Hadoop)',
    ],
  },
  {
    title: 'Frameworks & Infrastructure',
    icon: '⚙',
    skills: [
      'FastAPI · Streamlit · Next.js',
      'Docker · Linux · Git Version Control',
      'Jupyter Notebooks for Exploratory Research',
      'BI Tools & Dashboards (Power BI, Excel)',
      'Financial Document Automation (ReportLab)',
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative bg-gray-50 px-6 py-24 md:px-8 md:py-32" ref={ref}>
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="section-label-bar mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Expertise</h2>
          <p className="mt-2 text-base text-gray-500">
            Core competencies and technical proficiencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="skill-card"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 font-mono text-sm font-bold text-blue-600">
                  {cat.icon}
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {cat.skills.map((skill, si) => (
                  <li
                    key={si}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600 transition-colors duration-300 hover:text-gray-900"
                  >
                    <span className="mt-[7px] block h-1 w-3 shrink-0 rounded-full bg-gray-300" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
