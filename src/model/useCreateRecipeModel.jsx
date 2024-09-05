import { useCallback } from "react";
import { useCreateRecipeAPI } from "./api/useCreateRecipeAPI";

const useCreateRecipeModel = () => {
  const { mutate, error, recipes, addError } = useCreateRecipeAPI();

  const createRecipe = useCallback(
    (data) => {
      mutate(data);
    },
    [mutate]
  );
  return {
    createRecipe,
    recipes,
    error,
    addError,
  };
};

export default useCreateRecipeModel;
