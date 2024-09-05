import { renderHook, act } from "@testing-library/react";
// unit
import useCreateRecipeViewModel from "../useCreateRecipeViewModel";
// mocked model hook
import * as useCreateRecipeModel from "../../model/useCreateRecipeModel";
jest.mock("../../model/useCreateRecipeModel");
const mockedHook = useCreateRecipeModel;

const mocksModelHook = ({ mockedCreateRecipe = () => {}, recipes = [], error = false }) => {
  mockedHook.default.mockImplementation(() => {
    const createRecipe = (data) => {
      mockedCreateRecipe(data);
    };
    return {
      recipes,
      createRecipe,
      error,
    };
  });
};

describe("Tests useSearchRecipeViewModel", () => {
  it("hook return works as expected", () => {
    mocksModelHook({});

    const { result } = renderHook(useCreateRecipeViewModel);

    expect(result.current.recipes).toEqual([]);
    expect(result.current.error).toEqual(false);
  });

  it("calls createRecipe when data is valid", () => {
    const createRecipeMock = jest.fn();
    mocksModelHook({
      mockedCreateRecipe: createRecipeMock,
    });

    const { result } = renderHook(useCreateRecipeViewModel);

    act(() => {
      result.current.createRecipe({
        name: {
          value: "pizza",
          valid: true,
        },
        description: {
          value: "pizza crocante",
          valid: true,
        },
        ingredients: {
          value: `harina
          levadura
          queso
          salsa`,
          valid: true,
        },
        time: {
          value: "60",
          valid: true,
        },
      });
    });

    expect(createRecipeMock).toHaveBeenCalledWith({
      name: "pizza",
      description: "pizza crocante",
      ingredients: ["harina", "levadura", "queso", "salsa"],
      time: 60,
    });
  });

  it("does not call createRecipe when data is no valid", () => {
    const createRecipeMock = jest.fn();
    mocksModelHook({
      mockedCreateRecipe: createRecipeMock,
    });

    const { result } = renderHook(useCreateRecipeViewModel);

    act(() => {
      result.current.createRecipe({
        name: {
          value: "pizza",
          valid: true,
        },
        description: {
          value: "pizza crocante",
          valid: true,
        },
        ingredients: {
          value: "harina, levadura, queso, salsa",
          valid: true,
        },
        time: {
          value: "60",
          valid: false,
        },
      });
    });

    expect(createRecipeMock).not.toHaveBeenCalled();
  });
});
