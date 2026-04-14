import Link from "next/link";
import { BackButton, Button, Input, PasswordInput } from "@/components";
import { GoogleIcon } from "@/icons";

const RegisterPage = () => {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12">
      <BackButton href="/" />

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Create account
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Start watching smarter.
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
            <Input id="name" label="Full name" type="text" placeholder="Jane Doe" />
            <Input id="email" label="Email address" type="email" placeholder="you@example.com" />
            <PasswordInput id="password" label="Password" placeholder="••••••••" />
            <PasswordInput id="confirm-password" label="Confirm password" placeholder="••••••••" />
          </div>

          <Button variant="primary" fullWidth type="button" className="mt-6">
            Create account
          </Button>

          <p className="mt-5 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
