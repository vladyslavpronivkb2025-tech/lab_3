function Header() {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl md:p-12">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_300px]">
        <div>
          <span className="mb-3 inline-block rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Група КБ-209
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Владислав <span className="text-emerald-400">Пронів</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Студент кафедри захисту інформації НУ «Львівська політехніка» / Початківець Web-розробник
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/vladyslavpronivkb2025-tech"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-emerald-400 active:scale-95"
            >
              GitHub Профіль ↗
            </a>
          </div>
        </div>

        {/* Декоративний термінал */}
        <div className="hidden rounded-xl border border-slate-700/80 bg-slate-950/90 p-4 font-mono text-xs text-slate-300 shadow-inner md:block">
          <div className="mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
            <span className="h-3 w-3 rounded-full bg-rose-500"></span>
            <span className="h-3 w-3 rounded-full bg-amber-500"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
            <span className="ml-2 text-slate-500">bash — 80x24</span>
          </div>
          <p className="text-emerald-400">$ whoami</p>
          <p className="mb-2 text-slate-400">vladyslav_proniv_kb209</p>
          <p className="text-emerald-400">$ cat stack.txt</p>
          <p className="text-cyan-300">- Linux Mint &amp; Bash</p>
          <p className="text-cyan-300">- Cisco Packet Tracer</p>
          <p className="text-cyan-300">- Python, React, Tailwind</p>
        </div>
      </div>
    </header>
  )
}

export default Header