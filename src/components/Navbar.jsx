'use client';

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-[0.3em] text-white">
          MOHIT
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-3">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
