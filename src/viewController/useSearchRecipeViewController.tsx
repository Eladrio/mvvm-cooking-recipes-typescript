import { FormEvent, useCallback } from "react";
import useSearchRecipeViewModel from "../viewModel/useSearchRecipeViewModel";

const useSearchRecipeViewController = () => {
  const { error, recipes, isLoading, onButtonClick, searchInputValue, setSearchInputValue } =
    useSearchRecipeViewModel();

  const onSearchRecipeClick = useCallback((): void => {
    onButtonClick();
  }, [onButtonClick]);

  const onSearchRecipeChange = (value: string): void => {
    setSearchInputValue(value);
  };

  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
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
