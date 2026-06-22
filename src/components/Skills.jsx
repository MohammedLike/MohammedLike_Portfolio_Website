import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '</>',
    skills: ['Python', 'SQL', 'C++ (Basic)'],
  },
  {
    title: 'Quantitative Libraries',
    icon: 'λ',
    skills: [
      'NumPy',
      'Pandas',
      'Polars',
      'SciPy',
      'Statsmodels',
      'Scikit-learn',
      'PyTorch',
      'VectorBT',
      'TA-Lib',
    ],
  },
  {
    title: 'Data Engineering & Databases',
    icon: '⛁',
    skills: [
      'PostgreSQL',
      'QuestDB',
      'MongoDB',
      'PyArrow',
      'Apache Kafka',
      'Apache Airflow',
      'Hadoop',
      'ETL Pipelines',
      'Data Warehousing',
    ],
  },
  {
    title: 'Algorithmic Trading & Research',
    icon: 'α',
    skills: [
      'Alpha Research',
      'Systematic Trading',
      'Algorithmic Trading',
      'Backtesting',
      'Signal Generation',
      'Factor Research',
      'Portfolio Construction',
      'Performance Attribution',
      'Transaction Cost Modeling',
    ],
  },
  {
    title: 'Financial Markets',
    icon: '⇄',
    skills: [
      'Equities',
      'Futures & Options',
      'Market Microstructure',
      'Smart Money Concepts (SMC)',
      'Order Flow Analysis',
      'Volatility Analysis',
      'Options Pricing',
      'Options Greeks',
      'Risk Management',
    ],
  },
  {
    title: 'Quantitative Methods',
    icon: 'σ',
    skills: [
      'Time Series Analysis',
      'Statistical Modeling',
      'Regression Analysis',
      'Forecasting',
      'Optimization Techniques',
      'Monte Carlo Simulation',
      'Probability & Statistics',
      'Stochastic Processes',
      'Feature Engineering',
    ],
  },
  {
    title: 'Machine Learning & AI',
    icon: '🧠',
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Neural Networks',
      'Predictive Modeling',
      'NLP',
      'Transformer Models',
      'Retrieval-Augmented Generation (RAG)',
      'Financial AI Applications',
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: '🛠',
    skills: [
      'FastAPI',
      'Streamlit',
      'Git',
      'Docker',
      'Linux',
      'Jupyter Notebook',
      'Power BI',
      'Excel',
    ],
  },
  {
    title: 'Financial Concepts',
    icon: '$',
    skills: [
      'Portfolio Theory',
      'CAPM',
      'Sharpe Ratio',
      'Factor Investing',
      'Risk-Return Modeling',
      'Asset Allocation',
      'Performance Analytics',
    ],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    skills: [
      'Analytical Thinking',
      'Problem Solving',
      'Research Mindset',
      'Communication',
      'Collaboration',
      'Attention to Detail',
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
