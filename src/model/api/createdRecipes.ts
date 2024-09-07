import { get, post } from "../../helpers/apiHelper";
import { CreatedRecipe } from "../../types/recipeTypes";

const baseURL = "http://localhost:3001/recipes";

export const retrieveRecipesAPI = async (): Promise<CreatedRecipe[]> => {
  return get(baseURL);
};

export const createRecipeAPI = async (recipe: CreatedRecipe) => {
  return post(baseURL, recipe);
};
