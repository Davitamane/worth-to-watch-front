import type { PlanBadgeProps } from "@/types";

const PlanBadge = ({ plan }: PlanBadgeProps) => {
  if (plan === "pro") {
    return (
      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
        Pro
      </span>
    );
  }

  return (
    <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
      Free
    </span>
  );
};

export default PlanBadge;
