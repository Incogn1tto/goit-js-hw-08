import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

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

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
