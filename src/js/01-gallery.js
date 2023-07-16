// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerEl = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems
  .map(
    ({ description, original, preview }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            loading="lazy"
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

galleryContainerEl.insertAdjacentHTML('afterbegin', createGalleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
});

galleryContainerEl.addEventListener('click', e => {
  if (e.target.classList.contains('gallery__image')) {
    e.preventDefault();
    lightbox.open();
  }
});

function onKeyDown(e) {
  if (e.key === 'Escape') {
    lightbox.close();
    document.removeEventListener('keydown', onKeyDown);
  }
}

document.addEventListener('keydown', onKeyDown);
