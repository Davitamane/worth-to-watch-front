"use client";
import { useRouter } from "next/navigation";

const RegisterModal = () => {
  const router = useRouter();

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Create account
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Start watching smarter.
      </p>

      <div className="mt-6 text-sm text-zinc-400">[Register form coming soon]</div>

      <div className="mt-8 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
