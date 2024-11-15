import { get, post, deleteItem } from "../../helpers/apiHelper";
import { CreatedRecipe, RecipeItemAPI } from "../../types/recipeTypes";

const baseURL = "http://localhost:3001/recipes";

export const retrieveRecipesAPI = async (): Promise<RecipeItemAPI[]> => {
  return get(baseURL);
};

export const createRecipeAPI = async (recipe: CreatedRecipe) => {
  return post(baseURL, recipe);
};

export const deleteRecipeAPI = async (id: string) => {
  return deleteItem(baseURL, id);
}
