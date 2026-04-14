import { BackButton } from "@/components";

const LoginPage = () => {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12">
      <BackButton href="/" />

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sign in
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Welcome back.
          </p>
          <div className="mt-6 text-sm text-zinc-400">[Login form coming soon]</div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
