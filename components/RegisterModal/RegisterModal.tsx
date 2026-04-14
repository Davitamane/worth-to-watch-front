"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { GoogleIcon } from "@/icons";
import { Button, Input, PasswordInput } from "@/components";

const RegisterModal = () => {
  const router = useRouter();

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Create account
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Start watching smarter.
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
        <Input
          id="register-name"
          label="Full name"
          type="text"
          placeholder="Jane Doe"
        />
        <Input
          id="register-email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
        />
        <PasswordInput
          id="register-password"
          label="Password"
          placeholder="••••••••"
        />
        <PasswordInput
          id="register-confirm-password"
          label="Confirm password"
          placeholder="••••••••"
        />
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button variant="ghost" type="button" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button variant="primary" type="button">
          Create account
        </Button>
      </div>

      <p className="mt-5 text-center text-sm text-zinc-500 dark:text-zinc-400">
        Already have an account?{" "}
        <button
          className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
          onClick={() => router.replace("/login")}
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

export default RegisterModal;
