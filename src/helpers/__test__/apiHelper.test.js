import axios from 'axios';
import { post, get } from '../apiHelper';

jest.mock('axios');

describe('post function', () => {
  it('should make a POST request with correct arguments', async () => {
    const url = 'https://example.com/api';
    const data = { key: 'value' };

    axios.post.mockResolvedValueOnce({ data: 'response data' });

    const result = await post(url, data);

    expect(axios.post).toHaveBeenCalledWith(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(result).toEqual({ data: 'response data' });
  });
});

describe('get function', () => {
  it('should make a GET request without options param', async () => {
    const url = 'https://example.com/api';
    axios.get.mockResolvedValueOnce({ data: 'response data' });

    const result = await get(url);

    expect(axios.get).toHaveBeenCalledWith(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(result).toEqual('response data');
  });

  it('should make a GET request with correct arguments and return JSON data', async () => {
    const url = 'https://example.com/api';
    const contentType = 'application/json';

    axios.get.mockResolvedValueOnce({ data: 'response data' });

    const result = await get(url, { contentType });

    expect(axios.get).toHaveBeenCalledWith(url, {
      headers: {
        'Content-Type': contentType,
      },
    });

    expect(result).toEqual('response data');
  });

  it('should make a GET request with correct arguments and return the entire response if content type is not JSON', async () => {
    const url = 'https://example.com/api';
    const contentType = 'text/plain';

    axios.get.mockResolvedValueOnce({ data: 'response data' });

    const result = await get(url, { contentType });

    expect(axios.get).toHaveBeenCalledWith(url, {
      headers: {
        'Content-Type': contentType,
      },
    });

    expect(result).toEqual({ data: 'response data' });
  });
});