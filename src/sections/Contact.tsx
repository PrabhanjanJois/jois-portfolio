"use client";
import { useState } from "react";
import { ArrowUp, Check, Copy, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { algotrade, profile } from "@/data/content";
import { Reveal } from "@/components/ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <section id="contact" className="container py-24 md:py-32">
        <Reveal className="relative overflow-hidden rounded-[28px] border border-border bg-surface/60 px-6 py-16 text-center md:px-16">
          <div aria-hidden className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{"// 06 — Contact"}</p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">
            Let&apos;s build <span className="text-gradient">something.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Open to full-stack and AI engineering roles — and always happy to talk about AlgoTrade collaborations.
          </p>

          <button
            id="contact-copy-email"
            onClick={copy}
            className="group mx-auto mt-10 flex items-center gap-3 rounded-2xl border border-accent/40 bg-bg px-6 py-4 font-mono text-base transition hover:shadow-[0_0_40px_-8px_#B6FF3B] md:text-lg"
          >
            {profile.email}
            {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} className="text-muted group-hover:text-accent" />}
          </button>
          <p className="mt-2 h-5 font-mono text-xs text-accent" aria-live="polite">{copied ? "Copied to clipboard!" : ""}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              { id: "contact-linkedin", href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
              { id: "contact-github", href: profile.github, icon: Github, label: "GitHub" },
              { id: "contact-phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone, label: profile.phone },
            ].map(({ id, href, icon: Icon, label }) => (
              <a key={id} id={id} href={href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm transition hover:border-accent/50 hover:text-accent">
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Jois Prabhanjan · Built with Next.js</p>
          <div className="flex items-center gap-6">
            <a href={algotrade.url} target="_blank" rel="noopener noreferrer" className="font-mono hover:text-accent">
              {algotrade.domain} ↗
            </a>
            <a href="#top" id="footer-top" aria-label="Back to top" className="rounded-lg border border-border p-2 hover:text-accent">
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
