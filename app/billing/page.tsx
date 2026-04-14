import { BackButton, PlanBadge } from "@/components";

const BillingPage = () => {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12">
      <BackButton href="/" />

      <div className="mt-6">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Billing
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Manage your plan and subscription.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="text-zinc-700 dark:text-zinc-300">Current plan:</span>
        <PlanBadge plan="free" />
      </div>
    </main>
  );
};

export default BillingPage;
