import { get } from "../../helpers/apiHelper";
import { RecipeSearchAPIResponse } from "../../types/recipeTypes";
import { APP_ID, APP_KEY } from "./constants/apiConstants";

const BASE_API_URL = "https://api.edamam.com";

const RECIPE_SEARCH_URL = `${BASE_API_URL}/api/recipes/v2`;

export const retrieveRecipesSearchAPI = async (query: string) => {
  const response: RecipeSearchAPIResponse = await get(
    `${RECIPE_SEARCH_URL}?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  return response.hits;
};
