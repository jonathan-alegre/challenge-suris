import { useState, ChangeEvent } from "react";

interface FormState {
  [key: string]: string;
}

function useForm(initialForm: FormState = {}) {
  const [formState, setFormState] = useState<FormState>(initialForm);  

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {       
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return { formState, onInputChange };
}

export default useForm;