import { motion } from 'framer-motion'

const shapes = [
  { type: 'ring', size: 120, top: '18%', left: '8%', delay: 0, duration: 8 },
  { type: 'sphere', size: 64, top: '65%', left: '12%', delay: 1.2, duration: 10 },
  { type: 'cube', size: 48, top: '30%', right: '10%', delay: 0.6, duration: 9 },
  { type: 'ring', size: 80, top: '72%', right: '15%', delay: 1.8, duration: 11 },
  { type: 'sphere', size: 36, top: '45%', left: '85%', delay: 0.3, duration: 7 },
]

function Shape({ shape }) {
  const pos = shape.left
    ? { left: shape.left }
    : { right: shape.right }

  const base = (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: shape.delay }}
      className="shape-3d pointer-events-none absolute"
      style={{ top: shape.top, ...pos, width: shape.size, height: shape.size }}
    >
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotateX: [0, 15, 0],
          rotateY: [0, 25, 0],
        }}
        transition={{
          duration: shape.duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {shape.type === 'sphere' && <div className="shape-sphere h-full w-full" />}
        {shape.type === 'ring' && <div className="shape-ring h-full w-full" />}
        {shape.type === 'cube' && <div className="shape-cube h-full w-full" />}
      </motion.div>
    </motion.div>
  )

  return base
}

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      {shapes.map((s, i) => (
        <Shape key={i} shape={s} />
      ))}
    </div>
  )
}
