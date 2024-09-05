import "./homeView.scss";
import React from "react";

import { SEARCH_ROUTE, CREATE_ROUTE } from "../../constants/routes";

import useHomeViewController from "../../viewController/useHomeViewController";
import OptionCardComponent from "../../components/optionCard/optionCard";

const HomeView = () => {
  const { handleRedirect } = useHomeViewController();
  return (
    <article className="home-view">
      <h1 className="home-view__title">Homepage of Recipes App</h1>
      <section className="home-view__options-section">
        <OptionCardComponent onClick={() => handleRedirect(SEARCH_ROUTE)}>
          <OptionCardComponent.Header>
            <div className="home-view__option-title">
              <h2>Search recipe</h2>
            </div>
          </OptionCardComponent.Header>
          <OptionCardComponent.Body>
            <div className="home-view__option-description">
              <p>Find the recipe you are looking for</p>
            </div>
          </OptionCardComponent.Body>
        </OptionCardComponent>
        <OptionCardComponent onClick={() => handleRedirect(CREATE_ROUTE)}>
          <OptionCardComponent.Header>
            <div className="home-view__option-title">
              <h2>Create recipe</h2>
            </div>
          </OptionCardComponent.Header>
          <OptionCardComponent.Body>
            <div className="home-view__option-description">
              <p>Make your own recipe</p>
            </div>
          </OptionCardComponent.Body>
        </OptionCardComponent>
      </section>
    </article>
  );
};

export default HomeView;
