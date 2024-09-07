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
    const mockEvent = { preventDefault: jest.fn() };
    // calls onSearchRecipeClick
    await act(async () => result.current.handleFormSubmit(mockEvent));

    // checks that the validatedButtonClick function got called
    expect(handleButtonClickMock).toHaveBeenCalled();
  });
});
