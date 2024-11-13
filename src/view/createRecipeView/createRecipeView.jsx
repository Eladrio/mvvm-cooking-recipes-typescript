import React from "react";
import { ViewTitle } from '../../styles/ViewSharedStyles';
import { Section, SectionTitle, FormWrapper, Card } from './styledComponents';
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
    <Card key={recipe.name} className="card">
      <div className="card-body">
        <h3 className="card-title">{recipe.name}</h3>
        <div className="card-text">
          <p>{recipe.description}</p>
          <p>{recipe.ingredients.join(', ')}</p>
        </div>
      </div>
    </Card>
  ));

  return (
    <article>
      <ViewTitle>Create your recipe</ViewTitle>
      <Section>
        <SectionTitle>Enter recipe info</SectionTitle>
        <FormWrapper>
          <CreateRecipeForm
            inputs={inputs}
            handleSubmit={handleFormSubmit}
            handleInputBlur={handleInputBlur}
            handleInputChange={handleInputChange}
          />
        </FormWrapper>
      </Section>
      {!!recipes.length && !(error || addError) && (
        <Section>
          <SectionTitle>
            Here are some of the recipes you've already created
          </SectionTitle>
          <div className="card-deck">{createdRecipes}</div>
        </Section>
      )}
      {error && <span>There was an error fetching the recipes</span>}
      {addError && <span>There was an error creating the recipes</span>}
    </article>
  );
};

export default CreateRecipeView;
