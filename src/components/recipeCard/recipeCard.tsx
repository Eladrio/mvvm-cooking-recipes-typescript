import { RecipeCardStyles, Title } from "./styledComponents";
import { RecipeItemAPI } from "../../types/recipeTypes";

type RecipeCardPropsType = {
  recipe: RecipeItemAPI,
  handleButtonClick: (id: string) => void
}

export default function RecipeCard({ recipe, handleButtonClick }: RecipeCardPropsType) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleButtonClick(recipe.id);
    e.preventDefault();
  }

  return (
    <RecipeCardStyles role="region" tabIndex={0} aria-labelledby={`recipe-title-${recipe.id}`} className='card'>
      <div className="card-body">
        <header>
          <Title className='card-title' id={`recipe-title-${recipe.id}`}>{recipe.name}</Title>
        </header>
        <div className="card-text">
          <p>{recipe.description}</p>
          <p>{recipe.ingredients.join(", ")}</p>
          <p>Cooking time: {recipe.time} minutes</p>
        </div>
        <button className="btn btn-danger" onClick={handleClick}>Delete Recipe</button>
      </div>
    </RecipeCardStyles>
  );
}
