"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { BackButton, Button, ForgotPasswordModal, Input, PasswordInput } from "@/components";
import { GoogleIcon } from "@/icons";

const LoginPage = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <>
      <main className="mx-auto w-full max-w-2xl px-6 py-12">
        <BackButton href="/" />

        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Sign in
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Welcome back.
            </p>

            <Button variant="outline" fullWidth className="mt-6">
              <GoogleIcon />
              Continue with Google
            </Button>

            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
              <span className="text-xs text-zinc-400 dark:text-zinc-500">or</span>
              <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
            </div>

            <div className="space-y-4">
              <Input id="email" label="Email address" type="email" placeholder="you@example.com" />

              <div className="space-y-1.5">
                <PasswordInput id="password" label="Password" placeholder="••••••••" />
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <Button variant="primary" fullWidth type="button" className="mt-6">
              Sign in
            </Button>

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
        </div>
      </main>

      <AnimatePresence>
        {showForgotPassword && (
          <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default LoginPage;
