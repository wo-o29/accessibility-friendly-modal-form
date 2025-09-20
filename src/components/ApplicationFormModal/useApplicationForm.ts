import { useForm } from "react-hook-form";
import type { ApplicationFormData } from "../../types/formType";

export const useApplicationForm = () => {
  const { register, handleSubmit, reset, watch } = useForm<ApplicationFormData>(
    {
      defaultValues: {
        name: "",
        email: "",
        experience: "",
        githubLink: "",
      },
    }
  );

  const isSubmitDisabled =
    !watch("name") || !watch("email") || !watch("experience");

  return { register, handleSubmit, reset, isSubmitDisabled };
};
