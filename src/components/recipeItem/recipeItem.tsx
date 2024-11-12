import { RecipeItemStyles } from "./styledComponents";

type RecipeItemPropsType =  {
  label: string;
  uri: string;
}

export default function RecipeItem({ uri, label }: RecipeItemPropsType) {
  return (
    <RecipeItemStyles key={uri}>
      {label}
    </RecipeItemStyles>
  );
}
