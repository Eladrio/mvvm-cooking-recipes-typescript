import React from "react";
import "./navbarComponent.scss";
import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

const NavbarComponent = () => {
  const { pathname } = useLocation();
  let currentActiveTab;
  switch (pathname) {
    case ROUTES.HOME_ROUTE:
      currentActiveTab = '01';
      break;
    case ROUTES.SEARCH_ROUTE:
      currentActiveTab = "02";
      break;
    case ROUTES.CREATE_ROUTE:
      currentActiveTab = "03";
      break;
    case ROUTES.CREATED_RECIPES_ROUTE:
      currentActiveTab = "04";
      break;
    default:
      break;
  }
  return (
    <nav className="navbar-component navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-component__title navbar-brand">Recipe App</span>
      <div id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item${currentActiveTab === '01' ? " active" : ""}`}>
            <Link className="nav-link" to={ROUTES.HOME_ROUTE}>
              Home
            </Link>
          </li>
          <li className={`nav-item${currentActiveTab === '02' ? " active" : ""}`}>
            <Link className="nav-link" to={ROUTES.SEARCH_ROUTE}>
              Search
            </Link>
          </li>
          <li className={`nav-item${currentActiveTab === '03' ? " active" : ""}`}>
            <Link className="nav-link" to={ROUTES.CREATE_ROUTE}>
              Create
            </Link>
          </li>
          <li className={`nav-item${currentActiveTab === '04' ? " active" : ""}`}>
            <Link className="nav-link" to={ROUTES.CREATED_RECIPES_ROUTE}>
              Your recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;