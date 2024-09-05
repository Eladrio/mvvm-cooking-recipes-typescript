import { get, post } from "../../helpers/apiHelper";

const baseURL = "http://localhost:3001/recipes";

export const retrieveRecipesAPI = async () => {
  return get(baseURL);
};

export const createRecipeAPI = async (recipe) => {
  return post(baseURL, recipe);
};
