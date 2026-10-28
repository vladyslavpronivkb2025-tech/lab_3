function Education() {
  return (
    <section className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-emerald-950/30 p-6 shadow-lg">
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">04 // Education</p>
      <h2 className="mt-1 mb-4 text-xl font-bold text-white">Освіта</h2>
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-slate-400">Університет:</p>
          <p className="font-semibold text-white">НУ «Львівська політехніка»</p>
        </div>
        <div>
          <p className="text-slate-400">Спеціальність:</p>
          <p className="font-semibold text-white">Кібербезпека та захист інформації</p>
        </div>
        <div>
          <p className="text-slate-400">Група:</p>
          <p className="font-mono text-emerald-400">КБ-209</p>
        </div>
        <div>
          <p className="text-slate-400">Період навчання:</p>
          <p className="font-mono text-slate-300">2025 — теперішній час</p>
        </div>
      </div>
    </section>
  )
}

export default Education