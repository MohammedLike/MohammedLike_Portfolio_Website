import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const skillTabs = [
  {
    id: 'quant-trading',
    label: 'Quant & Trading',
    categories: [
      {
        title: 'Algorithmic Trading & Research',
        skills: [
          'Alpha Research', 'Systematic Trading', 'Backtesting', 'Signal Generation',
          'Factor Research', 'Portfolio Construction', 'Performance Attribution',
          'Transaction Cost Modeling',
        ],
      },
      {
        title: 'Financial Markets',
        skills: [
          'Equities', 'Futures & Options', 'Market Microstructure', 'Smart Money Concepts',
          'Volatility Analysis', 'Options Pricing', 'Options Greeks', 'Risk Management',
        ],
      },
      {
        title: 'Financial Concepts',
        skills: [
          'Portfolio Theory', 'CAPM', 'Sharpe Ratio', 'Factor Investing',
          'Risk-Return Modeling', 'Asset Allocation', 'Performance Analytics',
        ],
      },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI & Math',
    categories: [
      {
        title: 'Machine Learning & AI',
        skills: [
          'Supervised Learning', 'Neural Networks', 'NLP', 'Transformer Models',
          'RAG', 'Financial AI Applications', 'Predictive Modeling',
        ],
      },
      {
        title: 'Quantitative Methods',
        skills: [
          'Time Series Analysis', 'Statistical Modeling', 'Monte Carlo Simulation',
          'Optimization', 'Stochastic Processes', 'Feature Engineering',
        ],
      },
    ],
  },
  {
    id: 'data-engineering',
    label: 'Programming & Data',
    categories: [
      {
        title: 'Languages & Libraries',
        skills: ['Python', 'SQL', 'NumPy', 'Pandas', 'SciPy', 'Scikit-learn', 'PyTorch', 'VectorBT'],
      },
      {
        title: 'Data Engineering',
        skills: [
          'PostgreSQL', 'QuestDB', 'MongoDB', 'Apache Kafka', 'Airflow',
          'ETL Pipelines', 'Data Warehousing',
        ],
      },
    ],
  },
  {
    id: 'tools-soft',
    label: 'Tools',
    categories: [
      {
        title: 'Frameworks & Tools',
        skills: ['FastAPI', 'Streamlit', 'Git', 'Docker', 'Linux', 'Jupyter', 'Power BI'],
      },
      {
        title: 'Soft Skills',
        skills: [
          'Analytical Thinking', 'Problem Solving', 'Research Mindset',
          'Communication', 'Attention to Detail',
        ],
      },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('quant-trading')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const currentTab = skillTabs.find((t) => t.id === activeTab)

  return (
    <section id="skills" className="bg-[var(--color-cream-dark)] px-6 py-24 md:px-10 md:py-32 lg:px-16" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-12 text-center md:mb-16"
        >
          <p className="editorial-label mb-6">Expertise</p>
          <h2 className="section-pipe-title">
            Core<span className="pipe">|</span>Competencies
          </h2>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`skill-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={`grid grid-cols-1 gap-6 md:gap-8 ${
            currentTab.categories.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-4xl mx-auto'
          }`}
        >
          {currentTab.categories.map((cat, ci) => (
            <div key={ci} className="skill-group">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                {cat.title}
              </h3>
              <ul className="mt-6 space-y-2.5">
                {cat.skills.map((skill, si) => (
                  <li
                    key={si}
                    className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]"
                  >
                    <span className="font-mono text-[10px] text-[var(--color-accent)]">
                      {String(si + 1).padStart(2, '0')}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
