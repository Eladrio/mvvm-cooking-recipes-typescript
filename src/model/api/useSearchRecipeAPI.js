import { useMutation } from "react-query";
import { retrieveRecipesSearchAPI } from "./search";

export const useSearchRecipeAPI = () => {
  const { mutate, data, error, isLoading } = useMutation(retrieveRecipesSearchAPI);

  return {
    recipes: data,
    error,
    mutate,
    isLoading,
  };
};
