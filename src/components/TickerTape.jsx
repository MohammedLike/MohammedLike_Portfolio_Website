const tickers = [
  { symbol: 'NIFTY 50', value: '23,842.15', change: '+1.24%', up: true },
  { symbol: 'SENSEX', value: '78,553.20', change: '+0.98%', up: true },
  { symbol: 'BANKNIFTY', value: '51,124.80', change: '-0.32%', up: false },
  { symbol: 'USDINR', value: '83.42', change: '+0.08%', up: true },
  { symbol: 'CRUDE', value: '5,842.00', change: '-1.15%', up: false },
  { symbol: 'GOLD', value: '72,450.00', change: '+0.67%', up: true },
  { symbol: 'VIX', value: '13.28', change: '-4.52%', up: false },
  { symbol: 'NIFTY IT', value: '34,218.90', change: '+1.85%', up: true },
  { symbol: 'SILVER', value: '85,620.00', change: '+1.02%', up: true },
  { symbol: 'RELIANCE', value: '2,834.50', change: '+0.45%', up: true },
]

function TickerItem({ ticker }) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap px-6">
      <span className="font-mono text-xs font-semibold tracking-wider text-gray-700">
        {ticker.symbol}
      </span>
      <span className="font-mono text-xs text-gray-400">{ticker.value}</span>
      <span
        className={`font-mono text-xs font-semibold ${
          ticker.up ? 'text-emerald-600' : 'text-red-500'
        }`}
      >
        {ticker.up ? '▲' : '▼'} {ticker.change}
      </span>
    </span>
  )
}

export default function TickerTape() {
  const doubled = [...tickers, ...tickers]

  return (
    <div className="hover-pause relative overflow-hidden border-y border-gray-200 bg-gray-50 py-2.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-gray-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-gray-50 to-transparent" />
      <div className="ticker-scroll flex w-max">
        {doubled.map((t, i) => (
          <TickerItem key={i} ticker={t} />
        ))}
      </div>
    </div>
  )
}
