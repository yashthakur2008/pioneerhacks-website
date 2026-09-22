'use client';
import { useMemo, useState } from 'react';

type Track = { id: string; name: string; description: string; prompt: string };
type Tier = { name: string; value: string; perks: string[] };

export function DynamicSections({ tracks, partnerTiers }: { tracks: Track[]; partnerTiers: Tier[] }) {
  const [track, setTrack] = useState(tracks[0]);
  const [tier, setTier] = useState(partnerTiers[0]);
  const daysLeft = useMemo(() => {
    const target = new Date('2026-10-18T09:00:00');
    const diff = target.getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / 86400000));
  }, []);
  return <>
    <section id="tracks" className="section-shell py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="kicker mb-4">Dynamic track picker</p><h2 className="section-title max-w-3xl">Choose what kind of builder you are.</h2></div><div className="school-card px-5 py-4 text-center"><b className="text-4xl text-[#b5121b]">{daysLeft}</b><p className="text-sm font-bold text-[#735f55]">days to target date</p></div></div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[.42fr_1fr]">
        <div className="grid gap-3" role="tablist" aria-label="Hackathon tracks">{tracks.map(t => <button key={t.id} role="tab" aria-selected={track.id === t.id} onClick={() => setTrack(t)} className={`rounded-2xl border p-4 text-left font-black transition ${track.id === t.id ? 'border-[#b5121b] bg-[#b5121b] text-white shadow-xl' : 'border-red-900/10 bg-white text-[#735f55] hover:border-[#b5121b]'}`}>{t.name}</button>)}</div>
        <article className="school-card overflow-hidden"><div className="h-3 bg-[linear-gradient(90deg,#b5121b,#ffc72c,#b5121b)]" /><div className="p-8"><p className="kicker mb-4">Selected track</p><h3 className="text-5xl font-black tracking-[-.06em] text-[#241212]">{track.name}</h3><p className="mt-5 text-xl leading-8 text-[#735f55]">{track.description}</p><div className="mt-8 rounded-2xl bg-[#fff3c4] p-5"><b>Starter prompt</b><p className="mt-2 text-[#5f4c43]">{track.prompt}</p></div></div></article>
      </div>
    </section>

    <section id="partners" className="bg-white py-20">
      <div className="section-shell"><p className="kicker mb-4">Partner slots</p><h2 className="section-title max-w-3xl">Sponsor a real Cupertino student event.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[.45fr_1fr]"><div className="grid gap-3">{partnerTiers.map(t => <button key={t.name} onClick={() => setTier(t)} className={`rounded-2xl border p-4 text-left font-black ${tier.name === t.name ? 'border-[#ffc72c] bg-[#ffc72c]' : 'border-red-900/10 bg-[#fffaf0]'}`}>{t.name}<span className="block text-sm font-bold text-[#735f55]">{t.value}</span></button>)}</div><article className="school-card p-8"><p className="kicker mb-4">Active package</p><h3 className="text-4xl font-black">{tier.name}</h3><p className="mt-2 text-xl text-[#b5121b]">{tier.value}</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{tier.perks.map(perk => <li className="rounded-xl bg-[#fffaf0] p-4 font-bold" key={perk}>✓ {perk}</li>)}</ul></article></div>
      </div>
    </section>
  </>;
}
