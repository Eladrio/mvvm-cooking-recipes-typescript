export const formatIngredientsValue = (value: string): string[] => {
  const ingredientsArray = value.split('\n');
  return ingredientsArray.map(item => item.trim());
}