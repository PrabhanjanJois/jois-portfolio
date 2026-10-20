import { MapPin, Sparkles } from "lucide-react";
import { stats } from "@/data/content";
import { CountUp, Reveal, SectionHeading } from "@/components/ui";

export default function About() {
  return (
    <section id="about" className="container py-24">
      <SectionHeading index="02" eyebrow="About" title={<>Engineer by craft, <span className="text-gradient">builder</span> by choice.</>} />
      <div className="grid gap-4 md:grid-cols-4">
        <Reveal className="card card-hover p-7 md:col-span-2 md:row-span-2">
          <Sparkles className="text-accent" size={22} />
          <p className="mt-5 text-lg leading-relaxed text-text/90">
            I&apos;m a full stack developer with 4+ years of experience shipping production software — from unified
            enterprise platforms and SSO at <span className="text-accent">Cognitive Clouds</span> to the 3D IC platform at{" "}
            <span className="text-accent">MediaTek</span>.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            These days I work where web engineering meets AI: MCP-based integrations, RAG pipelines with LangChain, and
            prompt-tuned LLM features. I&apos;m also pursuing an M.Tech in AI &amp; Data Science at IIT Patna, and
            building <span className="text-text">AlgoTrade</span> — a platform that lets anyone automate their trading.
          </p>
        </Reveal>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="card card-hover flex flex-col justify-between p-6">
            <span className="font-display text-5xl font-bold text-accent">
              <CountUp to={s.value} suffix={s.suffix} />
            </span>
            <span className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">{s.label}</span>
          </Reveal>
        ))}
        <Reveal className="card card-hover flex items-center gap-3 p-6 md:col-span-4">
          <MapPin className="text-accent-2" size={20} />
          <span className="text-muted">
            Based in <span className="text-text">India 🇮🇳</span> · Open to full-stack &amp; AI roles, remote or hybrid
          </span>
        </Reveal>
      </div>
    </section>
  );
}
