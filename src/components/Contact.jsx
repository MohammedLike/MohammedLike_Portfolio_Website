import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'

const PHONE_DISPLAY = '+91 7424962861'
const PHONE_TEL = 'tel:+917424962861'

const links = [
  {
    label: 'Email',
    value: 'mohammedlike.work@gmail.com',
    href: 'mailto:mohammedlike.work@gmail.com',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: PHONE_TEL,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'mohammed-like',
    href: 'https://www.linkedin.com/in/mohammed-like-608285211/',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'MohammedLike',
    href: 'https://github.com/MohammedLike',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

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
    <section
      id="contact"
      className="relative bg-gray-900 px-6 py-24 md:px-8 md:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label-bar mb-4" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Contact
          </p>

          <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&rsquo;s discuss your next{' '}
            <span className="text-blue-400">opportunity.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <p className="mb-5 text-sm text-gray-400">
                Drop a query with your credentials and I will respond shortly.
              </p>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-gray-800 bg-gray-800/50 p-6 md:p-8"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Company or organization"
                  className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, role, or question"
                  className="w-full resize-y rounded-xl border border-gray-700 bg-gray-800 px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)]"
                >
                  Send Query
                  <span aria-hidden>→</span>
                </button>
              </form>
            </div>

            {/* Contact links */}
            <div className="flex flex-col justify-center gap-2 lg:col-span-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={
                    link.label === 'LinkedIn' || link.label === 'GitHub'
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    link.label === 'LinkedIn' || link.label === 'GitHub'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="group flex items-center gap-4 rounded-xl border border-gray-800 px-5 py-4 transition-all duration-300 hover:border-gray-700 hover:bg-gray-800"
                >
                  <span className="text-gray-500 transition-colors group-hover:text-blue-400">
                    {link.icon}
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      {link.label}
                    </p>
                    <p className="text-sm text-gray-300 transition-colors group-hover:text-white">
                      {link.value}
                    </p>
                  </div>
                  <span className="text-xs text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-blue-400 group-hover:opacity-100">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
