import type { RegisterOptions } from "react-hook-form";
import type { RegisterFormInputs } from "@/types";

export const registerValidation: {
  [K in keyof RegisterFormInputs]?: RegisterOptions<RegisterFormInputs, K>;
} = {
  name: {
    required: "Full name is required",
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
  },
  confirmPassword: {
    required: "Please confirm your password",
    validate: (value, formValues) =>
      value === formValues.password || "Passwords do not match.",
  },
};
