export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-covenant-void">
      <div className="text-center space-y-6">
        <div className="mx-auto h-10 w-10 animate-pulse rounded-full border border-covenant-gold/15 bg-covenant-gold/5" />
        <div className="h-6 w-64 animate-pulse rounded bg-covenant-gold/10" />
        <div className="h-4 w-48 animate-pulse rounded bg-covenant-gold/5" />
      </div>
    </div>
  );
}
