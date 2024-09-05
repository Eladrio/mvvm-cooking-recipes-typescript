import { renderHook, act } from "@testing-library/react";
import useCreateRecipeViewModel from "../../viewModel/useCreateRecipeViewModel";
import { useNavigate } from "react-router-dom";
import useCreatedViewController from "../useCreatedViewController";
import { ROUTES, CREATE_ROUTE } from "../../constants/routes";

jest.mock("../../viewModel/useCreateRecipeViewModel");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("useCreatedViewController", () => {

  const mockRecipes = [{ id: 1, name: "Recipe 1" }];
  const mockError = null;

  beforeEach(() => {
    useCreateRecipeViewModel.mockReturnValue({
      recipes: mockRecipes,
      error: mockError,
    });
  });

  it("should return recipes and error from useCreateRecipeViewModel", () => {
    const { result } = renderHook(() => useCreatedViewController());

    expect(result.current.recipes).toEqual(mockRecipes);
    expect(result.current.error).toEqual(mockError);
  });

  it("should call navigate with the correct route when handleCreateClick is invoked", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { result } = renderHook(() => useCreatedViewController());

    act(() => {
      result.current.handleCreateClick();
    });

    expect(navigateMock).toHaveBeenCalledWith(ROUTES[CREATE_ROUTE]);
  });
});