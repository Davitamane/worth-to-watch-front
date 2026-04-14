"use client";

import { Button, TonePicker } from "@/components";
import useModal from "@/hooks/useModal";

const SettingsModal = () => {
  const { close } = useModal();

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Settings
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Personalize how the AI talks to you.
      </p>

      <div className="mt-8">
        <TonePicker />
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <Button variant="ghost" type="button" onClick={close}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default SettingsModal;
