// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

  const container = document.querySelector(".gallery");

const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);

function createMarkup(arr) {
  return arr
    .map(({ original, description }) => {
      return `<li class="gallery__item">
              <a href="${original}" class="gallery__link">
                <img class="gallery__image" src="${original}" alt="${description}" title="${description}">
              </a>
            </li>`;
    })
    .join("");
}


console.log(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', {
  animationSpeed: 1000,
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionText: 'description',
  history: false,
  swipeClose: true,
  close: true,
});