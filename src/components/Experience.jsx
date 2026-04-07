import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Data Analyst Intern',
    company: 'Visual Solutions Pvt Ltd',
    period: 'May 2025 — Sep 2026',
    details: [
      'Built a sectoral fund-flow analysis model in Python on a 3-year CMIE/MCA dataset; surfaced 4 high-conviction capital allocation shifts and reduced manual research time by 40%.',
      'Produced an investment trend report using STL time-series decomposition on sector-level NAV data; identified 3 cyclical regime shifts with 87% directional accuracy vs. BSE sectoral indices.',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'Dreamteam Technologies',
    period: 'May 2024 — Jun 2024',
    details: [
      'Designed and deployed an NLP-powered chatbot for a school edtech platform to automate student data management and streamline user query handling.',
      'Implemented backend workflows integrating NLP-based query parsing, improving speed of academic information retrieval for end users.',
      'Collaborated in a cross-functional team to scope requirements, iterate on model outputs, and deliver a production-ready solution within the internship timeline.',
    ],
  },
]

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-1 gap-6 border-t border-gray-200 py-10 md:grid-cols-12 md:gap-16 md:py-14"
    >
      <div className="md:col-span-4">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue-600">
          {exp.period}
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          {exp.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-500">{exp.company}</p>
      </div>

      <div className="space-y-4 md:col-span-8">
        {exp.details.map((detail, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <p className="text-[15px] leading-relaxed text-gray-600">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative bg-gray-50 px-6 py-24 md:px-8 md:py-32" ref={ref}>
      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="section-label-bar mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Experience</h2>
          <p className="mt-2 text-base text-gray-500">
            Professional work and internship experience
          </p>
        </motion.div>

        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
