import { useCallback } from "react";
import { useCreateRecipeAPI } from "./api/useCreateRecipeAPI";
import { CreatedRecipe } from "../types/recipeTypes";

const useCreateRecipeModel = () => {
  const { mutate, error, recipes, addError, isAddSuccess, deleteRecipeMutate, deleteError } =
    useCreateRecipeAPI();

  const createRecipe = useCallback(
    (data: CreatedRecipe) => {
      mutate(data);
    },
    [mutate]
  );

  const deleteRecipe = useCallback(
    (id: string) => {
      deleteRecipeMutate(id);
    },
    [deleteRecipeMutate]
  );

  return {
    createRecipe,
    recipes,
    error,
    addError,
    isAddSuccess,
    deleteRecipe,
    deleteError,
  };
};

export default useCreateRecipeModel;
