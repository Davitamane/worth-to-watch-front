import { LoginFormInputs } from "@/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const useLoginForm = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const methods = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log(data);
  };

  return {
    methods,
    onSubmit,
    showForgotPassword,
    setShowForgotPassword,
  };
};

export { useLoginForm };
