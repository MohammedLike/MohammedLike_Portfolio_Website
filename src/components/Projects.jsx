import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'RAG-LLM Backtesting Engine',
    category: 'AI · Quant',
    description:
      'AI-powered quantitative backtesting platform converting natural language trading strategies into executable algorithmic workflows with RAG pipeline and vector database semantic search.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Vector DB', 'LLMs'],
    highlights: [
      'Natural language → executable trading code',
      'RAG pipeline for strategy retrieval & parameter extraction',
      'Scalable vector search for strategy automation',
    ],
    liveUrl: '',
    repo: 'https://github.com/MohammedLike/RAG_LLM_Backtesting-Engine',
  },
  {
    title: 'Research Report Automation System',
    category: 'NLP · Finance',
    description:
      'End-to-end investment research automation generating institutional-grade financial reports from multi-source structured and unstructured market data.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'NLP', 'ReportLab'],
    highlights: [
      'Automated market data ingestion into PostgreSQL',
      'NLP sentiment & macro indicator extraction',
      'PDF reports with charts and narrative synthesis',
    ],
    liveUrl: '',
    repo: 'https://github.com/MohammedLike/Research-Report-Automation',
  },
  {
    title: 'Black-Scholes Option Pricing Model',
    category: 'Derivatives',
    description:
      'Production-grade European option pricing with implied volatility surfaces, full Greeks portfolio, and Monte Carlo validation with interactive scenario analysis.',
    tech: ['Python', 'Streamlit', 'SciPy', 'yfinance'],
    highlights: [
      'IV surface calibration via Newton-Raphson',
      '3D volatility surface charts & P&L simulations',
      '10,000+ path Monte Carlo validation',
    ],
    liveUrl: 'https://black-scholes-option-pricing-model-9hkxyhodzn7nfbfcuhxckc.streamlit.app/',
    repo: 'https://github.com/MohammedLike/Black-Scholes-Option-Pricing-Model',
  },
  {
    title: 'Time-Series Momentum Platform',
    category: 'Systematic Trading',
    description:
      'Full-stack quant trading system analyzing multi-asset portfolios on 20+ years of data with HMM regime detection and vol-targeted backtesting.',
    tech: ['FastAPI', 'Next.js', 'Python', 'HMM', 'Pandas'],
    highlights: [
      '20+ years multi-asset portfolio analysis',
      'HMM regime detection with multi-horizon signals',
      'Sharpe, VaR, max drawdown risk metrics',
    ],
    liveUrl: '',
    repo: 'https://github.com/MohammedLike/Time-Series-Momentum-TSMOM-strategy-system',
  },
  {
    title: 'Credit Risk Modeling Framework',
    category: 'Risk · Basel III',
    description:
      'Basel III IRB-compliant PD/LGD/EAD pipeline on 50K loan records with WoE scorecard, PSI monitoring, and Vasicek ASRF stress testing.',
    tech: ['XGBoost', 'Statsmodels', 'ReportLab', 'Python'],
    highlights: [
      'ROC-AUC 0.91 · KS 0.63 · Gini 0.82',
      'Scorecard validated via PSI across 6 windows',
      'Base, adverse & severe scenario stress tests',
    ],
    liveUrl: '',
    repo: 'https://github.com/MohammedLike/Credit-Risk-Modeling',
  },
  {
    title: 'Market Decode — News Intelligence',
    category: 'FinTech · NLP',
    description:
      'Financial news intelligence platform surfacing 3–5 market-moving Nifty/Sensex stories daily via proprietary impact-scoring across 10+ dimensions.',
    tech: ['Node.js', 'Express', 'JavaScript', 'Yahoo Finance'],
    highlights: [
      '100+ articles filtered to 3–5 high-signal stories',
      'Live Nifty 50, Sensex & Bank Nifty dashboard',
    ],
    liveUrl: 'https://indian-financial-news.vercel.app/',
    repo: 'https://github.com/MohammedLike/Indian-Financial-News-',
  },
]

function ProjectCase({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="project-case group"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-2">
          <p className="project-number">{num}</p>
        </div>

        <div className="md:col-span-6">
          <div className="project-accent-bar" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)]">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
            {project.description}
          </p>
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]">
                <span className="mt-1.5 text-[var(--color-accent)]">—</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between md:col-span-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-6 md:mt-0">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo →
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="bg-[rgba(255,255,255,0.25)] px-6 py-24 md:px-10 md:py-32 lg:px-16" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="editorial-label mb-6">Selected Work</p>
          <h2 className="section-pipe-title">
            Quant Projects<span className="pipe">|</span>2026
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-muted)]">
            Quantitative research and financial engineering — from alpha research
            to production-grade risk systems.
          </p>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectCase key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
