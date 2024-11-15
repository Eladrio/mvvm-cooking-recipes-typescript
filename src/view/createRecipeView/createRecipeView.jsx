import React, { useEffect, useRef } from "react";
import { ViewTitle } from "../../styles/ViewSharedStyles";
import { Section, SectionTitle, FormWrapper, Card } from "./styledComponents";
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
    isAddSuccess,
  } = useCreateRecipeViewController();
  const headingRef = useRef(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const createdRecipes =
    !!recipes.length &&
    recipes.map((recipe) => (
      <Card key={recipe.name} className="card">
        <div className="card-body">
          <h3 className="card-title">{recipe.name}</h3>
          <div className="card-text">
            <p>{recipe.description}</p>
            <p>{recipe.ingredients.join(", ")}</p>
          </div>
        </div>
      </Card>
    ));

  return (
    <article>
      <ViewTitle tabIndex={-1} ref={headingRef}>
        Create your recipe
      </ViewTitle>
      <Section>
        <header>
          <SectionTitle>Enter recipe info</SectionTitle>
        </header>
        <FormWrapper>
          <CreateRecipeForm
            inputs={inputs}
            handleSubmit={handleFormSubmit}
            handleInputBlur={handleInputBlur}
            handleInputChange={handleInputChange}
          />
          {addError && <span role="alert">There was an error creating the recipes</span>}
          <span style={{ visibility: isAddSuccess ? "visible" : "hidden" }} aria-live="polite" aria-atomic="true">
            {isAddSuccess ? "Recipe successfully created!" : ""}
          </span>
        </FormWrapper>
      </Section>
      {!!recipes.length && !(error || addError) && (
        <Section aria-live="polite">
          <SectionTitle>Here are some of the recipes you've already created</SectionTitle>
          <div className="card-deck">{createdRecipes}</div>
        </Section>
      )}
      {error && <span role="alert">There was an error fetching the recipes</span>}
    </article>
  );
};

export default CreateRecipeView;
