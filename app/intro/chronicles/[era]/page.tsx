import { notFound } from "next/navigation";
import { CHRONICLES } from "@/data/heroic-era";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SplitContentView from "@/components/SplitContentView";

export default async function ChronicleEraPage({ params }: { params: Promise<{ era: string }> }) {
  const { era } = await params;
  const data = CHRONICLES.find((e) => e.id === era);
  if (!data) notFound();
  return (
    <main className="relative min-h-screen pb-20 pt-20 md:pt-24 animate-fade-in">
      <BreadcrumbNav href="/intro/chronicles" label="返回编年史" />
      <SplitContentView title={data.title} sections={data.sections} />
    </main>
  );
}
