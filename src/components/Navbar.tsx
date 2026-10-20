"use client";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { nav, profile } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" id="nav-logo" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#B6FF3B]" />
          jois<span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                id={`nav-${n.id}`}
                href={`#${n.id}`}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active === n.id ? "text-accent" : "text-muted hover:text-text"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            id="nav-resume"
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-lg border border-accent/40 px-3.5 py-2 text-sm text-accent transition hover:bg-accent hover:text-bg sm:inline-flex"
          >
            Resume <Download size={14} />
          </a>
          <button
            id="nav-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-text md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-bg/95 backdrop-blur-xl md:hidden">
          <ul className="container flex flex-col gap-2 pt-8">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-2xl"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} download className="mt-6 inline-flex items-center gap-2 text-accent">
                Download Resume <Download size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
