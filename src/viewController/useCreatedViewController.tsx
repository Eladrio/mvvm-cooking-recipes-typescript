import useCreateRecipeViewModel from "../viewModel/useCreateRecipeViewModel";
import { useNavigate } from "react-router-dom";
import { ROUTES, CREATE_ROUTE } from "../constants/routes";

const useCreatedViewController = () => {
  const { recipes, error } = useCreateRecipeViewModel();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate(ROUTES[CREATE_ROUTE]);
  };
  return {
    recipes,
    error,
    handleCreateClick,
  };
};

export default useCreatedViewController;
