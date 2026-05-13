import Link from "next/link";
import { CHARACTERS } from "@/data/heroic-era";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export default function CharactersPage() {
  return (
    <main className="relative min-h-screen px-4 pb-20 pt-20 md:px-6 md:pt-24 animate-fade-in">
      <BreadcrumbNav href="/intro" label="返回英雄时代" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(138,140,208,0.04)_0%,transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-[0.2em] text-covenant-silver-light md:text-4xl">人物志</h1>
          <p className="mt-3 font-heading text-xs tracking-[0.3em] text-covenant-gold/50 md:text-sm">CHARACTER BIOS</p>
          <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-covenant-silver/10 to-transparent" />
        </div>
        <div className="flex flex-col gap-4">
          {CHARACTERS.map((era) => {
            const isEmpty = era.characters.length === 0;
            const card = (
              <div className={`rounded-xl border px-6 py-5 backdrop-blur-sm transition-all duration-500 ${
                isEmpty ? "cursor-default border-covenant-silver/5 bg-covenant-abyss/40 opacity-40" : "border-covenant-gold/10 bg-covenant-abyss/60 hover:border-covenant-gold/25 hover:bg-covenant-abyss/80 hover:-translate-y-0.5"
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-heading text-lg tracking-[0.15em] text-covenant-silver-light md:text-xl">{era.title}</h2>
                    <p className="mt-1 font-body text-sm tracking-[0.05em] text-covenant-silver-dark/50 md:text-base">{isEmpty ? "敬请期待" : `${era.characters.length} 位人物`}</p>
                  </div>
                  {!isEmpty && <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-covenant-gold/40 transition-transform duration-500 group-hover:translate-x-1"><path d="M7 4L13 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
              </div>
            );
            return isEmpty ? <div key={era.id}>{card}</div> : <Link key={era.id} href={`/intro/characters/${era.id}`} className="group block">{card}</Link>;
          })}
        </div>
      </div>
    </main>
  );
}
