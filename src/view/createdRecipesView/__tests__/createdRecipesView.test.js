import { render, screen } from "@testing-library/react";
// component
import CreatedRecipesView from "../createdRecipesView";
// custom hook component uses
import * as useViewController from "../../../viewController/useCreatedViewController";
jest.mock("../../../viewController/useCreatedViewController");
const mockedHook = useViewController;

// viewControllerHook mock
const mocksViewControllerHook = ({ recipes = [], error = false }) => {
  mockedHook.default.mockImplementation(() => {
    return {
      recipes,
      error,
    };
  });
};

describe("Tests SearchRecipeView", () => {
  it("mounts the view", () => {
    mocksViewControllerHook({
      recipes: [
        {
          name: "recipe1",
          description: "recipeDescription1",
          time: 33,
          ingredients: ["ingredient1"],
        },
      ],
    });

    render(<CreatedRecipesView />);

    expect(screen.getByText("These are your Recipes")).toBeInTheDocument();
  });

  it("display error message when error equals true", () => {
    mocksViewControllerHook({
      error: true,
    });

    render(<CreatedRecipesView />);

    expect(screen.getByText("These are your Recipes")).toBeInTheDocument();
    expect(screen.getByText("There was an error fetching the recipes")).toBeInTheDocument();
  });
});
