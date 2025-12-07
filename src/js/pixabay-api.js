import axios from 'axios';

const API_KEY = '53582990-021f86ccd386d56203414afea';

const BASE_URL = 'https://pixabay.com/api/';

const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка запиту до Pixabay:', error);
    throw error;
  }
}
