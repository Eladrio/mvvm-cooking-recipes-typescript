import axios from 'axios';

export const post = async (url, data) => {
  const response = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const get = async (url, options = {}) => {
  const contentType = options.contentType ? options.contentType : 'application/json';

  const response = await axios.get(url, {
    headers: {
      'Content-Type': contentType,
    },
  });

  return contentType === 'application/json' ? response.data : response;
};