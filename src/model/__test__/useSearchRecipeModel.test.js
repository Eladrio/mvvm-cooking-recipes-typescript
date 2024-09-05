/* eslint-disable testing-library/no-unnecessary-act */
import { renderHook, act } from "@testing-library/react";
// unit
import useSearchRecipeModel from "../../model/useSearchRecipeModel";
// mocked useSearchRecipeAPI hook
import { useSearchRecipeAPI } from "../api/useSearchRecipeAPI";
jest.mock("../api/useSearchRecipeAPI");

const mocksAPIHook = ({
  mockedMutate = () => {},
  recipes = [],
  error = false,
  isLoading = false,
}) => {
  useSearchRecipeAPI.mockReturnValue({
    recipes,
    mutate: mockedMutate,
    error,
    isLoading,
  });
};

describe("Tests useSearchRecipeModel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls mutate on handleButtonClick", async () => {
    const mutateMock = jest.fn();
    mocksAPIHook({mockedMutate: mutateMock});

    const { result } = renderHook(useSearchRecipeModel);

    act(() => {
      result.current.handleButtonClick('pizza');
    });

    expect(mutateMock).toHaveBeenCalledWith('pizza');
  });
});
