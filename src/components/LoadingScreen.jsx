'use client';

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(id);
          setTimeout(() => onDone?.(), 350);
          return 100;
        }
        return prev + 4;
      });
    }, 22);

    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
      <div className="glass neon-border w-[min(92vw,420px)] rounded-3xl p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15">
          <Sparkles className="h-8 w-8 text-blue-300" />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-white">Loading Portfolio</h1>
        <p className="mt-2 text-sm text-slate-300">Preparing animations and AI assistant…</p>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-slate-400">{progress}%</p>
      </div>
    </div>
  );
}
