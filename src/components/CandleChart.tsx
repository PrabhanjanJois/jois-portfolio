"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

// Deterministic pseudo-random so server & client render identical candles.
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const W = 520;
const H = 300;
const N = 32;

export default function CandleChart() {
  const reduce = useReducedMotion();
  const { candles, line, min, max } = useMemo(() => {
    const r = seeded(42);
    let price = 100;
    const c = Array.from({ length: N }, () => {
      const open = price;
      const close = open + (r() - 0.42) * 8;
      const high = Math.max(open, close) + r() * 4;
      const low = Math.min(open, close) - r() * 4;
      price = close;
      return { open, close, high, low };
    });
    const lo = Math.min(...c.map((x) => x.low));
    const hi = Math.max(...c.map((x) => x.high));
    return { candles: c, min: lo, max: hi, line: c.map((x) => x.close) };
  }, []);

  const step = W / N;
  const y = (v: number) => H - 20 - ((v - min) / (max - min)) * (H - 40);
  const path = line.map((v, i) => `${i ? "L" : "M"}${i * step + step / 2},${y(v)}`).join(" ");
  const signalIdx = 18;
  const last = line[line.length - 1];

  return (
    <div className="card relative overflow-hidden p-4">
      <div className="mb-3 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="rounded bg-accent/10 px-2 py-0.5 text-accent">NIFTY · 5m</span>
          <span className="text-muted">strategy: momentum-v1</span>
        </div>
        <span className="flex items-center gap-1.5 text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          LIVE
        </span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Illustrative candlestick chart showing an automated buy signal">
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="#1F2A36" strokeDasharray="3 5" />
        ))}
        {candles.map((c, i) => {
          const up = c.close >= c.open;
          const color = up ? "#B6FF3B" : "#FF4D6D";
          const x = i * step + step / 2;
          return (
            <motion.g
              key={i}
              initial={reduce ? false : { opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              style={{ transformOrigin: `${x}px ${y((c.open + c.close) / 2)}px` }}
            >
              <line x1={x} x2={x} y1={y(c.high)} y2={y(c.low)} stroke={color} strokeWidth="1" opacity="0.7" />
              <rect
                x={x - step * 0.3}
                width={step * 0.6}
                y={y(Math.max(c.open, c.close))}
                height={Math.max(2, Math.abs(y(c.open) - y(c.close)))}
                fill={color}
                rx="1"
              />
            </motion.g>
          );
        })}
        <motion.path
          d={path}
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1.5"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
        />
        <g transform={`translate(${signalIdx * step + step / 2}, ${y(candles[signalIdx].low) + 14})`}>
          <path d="M0,-8 L6,2 L-6,2 Z" fill="#B6FF3B" />
          <rect x="-18" y="6" width="36" height="16" rx="4" fill="#B6FF3B" />
          <text x="0" y="17.5" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="700" fill="#07090C">
            BUY
          </text>
        </g>
        <line x1="0" x2={W} y1={y(last)} y2={y(last)} stroke="#22D3EE" strokeDasharray="2 4" opacity="0.6" />
      </svg>

      <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-xs">
        {[
          ["Win rate", "64%"],
          ["Signals", "128"],
          ["Mode", "Auto"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
            <div className="text-muted">{k}</div>
            <div className="mt-0.5 text-accent">{v}</div>
          </div>
        ))}
      </div>
      <p className="mt-2 font-mono text-[10px] text-muted/60">* Illustrative preview, not live data.</p>
    </div>
  );
}
