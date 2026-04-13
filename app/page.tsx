import { SearchBar } from "@/components";

const HomePage = () => {
  return (
    <main className="flex flex-col flex-1">
      <section className="flex flex-col flex-1 items-center justify-center gap-4 px-6 py-32">
        <p className="text-sm font-medium tracking-widest text-zinc-400 uppercase">
          worthto.watch
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Your friend who has seen it all
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Search any movie and get an honest AI verdict in seconds.
        </p>
        <div className="mt-4 w-full max-w-xl">
          <SearchBar />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
