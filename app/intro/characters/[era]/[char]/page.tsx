import { notFound } from "next/navigation";
import { CHARACTERS } from "@/data/heroic-era";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SplitContentView from "@/components/SplitContentView";

export default async function CharacterDetailPage({ params }: { params: Promise<{ era: string; char: string }> }) {
  const { era, char } = await params;
  const eraData = CHARACTERS.find((e) => e.id === era);
  if (!eraData) notFound();
  const character = eraData.characters.find((c) => c.id === char);
  if (!character) notFound();
  return (
    <main className="relative min-h-screen pb-20 pt-20 md:pt-24 animate-fade-in">
      <BreadcrumbNav href={`/intro/characters/${era}`} label={`返回${eraData.title}·人物`} />
      {character.portrait && (
        <div className="mx-auto mb-8 mt-4 flex justify-center px-6 md:mb-12 md:mt-0">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-covenant-gold/20 shadow-2xl shadow-black/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={character.portrait}
              alt={character.name}
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-covenant-void/80 to-transparent" />
          </div>
        </div>
      )}
      <SplitContentView title={character.name} subtitle={character.subtitle} sections={character.sections} />
    </main>
  );
}
