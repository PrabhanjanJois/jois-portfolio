import { ticker } from "@/data/content";

export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="marquee relative overflow-hidden border-y border-border bg-surface/50 py-3" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 font-mono text-sm">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-2 whitespace-nowrap">
            <span className={t === "ALGOTRADE" ? "text-accent" : "text-text/80"}>{t}</span>
            <span className="text-accent">▲</span>
            <span className="text-muted">+{((i * 7) % 9) + 1}.{(i * 3) % 10}%</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
