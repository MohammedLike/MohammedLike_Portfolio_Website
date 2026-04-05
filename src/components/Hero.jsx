import { motion } from 'framer-motion'
import ParticleField from './ParticleField'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 pb-24 pt-20">
      {/* Particle canvas background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Subtle dot grid */}
      <div className="bg-dot-grid pointer-events-none absolute inset-0 z-[1] opacity-30" aria-hidden />

      {/* Corner accents */}
      <div className="pointer-events-none absolute left-8 top-24 z-[2] hidden h-20 w-[2px] bg-gradient-to-b from-blue-500/30 to-transparent md:block" />
      <div className="pointer-events-none absolute right-8 top-24 z-[2] hidden h-20 w-[2px] bg-gradient-to-b from-blue-500/30 to-transparent md:block" />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 flex items-center justify-center gap-4"
        >
          <div className="h-px w-10 bg-blue-500/40" />
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            Quantitative Research & Financial Data Science
          </p>
          <div className="h-px w-10 bg-blue-500/40" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-6xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Mohammed Like
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto max-w-lg text-base leading-relaxed text-gray-500 md:text-lg"
        >
          Derivatives Pricing · Credit Risk Modeling · Machine Learning
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="link-btn link-btn-primary px-8 py-3.5 text-sm"
          >
            View Projects
            <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="link-btn link-btn-secondary px-8 py-3.5 text-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-gray-400 to-transparent"
        />
      </motion.div>
    </section>
  )
}
