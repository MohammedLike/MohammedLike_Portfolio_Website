const items = [
  'Backtesting',
  'Options Pricing',
  'Risk Modeling',
  'ML Pipelines',
  'Alpha Research',
  'Credit Risk',
  'Factor Models',
  'Quant Finance',
]

export default function MarqueeBanner() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-[rgba(26,22,20,0.1)] bg-[var(--color-cream-dark)] py-6 md:py-8">
      <div className="marquee-track flex w-max">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-text inline-flex items-center px-8 md:px-12">
            {item}
            <span className="mx-8 text-[var(--color-accent)] md:mx-12">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
