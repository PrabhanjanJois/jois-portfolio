import { Award, CheckCircle2, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui";

export default function Credentials() {
  return (
    <section id="credentials" className="container py-24">
      <SectionHeading index="05" eyebrow="Education & Certifications" title="Always learning." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08} className="card card-hover p-6">
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-accent-2/10 p-2.5 text-accent-2">
                  <GraduationCap size={20} />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-medium">{e.degree}</h3>
                    <span className="font-mono text-xs text-muted">{e.period}</span>
                  </div>
                  <p className="mt-1 text-muted">{e.school}</p>
                  {e.note && <p className="mt-2 font-mono text-sm text-accent">{e.note}</p>}
                  {e.inProgress && (
                    <div className="mt-4">
                      <div className="flex justify-between font-mono text-xs text-muted">
                        <span>In progress</span>
                        <span>2026 → 2028</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-2">
                        <div className="h-full w-[20%] rounded-full bg-gradient-to-r from-accent to-accent-2" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="card p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
              <Award size={20} />
            </span>
            <h3 className="font-display text-lg font-medium">Certifications</h3>
          </div>
          <ul className="divide-y divide-border">
            {certifications.map((c) => (
              <li key={c.title} className="flex items-start gap-3 py-3.5">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>{c.title}</p>
                  <p className="font-mono text-xs text-muted">{c.by}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
