export default function Footer() {
  return (
    <footer className="section-dark border-t border-[rgba(255,255,255,0.08)] px-6 py-10 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-tight text-[var(--color-cream)]">
            Mohammed Like
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[rgba(245,240,230,0.4)]">
            Quantitative Research & Data Science
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-[rgba(245,240,230,0.3)]">
          &copy; {new Date().getFullYear()} · Portfolio 2026
        </p>
      </div>
    </footer>
  )
}
