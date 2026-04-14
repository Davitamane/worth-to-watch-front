"use client";
import { CheckIcon } from "@/icons";
import type { CheckboxProps } from "./Checkbox.types";
import { useFormContext } from "react-hook-form";

const Checkbox = ({ name, label, id }: CheckboxProps) => {
  const inputId = id ?? name;
  const { register } = useFormContext();

  return (
    <label
      htmlFor={inputId}
      className="flex items-center gap-2 cursor-pointer select-none group"
    >
      <span className="relative flex h-4 w-4 shrink-0">
        <input
          {...register(name)}
          id={inputId}
          type="checkbox"
          className="peer sr-only"
        />
        <span className="flex h-4 w-4 items-center justify-center rounded border border-zinc-300 bg-white text-transparent transition-colors peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white dark:border-zinc-600 dark:bg-zinc-800 peer-checked:dark:border-zinc-50 peer-checked:dark:bg-zinc-50 peer-checked:dark:text-zinc-900 peer-focus-visible:ring-2 peer-focus-visible:ring-zinc-400 peer-focus-visible:ring-offset-1">
          <CheckIcon width={10} height={10} strokeWidth={3} />
        </span>
      </span>
      <span className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
