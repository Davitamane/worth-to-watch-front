import type { InputProps } from "./Input.types";

const Input = ({ label, id, ...props }: InputProps) => (
  <div className="space-y-1.5">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
    >
      {label}
    </label>
    <input
      id={id}
      className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-700 transition-colors"
      {...props}
    />
  </div>
);

export default Input;
