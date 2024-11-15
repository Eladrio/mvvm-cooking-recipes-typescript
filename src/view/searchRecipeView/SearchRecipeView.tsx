import { ViewTitle } from "../../styles/ViewSharedStyles";
import { Input, InputLabel, ResultsContainer, SearchForm } from "./styledComponents";
// controller
import useSearchRecipeViewController from "../../viewController/useSearchRecipeViewController";
// component
import RecipeItem from "../../components/recipeItem/recipeItem";
import { useEffect, useRef } from "react";

const SearchRecipeView: React.FC = (): JSX.Element => {
  const { error, recipes, isLoading, handleFormSubmit, onSearchRecipeChange, searchInputValue } =
    useSearchRecipeViewController();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <article className="search-recipe-view">
      <ViewTitle tabIndex={-1} ref={headingRef}>Search Recipe Page</ViewTitle>
      <SearchForm onSubmit={handleFormSubmit}>
        <InputLabel htmlFor="searchInputId">
          Enter recipe's name
        </InputLabel>
        <Input
          className="search-recipe-view__input"
          id="searchInputId"
          type="search"
          onChange={(event) => onSearchRecipeChange(event.target.value)}
          value={searchInputValue}
        />
        <button type="submit">Search</button>
      </SearchForm>
      <ResultsContainer aria-live="polite">
        {isLoading && <span aria-live="polite">The Search is Loading...</span>}
        {error ? <span role="alert">There was an error fetching the recipes. Please try again.</span> : null}
        {recipes?.length > 0 &&
          recipes.map(({ recipe: { uri, label } }) => (
            <RecipeItem key={uri} uri={uri} label={label} />
          ))}
      </ResultsContainer>
    </article>
  );
};

export default SearchRecipeView;
