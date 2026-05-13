import Link from "next/link";

export default function IntroPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 animate-fade-in">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(197,160,89,0.06)_0%,transparent_60%)]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/token-icon.webp" alt="圣约" className="h-20 w-20 md:h-24 md:w-24 drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]" />
        </div>
        <h1 className="font-heading text-3xl font-bold tracking-[0.2em] md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-b from-covenant-silver-light via-covenant-silver to-covenant-silver-dark bg-clip-text text-transparent">英雄时代</span>
        </h1>
        <p className="mt-4 font-heading text-sm font-medium tracking-[0.4em] text-covenant-gold/50 md:text-base">HEROIC ERA</p>
        <div className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-covenant-gold/20 to-transparent md:w-64" />
        <div className="mt-14 flex flex-col gap-6 md:flex-row md:gap-10">
          <EntryCard href="/intro/chronicles" title="编年史" subtitle="Chronicles" description="从创世纪元到第三纪元，探索诸神创世、人类崛起与文明的恢弘史诗" accentClass="border-covenant-gold/15 hover:border-covenant-gold/35" glowClass="from-covenant-gold/8 to-transparent" />
          <EntryCard href="/intro/characters" title="人物志" subtitle="Character Bios" description="铭记那些在历史长河中留下不朽印记的英雄与传奇人物" accentClass="border-covenant-silver/15 hover:border-covenant-silver/35" glowClass="from-covenant-ultramarine/10 to-transparent" />
        </div>
        <p className="mt-16 font-body text-xs tracking-[0.3em] text-covenant-silver/20">探索圣约世界的历史长河</p>
      </div>
    </main>
  );
}

function EntryCard({ href, title, subtitle, description, accentClass, glowClass }: {
  href: string; title: string; subtitle: string; description: string; accentClass: string; glowClass: string;
}) {
  return (
    <Link href={href} className="group block w-full md:w-72">
      <div className={`relative flex flex-col items-center rounded-2xl border bg-covenant-abyss/70 px-8 py-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${accentClass}`}>
        <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${glowClass}`} />
        <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-covenant-silver/10 bg-covenant-midnight/80 transition-all duration-500 group-hover:border-covenant-gold/30 group-hover:bg-covenant-gold/10">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-covenant-silver/50 transition-colors duration-500 group-hover:text-covenant-gold">
            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="relative z-10 font-heading text-2xl tracking-[0.15em] text-covenant-silver-light">{title}</h2>
        <p className="relative z-10 mt-2 font-heading text-xs tracking-[0.3em] text-covenant-gold/50">{subtitle}</p>
        <p className="relative z-10 mt-4 font-body text-sm leading-relaxed text-covenant-silver-dark/60 transition-colors duration-500 group-hover:text-covenant-silver-dark/80">{description}</p>
      </div>
    </Link>
  );
}
