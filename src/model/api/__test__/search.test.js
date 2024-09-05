import { retrieveRecipesSearchAPI } from '../search';
import * as apiHelper from '../../../helpers/apiHelper';
import { APP_ID, APP_KEY } from "../constants/apiConstants";

jest.mock('../../../helpers/apiHelper');

describe('retrieveRecipesSearchAPI', () => {
  it('should retrieve recipes search results', async () => {
    const mockHits = [{ recipe: 'Mocked Recipe' }];
    apiHelper.get.mockResolvedValue({ hits: mockHits });

    const query = 'pasta';
    const result = await retrieveRecipesSearchAPI(query);

    expect(apiHelper.get).toHaveBeenCalledWith(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    expect(result).toEqual(mockHits);
  });

  it('should handle API errors', async () => {
    const errorMessage = 'API Error';
    apiHelper.get.mockRejectedValue(new Error(errorMessage));

    const query = 'salad';
    
    await expect(retrieveRecipesSearchAPI(query)).rejects.toThrow(errorMessage);
  });
});