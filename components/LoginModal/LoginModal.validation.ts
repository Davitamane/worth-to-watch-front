import type { RegisterOptions } from "react-hook-form";
import type { LoginFormInputs } from "@/types";

export const loginValidation: {
  [K in keyof LoginFormInputs]?: RegisterOptions<LoginFormInputs, K>;
} = {
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
};
