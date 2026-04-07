import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resume" className="relative bg-white px-6 py-24 md:px-8 md:py-32" ref={ref}>
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-5">
            <div className="section-label-bar mb-4" />
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Resume
            </p>
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-4xl">
              A detailed account of my professional journey.
            </h2>
          </div>

          <div className="flex justify-start md:col-span-7 md:justify-end">
            <a
              href="/Mohammed_Like_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn link-btn-primary px-8 py-4 text-sm"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 border-t border-gray-200 pt-14 md:grid-cols-3"
        >
          <div className="stat-card">
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">B.Tech</p>
            <p className="mt-2 text-sm text-gray-600">
              Computer Science & Engineering (Data Science)
            </p>
            <p className="mt-1 font-mono text-xs text-gray-400">
              JIET, 2022 — 2026
            </p>
          </div>
          <div className="stat-card">
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">3</p>
            <p className="mt-2 text-sm text-gray-600">
              Quantitative Projects Delivered
            </p>
          </div>
          <div className="stat-card">
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">2</p>
            <p className="mt-2 text-sm text-gray-600">
              Industry Internships
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
