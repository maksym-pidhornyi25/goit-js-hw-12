import { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

let searchQuery = '';
let page = 1;
let totalHits = 0;

hideLoadMoreButton();

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.currentTarget.elements.search.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Поле пошуку не може бути порожнім',
      position: 'topRight',
    });
    return;
  }

  searchQuery = query;
  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);
    totalHits = data.totalHits;

    hideLoader();

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Зображень не знайдено. Спробуйте інший запит.',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    iziToast.success({
      message: `Знайдено ${totalHits} зображень`,
      position: 'topRight',
    });

    if (data.hits.length < PER_PAGE) {
      iziToast.info({
        message: "You've reached the end of search results.",
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }

    showLoadMoreButton();
  } catch (error) {
    hideLoader();
    iziToast.error({
      message: 'Помилка завантаження зображень',
      position: 'topRight',
    });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    createGallery(data.hits);
    hideLoader();

    const firstCard = document.querySelector('.gallery a');
    if (firstCard) {
      const cardHeight = firstCard.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    const loadedImages = page * PER_PAGE;
    if (loadedImages >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "You've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }

    showLoadMoreButton();
  } catch (error) {
    hideLoader();
    iziToast.error({
      message: 'Помилка завантаження зображень',
      position: 'topRight',
    });
  }
});
