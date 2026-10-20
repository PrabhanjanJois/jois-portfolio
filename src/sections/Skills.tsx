import { Brain, Code2, Database, FlaskConical, Server, Wrench, type LucideIcon } from "lucide-react";
import { skills } from "@/data/content";
import { Chip, Reveal, SectionHeading } from "@/components/ui";

const icons: Record<string, LucideIcon> = {
  "AI & Architecture": Brain,
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Testing: FlaskConical,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="container py-24">
      <SectionHeading index="04" eyebrow="Skills" title={<>The <span className="text-gradient">stack</span> I trade in.</>} />
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = icons[s.group];
          return (
            <Reveal
              key={s.group}
              delay={i * 0.06}
              className={`card card-hover p-6 ${s.featured ? "border-accent/30 md:col-span-2 md:row-span-1" : ""} ${
                s.group === "Frontend" ? "md:row-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-accent/10 p-2 text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-lg font-medium">{s.group}</h3>
                <span className="ml-auto font-mono text-xs text-muted">{String(s.items.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => <Chip key={it}>{it}</Chip>)}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
