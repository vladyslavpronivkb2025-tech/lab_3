function Experience() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 shadow-lg">
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">02 // Experience</p>
      <h2 className="mt-1 mb-6 text-2xl font-bold text-white">Досвід та інтереси</h2>
      <ul className="space-y-4 border-l-2 border-slate-800 pl-5 text-sm leading-6 text-slate-300">
        <li className="relative">
          <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-slate-950"></span>
          <strong className="text-base text-cyan-400">Навчальні проєкти:</strong> Створення програм та скриптів обробки даних (Python), вивчення баз даних (MySQL).
        </li>
        <li className="relative">
          <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-slate-950"></span>
          <strong className="text-base text-cyan-400">Мережеві технології:</strong> Побудова та конфігурація комп'ютерних мереж у середовищі Cisco Packet Tracer.
        </li>
      </ul>
    </section>
  )
}

export default Experience