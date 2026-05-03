export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
