import { navLinks } from '@/data/content';

export function Nav() {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#03040a]/55 backdrop-blur-xl">
    <nav className="section-shell flex min-h-16 items-center justify-between gap-4 py-3" aria-label="Primary navigation">
      <a href="#top" className="flex items-center gap-3 font-semibold tracking-[-0.03em]" aria-label="PioneerHacks home">
        <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-black text-[#f4b62a]">PH</span>
        <span>PioneerHacks</span>
      </a>
      <div className="hidden items-center gap-6 text-sm text-[#9aa3b8] md:flex">
        {navLinks.map((link) => <a key={link.href} className="hover:text-white" href={link.href}>{link.label}</a>)}
      </div>
      <div className="flex items-center gap-2">
        <a className="btn btn-secondary hidden sm:inline-flex" href="#partners">Partner</a>
        <a className="btn btn-primary" href="#signup">Sign up</a>
      </div>
    </nav>
  </header>;
}
