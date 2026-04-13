import Link from "next/link";
import Image from "next/image";
import type { MovieCardProps } from "@/types";

const MovieCard = ({ tmdbId, title, year, posterUrl }: MovieCardProps) => {
  const content = (
    <div className="group flex flex-col gap-2">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        {posterUrl ? (
          <Image
            src={posterUrl}
            alt={title ?? "Movie poster"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-400 text-xs">
            No poster
          </div>
        )}
      </div>
      {title && (
        <div>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50 line-clamp-1">
            {title}
          </p>
          {year && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{year}</p>
          )}
        </div>
      )}
    </div>
  );

  if (tmdbId) {
    return <Link href={`/movie/${tmdbId}`}>{content}</Link>;
  }

  return content;
};

export default MovieCard;
