import { useMutation, UseMutateFunction } from "react-query";
import { retrieveRecipesSearchAPI } from "./search";
import { RecipeAPIResult } from "../../types/recipeTypes";

type SearchRecipeAPIType = {
  error: unknown;
  isLoading: boolean;
  mutate: UseMutateFunction<RecipeAPIResult | null, unknown , string, unknown>;
  recipes: RecipeAPIResult;
}

export const useSearchRecipeAPI = (): SearchRecipeAPIType => {
  const { mutate, data, error, isLoading } = useMutation<RecipeAPIResult, unknown, string>(retrieveRecipesSearchAPI);
  const recipes = data ?? [];
  return {
    recipes,
    error,
    mutate,
    isLoading,
  };
};
