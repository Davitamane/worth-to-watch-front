import { MovieChat, ReviewDisplay } from "@/components";

const MoviePage = () => {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <ReviewDisplay />
      <div className="mt-12">
        <MovieChat />
      </div>
    </main>
  );
};

export default MoviePage;
