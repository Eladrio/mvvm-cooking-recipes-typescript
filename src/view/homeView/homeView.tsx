import { ViewTitle } from "../../styles/ViewSharedStyles";
import { OptionsSection, OptionTitle, OptionDescription } from "./styledComponents";

import useHomeViewController from "../../viewController/useHomeViewController";
import OptionCardComponent from "../../components/optionCard/optionCard";

import { SEARCH_ROUTE, CREATE_ROUTE } from "../../constants/routes";

const HomeView: React.FC = (): JSX.Element => {
  const { handleRedirect } = useHomeViewController();
  return (
    <article>
      <ViewTitle>Homepage of Recipes App</ViewTitle>
      <OptionsSection>
        <OptionCardComponent onClick={() => handleRedirect(SEARCH_ROUTE)}>
          <OptionCardComponent.Header>
            <OptionTitle>
              <h2>Search recipe</h2>
            </OptionTitle>
          </OptionCardComponent.Header>
          <OptionCardComponent.Body>
            <OptionDescription>
              <p>Find the recipe you are looking for</p>
            </OptionDescription>
          </OptionCardComponent.Body>
        </OptionCardComponent>
        <OptionCardComponent onClick={() => handleRedirect(CREATE_ROUTE)}>
          <OptionCardComponent.Header>
            <OptionTitle>
              <h2>Create recipe</h2>
            </OptionTitle>
          </OptionCardComponent.Header>
          <OptionCardComponent.Body>
            <OptionDescription>
              <p>Make your own recipe</p>
            </OptionDescription>
          </OptionCardComponent.Body>
        </OptionCardComponent>
      </OptionsSection>
    </article>
  );
};

export default HomeView;
