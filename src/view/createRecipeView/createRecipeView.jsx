import React from "react";
import "./createRecipeView.scss";
import useCreateRecipeViewController from "../../viewController/useCreateRecipeViewController";
import CreateRecipeForm from "./components/createRecipeForm/createRecipeForm";

const CreateRecipeView = () => {
  const {
    handleFormSubmit,
    handleInputBlur,
    handleInputChange,
    inputs,
    recipes,
    error,
    addError,
  } = useCreateRecipeViewController();
  const createdRecipes = !!recipes.length && recipes.map((recipe) => (
    <div key={recipe.name} className="card create-recipe-view__created-card">
      <div className="card-body">
        <h3 className="card-title">{recipe.name}</h3>
        <div className="card-text">
          <p>{recipe.description}</p>
          <p>{recipe.ingredients.join(', ')}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <article className="create-recipe-view">
      <h1 className="create-recipe-view__title">Create your recipe</h1>
      <section className="create-recipe-view__section">
        <h2 className="create-recipe-view__section-title">Enter recipe info</h2>
        <CreateRecipeForm
          className="create-recipe-view__form-item"
          inputs={inputs}
          handleSubmit={handleFormSubmit}
          handleInputBlur={handleInputBlur}
          handleInputChange={handleInputChange}
        />
      </section>
      {!!recipes.length && !(error || addError) && (
        <section className="create-recipe-view__section">
          <h2 className="create-recipe-view__section-title">
            Here are some of the recipes you've already created
          </h2>
          <div className="card-deck">{createdRecipes}</div>
        </section>
      )}
      {error && <span>There was an error fetching the recipes</span>}
      {addError && <span>There was an error creating the recipes</span>}
    </article>
  );
};

export default CreateRecipeView;
