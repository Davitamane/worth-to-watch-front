import { TonePicker } from "@/components";

const SettingsPage = () => {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Settings
      </h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        Personalize how the AI talks to you.
      </p>
      <div className="mt-8">
        <TonePicker />
      </div>
    </main>
  );
};

export default SettingsPage;
