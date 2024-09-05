import { renderHook, act } from "@testing-library/react";
// unit
import useSearchRecipeViewModel from "../../viewModel/useSearchRecipeViewModel";

// mocked model hook
import * as useSearchRecipeModel from "../../model/useSearchRecipeModel";
jest.mock("../../model/useSearchRecipeModel");
const mockedHook = useSearchRecipeModel;

const mocksModelHook = ({
  mockedHandleButtonClick = () => {},
  recipes = [],
  error = false,
  isLoading = false,
}) => {
  mockedHook.default.mockImplementation(() => {
    const handleButtonClick = (query) => {
      mockedHandleButtonClick(query);
    };
    return {
      recipes,
      handleButtonClick,
      error,
      isLoading
    };
  });
};

describe("Tests useSearchRecipeViewModel", () => {
  it("hook return works as expected", () => {
    mocksModelHook({});

    const { result } = renderHook(useSearchRecipeViewModel);

    expect(result.current.recipes).toEqual([]);
  });

  it("calls handleButtonClick when input is different than last fetched input or error equals true and input is diff than empty", () => {
    const mockClick = jest.fn();
    mocksModelHook({
      mockedHandleButtonClick: mockClick,
    });

    const { result } = renderHook(useSearchRecipeViewModel);

    act(() => {
      result.current.setSearchInputValue('pizza');
    });

    act(() => {
      result.current.onButtonClick();
    })

    expect(mockClick).toHaveBeenCalled();
  });

  it("does not call handleButtonClick when validation is not OK because of same value of lastFetched and searchInput", () => {
    const mockClick = jest.fn();
    mocksModelHook({
      mockedHandleButtonClick: mockClick,
    });

    const { result } = renderHook(useSearchRecipeViewModel);

    act(() => {
      result.current.setSearchInputValue('pizza');
    });

    act(() => {
      result.current.onButtonClick();
    })

    act(() => {
      result.current.onButtonClick();
    })

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("does not call handleButtonClick when validation is not OK because searchInputValue has no value", () => {
    const mockClick = jest.fn();
    mocksModelHook({
      mockedHandleButtonClick: mockClick,
    });

    const { result } = renderHook(useSearchRecipeViewModel);

    act(() => {
      result.current.onButtonClick();
    })

    expect(mockClick).not.toHaveBeenCalled();
  });
});
