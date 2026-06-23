import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const [pct, setPct] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (v) => setPct(Math.round(v * 100)))
  }, [scrollYProgress])

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      <div className="scroll-progress-label font-mono" aria-hidden>
        {String(pct).padStart(3, '0')}
      </div>
    </>
  )
}
