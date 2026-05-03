'use client';

import { useEffect, useMemo, useState } from "react";
import { ArrowDownRight, BrainCircuit, Code2, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/lib/portfolioData";
import { motion } from "framer-motion";

const phrases = [
  "MERN Stack Developer",
  "Real-time app builder",
  "UI-first engineer",
  "AI-assisted portfolio creator"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentPhrase = useMemo(() => phrases[phraseIndex % phrases.length], [phraseIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentPhrase.slice(0, charIndex + 1));
        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setDeleting(true), 900);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setText(currentPhrase.slice(0, Math.max(0, charIndex - 1)));
        if (charIndex === 0) {
          setDeleting(false);
          setPhraseIndex((p) => p + 1);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? 35 : 55);

    return () => clearTimeout(timer);
  }, [charIndex, currentPhrase, deleting]);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 section-grid opacity-40" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl animate-pulseSlow" />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200"
          >
            <BrainCircuit size={14} />
            AI-assisted portfolio, optimized for Vercel
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl"
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">{portfolio.name}</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl"
          >
            <span className="text-slate-400">I build</span> <span className="text-cyan-300">{text}</span>
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-cyan-300 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            {portfolio.tagline} Focused on responsive UI, real-time systems, API integration, and deployment-ready architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View projects <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Hire / Contact <Mail size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300"
          >
            <a href="mailto:K2004mohit@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              <Mail size={14} /> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              <Github size={14} /> GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:bg-white/5">
              <Linkedin size={14} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="glass neon-border relative overflow-hidden rounded-[2rem] p-6">
            <div className="absolute inset-0 shine animate-shimmer opacity-40" />
            <div className="relative space-y-5">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">Current focus</p>
                  <Code2 size={18} className="text-cyan-300" />
                </div>
                <p className="mt-3 text-2xl font-bold text-white">Portfolio + AI Assistant</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  A smooth, interactive personal site with backend APIs and future-ready deployment.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {portfolio.stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-extrabold text-white">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>• Typewriter hero and scroll animations</li>
                  <li>• AI assistant with OpenAI fallback</li>
                  <li>• MongoDB contact form backend</li>
                  <li>• Vercel-first deployment structure</li>
                </ul>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100 animate-float">
                <span>Real-time-ready UI</span>
                <span className="font-semibold">Live</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
