'use client';
import { useEffect } from 'react';

export function IntroReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { root.style.setProperty('--intro-progress', '1'); return; }
    const update = () => root.style.setProperty('--intro-progress', Math.min(window.scrollY / (window.innerHeight * 0.9), 1).toFixed(4));
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <div className="pointer-events-none fixed inset-0 z-[70] grid place-items-center overflow-hidden bg-black [opacity:calc(1-min(max((var(--intro-progress)-.72)*4,0),1))] motion-reduce:hidden" aria-hidden="true">
    <div className="absolute left-0 top-1/2 h-[3px] w-[calc(50vw*var(--intro-progress))] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#7668ff] to-[#c91f2e] shadow-[0_0_34px_rgba(118,104,255,.45)]" />
    <div className="absolute right-0 top-1/2 h-[3px] w-[calc(50vw*var(--intro-progress))] -translate-y-1/2 bg-gradient-to-l from-transparent via-[#45a7ff] to-[#c91f2e] shadow-[0_0_34px_rgba(69,167,255,.38)]" />
    <div className="grid aspect-square w-[calc(170px+var(--intro-progress)*54vw)] place-items-center rounded-full border border-[#c91f2e] bg-[radial-gradient(circle,rgba(118,104,255,.10),transparent_58%)] shadow-[0_0_90px_rgba(201,31,46,.24)]">
      <div className="grid size-36 place-items-center rounded-full border border-[#f4b62a]/80 bg-[#09030a] text-center">
        <strong className="text-5xl font-black tracking-[-.08em]">PH</strong>
        <span className="mono text-[10px] uppercase tracking-[.28em] text-[#f4b62a]">Pioneers</span>
      </div>
    </div>
    <p className="mono absolute bottom-12 text-xs uppercase tracking-[.32em] text-white/45">Scroll to open PioneerHacks VI</p>
  </div>;
}
