import SectionHeading from "./SectionHeading";
import { portfolio } from "@/lib/portfolioData";

const groups = [
  ["Frontend", portfolio.skills.frontend],
  ["Backend", portfolio.skills.backend],
  ["Database", portfolio.skills.database],
  ["Tools", portfolio.skills.tools],
  ["Other", portfolio.skills.others]
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Stack coverage that matches the portfolio narrative."
        description="The assistant and site content are aligned to your actual resume so the portfolio feels consistent and believable."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {groups.map(([label, items]) => (
          <div key={label} className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-white">{label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
