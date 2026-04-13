"use client";

import { TONES } from "./tones";

const TonePicker = () => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {TONES.map((tone) => (
        <button
          key={tone.value}
          type="button"
          disabled={tone.proOnly}
          className="flex flex-col gap-1 rounded-2xl border border-zinc-200 p-5 text-left transition-colors hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {tone.label}
            </span>
            {tone.proOnly && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                Pro
              </span>
            )}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {tone.description}
          </p>
        </button>
      ))}
    </div>
  );
};

export default TonePicker;
