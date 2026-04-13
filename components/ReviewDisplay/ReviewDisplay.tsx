const ReviewDisplay = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-6">
        <div className="h-52 w-36 shrink-0 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs">
          Poster
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Interstellar
          </h1>
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span>2014</span>
            <span>·</span>
            <span>★ 8.7</span>
          </div>
          <div className="flex gap-2">
            {["Sci-Fi", "Drama", "Adventure"].map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
          Verdict · Casual Friend
        </p>
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          Yeah, honestly one of the best sci-fi films in years. The visuals are
          stunning — IMAX was built for this — but what makes it stick is the
          emotional core. It gets heavy in the second half, so maybe don&apos;t
          watch it on a Tuesday when you&apos;re already tired. But yes, 100%
          worth watching.
        </p>
      </div>
    </div>
  );
};

export default ReviewDisplay;
