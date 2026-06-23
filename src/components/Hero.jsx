import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ParticleField from './ParticleField'
import FloatingShapes from './FloatingShapes'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  return (
    <section
      ref={sectionRef}
      className="perspective-scene relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 pb-24 pt-20"
    >
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      <div className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/2" aria-hidden />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 z-[1] opacity-20" aria-hidden />
      <FloatingShapes />

      <div className="pointer-events-none absolute left-8 top-24 z-[2] hidden h-24 w-[2px] bg-gradient-to-b from-blue-500/40 to-transparent md:block" />
      <div className="pointer-events-none absolute right-8 top-24 z-[2] hidden h-24 w-[2px] bg-gradient-to-b from-blue-500/40 to-transparent md:block" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-5xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 flex items-center justify-center gap-4"
        >
          <div className="h-px w-10 bg-blue-500/40" />
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            Data Science · Quantitative Analysis · Financial Engineering
          </p>
          <div className="h-px w-10 bg-blue-500/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-3d-hero mb-4"
        >
          <span className="text-3d-layer text-6xl font-black sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="text-3d-shadow" aria-hidden>Mohammed Like</span>
            <span className="text-3d-main">Mohammed Like</span>
          </span>
          <span className="text-3d-layer mt-1 text-6xl font-black sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="text-3d-shadow" aria-hidden>Portfolio</span>
            <span className="text-3d-accent holo-shimmer">Portfolio</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto max-w-lg text-base leading-relaxed text-gray-500 md:text-lg"
        >
          ML Pipelines · Financial Risk Models · Full-Stack Analytics
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="link-btn link-btn-primary px-8 py-3.5 text-sm">
            View Projects
            <span aria-hidden>→</span>
          </a>
          <a href="#contact" className="link-btn link-btn-secondary px-8 py-3.5 text-sm">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

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
          className="h-8 w-px bg-gradient-to-b from-blue-400/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
