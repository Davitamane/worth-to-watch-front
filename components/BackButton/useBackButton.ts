"use client";

import { useRouter } from "next/navigation";

const useBackButton = (href?: string) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return { handleClick };
};

export default useBackButton;
