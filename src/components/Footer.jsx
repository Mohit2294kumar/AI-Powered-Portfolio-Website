export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-400 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Mohit Kumar. Built for impact.</p>
        <p>Deployed-ready portfolio with AI assistant and motion UI.</p>
      </div>
    </footer>
  );
}
