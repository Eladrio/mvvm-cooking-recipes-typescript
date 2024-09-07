
type RecipeItemPropsType =  {
  label: string;
  uri: string;
}

export default function RecipeItem({ uri, label }: RecipeItemPropsType) {
  return (
    <div className="recipe-item" key={uri}>
      {label}
    </div>
  );
}
