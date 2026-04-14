"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const useModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const close = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  const open = (modal: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", modal);
    router.push(`${pathname}?${params.toString()}`);
  };

  return { close, open };
};

export default useModal;
