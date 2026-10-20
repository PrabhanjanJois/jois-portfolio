import { Activity, ArrowUpRight, Bot, LineChart, Mail, PlugZap, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";
import { algotrade, profile } from "@/data/content";
import CandleChart from "@/components/CandleChart";
import { Chip, Reveal } from "@/components/ui";

const icons: Record<string, LucideIcon> = { Bot, Workflow, Activity, ShieldCheck, LineChart, PlugZap };

export default function AlgoTrade() {
  return (
    <section id="algotrade" className="container py-24 md:py-32">
      <Reveal>
        <div className="relative rounded-[28px] bg-gradient-to-br from-accent/60 via-border to-accent-2/40 p-px shadow-[0_0_120px_-40px_rgba(182,255,59,0.5)]">
          <div className="relative overflow-hidden rounded-[27px] bg-bg/95 p-6 md:p-12">
            <div aria-hidden className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />

            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{"// 01 — Flagship Project"}</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> In development · since {algotrade.since}
              </span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <h2 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
                  Algo<span className="text-gradient">Trade</span>
                </h2>
                <a href={algotrade.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-mono text-accent-2 hover:underline">
                  {algotrade.domain}
                </a>
                <p className="mt-5 text-lg leading-relaxed text-muted">{algotrade.oneLiner}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {algotrade.features.map((f) => {
                    const Icon = icons[f.icon];
                    return (
                      <div key={f.title} className="card card-hover p-4">
                        <Icon size={20} className="text-accent" />
                        <h3 className="mt-3 font-display font-medium">{f.title}</h3>
                        <p className="mt-1 text-sm text-muted">{f.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <CandleChart />
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">Built with</p>
                  <div className="flex flex-wrap gap-2">
                    {algotrade.stack.map((s) => <Chip key={s}>{s}</Chip>)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    id="algotrade-visit"
                    href={algotrade.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-bg transition hover:shadow-[0_0_32px_-4px_#B6FF3B]"
                  >
                    Visit {algotrade.domain}
                    <ArrowUpRight size={18} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    id="algotrade-waitlist"
                    href={`mailto:${profile.email}?subject=AlgoTrade%20waitlist`}
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-medium transition hover:border-accent/50 hover:text-accent"
                  >
                    <Mail size={18} /> Join the waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
