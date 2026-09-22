import { setupSteps } from '@/data/content';

export function TerminalDemo() {
  return <section id="setup" className="section-shell py-28">
    <div className="mb-10 max-w-3xl"><p className="mono mb-4 text-xs uppercase tracking-[.28em] text-[#45a7ff]">Three-step setup</p><h2 className="section-title font-black">No mystery. Just a clean path to ship.</h2></div>
    <div className="card overflow-hidden bg-[#05060c]">
      <div className="flex gap-2 border-b border-white/10 px-5 py-4"><span className="size-3 rounded-full bg-[#ff5f57]"/><span className="size-3 rounded-full bg-[#ffbd2e]"/><span className="size-3 rounded-full bg-[#28c840]"/></div>
      <div className="grid gap-0 md:grid-cols-3">
        {setupSteps.map((s) => <div key={s.step} className="border-white/10 p-6 md:border-r last:border-r-0">
          <p className="mono text-xs text-[#9aa3b8]">{s.step}</p><h3 className="mt-2 text-xl font-bold">{s.title}</h3>
          <pre className="mt-6 overflow-x-auto rounded-xl bg-black/60 p-4 text-sm text-[#d8def4]"><code>$ {s.command}\n{s.output}</code></pre>
        </div>)}
      </div>
    </div>
  </section>;
}
