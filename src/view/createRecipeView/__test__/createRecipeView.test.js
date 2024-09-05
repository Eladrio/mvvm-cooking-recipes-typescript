import { render, screen } from "@testing-library/react";
// component
import CreateRecipeView from "../createRecipeView";
// custom hook component uses
import * as useViewController from "../../../viewController/useCreateRecipeViewController";
jest.mock("../../../viewController/useCreateRecipeViewController");
const mockedHook = useViewController;

// viewControllerHook mock
const mocksViewControllerHook = ({
  mockedOnSubmit = () => {},
  mockedOnChange = () => {},
  mockedOnBlur = () => {},
  recipes = [],
  error = false,
  inputs = {
    name: {
        value: "",
        valid: true,
      },
      description: {
        value: "",
        valid: true,
      },
      ingredients: {
        value: "",
        valid: true,
      },
      time: {
        value: "",
        valid: true,
      },
  }
}) => {
  mockedHook.default.mockImplementation(() => {
    return {
        handleFormSubmit: mockedOnSubmit,
        handleInputBlur: mockedOnBlur,
        handleInputChange: mockedOnChange,
        inputs,
        recipes,
        error
    };
  });
};

describe("Tests SearchRecipeView", () => {
  it("mounts the view", () => {
    mocksViewControllerHook({
        recipes: [
            {
                name: 'recipe1',
                description: 'recipeDescription1',
                time: 33,
                ingredients: ['ingredient1']
            }
        ]
    });

    render(<CreateRecipeView />);

    expect(screen.getByText("Create your recipe")).toBeInTheDocument();
    expect(screen.getByText("Here are some of the recipes you've already created")).toBeInTheDocument();
  });

  it("mounts the view with errorElement when error equals true", () => {
    mocksViewControllerHook({
        error: true
    });

    render(<CreateRecipeView />);

    expect(screen.getByText("There was an error fetching the recipes")).toBeInTheDocument();
    expect(screen.queryByText("Here are some of the recipes you've already created")).not.toBeInTheDocument();
  });
});
