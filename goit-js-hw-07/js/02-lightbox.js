import { galleryItems } from './gallery-items.js';
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


const captionOptions = {
    captionSelector: 'img', 
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    enableKeyboard: true,
    uniqueImages: true,
   };


galleryList.addEventListener ("click", selectPicture);


function selectPicture (event) {
    event.preventDefault();
    
}

let gallery = new SimpleLightbox('.gallery a', captionOptions);

    gallery.on('show.simplelightbox', function () {
    
    });
