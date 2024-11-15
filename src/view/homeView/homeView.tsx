import { ViewTitle } from "../../styles/ViewSharedStyles";
import { OptionsSection, OptionTitle, OptionDescription } from "./styledComponents";

import useHomeViewController from "../../viewController/useHomeViewController";
import OptionCardComponent from "../../components/optionCard/optionCard";

import { SEARCH_ROUTE, CREATE_ROUTE, CREATED_RECIPES_ROUTE } from "../../constants/routes";
import { useEffect, useRef } from "react";

const HomeView: React.FC = (): JSX.Element => {
  const { handleRedirect } = useHomeViewController();
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <article>
      <ViewTitle tabIndex={-1} ref={headingRef}>Homepage of Recipes App</ViewTitle>
      <OptionsSection>
        <OptionCardComponent onClick={() => handleRedirect(SEARCH_ROUTE)}>
          <OptionCardComponent.Header>
            <OptionTitle>Search recipe</OptionTitle>
          </OptionCardComponent.Header>
          <OptionCardComponent.Body>
            <OptionDescription>Find the recipe you are looking for</OptionDescription>
          </OptionCardComponent.Body>
        </OptionCardComponent>
        <OptionCardComponent onClick={() => handleRedirect(CREATE_ROUTE)}>
          <OptionCardComponent.Header>
            <OptionTitle>Create recipe</OptionTitle>
          </OptionCardComponent.Header>
          <OptionCardComponent.Body>
            <OptionDescription>Make your own recipe</OptionDescription>
          </OptionCardComponent.Body>
        </OptionCardComponent>
        <OptionCardComponent onClick={() => handleRedirect(CREATED_RECIPES_ROUTE)}>
          <OptionCardComponent.Header>
            <OptionTitle>Your recipes</OptionTitle>
          </OptionCardComponent.Header>
          <OptionCardComponent.Body>
            <OptionDescription>Scroll through your created recipes</OptionDescription>
          </OptionCardComponent.Body>
        </OptionCardComponent>
      </OptionsSection>
    </article>
  );
};

export default HomeView;
