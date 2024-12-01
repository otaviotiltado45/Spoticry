const API_URL = 'https://api.spoticry.com';

export const fetchData = async (endpoint) => {
  const response = await fetch(`${API_URL}/${endpoint}`);
  return response.json();
};