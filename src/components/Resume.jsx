import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resume" className="px-6 py-24 md:px-10 md:py-32 lg:px-16" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <p className="editorial-label mb-6">Resume</p>
            <h2 className="section-pipe-title">
              Full<span className="pipe">|</span>Credentials
            </h2>
            <p className="mt-6 max-w-lg text-[var(--color-muted)]">
              A detailed account of my academic background, quantitative projects,
              and industry experience in finance and data science.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a
              href="/Mohammed_Like_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Resume <span aria-hidden>↓</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 border-t border-[rgba(26,22,20,0.1)] pt-16 md:grid-cols-3"
        >
          <div className="stat-block">
            <p className="stat-value text-[clamp(1.75rem,4vw,2.5rem)]">B.Tech</p>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)]">CS & Engineering (Data Science)</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">JIET · 2022–26</p>
          </div>
          <div className="stat-block">
            <p className="stat-value">5</p>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)]">Quantitative Projects Delivered</p>
          </div>
          <div className="stat-block">
            <p className="stat-value">3</p>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)]">Industry Internships</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
