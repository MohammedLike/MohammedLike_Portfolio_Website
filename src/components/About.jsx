import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Quantitative Analyst with a precise focus on the intersection of
              statistical rigor and financial theory.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5">
              <p className="text-base leading-relaxed text-gray-600">
                Specializing in derivatives pricing through Black-Scholes and Monte
                Carlo frameworks, credit risk modeling under Basel III IRB standards,
                time-series momentum strategies, and sector-level investment analysis.
                I build end-to-end Python pipelines that transform complex financial
                data into actionable intelligence — from options analytics and
                regulatory capital estimation to factor-based portfolio strategy.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Currently completing a B.Tech in Computer Science &
                Engineering (Data Science) at Jodhpur Institute of Engineering
                and Technology, with coursework spanning Financial Engineering,
                Machine Learning, Time Series Analysis, and Optimization.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="stat-card">
                <p className="text-3xl font-bold text-gray-900 md:text-4xl">4+</p>
                <p className="mt-1 text-sm text-gray-500">Quant Projects</p>
              </div>
              <div className="stat-card">
                <p className="text-3xl font-bold text-gray-900 md:text-4xl">2</p>
                <p className="mt-1 text-sm text-gray-500">Internships</p>
              </div>
              <div className="stat-card">
                <p className="text-3xl font-bold text-gray-900 md:text-4xl">B.Tech</p>
                <p className="mt-1 text-sm text-gray-500">CS & DS, 2022–26</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
