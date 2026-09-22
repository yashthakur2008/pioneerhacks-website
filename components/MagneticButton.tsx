'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

export function MagneticButton({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  return <motion.a href={href} style={{ x, y }} onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * .16); y.set((e.clientY - r.top - r.height / 2) * .16); }} onMouseLeave={() => { x.set(0); y.set(0); }} className={`btn ${primary ? 'btn-primary' : 'btn-secondary'}`}>{children}</motion.a>;
}
