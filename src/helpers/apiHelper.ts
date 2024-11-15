import axios, { AxiosResponse } from 'axios';

export const post = async (url: string, data: Record<string, any>): Promise<AxiosResponse> => {
  const response = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

type OptionsType = {
  contentType?: string;
}

export const get = async <T>(url: string, options: OptionsType = {}): Promise<T> => {
  const contentType = options.contentType ? options.contentType : 'application/json';

  const response: AxiosResponse = await axios.get(url, {
    headers: {
      'Content-Type': contentType,
    },
  });

  return contentType === 'application/json' ? response.data as T : response as T;
};

export const deleteItem = async (url: string, id: string): Promise<AxiosResponse> => {
  const response: AxiosResponse = await axios({
    method: 'DELETE',
    url: url + '/' + id
  });
  return response;
}