import { ErrorElement, ViewTitle } from "../../styles/ViewSharedStyles";
import { CreateLink, RecipeListContainer, RecipeList, ErrorContainer } from "./styledComponents";
import useCreatedViewController from "../../viewController/useCreatedViewController";
import RecipeCard from "../../components/recipeCard/recipeCard";
import { useEffect, useRef } from "react";

const CreatedRecipesView = () => {
  const { recipes, error, handleCreateClick, handleDeleteRecipeClick } = useCreatedViewController();
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const createdRecipes =
    !!recipes.length &&
    recipes.map((recipe) => (
      <li key={recipe.name}>
        <RecipeCard handleButtonClick={handleDeleteRecipeClick} recipe={recipe} />
      </li>
    ));

  return (
    <article>
      <header>
        <ViewTitle tabIndex={-1} ref={headingRef}>These are your Recipes</ViewTitle>
      </header>
      {!!recipes.length && !error && (
        <RecipeListContainer>
          <RecipeList className="card-deck">{createdRecipes}</RecipeList>
        </RecipeListContainer>
      )}
      {error ? (
        <ErrorContainer>
          <ErrorElement aria-live="assertive">There was an error fetching the recipes</ErrorElement>
        </ErrorContainer>
      ) : null}
      <CreateLink onClick={handleCreateClick}>Create a Recipe</CreateLink>
    </article>
  );
};

export default CreatedRecipesView;
