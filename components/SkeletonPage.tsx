export default function SkeletonPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-covenant-void">
      {/* Cross-scar ornament placeholder */}
      <div className="mb-8 h-14 w-14 animate-pulse rounded-full border border-covenant-gold/10 bg-covenant-gold/5" />

      {/* Title skeleton */}
      <div className="mb-4 h-10 w-72 animate-pulse rounded bg-covenant-gold/10" />

      {/* Subtitle skeleton */}
      <div className="mb-8 h-5 w-48 animate-pulse rounded bg-covenant-gold/5" />

      {/* Divider skeleton */}
      <div className="mb-12 h-px w-64 animate-pulse bg-gradient-to-r from-transparent via-covenant-gold/15 to-transparent" />

      {/* Entry cards skeleton */}
      <div className="flex gap-6">
        <div className="h-48 w-64 animate-pulse rounded-2xl border border-covenant-silver/5 bg-covenant-abyss/70" />
        <div className="h-48 w-64 animate-pulse rounded-2xl border border-covenant-gold/10 bg-covenant-abyss/70" />
      </div>

      {/* Footer skeleton */}
      <div className="mt-14 h-4 w-48 animate-pulse rounded bg-covenant-gold/5" />
    </div>
  );
}
