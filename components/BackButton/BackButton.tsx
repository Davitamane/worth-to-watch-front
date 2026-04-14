"use client";

import { ArrowLeftIcon } from "@/icons";
import useBackButton from "./useBackButton";

const BackButton = ({ href }: { href?: string } = {}) => {
  const { handleClick } = useBackButton(href);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
    >
      <ArrowLeftIcon />
      Back
    </button>
  );
};

export default BackButton;
