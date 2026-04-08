import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Black-Scholes Options Pricing Engine',
    description:
      'Implemented a Black-Scholes closed-form solver alongside a 10,000-path Monte Carlo validator. Computed a full Greeks portfolio (Delta, Gamma, Vega, Theta, Rho) with real-time implied volatility surface calibration using a Newton-Raphson solver, validated against live options data. Deployed an interactive Streamlit dashboard featuring 3D volatility surface visualization, scenario P&L analysis, and automated PDF risk summary generation.',
    tech: ['Python', 'Streamlit', 'SciPy', 'yfinance'],
    highlights: [
      '<0.3% pricing error vs theoretical benchmark across 500 NIFTY option contracts',
      'Full Greeks portfolio with real-time IV surface calibration via Newton-Raphson',
      '3D volatility surface visualization & automated PDF risk reports',
    ],
    liveUrl: 'https://black-scholes-option-pricing-model-9hkxyhodzn7nfbfcuhxckc.streamlit.app/',
    repo: 'https://github.com/MohammedLike/Black-Scholes-Option-Pricing-Model',
  },
  {
    title: 'Time-Series Momentum Quantitative Platform',
    description:
      'Built a full-stack quantitative trading system using FastAPI and Next.js to analyze multi-asset portfolios on 20+ years of market data. Implemented a time-series momentum strategy with multi-horizon signal construction and regime detection via Hidden Markov Models (HMM). Engineered a high-performance backtesting engine with volatility targeting, transaction cost modeling, and risk metrics including Sharpe ratio, VaR, and maximum drawdown.',
    tech: ['FastAPI', 'Next.js', 'Python', 'HMM'],
    highlights: [
      'Multi-asset portfolio analysis on 20+ years of market data',
      'Regime detection via Hidden Markov Models with multi-horizon signals',
      'AI-powered equity research report generator via LLM API integration',
    ],
    liveUrl: '',
    repo: 'https://github.com/MohammedLike/TSMOM-Strategy',
  },
  {
    title: 'Credit Risk Modeling Framework',
    description:
      'Developed a Basel III IRB-compliant PD/LGD/EAD estimation pipeline on 50,000 synthetic loan records. Designed a WoE-based credit scorecard with PDO scaling (300–850 range); validated model stability via PSI monitoring and population drift analysis across 6 time windows. Stress-tested portfolio resilience under base, adverse, and severe macro scenarios using the Vasicek ASRF model. Generated automated PDF model-validation reports with ReportLab.',
    tech: ['XGBoost', 'Statsmodels', 'ReportLab', 'Python'],
    highlights: [
      'XGBoost PD model: ROC-AUC 0.91 · KS 0.63 · Gini 0.82',
      'Credit scorecard (300–850) validated via PSI across 6 time windows',
      'Stress-tested under base, adverse & severe scenarios via Vasicek ASRF',
    ],
    liveUrl: '',
    repo: 'https://github.com/MohammedLike/Credit-Risk-Modeling',
  },
  {
    title: 'Market Decode — Indian Financial News Intelligence',
    description:
      'Built a full-stack financial news intelligence platform that identifies the 3–5 stories genuinely driving Nifty and Sensex each trading day. Engineered a proprietary impact-scoring algorithm evaluating articles across 10+ dimensions — including keyword-based sentiment detection, sector relevance mapping, and institutional flow correlation — to cut through hundreds of daily headlines and surface only market-moving stories with automated "Why This Moves Markets" analysis.',
    tech: ['Node.js', 'Express', 'JavaScript', 'Yahoo Finance API', 'RSS'],
    highlights: [
      'Proprietary impact-scoring engine filtering 100+ daily articles down to 3–5 high-signal stories',
      'Real-time market dashboard with live Nifty 50, Sensex & Bank Nifty data, top gainers/losers, and market breadth',
      '8-sector performance tracker with news-to-sector matching via keyword-based regex classification',
    ],
    liveUrl: '',
    repo: 'https://github.com/MohammedLike/Indian-Financial-News-',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="project-card"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span className="font-mono text-xs font-semibold text-blue-600">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="mt-4 space-y-1.5">
        {project.highlights.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <p className="text-sm text-gray-500">{item}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span key={i} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn link-btn-primary"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn link-btn-secondary"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {!project.liveUrl && !project.repo && (
          <span className="text-sm text-gray-400 italic">
            Links coming soon
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative bg-white px-6 py-24 md:px-8 md:py-32" ref={ref}>
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="section-label-bar mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Projects</h2>
          <p className="mt-2 text-base text-gray-500">
            Quantitative research and financial engineering work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
