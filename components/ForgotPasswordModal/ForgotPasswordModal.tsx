"use client";

import { motion } from "framer-motion";
import { Button, Input } from "@/components";
import type { ForgotPasswordModalProps } from "./ForgotPasswordModal.types";

const ForgotPasswordModal = ({ onClose }: ForgotPasswordModalProps) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/60 z-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="fixed inset-0 z-70 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-sm bg-white dark:bg-zinc-950 rounded-2xl shadow-xl p-6"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Reset password
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Enter your email and we'll send you a reset link.
          </p>

          <div className="mt-5">
            <Input id="forgot-email" label="Email address" type="email" placeholder="you@example.com" />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="ghost" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" type="button">
              Send reset link
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ForgotPasswordModal;
