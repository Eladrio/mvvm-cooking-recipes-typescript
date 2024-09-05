import { renderHook, act } from "@testing-library/react";
// unit
import useCreateRecipeViewController from "../useCreateRecipeViewController";

// mocked VieModel hook
import * as useCreateRecipeViewModel from "../../viewModel/useCreateRecipeViewModel";
jest.mock("../../viewModel/useCreateRecipeViewModel");
const mockedHook = useCreateRecipeViewModel;

const mocksViewModelHook = ({
  mockedCreateRecipe = () => {},
  recipes = [],
  error = false,
}) => {
  mockedHook.default.mockImplementation(() => {
    const createRecipe = (data) => {
      mockedCreateRecipe(data);
    };
    return {
      recipes: recipes,
      createRecipe: createRecipe,
      error: error,
      validateInput: jest.fn()
    };
  });
};

describe("Tests useCreateRecipeViewController", () => {
  it("hook return works as expected", () => {
    mocksViewModelHook({});

    const { result } = renderHook(useCreateRecipeViewController);

    expect(result.current.inputs).toStrictEqual({
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
    });
    expect(result.current.recipes).toEqual([]);
  });

  it("calls createRecipe with correct data when handleFormSubmit gets called", () => {
    const createRecipeMock = jest.fn();
    mocksViewModelHook({});

    const { result } = renderHook(useCreateRecipeViewController);

    act(() => {
      result.current.handleInputChange("name", "pizza");
      result.current.handleInputBlur('name', 'pizza');

      result.current.handleInputChange("description", "pizza crocante");
      result.current.handleInputBlur('description', 'pizza crocante');

      result.current.handleInputChange("ingredients", "harina, levadura, sal, salsa, queso");
      result.current.handleInputBlur('ingredients', 'harina, levadura, sal, salsa, queso');

      result.current.handleInputChange("time", 60);
      result.current.handleInputBlur('time', 60);
    });
    expect(result.current.inputs).toStrictEqual({
        name: {
          value: "pizza",
          valid: true,
        },
        description: {
          value: "pizza crocante",
          valid: true,
        },
        ingredients: {
          value: "harina, levadura, sal, salsa, queso",
          valid: true,
        },
        time: {
          value: 60,
          valid: true,
        },
      })
  });

  it("handleInputBlur works as expected", async () => {
    const createRecipeMock = jest.fn();
    mocksViewModelHook({
      mockedCreateRecipe: createRecipeMock,
    });

    const { result } = renderHook(useCreateRecipeViewController);

    act(() => {
      result.current.handleInputChange("name", "pizza");
      result.current.handleInputChange("description", "pizza crocante");
      result.current.handleInputChange("ingredients", "harina, levadura, sal, salsa, queso");
      result.current.handleInputChange("time", 60);
    });

    const data = {
      name: {
        value: "pizza",
        valid: true,
      },
      description: {
        value: "pizza crocante",
        valid: true,
      },
      ingredients: {
        value: "harina, levadura, sal, salsa, queso",
        valid: true,
      },
      time: {
        value: 60,
        valid: true,
      },
    };
    const event = new Event("submit");
    act(() => result.current.handleFormSubmit(event));

    expect(createRecipeMock).toHaveBeenCalledWith(data);
  });
});
