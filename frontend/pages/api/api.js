import config from '@/pages/config';

export const fetchImage = async () => {
  const apiUrl = `${config.apiEndpoint}/api/product?populate=*`;

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${config.apiToken}`,
    },
  };

  try {
    const request = await fetch(apiUrl, reqOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchFeature = async () => {
  const apiUrl = `${config.apiEndpoint}/api/features?populate=*`;

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${config.apiToken}`,
    },
  };

  try {
    const request = await fetch(apiUrl, reqOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchReview = async () => {
  const apiUrl = `${config.apiEndpoint}/api/feedbacks?populate=*`;

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${config.apiToken}`,
    },
  };

  try {
    const request = await fetch(apiUrl, reqOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchPartner = async () => {
  const apiUrl = `${config.apiEndpoint}/api/partners?populate=*`;

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${config.apiToken}`
    },
  };

  try {
    const request = await fetch(apiUrl, reqOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchAbout = async () => {
  const apiUrl = `${config.apiEndpoint}/api/abouts?populate=*`;

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${config.apiToken}`
    },
  };

  try {
    const request = await fetch(apiUrl, reqOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } 
}