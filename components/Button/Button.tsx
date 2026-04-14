import type { ButtonProps } from "./Button.types";

const variantClasses = {
  primary:
    "bg-zinc-900 text-white font-semibold hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
  ghost:
    "font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
  outline:
    "font-medium border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800",
};

const Button = ({
  variant = "primary",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg text-sm transition-colors px-4";
  const padding = fullWidth ? "py-2.5" : "py-2";
  const width = fullWidth ? "w-full" : "";

  return (
    <button
      className={[base, padding, width, variantClasses[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
