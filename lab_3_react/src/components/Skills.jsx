function Skills() {
  const skills = [
    "HTML / базовий веб",
    "Tailwind CSS",
    "React",
    "Python",
    "Cisco Packet Tracer",
    "Linux Mint / Bash",
    "MySQL",
    "Git / GitHub"
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
      <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">03 // Tech Stack</p>
      <h2 className="mt-1 mb-4 text-xl font-bold text-white">Навички</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-slate-700 bg-slate-800/90 px-3 py-1.5 font-mono text-xs font-medium text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills