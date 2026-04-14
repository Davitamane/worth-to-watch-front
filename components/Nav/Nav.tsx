import Link from "next/link";
import { PlanBadge } from "@/components";

const Nav = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          worthto.watch
        </Link>
        <div className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
          <Link
            href="/history"
            className="hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            History
          </Link>
          <Link
            href="/settings"
            className="hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            Settings
          </Link>
          <Link
            href="/billing"
            className="hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            <PlanBadge plan="free" />
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
