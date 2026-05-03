export default function ScrollMarquee() {
  const items = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "Tailwind CSS",
    "JWT",
    "REST APIs",
    "MongoDB Atlas",
    "Framer Motion"
  ];

  return (
    <div className="overflow-hidden border-y border-white/5 bg-white/[0.02] py-4">
      <div className="flex w-[200%] animate-marquee gap-6 whitespace-nowrap px-4 text-sm font-medium text-slate-300">
        {[...items, ...items].map((item, idx) => (
          <span key={`${item}-${idx}`} className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
