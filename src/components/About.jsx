import { portfolio } from "@/lib/portfolioData";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="A modern portfolio that actually feels alive."
        description={portfolio.summary}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass rounded-3xl p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold text-white">What this site is built to do</h3>
          <p className="mt-4 leading-7 text-slate-300">
            It combines a professional personal brand page with motion design, lazy-loaded visual sections, a contextual AI assistant, and a backend contact pipeline. The code is structured to deploy cleanly on Vercel without fragile server assumptions.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Primary goal</p>
              <p className="mt-2 font-semibold text-white">Showcase your profile and projects with impact</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Deployment</p>
              <p className="mt-2 font-semibold text-white">Vercel-ready, MongoDB-backed</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-white">Tech principles</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            <li>• Component-first architecture</li>
            <li>• Serverless API routes</li>
            <li>• Defensive fallbacks for no-key deploys</li>
            <li>• Responsive and accessible layout</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
