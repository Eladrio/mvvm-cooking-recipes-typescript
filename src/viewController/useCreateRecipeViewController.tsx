import { FormEvent, useCallback, useState } from "react";

import useCreateRecipeViewModel from "../viewModel/useCreateRecipeViewModel";
import { CreateRecipeInputsType, InputNames } from "../types/recipeTypes";

const initialState: CreateRecipeInputsType = {
  name: {
    value: "",
    valid: true,
  },
  description: {
    value: "",
    valid: true,
  },
  ingredients: {
    value: "",
    valid: true,
  },
  time: {
    value: "",
    valid: true,
  },
};

const useCreateRecipeViewController = () => {
  const [inputs, setInputs] = useState<CreateRecipeInputsType>(initialState);

  const { createRecipe, recipes, error, addError, isAddSuccess, validateInput } = useCreateRecipeViewModel();

  const handleInputChange = useCallback((name: InputNames, value: string) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: {
        ...prevInputs[name],
        value: value,
      },
    }));
  }, []);

  const handleInputBlur = useCallback(
    (name: InputNames, value: string) => {
      const updatedInputState = validateInput(name, value);

      setInputs((prevInputs) => ({
        ...prevInputs,
        ...updatedInputState,
      }));
    },
    [validateInput]
  );

  const handleFormSubmit = useCallback(
    (event: FormEvent<SubmitEvent>) => {
      const { name, description, ingredients, time } = inputs;
      const data: CreateRecipeInputsType = {
        name,
        description,
        ingredients,
        time,
      };
      createRecipe(data);
      setInputs(initialState);
      event.preventDefault();
    },
    [inputs, createRecipe]
  );

  return {
    handleFormSubmit,
    handleInputChange,
    handleInputBlur,
    inputs,
    recipes,
    error,
    addError,
    isAddSuccess,
  };
};

export default useCreateRecipeViewController;
