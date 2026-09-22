'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { howLayers } from '@/data/content';

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks() {
  const scope = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || window.innerWidth < 900 || !scope.current) return;
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>('.work-layer');
      gsap.set(layers.slice(1), { yPercent: 70, opacity: .15 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: scope.current, start: 'top top', end: '+=2400', scrub: .8, pin: true } });
      layers.forEach((layer, i) => {
        if (i === 0) return;
        tl.to(layer, { yPercent: 0, opacity: 1, duration: 1 }, i - .2).to(layers[i - 1], { opacity: .18, scale: .96, duration: 1 }, i - .2);
      });
    }, scope);
    return () => ctx.revert();
  }, []);
  return <section id="how" ref={scope} className="relative overflow-hidden bg-[#050711] py-24 lg:min-h-screen">
    <div className="section-shell">
      <p className="mono mb-4 text-xs uppercase tracking-[.28em] text-[#7668ff]">How it works</p>
      <h2 className="section-title mb-12 max-w-4xl font-black">Four layers from idea to demo.</h2>
      <div className="relative grid gap-5 lg:h-[460px]">
        {howLayers.map((layer) => <article key={layer.label} className="work-layer card lg:absolute lg:inset-x-0 lg:top-0 grid gap-8 p-6 md:grid-cols-[.35fr_1fr] md:p-10">
          <p className="mono text-xs uppercase tracking-[.24em] text-[#9aa3b8]">{layer.label}</p>
          <div><h3 className="text-3xl font-black tracking-[-.04em] md:text-6xl">{layer.title}</h3><p className="mt-5 max-w-2xl text-lg leading-8 text-[#b8bfd1]">{layer.copy}</p></div>
        </article>)}
      </div>
    </div>
  </section>;
}
