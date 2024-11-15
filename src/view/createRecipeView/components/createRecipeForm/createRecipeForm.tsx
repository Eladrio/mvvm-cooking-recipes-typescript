import { FormEvent } from "react";
import FormComponent from "../../../../components/formComponent/formComponent";
import InputComponent from "../../../../components/inputComponent/inputComponent";
import { CreateRecipeInputsType, InputNames } from "../../../../types/recipeTypes";

type CreateRecipeFormPropsType = {
  handleInputBlur: (name: InputNames, value: string) => void;
  handleInputChange: (name: InputNames, value: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputs: CreateRecipeInputsType;
};

const CreateRecipeForm: React.FC<CreateRecipeFormPropsType> = ({
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
          errorMessage={'Please enter a valid name for the recipe'}
          handleInputBlur={(e) => handleInputBlur(e.target.name as InputNames, e.target.value)}
          handleInputChange={(e) => handleInputChange(e.target.name as InputNames, e.target.value)}
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
          errorMessage={'Please enter a valid description for the recipe'}
          handleInputBlur={(e) => handleInputBlur(e.target.name as InputNames, e.target.value)}
          handleInputChange={(e) => handleInputChange(e.target.name as InputNames, e.target.value)}
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
          errorMessage={'Please enter valid ingredients for the recipe'}
          handleInputBlur={(e) => handleInputBlur(e.target.name as InputNames, e.target.value)}
          handleInputChange={(e) => handleInputChange(e.target.name as InputNames, e.target.value)}
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
          errorMessage={'Please enter a valid time for the recipe'}
          handleInputBlur={(e) => handleInputBlur(e.target.name as InputNames, e.target.value)}
          handleInputChange={(e) => handleInputChange(e.target.name as InputNames, e.target.value)}
        />
      </div>
    </FormComponent>
  );
};

export default CreateRecipeForm;
