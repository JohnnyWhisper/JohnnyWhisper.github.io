// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const createGalleryItems = ({preview, original, description}) => {
    const galleryEl = document.createElement("li");
    galleryEl.insertAdjacentHTML("afterbegin", `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`);

  return galleryEl;
 
}

const galleryElements = galleryItems.map(createGalleryItems);
galleryList.append(...galleryElements);

galleryList.addEventListener ("click", selectPicture);

const captionOptions = {
    captionSelector: 'img', 
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    enableKeyboard: true,
    uniqueImages: true,
   };



function selectPicture (event) {
    event.preventDefault();   
}