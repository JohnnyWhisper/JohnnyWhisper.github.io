import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const createGalleryItems = ({preview, original, description}) => {
    const galleryEl = document.createElement("div");
    galleryEl.insertAdjacentHTML("afterbegin", `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`);
  

  return galleryEl;
}

const galleryElements = galleryItems.map(createGalleryItems);
galleryList.append(...galleryElements);


galleryList.addEventListener ("click", selectPicture);


function selectPicture (event) {
    event.preventDefault();

    if (event.target.classList.contains(".gallery")) {
        return;
    }

    const bigPictureUrl = event.target.dataset.source;


    const bigPicture = basicLightbox.create (`
    <img src="${bigPictureUrl}" width="800" height="600">
    `, {
        onShow: (bigPicture) => {
          window.onkeydown = bigPicture.close
        }
    });

    bigPicture.show()

}

