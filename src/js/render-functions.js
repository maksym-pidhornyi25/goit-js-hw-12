import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <img
          class="gallery-image"
          src="${img.webformatURL}"
          alt="${img.tags}"
          loading="lazy"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${img.likes}</p>
        <p class="info-item"><b>Views:</b> ${img.views}</p>
        <p class="info-item"><b>Comments:</b> ${img.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${img.downloads}</p>
      </div>
    </li>`
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('is-visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('is-visible');
}
