import { experience } from "@/data/content";
import { Chip, Reveal, SectionHeading } from "@/components/ui";

export default function Experience() {
  return (
    <section id="experience" className="container py-24">
      <SectionHeading index="03" eyebrow="Experience" title="Where I've shipped." sub="4+ years building platforms, integrations and AI features in production." />
      <ol className="relative ml-2 border-l border-border md:ml-4">
        <span aria-hidden className="absolute -left-px top-0 h-40 w-px bg-gradient-to-b from-accent to-transparent" />
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
            <span
              className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-bg ${
                job.current ? "bg-accent shadow-[0_0_16px_#B6FF3B]" : "bg-muted"
              }`}
            />
            <Reveal delay={i * 0.1} className="card card-hover p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl font-bold">{job.company}</h3>
                  <p className="text-accent-2">{job.role}</p>
                </div>
                <span className="flex items-center gap-2 font-mono text-sm text-muted">
                  {job.current && <span className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">Current</span>}
                  {job.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {job.growth && (
                <div className="mt-6 rounded-xl border border-border bg-surface-2/60 p-4">
                  <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Career growth</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {job.growth.map((g, k) => (
                      <div key={g.role} className="relative">
                        <p className="font-mono text-xs text-accent">0{k + 1} ▲</p>
                        <p className="mt-1 font-medium">{g.role}</p>
                        <p className="mt-1 text-sm text-muted">{g.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
