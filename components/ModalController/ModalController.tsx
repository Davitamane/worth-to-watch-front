"use client";

import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import {
  BaseModal,
  BillingModal,
  LoginModal,
  RegisterModal,
  SettingsModal,
} from "@/components";

const MODALS = {
  login: LoginModal,
  register: RegisterModal,
  settings: SettingsModal,
  billing: BillingModal,
} as const;

type ModalKey = keyof typeof MODALS;

const ModalController = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal") as ModalKey | null;
  const ModalContent = modal && MODALS[modal] ? MODALS[modal] : null;

  return (
    <AnimatePresence>
      {ModalContent && (
        <BaseModal key={modal}>
          <ModalContent />
        </BaseModal>
      )}
    </AnimatePresence>
  );
};

export default ModalController;
