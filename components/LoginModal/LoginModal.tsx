"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { GoogleIcon } from "@/icons";
import { Button, ForgotPasswordModal, Input, PasswordInput } from "@/components";

const LoginModal = () => {
  const router = useRouter();
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <>
      <div className="px-6 py-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Sign in
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Welcome back.
        </p>

        <Button variant="outline" fullWidth className="mt-6">
          <GoogleIcon />
          Continue with Google
        </Button>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <span className="text-xs text-zinc-400 dark:text-zinc-500">or</span>
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="space-y-4">
          <Input id="login-email" label="Email address" type="email" placeholder="you@example.com" />

          <div className="space-y-1.5">
            <PasswordInput id="login-password" label="Password" placeholder="••••••••" />
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Forgot password?
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button variant="primary" type="button">
            Sign in
          </Button>
        </div>

        <p className="mt-5 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          >
            Sign up
          </Link>
        </p>
      </div>

      <AnimatePresence>
        {showForgotPassword && (
          <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default LoginModal;
