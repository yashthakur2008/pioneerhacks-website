import { faqs, organizerGroups, partnerTiers, timeline, tracks } from '@/data/content';
import { DynamicSections } from '@/components/DynamicSections';

export default function Page() {
  return <main>
    <header className="sticky top-0 z-50 border-b border-red-900/10 bg-[#fffaf0]/88 backdrop-blur-xl">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4 py-3" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-3 font-black tracking-[-.04em]"><span className="grid size-10 place-items-center rounded-full bg-[#b5121b] text-[#ffc72c] ring-4 ring-[#ffc72c]/55">PH</span>PioneerHacks VI</a>
        <div className="hidden items-center gap-6 text-sm font-bold text-[#735f55] md:flex"><a href="#tracks">Tracks</a><a href="#schedule">Schedule</a><a href="#partners">Partners</a><a href="#team">Team</a><a href="#faq">FAQ</a></div>
        <a className="btn btn-primary" href="#signup">Sign up</a>
      </nav>
    </header>

    <section id="top" className="relative overflow-hidden bg-[linear-gradient(135deg,#fffaf0_0%,#ffffff_48%,#ffe9a3_100%)] py-20 md:py-28">
      <div className="absolute right-[-10vw] top-12 h-72 w-72 rounded-full bg-[#ffc72c]/45 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-[-8rem] h-96 w-96 rounded-full bg-[#b5121b]/12 blur-3xl" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <p className="kicker mb-5">Cupertino High School · CES × TinoVation · October</p>
          <h1 className="display text-[#241212]">PioneerHacks VI</h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-[#5f4c43]">A student-run hackathon with Cupertino red, gold, and Pioneer energy. Build a product, find a team, meet mentors, and demo something real.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a className="btn btn-primary" href="#signup">Join the interest list</a><a className="btn btn-secondary" href="#tracks">Explore tracks</a></div>
        </div>
        <div className="school-card p-5">
          <div className="rounded-[22px] bg-[#b5121b] p-6 text-white">
            <div className="mb-8 flex items-center justify-between"><span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-[.18em]">Dusty spirit</span><span className="text-[#ffc72c]">⚒</span></div>
            <div className="grid aspect-square place-items-center rounded-full border-[10px] border-[#ffc72c] bg-[#7f0c13] text-center shadow-2xl">
              <div><div className="text-8xl font-black tracking-[-.12em]">C</div><div className="mt-2 text-sm font-black uppercase tracking-[.26em] text-[#ffc72c]">Pioneers</div></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-4 text-center"><div><b>All HS</b><p className="text-xs text-[#735f55]">welcome</p></div><div><b>October</b><p className="text-xs text-[#735f55]">target</p></div><div><b>4 tracks</b><p className="text-xs text-[#735f55]">to build</p></div></div>
        </div>
      </div>
    </section>

    <DynamicSections tracks={tracks} partnerTiers={partnerTiers} />

    <section id="schedule" className="section-shell py-20">
      <p className="kicker mb-4">Event flow</p><h2 className="section-title max-w-3xl">A schedule that feels real, not placeholder.</h2>
      <div className="mt-10 grid gap-4">{timeline.map(([time,title,copy]) => <article key={time} className="school-card grid gap-4 p-5 md:grid-cols-[110px_1fr]"><b className="text-2xl text-[#b5121b]">{time}</b><div><h3 className="text-2xl font-black">{title}</h3><p className="mt-1 text-[#735f55]">{copy}</p></div></article>)}</div>
    </section>

    <section id="signup" className="bg-[#b5121b] py-20 text-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div><p className="kicker mb-4 text-[#ffc72c]">Signup</p><h2 className="section-title">Get PioneerHacks public-ready.</h2><p className="mt-5 text-lg leading-8 text-white/78">Use this interest CTA until the final form is ready. It gives students, parents, and sponsors a clear next step.</p></div>
        <form className="school-card grid gap-4 bg-white p-6 text-[#241212]" action="mailto:cesxtinovation@gmail.com" method="post" encType="text/plain"><label className="font-bold">Name<input className="mt-2 w-full rounded-xl border border-red-900/15 p-3" name="name" required /></label><label className="font-bold">Email<input className="mt-2 w-full rounded-xl border border-red-900/15 p-3" name="email" type="email" required /></label><label className="font-bold">School / club<input className="mt-2 w-full rounded-xl border border-red-900/15 p-3" name="school" /></label><button className="btn btn-primary" type="submit">Send interest</button></form>
      </div>
    </section>

    <section id="team" className="section-shell py-20">
      <p className="kicker mb-4">Organizers</p><h2 className="section-title max-w-3xl">Built by Cupertino clubs.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">{organizerGroups.map(group => <article className="school-card p-6" key={group.club}><span className="rounded-full bg-[#ffc72c] px-3 py-1 text-sm font-black text-[#241212]">{group.short}</span><h3 className="mt-5 text-3xl font-black">{group.club}</h3><ul className="mt-6 flex flex-wrap gap-2">{group.people.map(person => <li className="rounded-full border border-red-900/15 bg-white px-3 py-2 font-bold text-[#735f55]" key={person}>{person}</li>)}</ul></article>)}</div>
    </section>

    <section id="faq" className="section-shell py-20">
      <p className="kicker mb-4">FAQ</p><h2 className="section-title max-w-3xl">Clear answers, no fluff.</h2>
      <div className="mt-10 grid gap-3">{faqs.map(([q,a]) => <details className="school-card p-5" key={q}><summary className="cursor-pointer text-xl font-black">{q}</summary><p className="mt-3 leading-7 text-[#735f55]">{a}</p></details>)}</div>
    </section>

    <footer className="border-t border-red-900/10 bg-white py-10"><div className="section-shell flex flex-col justify-between gap-3 md:flex-row"><p className="font-bold">© 2026 PioneerHacks VI</p><p className="text-[#735f55]">Cupertino red · Pioneer gold · built by CES × TinoVation</p></div></footer>
  </main>;
}
