import { useMutation, MutationFunction } from "react-query";
import { retrieveRecipesSearchAPI } from "./search";

type SearchRecipeAPIType = {
  recipes: Recipe[] | null;
  error: unknown;
  mutate: MutationFunction<string, Promise<any>>;
  isLoading: boolean;
}

export const useSearchRecipeAPI = (): SearchRecipeAPIType => {
  const { mutate, data, error, isLoading } = useMutation<Recipe[]>(retrieveRecipesSearchAPI);

  return {
    recipes: data,
    error,
    mutate,
    isLoading,
  };
};
