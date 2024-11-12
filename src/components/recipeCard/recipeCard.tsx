import { CreatedRecipe } from "../../types/recipeTypes";
import { RecipeCardStyles, Title } from "./styledComponents";

type RecipeCardPropsType = {
  recipe: CreatedRecipe
}

export default function RecipeCard({ recipe }: RecipeCardPropsType) {
  return (
    <RecipeCardStyles className='card'>
      <div className="card-body">
        <Title className='card-title'>{recipe.name}</Title>
        <div className="card-text">
          <p>{recipe.description}</p>
          <p>{recipe.ingredients.join(", ")}</p>
          <p>Cooking time: {recipe.time} minutes</p>
        </div>
      </div>
    </RecipeCardStyles>
  );
}
