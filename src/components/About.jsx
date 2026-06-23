import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32 lg:px-16" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="editorial-label mb-6">About</p>
          <h2 className="section-pipe-title mb-12">
            The Quant<span className="pipe">|</span>World
          </h2>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="pull-quote">
                &ldquo;In quantitative finance, I structure data into systematic
                models that capture the essence of market behavior.&rdquo;
              </p>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <p className="text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
                Quantitative Researcher and Developer building systematic trading
                systems across equities, futures, and options. I translate
                discretionary trading theories into rule-based algorithmic models,
                build options pricing with Greeks analytics, and engineer
                high-performance financial data pipelines.
              </p>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">
                Currently a Quant Researcher & Developer Intern at StockWiz
                Technologies LLP, completing B.Tech in Computer Science &
                Engineering (Data Science) at JIET, Jodhpur.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-[rgba(26,22,20,0.1)] pt-10">
                <div className="stat-block">
                  <p className="stat-value">5</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                    Quant Projects
                  </p>
                </div>
                <div className="stat-block">
                  <p className="stat-value">3</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                    Internships
                  </p>
                </div>
                <div className="stat-block">
                  <p className="stat-value text-[clamp(1.5rem,4vw,2.5rem)]">B.Tech</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                    CS & DS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
