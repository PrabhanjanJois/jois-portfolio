"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { profile } from "@/data/content";

function useTyping(words: string[]) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (reduce) return;
    let w = 0, i = words[0].length, del = true;
    const id = setInterval(() => {
      const word = words[w];
      if (del) {
        i--;
        if (i === 0) { del = false; w = (w + 1) % words.length; }
      } else {
        i++;
        if (i === words[w].length) del = true;
      }
      setText((del ? word : words[w]).slice(0, i));
    }, 85);
    return () => clearInterval(id);
  }, [words, reduce]);
  return text;
}

const json = [
  ["role", '"SDE-2 @ MediaTek"'],
  ["stack", '["Next.js", "Node", "Payload", "LangChain"]'],
  ["studying", '"M.Tech AI & DS @ IIT Patna"'],
  ["building", '"algotrade.co.in"'],
];

export default function Hero() {
  const role = useTyping(profile.roles);
  return (
    <section id="top" className="container grid min-h-[100dvh] items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.4fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for opportunities
        </span>
        <p className="mt-6 font-mono text-sm text-muted">
          <span className="text-accent">$</span> whoami
        </p>
        <h1 className="mt-2 font-display text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight">
          Jois <span className="text-gradient">Prabhanjan</span>
        </h1>
        <p className="mt-5 h-8 font-mono text-lg text-text md:text-xl" aria-label={profile.roles.join(", ")}>
          <span className="text-accent-2">&gt;</span> {role}
          <span className="ml-0.5 animate-blink text-accent">▍</span>
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            id="hero-cta-algotrade"
            href="#algotrade"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-bg transition hover:shadow-[0_0_32px_-4px_#B6FF3B]"
          >
            View AlgoTrade <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </a>
          <a
            id="hero-cta-resume"
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-medium transition hover:border-accent/50 hover:text-accent"
          >
            Download Resume <Download size={18} />
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { id: "hero-linkedin", href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { id: "hero-github", href: profile.github, icon: Github, label: "GitHub" },
              { id: "hero-email", href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ id, href, icon: Icon, label }) => (
              <a key={id} id={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="rounded-lg p-2.5 text-muted transition hover:bg-surface-2 hover:text-accent">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="card relative overflow-hidden shadow-[0_0_80px_-30px_rgba(182,255,59,0.4)]"
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-loss/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-accent/80" />
          <span className="ml-3 font-mono text-xs text-muted">~/jois/profile.json</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
          <span className="text-muted">{"{"}</span>
          {json.map(([k, v], i) => (
            <motion.div key={k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.25 }}>
              {"  "}
              <span className="text-accent-2">&quot;{k}&quot;</span>
              <span className="text-muted">: </span>
              <span className={k === "building" ? "text-accent" : "text-text"}>{v}</span>
              <span className="text-muted">{i < json.length - 1 ? "," : ""}</span>
            </motion.div>
          ))}
          <span className="text-muted">{"}"}</span>
          <span className="ml-1 animate-blink text-accent">▍</span>
        </pre>
      </motion.div>
    </section>
  );
}
