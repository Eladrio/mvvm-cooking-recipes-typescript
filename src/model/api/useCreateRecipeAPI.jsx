import { useQuery, useMutation, useQueryClient } from "react-query";
import { createRecipeAPI, retrieveRecipesAPI } from "./createdRecipes";

export const useCreateRecipeAPI = () => {
  const client = useQueryClient();

  // useQuery to fetch the created recipes
  const { data: recipes, error } = useQuery("createdRecipes", retrieveRecipesAPI, {
    initialData: [],
  });

  // useMutation to store new recipe, invalidates fetch query to trigger a refetch
  const { mutate, error: addError } = useMutation(createRecipeAPI, {
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["createdRecipes"] });
    },
  });
  return {
    recipes,
    error,
    mutate,
    addError,
  };
};