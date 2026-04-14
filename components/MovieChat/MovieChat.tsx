"use client";

import { twMerge } from "tailwind-merge";
import { DUMMY_MESSAGES } from "./messages";

const MovieChat = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
        Ask a follow-up
      </h2>

      <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
        {DUMMY_MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={twMerge("flex", msg.role === "user" ? "justify-end" : "justify-start")}
          >
            <p
              className={twMerge(
                "max-w-xs rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                msg.role === "user"
                  ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                  : "bg-white text-zinc-700 shadow-sm dark:bg-zinc-800 dark:text-zinc-300"
              )}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs text-zinc-400 px-1">
        <span>Free — 2 of 3 questions used</span>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type your question..."
          className="flex-1 rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-500"
        />
        <button
          type="button"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MovieChat;
