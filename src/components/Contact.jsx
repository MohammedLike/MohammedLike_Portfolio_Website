import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'

const PHONE_DISPLAY = '+91 7424962861'
const PHONE_TEL = 'tel:+917424962861'

const links = [
  { label: 'Email', value: 'mohammedlike.work@gmail.com', href: 'mailto:mohammedlike.work@gmail.com' },
  { label: 'Phone', value: PHONE_DISPLAY, href: PHONE_TEL },
  { label: 'LinkedIn', value: 'mohammed-like', href: 'https://www.linkedin.com/in/mohammed-like-608285211/', external: true },
  { label: 'GitHub', value: 'MohammedLike', href: 'https://github.com/MohammedLike', external: true },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio query from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nQuery:\n${formData.message}`,
    )
    window.location.href = `mailto:mohammedlike.work@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-dark px-6 py-24 md:px-10 md:py-32 lg:px-16" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="editorial-label mb-6 !text-[rgba(245,240,230,0.5)]">Contact</p>
          <h2 className="section-pipe-title max-w-3xl text-[var(--color-cream)]">
            Let&rsquo;s Build<span className="pipe">|</span>Something
          </h2>
          <p className="mt-4 max-w-lg font-serif text-xl italic text-[rgba(245,240,230,0.6)]">
            Available for quant research roles, internships, and collaborations.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
            <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-7">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[rgba(245,240,230,0.4)]">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-field mt-2" placeholder="Your name" />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[rgba(245,240,230,0.4)]">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-field mt-2" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-[rgba(245,240,230,0.4)]">Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required className="form-field mt-2" placeholder="Organization" />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-[rgba(245,240,230,0.4)]">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="form-field mt-2 resize-none" placeholder="Tell me about the opportunity..." />
              </div>
              <button type="submit" className="btn-primary !bg-[var(--color-accent)] hover:!bg-[var(--color-accent-hover)]">
                Send Message <span aria-hidden>→</span>
              </button>
            </form>

            <div className="flex flex-col justify-center gap-8 lg:col-span-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="group border-b border-[rgba(255,255,255,0.1)] pb-4 transition-colors hover:border-[var(--color-accent)]"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[rgba(245,240,230,0.4)]">
                    {link.label}
                  </p>
                  <p className="mt-1 text-lg text-[var(--color-cream)] transition-colors group-hover:text-[var(--color-accent)]">
                    {link.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
