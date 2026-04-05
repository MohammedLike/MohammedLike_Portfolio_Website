import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-gray-200 bg-white/95 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-[72px] lg:px-8">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 transition-colors group-hover:bg-blue-600">
              <span className="text-sm font-bold tracking-wider text-white">ML</span>
            </div>
            <span className="hidden text-sm font-semibold tracking-wide text-gray-900 sm:block">
              Mohammed Like
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="underline-draw rounded-lg px-4 py-2 text-[13px] font-medium text-gray-500 transition-colors duration-300 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex h-5 w-6 flex-col justify-between md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
            <span className={`block h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full rounded-full bg-gray-900 transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white/[0.98] backdrop-blur-xl"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="text-3xl font-semibold text-gray-800 transition hover:text-blue-600"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
