import { fireEvent, render, screen } from "@testing-library/react";
// component
import SearchRecipeView from "../SearchRecipeView";
// custom hook component uses
import * as useViewController from "../../../viewController/useSearchRecipeViewController";
jest.mock("../../../viewController/useSearchRecipeViewController");
const mockedHook = useViewController;

// viewControllerHook mock
const mocksViewControllerHook = ({
  searchInputValue = "",
  mockedOnClick = () => {},
  mockedOnChange = () => {},
  recipes = [],
  isLoading = false,
  error = false
}) => {
  mockedHook.default.mockImplementation(() => {
    const onSearchRecipeChange = (value) => {
      mockedOnChange(value);
    };
    return {
      handleFormSubmit: mockedOnClick,
      onSearchRecipeChange: onSearchRecipeChange,
      recipes: recipes,
      searchInputValue: searchInputValue,
      isLoading: isLoading,
      error: error
    };
  });
};

const getInputNode = () =>
  screen.getByLabelText("Enter recipe's name");

const getButtonNode = () => screen.getByRole("button");

describe("Tests SearchRecipeView", () => {
  it("mounts the view", () => {
    //mocks ViewController hook
    const onClickMock = jest.fn();
    const onChangeMock = jest.fn();
    mocksViewControllerHook({
      mockedOnClick: onClickMock,
      mockedOnChange: onChangeMock,
    });

    render(<SearchRecipeView />);

    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("calls onChange function when input value changes", () => {
    //mocks ViewController hook
    const onClickMock = jest.fn();
    const onChangeMock = jest.fn();
    mocksViewControllerHook({
      mockedOnClick: onClickMock,
      mockedOnChange: onChangeMock,
    });

    render(<SearchRecipeView />);

    // gets search input, checks its initial value and verifies that the change function hasn't been called yet
    const inputNode = getInputNode();
    expect(inputNode.value).toBe("");
    expect(onChangeMock).not.toHaveBeenCalled();

    // fires search input change event and checks onChange hook's function to have been called
    fireEvent.change(inputNode, { target: { value: "pizza" } });
    expect(onChangeMock).toHaveBeenCalledWith("pizza");
  });

  it("shows correct input value", () => {
    //mocks ViewController hook
    mocksViewControllerHook({ searchInputValue: "pizza" });

    render(<SearchRecipeView />);

    // gets search input checks its initial value and for the change function to not have been called yet
    const inputNode = screen.getByLabelText(
      "Enter recipe's name"
    );
    expect(inputNode.value).toBe("pizza");
  });

  it("calls onClick when the search button gets clicked", () => {
    //mocks ViewControllere hook
    const onClickMock = jest.fn();
    mocksViewControllerHook({
      searchInputValue: "pizza",
      mockedOnClick: onClickMock,
    });

    render(<SearchRecipeView />);

    // gets search button
    const buttonNode = getButtonNode();
    expect(onClickMock).not.toHaveBeenCalled();
    fireEvent.click(buttonNode);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("renders the recipes received from the ViewController", () => {
    //mocks ViewControllere hook
    const recipes = [
      {
        recipe: {
          uri: "uri1",
          label: "label1",
        },
      },
      {
        recipe: {
          uri: "uri2",
          label: "label2",
        },
      },
    ];
    mocksViewControllerHook({ searchInputValue: "pizza", recipes: recipes });

    render(<SearchRecipeView />);

    expect(screen.getByText("label1")).toBeInTheDocument();
    expect(screen.getByText("label2")).toBeInTheDocument();
  });

  it("renders the loadingElement when isLoading equals true", () => {
    //mocks ViewControllere hook
    mocksViewControllerHook({ searchInputValue: "pizza", isLoading: true });

    render(<SearchRecipeView />);

    const loadingElement = screen.getByText("The Search is Loading...");

    expect(loadingElement).toBeInTheDocument();
  });

  it("renders the errorElement when error equals true", () => {
    //mocks ViewControllere hook
    mocksViewControllerHook({ searchInputValue: "pizza", error: true });

    render(<SearchRecipeView />);

    const loadingElement = screen.getByText("There was an error fetching the recipes. Please try again.");

    expect(loadingElement).toBeInTheDocument();
  });
});
