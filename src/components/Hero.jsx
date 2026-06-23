import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:px-16"
    >
      <motion.div style={{ y }} className="relative z-10 mx-auto w-full max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="editorial-label mb-8"
        >
          Mohammed Like · Quant Researcher
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="editorial-title max-w-[min(100%,18ch)] text-[clamp(2.75rem,9vw,7.5rem)]">
            Quantitative
            <br />
            Research
            <br />
            <span className="whitespace-nowrap">
              <span className="text-[var(--color-accent)]">|</span> Portfolio
            </span>
          </h1>
          <p className="mt-4 font-serif text-[clamp(1.75rem,4vw,3rem)] italic text-[var(--color-sage)]">
            2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 max-w-xl md:mt-14 lg:mt-16"
        >
          <div className="hero-line mb-6" />
          <p className="text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Building systematic trading systems, financial risk models, and
            full-stack analytics platforms at the intersection of data science
            and markets.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Work <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-outline">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex flex-col gap-6 border-t border-[rgba(26,22,20,0.1)] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">Focus</p>
              <p className="mt-1 text-sm font-medium">Quant Finance</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">Based in</p>
              <p className="mt-1 text-sm font-medium">India</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">Status</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-sage)]">Open to roles</p>
            </div>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            Scroll to explore
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
