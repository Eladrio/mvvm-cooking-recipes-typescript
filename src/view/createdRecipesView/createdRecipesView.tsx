import "./createdRecipesView.scss";

import useCreatedViewController from "../../viewController/useCreatedViewController";
import RecipeCard from "../../components/recipeCard/recipeCard";

const CreatedRecipesView = () => {
  const { recipes, error, handleCreateClick } = useCreatedViewController();
  const baseClassName = "created-recipes-view";
  const createdRecipes =
    !!recipes.length &&
    recipes.map((recipe) => (
      <RecipeCard key={recipe.name} recipe={recipe} />
    ));

  return (
    <article className={baseClassName}>
      <h1 className={`${baseClassName}__title`}>These are your Recipes</h1>
      {!!recipes.length && !error && (
        <section className={`${baseClassName}__recipes-list`}>
          <div className="card-deck">{createdRecipes}</div>
        </section>
      )}
      {error ? <span>There was an error fetching the recipes</span> : null}
      <button className={`${baseClassName}__create-link`} onClick={handleCreateClick}>
        Create a Recipe
      </button>
    </article>
  );
};

export default CreatedRecipesView;
