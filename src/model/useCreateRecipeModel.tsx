import { useCallback } from "react";
import { useCreateRecipeAPI } from "./api/useCreateRecipeAPI";
import { CreatedRecipe } from "../types/recipeTypes";

const useCreateRecipeModel = () => {
  const { mutate, error, recipes, addError } = useCreateRecipeAPI();

  const createRecipe = useCallback(
    (data: CreatedRecipe) => {
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
