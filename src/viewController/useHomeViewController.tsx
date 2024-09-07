import { useNavigate } from "react-router-dom";

import { ROUTES, RoutesType } from '../constants/routes';


const useHomeViewController = () => {
    const navigate = useNavigate();

  const handleRedirect = (destination: RoutesType): void => {
    navigate(ROUTES[destination])
  };
  
  return {
    handleRedirect,
  };
};

export default useHomeViewController;
