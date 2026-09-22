'use client';
import { useEffect, useRef } from 'react';

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = 0, height = 0, raf = 0, active = true;
    const chars = 'PIONEERHACKS101<>/{}[]';
    const particles = Array.from({ length: 90 }, (_, i) => ({ x: Math.random(), y: Math.random(), v: .15 + Math.random() * .35, c: chars[i % chars.length] }));
    const resize = () => { width = canvas.width = canvas.offsetWidth * devicePixelRatio; height = canvas.height = canvas.offsetHeight * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio); };
    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(255,255,255,.045)'; ctx.font = '12px monospace';
      particles.forEach((p) => { p.x += active && !reduced ? p.v / 900 : 0; if (p.x > 1.05) p.x = -.05; ctx.fillText(p.c, p.x * w, p.y * h); });
      ctx.strokeStyle = 'rgba(118,104,255,.18)'; ctx.lineWidth = 1;
      for (let i = 0; i < particles.length - 1; i += 3) { ctx.beginPath(); ctx.moveTo(particles[i].x * w, particles[i].y * h); ctx.lineTo(particles[i + 1].x * w, particles[i + 1].y * h); ctx.stroke(); }
      raf = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; }, { threshold: .1 });
    observer.observe(canvas); resize(); draw(); window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-80" aria-hidden="true" />;
}
