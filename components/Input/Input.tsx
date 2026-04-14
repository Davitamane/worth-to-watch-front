import { twMerge } from "tailwind-merge";
import type { InputProps } from "./Input.types";

const Input = ({ label, id, error, ...props }: InputProps) => (
  <div className="space-y-1.5">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
    >
      {label}
    </label>
    <input
      id={id}
      aria-invalid={!!error}
      className={twMerge(
        "w-full rounded-lg border bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-colors dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-500",
        error
          ? "border-red-400 focus:border-red-400 focus:ring-red-200 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-900"
          : "border-zinc-200 focus:border-zinc-400 focus:ring-zinc-200 dark:border-zinc-700 dark:focus:border-zinc-500 dark:focus:ring-zinc-700"
      )}
      {...props}
    />
    {error && (
      <p className="text-xs text-red-500 dark:text-red-400">{error}</p>
    )}
  </div>
);

export default Input;
