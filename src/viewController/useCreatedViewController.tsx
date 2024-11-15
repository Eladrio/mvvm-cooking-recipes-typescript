import useCreateRecipeViewModel from "../viewModel/useCreateRecipeViewModel";
import { useNavigate } from "react-router-dom";
import { ROUTES, CREATE_ROUTE } from "../constants/routes";

const useCreatedViewController = () => {
  const { recipes, error, deleteError, deleteRecipe } = useCreateRecipeViewModel();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate(ROUTES[CREATE_ROUTE]);
  };

  const handleDeleteRecipeClick = (id: string) => {
    console.log(id)
    deleteRecipe(id);
  }

  return {
    recipes,
    error,
    handleCreateClick,
    deleteError,
    handleDeleteRecipeClick
  };
};

export default useCreatedViewController;
