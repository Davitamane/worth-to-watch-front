"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { FormProvider } from "react-hook-form";
import { GoogleIcon } from "@/icons";
import {
  Button,
  Checkbox,
  ForgotPasswordModal,
  Input,
  PasswordInput,
} from "@/components";
import { useLoginForm } from "@/hooks";
import { loginValidation } from "./LoginModal.validation";

const LoginModal = () => {
  const router = useRouter();
  const { methods, onSubmit, showForgotPassword, setShowForgotPassword } =
    useLoginForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="px-6 py-8">
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
          <Input
            {...methods.register("email", loginValidation.email)}
            label="Email address"
            placeholder="you@example.com"
            error={methods.formState.errors.email?.message}
          />

          <div className="space-y-1.5">
            <PasswordInput
              {...methods.register("password", loginValidation.password)}
              label="Password"
              placeholder="••••••••"
              error={methods.formState.errors.password?.message}
            />
            <div className="flex items-center justify-between pt-2">
              <Checkbox name="remember" label="Remember me" />
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </div>

        <p className="mt-5 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Don't have an account?{" "}
          <button
            className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            onClick={() => router.replace("/register")}
          >
            Sign up
          </button>
        </p>
      </form>

      <AnimatePresence>
        {showForgotPassword && (
          <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />
        )}
      </AnimatePresence>
    </FormProvider>
  );
};

export default LoginModal;
