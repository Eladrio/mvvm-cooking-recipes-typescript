import { renderHook, act } from "@testing-library/react";
// unit
import useSearchRecipeViewController from "../useSearchRecipeViewController";

// mocked VieModel hook
import * as useSearchRecipeViewModel from "../../viewModel/useSearchRecipeViewModel";
jest.mock("../../viewModel/useSearchRecipeViewModel");
const mockedHook = useSearchRecipeViewModel;

const mocksViewModelHook = ({
  mockedHandleButtonClick = () => {},
  recipes = [],
  searchInputValue = "",
  mockedSetSearchInputValue = () => {},
  isLoading = false,
}) => {
  mockedHook.default.mockImplementation(() => {
    const setSearchInputValue = (query) => {
      mockedSetSearchInputValue(query);
    };
    return {
      recipes: recipes,
      onButtonClick: mockedHandleButtonClick,
      searchInputValue: searchInputValue,
      setSearchInputValue: setSearchInputValue,
      isLoading: isLoading
    };
  });
};

describe("Tests useSearchRecipeViewController", () => {
  it("hook return works as expected", () => {
    mocksViewModelHook({});

    const { result } = renderHook(useSearchRecipeViewController);

    expect(result.current.searchInputValue).toEqual("");
    expect(result.current.recipes).toEqual([]);
  });

  it("calls setSearchInputValue with correct value when onSearchRecipeChange gets called", () => {
    const setSearchInputValueMock = jest.fn();
    mocksViewModelHook({
        mockedSetSearchInputValue: setSearchInputValueMock,
    });

    const { result } = renderHook(useSearchRecipeViewController);

    expect(result.current.searchInputValue).toEqual("");

    // calls onSearchRecipeChange with query equal to pizza
    const query = "pizza";
    act(() => result.current.onSearchRecipeChange(query));

    // checks that searchInputValue has changed to pizza
    expect(setSearchInputValueMock).toHaveBeenCalledWith(query);
  });

  it("calls validatedButtonClick", async () => {
    const handleButtonClickMock = jest.fn();
    mocksViewModelHook({ mockedHandleButtonClick: handleButtonClickMock });

    const { result } = renderHook(useSearchRecipeViewController);

    // calls onSearchRecipeClick
    await act(async () => result.current.onSearchRecipeClick());

    // checks that the validatedButtonClick function got called
    expect(handleButtonClickMock).toHaveBeenCalled();
  });

  it("calls onSearchRecipeClick when Enter key has been pressed", async () => {
    const handleButtonClickMock = jest.fn();
    mocksViewModelHook({ mockedHandleButtonClick: handleButtonClickMock });

    const { result } = renderHook(useSearchRecipeViewController);

    // calls onInputKeyPressed
    const e = {
      key: "Enter",
    };
    await act(async () => result.current.onInputKeyPressed(e));

    // checks that the fetching function got called
    expect(handleButtonClickMock).toHaveBeenCalled();
  });

  it("does not call onSearchRecipeClick when a key that is not the Enter key has been pressed", async () => {
    const getRecipesMock = jest.fn();
    mocksViewModelHook({ mockedGetRecipes: getRecipesMock });

    const { result } = renderHook(useSearchRecipeViewController);

    // calls onInputKeyPressed
    const e = {
      key: "A",
    };
    await act(async () => result.current.onInputKeyPressed(e));

    // checks that the fetching function got called
    expect(getRecipesMock).not.toHaveBeenCalled();
  });
});
