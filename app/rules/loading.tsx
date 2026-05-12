export default function Loading() {
  return (
    <div className="flex h-screen flex-col bg-covenant-void">
      {/* Nav placeholder */}
      <div className="h-16 border-b border-covenant-silver/5 bg-covenant-abyss/60" />

      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {/* Header skeleton */}
        <div className="mb-4 h-10 w-10 animate-pulse rounded-full border border-covenant-gold/15 bg-covenant-gold/5" />
        <div className="mb-2 h-8 w-56 animate-pulse rounded bg-covenant-gold/10" />
        <div className="mb-10 h-4 w-40 animate-pulse rounded bg-covenant-gold/5" />

        {/* Tab bar skeleton */}
        <div className="mb-12 flex gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-9 w-24 animate-pulse rounded-full border border-covenant-silver/5 bg-covenant-abyss/60"
            />
          ))}
        </div>

        {/* Content skeleton */}
        <div className="w-full max-w-3xl space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-24 animate-pulse rounded-xl border border-covenant-silver/5 bg-covenant-abyss/60"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
