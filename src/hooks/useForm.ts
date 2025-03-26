import { useState } from "react";

function useForm (initialForm = {})  {
  const [formState, setFormState] = useState(initialForm);  

  const onInputChange = ( {target}) => {       
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return { formState, onInputChange };
};

export default useForm;