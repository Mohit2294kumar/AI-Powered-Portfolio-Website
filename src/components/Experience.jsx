import SectionHeading from "./SectionHeading";
import { portfolio } from "@/lib/portfolioData";

export default function Experience() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Training and internships that back the technical story."
        description="A clean timeline helps convert your resume into a site that reads well in one pass."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-white">Experience</h3>
          <div className="mt-5 space-y-4">
            {portfolio.experience.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.period}</p>
                <p className="mt-2 text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-white">Education</h3>
          <div className="mt-5 space-y-4">
            {portfolio.education.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.period}</p>
                <p className="mt-2 text-base font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-300">{item.school}</p>
                <p className="mt-1 text-sm text-cyan-200">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
