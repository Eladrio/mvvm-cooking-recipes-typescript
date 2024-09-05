/* eslint-disable testing-library/no-unnecessary-act */
import { renderHook, act } from "@testing-library/react";
// unit
import useCreateRecipeModel from "../useCreateRecipeModel";
// mocked useSearchRecipeAPI hook
import { useCreateRecipeAPI } from "../api/useCreateRecipeAPI";
jest.mock("../api/useCreateRecipeAPI");

const mocksAPIHook = ({
  mockedMutate = () => {},
  recipes = [],
  error = false,
  addError = false,
}) => {
  useCreateRecipeAPI.mockReturnValue({
    recipes,
    mutate: mockedMutate,
    error,
    addError,
  });
};

describe("Tests useSearchRecipeModel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls mutate on createRecipe", async () => {
    const mutateMock = jest.fn();
    mocksAPIHook({mockedMutate: mutateMock});

    const { result } = renderHook(useCreateRecipeModel);

    act(() => {
      result.current.createRecipe({
        name: 'name',
        description: 'description',
        ingredients: ['ingr1', 'ing2'],
        time: 33
      })
    });

    expect(mutateMock).toHaveBeenCalledWith({
      name: 'name',
      description: 'description',
      ingredients: ['ingr1', 'ing2'],
      time: 33
    });
  });
});
