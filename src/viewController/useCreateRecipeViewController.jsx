import { useCallback, useState } from "react";

import useCreateRecipeViewModel from "../viewModel/useCreateRecipeViewModel";

const initialState = {
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
  const [inputs, setInputs] = useState(initialState);

  const { createRecipe, recipes, error, addError, validateInput } = useCreateRecipeViewModel();

  const handleInputChange = useCallback((name, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: {
        ...prevInputs[name],
        value: value,
      },
    }));
  }, []);

  const handleInputBlur = useCallback(
    (name, value) => {
      const updatedInputState = validateInput(name, value);

      setInputs((prevInputs) => ({
        ...prevInputs,
        ...updatedInputState,
      }));
    },
    [validateInput]
  );

  const handleFormSubmit = useCallback(
    (event) => {
      const { name, description, ingredients, time } = inputs;
      const data = {
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
  };
};

export default useCreateRecipeViewController;
