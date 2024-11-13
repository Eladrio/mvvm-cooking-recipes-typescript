import useCreatedViewController from "../../viewController/useCreatedViewController";
import RecipeCard from "../../components/recipeCard/recipeCard";
import { ViewTitle } from "../../styles/ViewSharedStyles";
import { CreateLink, RecipeList } from "./styledComponents";

const CreatedRecipesView = () => {
  const { recipes, error, handleCreateClick } = useCreatedViewController();
  const createdRecipes =
    !!recipes.length &&
    recipes.map((recipe) => (
      <RecipeCard key={recipe.name} recipe={recipe} />
    ));

  return (
    <article>
      <ViewTitle>These are your Recipes</ViewTitle>
      {!!recipes.length && !error && (
        <RecipeList>
          <div className="card-deck">{createdRecipes}</div>
        </RecipeList>
      )}
      {error ? <span>There was an error fetching the recipes</span> : null}
      <CreateLink onClick={handleCreateClick}>
        Create a Recipe
      </CreateLink>
    </article>
  );
};

export default CreatedRecipesView;
