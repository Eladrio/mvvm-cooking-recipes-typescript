import { useNavigate } from "react-router-dom";

import { ROUTES } from '../constants/routes';


const useHomeViewController = () => {
    const navigate = useNavigate();

  const handleRedirect = (destination) => {
    navigate(ROUTES[destination])
  };
  
  return {
    handleRedirect,
  };
};

export default useHomeViewController;
