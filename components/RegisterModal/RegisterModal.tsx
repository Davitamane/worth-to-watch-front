"use client";

import { FormProvider } from "react-hook-form";
import { GoogleIcon } from "@/icons";
import { Button, Input, PasswordInput } from "@/components";
import { useRegisterForm } from "@/hooks";
import useModal from "@/hooks/useModal";
import { registerValidation } from "./RegisterModal.validation";

const RegisterModal = () => {
  const { close, open } = useModal();
  const { methods, onSubmit } = useRegisterForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="px-6 py-8">
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
            {...methods.register("name", registerValidation.name)}
            label="Full name"
            placeholder="Jane Doe"
            error={methods.formState.errors.name?.message}
          />
          <Input
            {...methods.register("email", registerValidation.email)}
            label="Email address"
            placeholder="you@example.com"
            error={methods.formState.errors.email?.message}
          />
          <PasswordInput
            {...methods.register("password", registerValidation.password)}
            label="Password"
            placeholder="••••••••"
            error={methods.formState.errors.password?.message}
          />
          <PasswordInput
            {...methods.register(
              "confirmPassword",
              registerValidation.confirmPassword,
            )}
            label="Confirm password"
            placeholder="••••••••"
            error={methods.formState.errors.confirmPassword?.message}
          />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="ghost" type="button" onClick={close}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Create account
          </Button>
        </div>

        <p className="mt-5 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?{" "}
          <button
            className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            onClick={() => open("login")}
            type="button"
          >
            Sign in
          </button>
        </p>
      </form>
    </FormProvider>
  );
};

export default RegisterModal;
