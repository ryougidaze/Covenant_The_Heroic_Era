import Link from "next/link";
import { notFound } from "next/navigation";
import { CHARACTERS } from "@/data/heroic-era";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export default async function CharacterListPage({ params }: { params: Promise<{ era: string }> }) {
  const { era } = await params;
  const eraData = CHARACTERS.find((e) => e.id === era);
  if (!eraData || eraData.characters.length === 0) notFound();
  return (
    <main className="relative min-h-screen px-4 pb-20 pt-20 md:px-6 md:pt-24 animate-fade-in">
      <BreadcrumbNav href="/intro/characters" label="返回人物志" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-[0.2em] text-covenant-silver-light md:text-4xl">{eraData.title} · 人物</h1>
          <p className="mt-3 font-heading text-xs tracking-[0.3em] text-covenant-gold/50 md:text-sm">CHARACTERS</p>
          <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-covenant-silver/10 to-transparent" />
        </div>
        <div className="flex flex-col gap-4">
          {eraData.characters.map((char) => (
            <Link key={char.id} href={`/intro/characters/${era}/${char.id}`} className="group block">
              <div className="rounded-xl border border-covenant-silver/10 bg-covenant-abyss/60 px-6 py-6 backdrop-blur-sm transition-all duration-500 hover:border-covenant-gold/25 hover:bg-covenant-abyss/80 hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-heading text-xl tracking-[0.12em] text-covenant-silver-light md:text-2xl">{char.name}</h2>
                    {char.subtitle && <p className="mt-3 block font-body text-sm tracking-wider text-covenant-gold/60">{char.subtitle}</p>}
                    <p className="mt-3 font-body text-sm text-covenant-silver-dark/40">{char.sections.length} 个章节</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-covenant-gold/40 transition-transform duration-500 group-hover:translate-x-1"><path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
