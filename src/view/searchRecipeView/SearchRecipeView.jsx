import "./SearchRecipeView.scss";
// vendor
import React from "react";
// controller
import useSearchRecipeViewController from "../../viewController/useSearchRecipeViewController";
// component
import RecipeItem from "../../components/recipeItem/recipeItem";

const SearchRecipeView = () => {
  const { error, recipes, isLoading, handleFormSubmit, onSearchRecipeChange, searchInputValue } =
    useSearchRecipeViewController();

  return (
    <article className="search-recipe-view">
      <h1 className="search-recipe-view__title">Search Recipe Page</h1>
      <form className="search-recipe-view__searchInputSection" onSubmit={handleFormSubmit}>
        <label className="search-recipe-view__input-label" htmlFor="searchInputId">
          Enter recipe's name
        </label>
        <input
          className="search-recipe-view__input"
          id="searchInputId"
          type="search"
          onChange={(event) => onSearchRecipeChange(event.target.value)}
          value={searchInputValue}
        />
        <button type="submit">Search</button>
      </form>
      <section className="search-recipe-view__results-container">
        {isLoading && <span aria-live="polite">The Search is Loading...</span>}
        {error && <span aria-live="assertive">There was an error fetching the recipes. Please try again.</span>}
        {recipes?.length > 0 &&
          recipes.map(({ recipe: { uri, label } }) => (
            <RecipeItem key={uri} uri={uri} label={label} />
          ))}
      </section>
    </article>
  );
};

export default SearchRecipeView;
