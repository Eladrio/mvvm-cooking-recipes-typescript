import "./createdRecipesView.scss";

import useCreatedViewController from "../../viewController/useCreatedViewController";

const CreatedRecipesView = () => {
  const { recipes, error, handleCreateClick } = useCreatedViewController();
  const baseClassName = "created-recipes-view";
  const createdRecipes =
    !!recipes.length &&
    recipes.map((recipe) => (
      <div key={recipe.name} className={`card ${baseClassName}__created-card`}>
        <div className="card-body">
          <h3 className={`card-title ${baseClassName}__card-title`}>{recipe.name}</h3>
          <div className="card-text">
            <p>{recipe.description}</p>
            <p>{recipe.ingredients.join(", ")}</p>
            <p>Cooking time: {recipe.time} minutes</p>
          </div>
        </div>
      </div>
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
