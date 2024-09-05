export const formatIngredientsValue = value => {
  const ingredientsArray = value.split('\n');
  return ingredientsArray.map(item => item.trim());
}