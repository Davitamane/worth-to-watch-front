import { RegisterFormInputs } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

const useRegisterForm = () => {
  const methods = useForm<RegisterFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    console.log(data);
  };

  return {
    methods,
    onSubmit,
  };
};

export { useRegisterForm };
