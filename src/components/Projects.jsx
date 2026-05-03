import SectionHeading from "./SectionHeading";
import { portfolio } from "@/lib/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Two strong projects, packaged with clear storytelling."
        description="These cards are structured to help recruiters scan for relevance quickly."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {portfolio.featuredProjects.map((project) => (
          <article key={project.name} className={`glass relative overflow-hidden rounded-3xl p-6`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 hover:opacity-100`} />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Featured Project</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.name}</h3>
                  <p className="mt-1 text-sm text-cyan-200">{project.subtitle}</p>
                </div>
                <ArrowUpRight className="text-slate-400" />
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
