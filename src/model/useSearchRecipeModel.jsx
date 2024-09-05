import { useCallback } from "react";
import { useSearchRecipeAPI } from "./api/useSearchRecipeAPI";

const useSearchRecipeModel = () => {
  const { recipes, isLoading, error, mutate } = useSearchRecipeAPI()
  
  const handleButtonClick = useCallback(
    (query) => {
      mutate(query);
    },
    [mutate]
  );

  return {
    recipes,
    isLoading,
    error,
    handleButtonClick,
  };
};

export default useSearchRecipeModel;
