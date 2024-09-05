import { useCallback } from "react";
import useSearchRecipeViewModel from "../viewModel/useSearchRecipeViewModel";

const useSearchRecipeViewController = () => {
  const { error, recipes, isLoading, onButtonClick, searchInputValue, setSearchInputValue } =
    useSearchRecipeViewModel();

  const onSearchRecipeClick = useCallback(() => {
    onButtonClick();
  }, [onButtonClick]);

  const onSearchRecipeChange = (value) => {
    setSearchInputValue(value);
  };

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSearchRecipeClick();
    },
    [onSearchRecipeClick]
  );

  return {
    error,
    handleFormSubmit,
    isLoading,
    onSearchRecipeChange,
    recipes,
    searchInputValue,
  };
};

export default useSearchRecipeViewController;
