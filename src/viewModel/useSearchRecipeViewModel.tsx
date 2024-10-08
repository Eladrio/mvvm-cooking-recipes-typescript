import { useCallback, useState } from "react";
import useSearchRecipeModel from "../model/useSearchRecipeModel";

const useSearchRecipeViewModel = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [lastFetchedSearchInputValue, setLastFetchedSearchInputValue] = useState<string>("");

  const { error, recipes, isLoading, handleButtonClick } = useSearchRecipeModel();

  const setSearchValue = (value: string) => {
    setSearchInputValue(value);
  };

  // validates conditions in order to avoid unnecessary submitions
  const validateButtonClick = useCallback(() => {
    return (searchInputValue !== lastFetchedSearchInputValue || error) && !!searchInputValue;
  }, [lastFetchedSearchInputValue, searchInputValue, error]);
  
  const handleValidatedButtonClick = useCallback(() => {
    if (validateButtonClick()) {
      handleButtonClick(searchInputValue);
      setLastFetchedSearchInputValue(searchInputValue);
    }
  }, [validateButtonClick, handleButtonClick, searchInputValue, setLastFetchedSearchInputValue]);

  return {
    error,
    recipes,
    isLoading,
    onButtonClick: handleValidatedButtonClick,
    searchInputValue,
    setSearchInputValue: setSearchValue,
  };
};

export default useSearchRecipeViewModel;
