export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-800">
            <span className="text-[10px] font-bold text-white">ML</span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Mohammed Like
          </p>
        </div>
        <p className="text-xs text-gray-600">
          Quantitative Research & Data Science
        </p>
      </div>
    </footer>
  )
}
