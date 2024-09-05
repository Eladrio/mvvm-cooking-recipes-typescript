import React from "react";
import FormComponent from "../../../../components/formComponent/formComponent";
import InputComponent from "../../../../components/inputComponent/inputComponent";

const CreateRecipeForm = ({
  handleInputBlur,
  handleInputChange,
  handleSubmit,
  inputs,
}) => {
  return (
    <FormComponent handleSubmit={handleSubmit}>
      <div className="create-recipe-view__form-item">
        <InputComponent
          id="recipeNameId"
          name="name"
          label="Give your recipe a name"
          type="text"
          value={inputs.name.value}
          valid={inputs.name.valid}
          handleInputBlur={(e) => handleInputBlur(e.target.name, e.target.value)}
          handleInputChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="create-recipe-view__form-item">
        <InputComponent
          id="recipeDescriptionId"
          name="description"
          label="Enter a description of your recipe"
          type="textarea"
          value={inputs.description.value}
          valid={inputs.description.valid}
          handleInputBlur={(e) => handleInputBlur(e.target.name, e.target.value)}
          handleInputChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="create-recipe-view__form-item">
        <InputComponent
          id="recipeIngredientsId"
          name="ingredients"
          label="Enter the ingredients of your recipe"
          type="textarea"
          value={inputs.ingredients.value}
          valid={inputs.ingredients.valid}
          handleInputBlur={(e) => handleInputBlur(e.target.name, e.target.value)}
          handleInputChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="create-recipe-view__form-item">
        <InputComponent
          id="recipeTimeId"
          name="time"
          label="Enter the time of preparation of your recipe"
          type="number"
          value={inputs.time.value}
          valid={inputs.time.valid}
          handleInputBlur={(e) => handleInputBlur(e.target.name, e.target.value)}
          handleInputChange={(e) => handleInputChange(e.target.name, e.target.value)}
        />
      </div>
    </FormComponent>
  );
};

export default CreateRecipeForm;
