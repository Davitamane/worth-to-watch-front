import { MovieCard } from "@/components/MovieCard";
import { DUMMY_HISTORY } from "./data";

const HistoryPage = () => {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Your History
      </h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        Movies you&apos;ve looked up.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {DUMMY_HISTORY.map((movie) => (
          <MovieCard key={movie.tmdbId} {...movie} />
        ))}
      </div>
    </main>
  );
};

export default HistoryPage;
