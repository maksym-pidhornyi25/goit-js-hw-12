import axios from 'axios';

export const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '53582990-021f86ccd386d56203414afea';

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}
