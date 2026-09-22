import { metrics } from '@/data/content';
import { HeroCanvas } from './HeroCanvas';
import { MagneticButton } from './MagneticButton';

export function Hero() {
  return <section id="top" className="atmosphere relative min-h-screen overflow-hidden pt-28">
    <HeroCanvas />
    <div className="section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_.92fr]">
      <div>
        <p className="mono mb-5 text-xs uppercase tracking-[.28em] text-[#9aa3b8]">Mid-October · Open to all high schoolers</p>
        <h1 className="editorial-title max-w-5xl font-black">Build something real before Monday.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b8bfd1]">PioneerHacks VI is a Cupertino-led hackathon for students who want to turn a rough idea into a working demo, a pitch, and a team worth continuing with.</p>
        <div className="mt-9 flex flex-wrap gap-3"><MagneticButton href="#signup" primary>Join the interest list</MagneticButton><MagneticButton href="#how">See the flow</MagneticButton></div>
      </div>
      <div className="card p-5">
        <div className="grid aspect-square place-items-center rounded-2xl border border-white/10 bg-black/30">
          <div className="text-center"><div className="mx-auto mb-5 grid size-32 place-items-center rounded-full border border-[#f4b62a]/70 text-4xl font-black">PH</div><p className="mono text-xs uppercase tracking-[.24em] text-[#f4b62a]">Original Pioneer mark placeholder</p></div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">{metrics.map(([a,b]) => <div key={a} className="rounded-xl border border-white/10 p-4"><strong>{a}</strong><p className="mono mt-1 text-[11px] uppercase tracking-[.18em] text-[#9aa3b8]">{b}</p></div>)}</div>
      </div>
    </div>
  </section>;
}
