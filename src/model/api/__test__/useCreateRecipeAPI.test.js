import { renderHook, act } from "@testing-library/react";
// unit
import { useCreateRecipeAPI } from "../useCreateRecipeAPI";
import { QueryClient, QueryClientProvider } from "react-query";
import { retrieveRecipesAPI, createRecipeAPI } from "../createdRecipes";

// Mock the API functions
jest.mock("../createdRecipes", () => ({
  retrieveRecipesAPI: jest.fn(),
  createRecipeAPI: jest.fn(),
}));

describe("Tests useCreateRecipeAPI", () => {
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });
  it("hook return works as expected", () => {
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result } = renderHook(() => useCreateRecipeAPI(), { wrapper });

    expect(result.current.recipes).toEqual([]);
  });

  it("invalidates queries onSuccess of the mutate", async () => {
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useCreateRecipeAPI(), { wrapper });

    // Mock the API response for retrieving recipes
    retrieveRecipesAPI.mockResolvedValueOnce({ data: [] });

    // Mock the API response for creating a recipe
    createRecipeAPI.mockResolvedValueOnce({});

    // Initial state
    expect(result.current.recipes).toEqual([]);

    // Trigger the mutation
    await act(async () => {
      result.current.mutate();
    });

    // Assert that the onSuccess callback has been called
    expect(queryClient.getQueryData("createdRecipes")).toEqual({ data: [] });
  });
});
