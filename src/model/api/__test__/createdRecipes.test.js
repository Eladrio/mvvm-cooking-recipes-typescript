/* eslint-disable jest/no-conditional-expect */
import fetchMock from 'jest-fetch-mock';
import { retrieveRecipesAPI, createRecipeAPI } from '../createdRecipes';

jest.mock('../../../helpers/apiHelper', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

describe('Tests createdRecipes api', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  afterEach(() => {
    fetchMock.resetMocks();
    jest.resetAllMocks();
  });

  it('retrieveRecipesAPI function works as expected', async () => {
    const mockData = { recipe: 'value' };
    fetchMock.mockOnce(JSON.stringify(mockData));

    // Mock the APIHelper get function
    require('../../../helpers/apiHelper').get.mockResolvedValueOnce(mockData);

    const result = await retrieveRecipesAPI();

    expect(result).toStrictEqual(mockData);
  });

  it('retrieveRecipesAPI handles error as expected', async () => {
    const errorMessage = 'Failed to get all recipes';
    fetchMock.mockReject(new Error(errorMessage));

    // Mock the APIHelper get function
    require('../../../helpers/apiHelper').get.mockRejectedValueOnce(new Error(errorMessage));

    try {
      await retrieveRecipesAPI();
      // The line above should throw an error, so the next line shouldn't be reached.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(errorMessage);
    }
  });

  it('createRecipeAPI function works as expected', async () => {
    const mockData = { recipe: 'value' };
    fetchMock.mockOnce(JSON.stringify(mockData));

    // Mock the APIHelper post function
    require('../../../helpers/apiHelper').post.mockResolvedValueOnce(mockData);

    const result = await createRecipeAPI('pizza');

    expect(result).toStrictEqual(mockData);
  });

  it('createRecipeAPI handles error as expected', async () => {
    const errorMessage = 'Failed to create the recipe';
    fetchMock.mockReject(new Error(errorMessage));

    // Mock the APIHelper post function
    require('../../../helpers/apiHelper').post.mockRejectedValueOnce(new Error(errorMessage));

    try {
      await createRecipeAPI('pizza');
      // The line above should throw an error, so the next line shouldn't be reached.
      expect(true).toBe(false);
    } catch (error) {
      expect(error.message).toBe(errorMessage);
    }
  });
});