import config from '@/pages/config';

export const fetchImage = async () => {
  const apiUrl = `${config.apiEndpoint}/api/product?populate=*`;

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${config.apiToken}`,
    },
  };

  console.log('Request Headers:', reqOptions.headers);

  try {
    const request = await fetch(apiUrl, reqOptions);
    const response = await request.json();
    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
