import { useCallback } from "react";
import useCreateRecipeModel from "../model/useCreateRecipeModel";
import { formatIngredientsValue } from "../helpers/inputHelper";
import { VALIDATION_RULES } from "./constants";
import { validateInput as validate } from "../helpers/inputValidations";
import { CreateRecipeInputsType, InputNames, ValidateCreateRecipeType } from "../types/recipeTypes";

const useCreateRecipeViewModel = () => {
  const { createRecipe, recipes, error, addError, isAddSuccess, deleteError, deleteRecipe } = useCreateRecipeModel();

  // checks that every input has a valid value before calling createRecipe from the Model
  const validateCreateRecipe = useCallback(
    (data: CreateRecipeInputsType): ValidateCreateRecipeType => {
      const {
        name: { value: nameValue, valid: nameValid },
        description: { value: descriptionValue, valid: descriptionValid },
        ingredients: { value: ingredientsValue, valid: ingredientsValid },
        time: { value: timeValue, valid: timeValid },
      } = data;

      // Individual input validations
      const isOneInvalid = !(nameValid && descriptionValid && ingredientsValid && timeValid);

      return {
        isValid: !isOneInvalid,
        formattedData: {
          name: nameValue,
          description: descriptionValue,
          ingredients: formatIngredientsValue(ingredientsValue),
          time: parseInt(timeValue),
        },
      };
    },
    []
  );

  // calls createRecipe from Model if validateCreateRecipe returns true as isValid
  const createValidatedRecipe = useCallback(
    (data: CreateRecipeInputsType) => {
      const { isValid, formattedData } = validateCreateRecipe(data);

      if (isValid) {
        createRecipe(formattedData);
      }
    },
    [createRecipe, validateCreateRecipe]
  );

  // validates single input, this gets called on input blur by the controller
  const validateInput = useCallback((name: InputNames, value: string) => {
    const validations = VALIDATION_RULES[name];
    const inputValidation = validate(value, validations);

    return {
      [name]: {
        value,
        valid: inputValidation,
      },
    };
  }, []);

  return {
    createRecipe: createValidatedRecipe,
    recipes,
    error,
    addError,
    isAddSuccess,
    validateInput,
    deleteError,
    deleteRecipe
  };
};

export default useCreateRecipeViewModel;
