'use client';
import { useState } from 'react';
import { faq } from '@/data/content';
export function FAQ() { const [open, setOpen] = useState(0); return <section id="faq" className="section-shell py-24"><p className="mono mb-4 text-xs uppercase tracking-[.28em] text-[#7668ff]">FAQ</p><h2 className="section-title mb-10 font-black">Questions answered before launch.</h2><div className="grid gap-3">{faq.map(([q,a], i) => <div className="card" key={q}><button className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-bold" aria-expanded={open===i} onClick={() => setOpen(open===i ? -1 : i)}><span>{q}</span><span aria-hidden>{open===i?'−':'+'}</span></button>{open===i && <p className="px-5 pb-5 leading-7 text-[#9aa3b8]">{a}</p>}</div>)}</div></section>; }
