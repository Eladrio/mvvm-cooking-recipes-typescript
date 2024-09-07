export interface RecipeAPI {
  uri: string;
  label: string;
};

export interface RecipeAPIHit {
  recipe: RecipeAPI;
}

export type RecipeAPIResult = RecipeAPIHit[];


export interface RecipeSearchAPIResponse {
  hits: RecipeAPIResult;
}

export interface CreatedRecipe {
  name: string;
  description: string;
  ingredients: string[];
  time: number;
}

export interface ValidateCreateRecipeType {
  isValid: boolean;
  formattedData: CreatedRecipe;
}

export type InputFieldType = {
  value: string;
  valid: boolean;
}

export type CreateRecipeInputsType = {
  name: InputFieldType;
  description: InputFieldType;
  ingredients: InputFieldType;
  time: InputFieldType;
}

export type InputNames = 'name' | 'description' | 'ingredients' | 'time';