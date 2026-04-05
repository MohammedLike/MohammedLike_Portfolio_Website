import { useRef, useEffect, useCallback } from 'react'

/**
 * Minimal dark particle canvas — finance symbols, grid lines,
 * trend paths, and connected nodes. Mouse-reactive with depth parallax.
 * Particles and lines are drawn in dark tones for visibility on white.
 */
export default function ParticleField() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0.5, y: 0.5 })
  const raf = useRef(null)
  const particles = useRef([])
  const trendLines = useRef([])

  const init = useCallback((w, h) => {
    const count = Math.min(Math.floor((w * h) / 16000), 60)
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 500 + 100,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.35 + 0.1,
      symbol: ['$', '¥', '€', '£', 'Δ', 'σ', 'β', 'α', 'Σ', '∂', 'π', 'ρ'][
        Math.floor(Math.random() * 12)
      ],
      isSymbol: Math.random() > 0.55,
    }))

    trendLines.current = Array.from({ length: 3 }, () => {
      const pts = []
      const startY = h * 0.25 + Math.random() * h * 0.5
      for (let i = 0; i <= 50; i++) {
        pts.push({ x: (w / 50) * i, y: startY + (Math.random() - 0.5) * 60 })
      }
      return { pts, opacity: 0.06 + Math.random() * 0.06, phase: Math.random() * Math.PI * 2 }
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init(w, h)
    }

    function handleMouse(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = (e.clientX - rect.left) / rect.width
      mouse.current.y = (e.clientY - rect.top) / rect.height
    }

    function draw(time) {
      ctx.clearRect(0, 0, w, h)
      const mx = mouse.current.x
      const my = mouse.current.y

      // Perspective grid — darker lines for visibility
      ctx.save()
      ctx.globalAlpha = 0.04
      ctx.strokeStyle = '#1f2937'
      ctx.lineWidth = 0.5
      const horizon = h * 0.32 + (my - 0.5) * 20
      for (let i = 0; i < 16; i++) {
        const t = i / 16
        const y = horizon + (h - horizon) * t * t
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }
      const cx = w / 2 + (mx - 0.5) * 30
      for (let i = -8; i <= 8; i++) {
        ctx.beginPath()
        ctx.moveTo(cx, horizon)
        ctx.lineTo(cx + i * (w / 8), h)
        ctx.stroke()
      }
      ctx.restore()

      // Trend lines — darker for visibility
      trendLines.current.forEach((line) => {
        ctx.save()
        ctx.globalAlpha = line.opacity
        ctx.strokeStyle = '#374151'
        ctx.lineWidth = 0.8
        ctx.beginPath()
        line.pts.forEach((pt, i) => {
          pt.y += Math.sin(time * 0.0008 + line.phase + i * 0.12) * 0.1
          if (i === 0) ctx.moveTo(pt.x, pt.y)
          else ctx.lineTo(pt.x, pt.y)
        })
        ctx.stroke()
        ctx.restore()
      })

      // Particles — darker colors
      const connectionDist = 100
      const pts = particles.current
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx + (mx - 0.5) * 0.12
        p.y += p.vy + (my - 0.5) * 0.08
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20

        const scale = 500 / (500 + p.z)
        const sx = p.x * scale + w * (1 - scale) * 0.5
        const sy = p.y * scale + h * (1 - scale) * 0.5

        if (p.isSymbol) {
          ctx.save()
          ctx.globalAlpha = p.opacity * scale
          ctx.fillStyle = '#374151'
          ctx.font = `${Math.round(9 * scale + 4)}px "JetBrains Mono", monospace`
          ctx.fillText(p.symbol, sx, sy)
          ctx.restore()
        } else {
          ctx.save()
          ctx.globalAlpha = p.opacity * scale
          ctx.fillStyle = '#1f2937'
          ctx.beginPath()
          ctx.arc(sx, sy, p.size * scale, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }

        // Connections
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectionDist) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / connectionDist) * 0.06
            ctx.strokeStyle = '#374151'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(sx, sy)
            const qs = 500 / (500 + q.z)
            ctx.lineTo(q.x * qs + w * (1 - qs) * 0.5, q.y * qs + h * (1 - qs) * 0.5)
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      raf.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouse)
    raf.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [init])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
    />
  )
}
