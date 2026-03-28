export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-phi-md py-phi-2xl md:px-phi-lg">
      {/* ヘッダースケルトン */}
      <div className="flex items-start gap-phi-md">
        <div className="h-14 w-14 animate-pulse rounded-xl bg-muted md:h-16 md:w-16" />
        <div className="flex-1 space-y-phi-2xs">
          <div className="h-8 w-32 animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-full max-w-md animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-48 animate-pulse rounded-md bg-muted" />
        </div>
      </div>

      {/* タブスケルトン */}
      <div className="mt-phi-xl">
        <div className="grid grid-cols-3 gap-phi-2xs">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-11 animate-pulse rounded-md bg-muted"
            />
          ))}
        </div>
        <div className="mt-phi-lg space-y-phi-sm">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-lg bg-muted"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
