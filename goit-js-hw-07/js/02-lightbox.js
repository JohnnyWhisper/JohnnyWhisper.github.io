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
  
//   console.log(galleryEl);
  return galleryEl;
 
}

const galleryElements = galleryItems.map(createGalleryItems);
galleryList.append(...galleryElements);

// console.log(galleryList);


galleryList.addEventListener ("click", selectPicture);

function selectPicture (event) {
    event.preventDefault();

    if (event.target.classList.contains(".gallery")) {
        return;
    }

    let gallery = new SimpleLightbox('.gallery__item');

    gallery.on('show.simplelightbox', function () {


        SimpleLightbox.captionSelector = self;
        SimpleLightbox.captionType = alt;
        SimpleLightbox.captionDelay = 250;

});

}

