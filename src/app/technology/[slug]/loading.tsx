export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-phi-sm py-phi-xl sm:px-phi-md md:px-phi-lg">
      {/* ヘッダースケルトン */}
      <div className="flex items-start gap-phi-sm sm:gap-phi-md">
        <div className="h-phi-xl w-phi-xl animate-pulse rounded-lg bg-muted sm:h-phi-2xl sm:w-phi-2xl sm:rounded-xl" />
        <div className="flex-1 space-y-phi-2xs">
          <div className="h-phi-lg w-phi-3xl animate-pulse rounded-md bg-muted" />
          <div className="h-phi-md w-full max-w-phi-4xl animate-pulse rounded-md bg-muted" />
          <div className="h-phi-md w-phi-3xl animate-pulse rounded-md bg-muted" />
        </div>
      </div>

      {/* タブスケルトン */}
      <div className="mt-phi-xl">
        <div className="grid grid-cols-3 gap-phi-2xs">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-phi-xl animate-pulse rounded-md bg-muted"
            />
          ))}
        </div>
        <div className="mt-phi-lg space-y-phi-sm">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-phi-3xl animate-pulse rounded-lg bg-muted"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
