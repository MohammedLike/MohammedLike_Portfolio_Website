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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="editorial-title text-[clamp(3rem,11vw,9rem)]">
              Quantitative
              <br />
              Research
              <span className="text-[var(--color-accent)]"> | </span>
              Portfolio
              <br />
              <span className="font-serif font-normal normal-case italic text-[var(--color-sage)]">
                2026
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col justify-end lg:col-span-4"
          >
            <div className="hero-line mb-6 hidden lg:block" />
            <p className="max-w-sm text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex items-center justify-between border-t border-[rgba(26,22,20,0.1)] pt-6"
        >
          <div className="flex gap-8 md:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">Focus</p>
              <p className="mt-1 text-sm font-medium">Quant Finance</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">Based in</p>
              <p className="mt-1 text-sm font-medium">India</p>
            </div>
            <div className="hidden sm:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">Status</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-sage)]">Open to roles</p>
            </div>
          </div>
          <p className="hidden font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] md:block">
            Scroll to explore
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
